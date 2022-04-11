import React from 'react';
import { TEditProfile } from 'ui/pages/settings';
import {
  FieldHelperProps,
  FieldInputProps,
  FieldMetaProps,
  FormikErrors,
  FormikState,
  FormikTouched,
  useFormik
} from 'formik';
import { action } from '@storybook/addon-actions';
import Preferences, { EditPreferences } from 'ui/pages/settings/preferences';

export const useGetEditProfileProps = (): {
  sectionPaths: { general: string; preferences: string };
  displayUsername: string;
  formik: {
    initialValues: TEditProfile;
    initialErrors: FormikErrors<unknown>;
    initialTouched: FormikTouched<unknown>;
    initialStatus: any;
    handleBlur: {
      (e: React.FocusEvent<any>): void;
      <T = any>(fieldOrEvent: T): T extends string ? (e: any) => void : void;
    };
    handleChange: {
      (e: React.ChangeEvent<any>): void;
      <T_1 = string | React.ChangeEvent<any>>(field: T_1): T_1 extends React.ChangeEvent<any>
        ? void
        : (e: string | React.ChangeEvent<any>) => void;
    };
    handleReset: (e: any) => void;
    handleSubmit: (e?: React.FormEvent<HTMLFormElement> | undefined) => void;
    resetForm: (nextState?: Partial<FormikState<TEditProfile>> | undefined) => void;
    setErrors: (errors: FormikErrors<TEditProfile>) => void;
    setFormikState: (
      stateOrCb:
        | FormikState<TEditProfile>
        | ((state: FormikState<TEditProfile>) => FormikState<TEditProfile>)
    ) => void;
    setFieldTouched: (
      field: string,
      touched?: boolean,
      shouldValidate?: boolean | undefined
    ) => Promise<FormikErrors<TEditProfile>> | Promise<void>;
    setFieldValue: (
      field: string,
      value: any,
      shouldValidate?: boolean | undefined
    ) => Promise<FormikErrors<TEditProfile>> | Promise<void>;
    setFieldError: (field: string, value: string | undefined) => void;
    setStatus: (status: any) => void;
    setSubmitting: (isSubmitting: boolean) => void;
    setTouched: (
      touched: FormikTouched<TEditProfile>,
      shouldValidate?: boolean | undefined
    ) => Promise<FormikErrors<TEditProfile>> | Promise<void>;
    setValues: (
      values: React.SetStateAction<TEditProfile>,
      shouldValidate?: boolean | undefined
    ) => Promise<FormikErrors<TEditProfile>> | Promise<void>;
    submitForm: () => Promise<any>;
    validateForm: (values?: TEditProfile) => Promise<FormikErrors<TEditProfile>>;
    validateField: (name: string) => Promise<void> | Promise<string | undefined>;
    isValid: boolean;
    dirty: boolean;
    unregisterField: (name: string) => void;
    registerField: (name: string, { validate }: any) => void;
    getFieldProps: (nameOrOptions: any) => FieldInputProps<any>;
    getFieldMeta: (name: string) => FieldMetaProps<any>;
    getFieldHelpers: (name: string) => FieldHelperProps<any>;
    validateOnBlur: boolean;
    validateOnChange: boolean;
    validateOnMount: boolean;
    values: TEditProfile;
    errors: FormikErrors<TEditProfile>;
    touched: FormikTouched<TEditProfile>;
    isSubmitting: boolean;
    isValidating: boolean;
    status?: any;
    submitCount: number;
  };
  toggleUpdatePasswordModal: () => void;
  isAdmin: boolean;
  Preferences: JSX.Element;
  userProfile: { summary: string; image: string; name: string; icon: string };
} => {
  const formik = useFormik<TEditProfile>({
    initialValues: {
      image:
        'https://images.unsplash.com/photo-1543783207-ec64e4d95325?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80',
      displayName: 'Madrid',
      icon: 'https://docs.moodle.org/dev/images_dev/2/2b/estrella.jpg',
      name: 'Estrella',
      summary:
        'Spanish educator teaching at a local ESO (secondary) school, and leading a busy life!'
    },
    onSubmit: () => {
      action('submit')();
      return new Promise((resolve, reject) => {
        setTimeout(resolve, 3000);
      });
    }
  });
  const preferencesFormik = useFormik<EditPreferences>({
    initialValues: { moodleWebsite: '' },
    onSubmit: () => {}
  });
  return {
    toggleUpdatePasswordModal: () => {},
    formik,
    sectionPaths: {
      preferences: '/preferences',
      general: '/'
    },
    displayUsername: '@estrella@home.moodle.net',
    userProfile: {
      name: 'someName',
      summary: 'someSummary',
      image: 'image',
      icon: 'icon'
    },
    isAdmin: false,
    Preferences: (
      <Preferences
        formik={preferencesFormik}
        current={{ label: 'English', value: 'en_GB' }}
        locales={[
          { label: 'English', value: 'en_GB' },
          { label: 'Espanol', value: 'es_ES' }
        ]}
        setLocale={action('setLocale')}
      />
    )
    // Flags: <div>Flags section </div>,
    // Instance: <div>Instance section </div>,
    // Invites: <div>Invites section </div>,
    // ModerationLog: <div>ModerationLog section </div>
  };
};

