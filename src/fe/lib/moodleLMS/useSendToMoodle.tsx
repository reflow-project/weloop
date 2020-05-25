import { useProfile } from 'fe/user/profile/useProfile';
import { LMSPrefsPanel } from './LMSPrefsPanel';
import React, { useMemo, useCallback } from 'react';
import { LMSPrefs, sendToMoodle } from './LMSintegration';
import {
  SESSION,
  createLocalSessionKVStorage
} from 'util/keyvaluestore/localSessionStorage';
import { useInstanceInfoQuery } from 'fe/instance/info/useInstanceInfo.generated';
import Maybe from 'graphql/tsutils/Maybe';
import {
  ResourceLMS,
  ResourceGqlMin,
  ResourceHitMin
} from 'HOC/lib/LMSMappings/types';
import { resourceGql2lms } from 'HOC/lib/LMSMappings/gql2LMS';
import { resourceHit2lms } from 'HOC/lib/LMSMappings/hit2LMS';
const storage = createLocalSessionKVStorage(SESSION)('LMS_');
const LMS_KEY = 'LMS';

export const useLMSGQL = (resource: Maybe<ResourceGqlMin>) => {
  return useLMS(resourceGql2lms(resource));
};
export const useLMSHit = (resource: Maybe<ResourceHitMin>) => {
  return useLMS(resourceHit2lms(resource));
};
export const useLMS = (resource: Maybe<ResourceLMS>) => {
  const { profile, updateProfile } = useProfile();
  const { data: instanceInfo } = useInstanceInfoQuery();
  const LMSPrefs = profile?.extraInfo?.LMS;

  const updateLMSPrefs = useCallback(
    async (LMS: LMSPrefs) => {
      storage.set(LMS_KEY, LMS);
      if (profile) {
        await updateProfile({ profile: { extraInfo: { LMS } } });
      }
    },
    [updateProfile]
  );

  const sendToLMS = useCallback(
    (LMS: LMSPrefs) => {
      if (!(instanceInfo?.instance && resource)) {
        return false;
      }
      const resource_info_stringified = JSON.stringify(resource);
      const type = instanceInfo.instance.uploadResourceTypes.includes(
        resource.mediaType
      )
        ? 'file'
        : 'link';
      sendToMoodle(resource.url, resource_info_stringified, type, LMS);
      return true;
    },
    [instanceInfo, resource]
  );

  return useMemo(
    () => ({
      updateLMSPrefs,
      sendToLMS,
      sendToMoodle,
      LMSPrefsPanel: ({ done }) => (
        <LMSPrefsPanel
          done={done}
          lmsParams={LMSPrefs || storage.get(LMS_KEY)}
          sendToLMS={async (LMS, update) => {
            done();
            (await update) && updateLMSPrefs(LMS);
            return sendToLMS(LMS);
          }}
        />
      )
    }),
    [sendToLMS, updateLMSPrefs, sendToMoodle, LMSPrefs]
  );
};
