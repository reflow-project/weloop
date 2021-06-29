import { useFormik } from 'formik';
import React, { FC } from 'react';
import { useHistory } from 'react-router';
import { Slide, toast } from 'react-toastify';
import Login, { LoginFormValues } from 'ui/pages/login';
import * as Yup from 'yup';
import { useAnon } from 'fe/session/useAnon';
import { t } from '@lingui/macro';
import { usePageTitle } from 'context/global/pageCtx';
import { useCreateDefaultEconomicEventMutation } from '../../../fe/resource/create/useCreateResource.generated';
import { useEconomicEventsFilteredQuery } from '../../modules/EconomicEventManager/EconomicEventManager.generated';
import { EconomicResourcesFilteredQueryRefetch } from '../inventory/InventoryPage.generated';

export const validationSchema: Yup.ObjectSchema<LoginFormValues> = Yup.object<LoginFormValues>({
  email: Yup.string()
    .max(50)
    .required(),
  password: Yup.string()
    .max(50)
    .required()
});

export interface Props {}

const loginPageTitle = t`Login`;

export const LoginPageHOC: FC<Props> = () => {
  const history = useHistory();
  const [createResourceMut] = useCreateDefaultEconomicEventMutation();
  const { data } = useEconomicEventsFilteredQuery({ variables: { action: 'transfer' } });
  usePageTitle(loginPageTitle);
  const { login } = useAnon();
  const formik = useFormik<LoginFormValues>({
    initialValues: {
      email: '',
      password: ''
    },
    enableReinitialize: true,
    onSubmit: ({ email, password }) => {
      // @ts-ignore
      login(email, password)
        .then(response => {
          // when user was sign in first his name is not displayed in provider list
          // https://github.com/reflow-project/weloop/issues/87
          // solution: 1) get providers list and check - is User in this list?
          // 2) if user is  - he is sign in
          // 3) else he is sign in and create default resource

          const providers = data?.economicEventsFiltered?.map(el => el.provider);
          const receivers = data?.economicEventsFiltered?.map(el => el.receiver);

          const hasError = response?.errors;
          const userId = response?.data?.createSession?.me.user.id;
          const isProvider =
            providers?.some(el => el.id === userId) || receivers?.some(el => el.id === userId);

          return [hasError, isProvider, userId];
        })
        .then(([hasError, isProvider, userId]) => {
          !hasError &&
            !isProvider &&
            userId &&
            createResourceMut({
              variables: {
                name: 'My first inventory',
                note: 'Created automatically',
                action: 'transfer'
              },
              refetchQueries: [EconomicResourcesFilteredQueryRefetch({ agent: userId as any })]
            });
          return [hasError, userId];
        })
        .then(([hasError, userId]) => {
          const redirect = `/inventory/user/${userId}`;
          !hasError && history.replace(redirect);
        })
        .catch(err => {
          toast.error(`Login Error: ${err}`, {
            position: 'top-right',
            transition: Slide,
            autoClose: 3000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true
          });
        });
    },
    validationSchema
  });
  return <Login formik={formik} />;
};