export const useGetEditProfilePropsAdmin = (): {
  sectionPaths: { general: string; preferences: string };
  displayUsername: string;
  formik: {
    initialValues: TEditProfile;
    initialErrors: FormikErrors<unknown>;
    initialTouched: FormikTouched<unknown>;
    initialStatus: any;
    handleBlur: {
      (e: React.FocusEvent<any>): void;
      <T = any>(fieldOrEvent: T): T extends string ? (e: any) => void : void;
    };
    handleChange: {
      (e: React.ChangeEvent<any>): void;
      <T_1 = string | React.ChangeEvent<any>>(field: T_1): T_1 extends React.ChangeEvent<any>
        ? void
        : (e: string | React.ChangeEvent<any>) => void;
    };
    handleReset: (e: any) => void;
    handleSubmit: (e?: React.FormEvent<HTMLFormElement> | undefined) => void;
    resetForm: (nextState?: Partial<FormikState<TEditProfile>> | undefined) => void;
    setErrors: (errors: FormikErrors<TEditProfile>) => void;
    setFormikState: (
      stateOrCb:
        | FormikState<TEditProfile>
        | ((state: FormikState<TEditProfile>) => FormikState<TEditProfile>)
    ) => void;
    setFieldTouched: (
      field: string,
      touched?: boolean,
      shouldValidate?: boolean | undefined
    ) => Promise<FormikErrors<TEditProfile>> | Promise<void>;
    setFieldValue: (
      field: string,
      value: any,
      shouldValidate?: boolean | undefined
    ) => Promise<FormikErrors<TEditProfile>> | Promise<void>;
    setFieldError: (field: string, value: string | undefined) => void;
    setStatus: (status: any) => void;
    setSubmitting: (isSubmitting: boolean) => void;
    setTouched: (
      touched: FormikTouched<TEditProfile>,
      shouldValidate?: boolean | undefined
    ) => Promise<FormikErrors<TEditProfile>> | Promise<void>;
    setValues: (
      values: React.SetStateAction<TEditProfile>,
      shouldValidate?: boolean | undefined
    ) => Promise<FormikErrors<TEditProfile>> | Promise<void>;
    submitForm: () => Promise<any>;
    validateForm: (values?: TEditProfile) => Promise<FormikErrors<TEditProfile>>;
    validateField: (name: string) => Promise<void> | Promise<string | undefined>;
    isValid: boolean;
    dirty: boolean;
    unregisterField: (name: string) => void;
    registerField: (name: string, { validate }: any) => void;
    getFieldProps: (nameOrOptions: any) => FieldInputProps<any>;
    getFieldMeta: (name: string) => FieldMetaProps<any>;
    getFieldHelpers: (name: string) => FieldHelperProps<any>;
    validateOnBlur: boolean;
    validateOnChange: boolean;
    validateOnMount: boolean;
    values: TEditProfile;
    errors: FormikErrors<TEditProfile>;
    touched: FormikTouched<TEditProfile>;
    isSubmitting: boolean;
    isValidating: boolean;
    status?: any;
    submitCount: number;
  };
  toggleUpdatePasswordModal: () => void;
  isAdmin: boolean;
  Preferences: JSX.Element;
  userProfile: { summary: string; image: string; name: string; icon: string };
} => {
  const formik = useFormik<TEditProfile>({
    initialValues: {
      image:
        'https://images.unsplash.com/photo-1526583547718-e88dc16de312?ixlib=rb-1.2.1&auto=format&fit=crop&w=2100&q=80',
      displayName: 'Ammaaarah',
      icon: 'https://docs.moodle.org/dev/images_dev/4/4e/ammaarah.jpg',
      name: 'Ammaaarah',
      summary:
        'Programme Co-ordinator working at a South African university with a deep experience of Moodle and other open source software projects. '
    },
    onSubmit: () => {
      action('submit')();
      return new Promise((resolve, reject) => {
        setTimeout(resolve, 3000);
      });
    }
  });

  const preferencesFormik = useFormik<EditPreferences>({
    initialValues: { moodleWebsite: '' },
    onSubmit: () => {}
  });

  return {
    formik,
    toggleUpdatePasswordModal: () => {},
    sectionPaths: {
      preferences: '/preferences',
      general: '/'
    },
    userProfile: {
      name: 'someName',
      summary: 'someSummary',
      image: 'image',
      icon: 'icon'
    },
    displayUsername: '@ammaarah@home.moodle.net',
    Preferences: (
      <Preferences
        formik={preferencesFormik}
        current={{ label: 'English', value: 'en_GB' }}
        locales={[
          { label: 'English', value: 'en_GB' },
          { label: 'Espanol', value: 'es_ES' }
        ]}
        setLocale={action('setLocale')}
      />
    ),
    isAdmin: true
  };
};
