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
import { useMe } from 'fe/session/useMe';
const storage = createLocalSessionKVStorage(SESSION)('LMS_');
const LMS_KEY = 'LMS';

export const useLMSGQL = (resource: Maybe<ResourceGqlMin>) => {
  return useLMS(resourceGql2lms(resource));
};
export const useLMSHit = (resource: Maybe<ResourceHitMin>) => {
  return useLMS(resourceHit2lms(resource));
};
export const useLMS = (resource: Maybe<ResourceLMS>) => {
  const { data: instanceInfo } = useInstanceInfoQuery();

  const { updateLMSPrefs, currentLMSPrefs } = useLMSPrefs();

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
      LMSPrefsPanel: ({ done }) =>
        currentLMSPrefs ? (
          <LMSPrefsPanel
            done={done}
            lmsParams={currentLMSPrefs || storage.get(LMS_KEY)}
            sendToLMS={async (BasicLMS, update) => {
              await done();
              const useThisLMSPrefs: LMSPrefs = update
                ? { ...BasicLMS, course: undefined, section: undefined }
                : currentLMSPrefs;
              update && updateLMSPrefs(useThisLMSPrefs);
              return sendToLMS(useThisLMSPrefs);
            }}
          />
        ) : null
    }),
    [sendToLMS, updateLMSPrefs, sendToMoodle, currentLMSPrefs]
  );
};

export const useLMSPrefs = () => {
  const { loading: loadingMe } = useMe();
  const { profile, updateProfile, loading: loadingProfile } = useProfile();
  const loading = loadingMe || loadingProfile;
  const currentLMSPrefs = profile?.extraInfo?.LMS;

  const updateLMSPrefs = useCallback(
    async (LMS: LMSPrefs) => {
      storage.set(LMS_KEY, LMS);
      if (!loading && profile) {
        await updateProfile({ profile: { extraInfo: { LMS } } });
      }
    },
    [updateProfile, profile, loading]
  );

  return useMemo(
    () => ({
      updateLMSPrefs,
      currentLMSPrefs,
      loading
    }),
    [updateLMSPrefs, currentLMSPrefs, loading]
  );
};
