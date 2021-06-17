import { MyFollowedCommunityDataFragment } from 'fe/community/myFollowed/myFollowedCommunities.generated';
import { useCreateIntent } from 'fe/intent/create/useCreateIntent';
import { useFormik } from 'formik';
import * as React from 'react';
import { useMemo } from 'react';
import { useMyFollowedCommunities } from 'fe/community/myFollowed/myFollowedCommunities';
import { Slide, toast } from 'react-toastify';
import {
  CreateIntentPanel,
  CreateIntentFormValues,
  SelectOption,
  TCreateIntentPanel
} from 'ui/modules/CreateIntentPanel';
import { useHistory } from 'react-router';
import { useUnitsPagesQuery } from '../EconomicEventManager/EconomicEventManager.generated';
import * as GQL from '../EconomicEventManager/EconomicEventManager.generated';

import * as Yup from 'yup';
export type TCreateIntentPanelHOC = {
  done: () => void;
  communityId?: string;
};

export interface CreateOfferFormValues {
  name: string;
  communityId: string;
  note: string;
  hasUnit: string;
  hasNumericalValue: number;
}

export const CreateIntentPanelHOC: React.FC<TCreateIntentPanelHOC> = ({ done, communityId }) => {
  const history = useHistory();
  const { create } = useCreateIntent();
  const { myCommunityFollowsPage } = useMyFollowedCommunities();
  const communities = useMemo<SelectOption[]>(() => {
    return myCommunityFollowsPage.edges
      .map((follow: any) => follow.context)
      .filter(
        (context: any): context is MyFollowedCommunityDataFragment =>
          context.__typename === 'Community'
      )
      .map<{ id: string; label: string }>(community => {
        return {
          id: community.id,
          label: community.name
        };
      });
  }, [myCommunityFollowsPage]);

  const unitPagesQ = useUnitsPagesQuery();
  const unitPages = unitPagesQ.data?.unitsPages;

  const spatialThingsQ = GQL.useSpatialThingsPagesQuery();
  const spatialThings = spatialThingsQ.data?.spatialThingsPages;

  const SignupSchema = Yup.object().shape({
    name: Yup.string()
      .max(60, 'Too Long!')
      .required('Required'),
    note: Yup.string().max(500, 'Too Long!'),
    communityId: Yup.string().required('Required'),
    hasUnit: Yup.string().required('Required'),
    hasNumericalValue: Yup.string()
      .required('Required')
      .notOneOf([0, '0', null, undefined], 'Not null')
  });

  const formik = useFormik<CreateIntentFormValues>({
    initialValues: {
      name: '',
      communityId: communityId || '',
      note: '',
      hasUnit: '',
      hasNumericalValue: 0
    },
    validateOnChange: false,
    validateOnBlur: false,
    validationSchema: SignupSchema,
    enableReinitialize: true,
    onSubmit: (values: any) => {
      return create({
        name: values.name,
        communityId: values.communityId,
        note: values.note,
        hasUnit: values.hasUnit,
        hasNumericalValue: values.hasNumericalValue
      })
        .then((response: any) => {
          const redirect = `/communities/${values.communityId}`;

          !response.errors && history.replace(redirect);
          !response.errors && done();
          !response.errors &&
            toast.success('Intent was created', {
              position: 'top-right',
              transition: Slide,
              autoClose: 3000,
              hideProgressBar: false,
              closeOnClick: true,
              pauseOnHover: true
            });
        })
        .catch((error: any) => console.log(error));
    }
  });

  const createIntentPanelProps: TCreateIntentPanel = {
    communities: communities,
    formik: formik,
    unitPages: unitPages?.edges,
    spatialThings: spatialThings?.edges || null,
    cancel: done
  };

  return <CreateIntentPanel {...createIntentPanelProps} />;
};
