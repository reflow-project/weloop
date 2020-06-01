import { LMSPrefsPanel } from './LMSPrefsPanel';
import React, { useMemo, useCallback, useState, useEffect } from 'react';
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
const LMS_PREFS_KEY = 'Prefs';

export const useLMSGQL = (resource: Maybe<ResourceGqlMin>) => {
  return useLMS(resourceGql2lms(resource));
};
export const useLMSHit = (resource: Maybe<ResourceHitMin>) => {
  return useLMS(resourceHit2lms(resource));
};
export const useLMS = (resource: Maybe<ResourceLMS>) => {
  const { data: instanceInfo } = useInstanceInfoQuery();

  const { updateLMSPrefs, currentLMSPrefs } = useLMSPrefs();
  // console.table({ currentLMSPrefs, canonicalUrl: resource?.canonicalUrl });

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
          lmsParams={currentLMSPrefs}
          sendToLMS={async (BasicLMS, update) => {
            await done();
            const useThisLMSPrefs: LMSPrefs | null = update
              ? { ...BasicLMS, course: undefined, section: undefined }
              : currentLMSPrefs;
            if (!useThisLMSPrefs) {
              return;
            }
            update && updateLMSPrefs(useThisLMSPrefs);
            return sendToLMS(useThisLMSPrefs);
          }}
        />
      )
    }),
    [sendToLMS, updateLMSPrefs, sendToMoodle, currentLMSPrefs]
  );
};

export const useLMSPrefs = () => {
  const { loading, me, updateProfile } = useMe();
  const profile = me?.user;
  const [currentLMSPrefs, setCurrentLMSPrefs] = useState(
    storage.get(LMS_PREFS_KEY) as LMSPrefs | null
  );

  useEffect(() => {
    profile?.extraInfo?.LMS
      ? setCurrentLMSPrefs(profile.extraInfo.LMS)
      : setCurrentLMSPrefs(storage.get(LMS_PREFS_KEY) as LMSPrefs | null);
  }, [profile?.extraInfo?.LMS]);

  const updateLMSPrefs = useCallback(
    async (LMS: LMSPrefs) => {
      setCurrentLMSPrefs(LMS);
      storage.set(LMS_PREFS_KEY, LMS);
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
