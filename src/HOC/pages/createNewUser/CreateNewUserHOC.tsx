import { useFormik } from 'formik';
import React, { FC, useEffect, useMemo } from 'react';
import * as Yup from 'yup';
import { useCreateUser } from '../user/create/useCreateUser';
import { t } from '@lingui/macro';
import { usePageTitle } from 'context/global/pageCtx';
import { toast } from 'react-toastify';
import CreateNewUserPage, { CreateUserFormValues, Props } from 'ui/pages/createNewUser';
import { useHistory } from 'react-router';
import { useAnon } from 'fe/session/useAnon';
import { useNotifyMustLogin } from '../../lib/notifyMustLogin';

const initialValues: CreateUserFormValues = {
  profileName: '',
  userName: '',
  summary: ''
};
const createUserPageTitle = t`Create New User`;

export const CreateNewUserHOC: FC = () => {
  const { logout } = useAnon();
  const notifyNotLogged = useNotifyMustLogin();
  notifyNotLogged() && logout();

  usePageTitle(createUserPageTitle);
  const { create, createStatus } = useCreateUser();
  const validationSchema: Yup.ObjectSchema<CreateUserFormValues> = Yup.object<CreateUserFormValues>(
    {
      profileName: Yup.string()
        .max(50)
        .required(),
      userName: Yup.string()
        .max(50)
        .required()
    }
  );

  const formik = useFormik<CreateUserFormValues>({
    initialValues,
    enableReinitialize: true,
    validateOnChange: false,
    validateOnBlur: false,
    validationSchema,
    onSubmit: async regInput => {
      const userData = await create({
        profileName: regInput.profileName,
        userName: regInput.userName,
        summary: regInput.summary
      });

      // @ts-ignore
      userData?.data?.createUser.accountId && history.push(`/settings`);
      return userData;
    }
  });
  const history = useHistory();
  useEffect(() => {
    if (createStatus.error?.graphQLErrors.length) {
      toast.error(createStatus.error?.graphQLErrors[0].message);
    } else {
      // history.push(`/user/${createStatus.data}`)
    }
  }, [createStatus]);

  const props = useMemo<Props>(
    () => ({
      formik
    }),

    [formik]
  );

  return <CreateNewUserPage {...props} />;
};
