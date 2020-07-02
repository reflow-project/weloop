import { useFormik } from 'formik';
import { ResourceLMS } from 'fe/lib/moodleLMS/mappings/types';
import { DOMAIN_REGEX } from 'mn-constants';
import React, { FC } from 'react';
import { BasicMoodleLMSConfigFormValues, MoodlePanel } from 'ui/modules/MoodlePanel';
import * as Yup from 'yup';
import { LMSPrefs } from 'fe/lib/moodleLMS/LMSintegration';
import { useLMS } from 'fe/lib/moodleLMS/useSendToMoodle';

export interface MoodlePanelHOC {
  done(success?: boolean): unknown;
  resource: ResourceLMS;
}
const validationSchema = Yup.object<BasicMoodleLMSConfigFormValues>({
  site: Yup.string()
    .matches(DOMAIN_REGEX)
    .required()
});
export const MoodlePanelHOC: FC<MoodlePanelHOC> = ({ done, resource }) => {
  const { currentLMSPrefs, sendToLMS, updateLMSPrefs } = useLMS(resource);
  const sendToMoodleFormik = useFormik<BasicMoodleLMSConfigFormValues>({
    initialValues: currentLMSPrefs || { site: '' },
    enableReinitialize: true,
    validationSchema,
    onSubmit: BasicLMSPrefs => {
      const shallUpdate = !currentLMSPrefs || currentLMSPrefs.site !== BasicLMSPrefs.site;
      const useThisLMSPrefs: LMSPrefs | null = shallUpdate
        ? { ...BasicLMSPrefs, course: undefined, section: undefined }
        : currentLMSPrefs;
      if (!useThisLMSPrefs) {
        return;
      }
      shallUpdate && updateLMSPrefs(useThisLMSPrefs);
      done(sendToLMS(useThisLMSPrefs));
    }
  });
  return <MoodlePanel cancel={done} sendToMoodleFormik={sendToMoodleFormik} />;
};
