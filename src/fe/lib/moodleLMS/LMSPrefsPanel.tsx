import { useFormik } from 'formik';
import React, { FC, useCallback } from 'react';
import {
  BasicMoodleLMSConfigFormValues,
  MoodlePanel
} from 'ui/modules/MoodlePanel';
import * as Yup from 'yup';
import Maybe from 'graphql/tsutils/Maybe';
import { DOMAIN_REGEX } from 'mn-constants';

export interface LMSPrefsPanel {
  done(): unknown;
  sendToLMS(
    _: BasicMoodleLMSConfigFormValues,
    updatePrefs: boolean
  ): void | Promise<unknown>;
  lmsParams: Maybe<BasicMoodleLMSConfigFormValues>;
}
const validationSchema = Yup.object<BasicMoodleLMSConfigFormValues>({
  site: Yup.string()
    .matches(DOMAIN_REGEX)
    .required()
});
export const LMSPrefsPanel: FC<LMSPrefsPanel> = ({
  done,
  lmsParams,
  sendToLMS
}) => {
  const sendToMoodleFormik = useFormik<BasicMoodleLMSConfigFormValues>({
    initialValues: lmsParams || { site: '' },
    enableReinitialize: true,
    validationSchema,
    onSubmit: BasicLMSPrefs => {
      const shallUpdate = !lmsParams || lmsParams.site !== BasicLMSPrefs.site;
      return sendToLMS(BasicLMSPrefs, shallUpdate);
    }
  });
  const cancel = useCallback(() => done(), [done]);
  return (
    <MoodlePanel cancel={cancel} sendToMoodleFormik={sendToMoodleFormik} />
  );
};
