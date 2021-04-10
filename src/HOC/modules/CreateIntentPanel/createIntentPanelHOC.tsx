import { MyFollowedCommunityDataFragment } from 'fe/community/myFollowed/myFollowedCommunities.generated';
import { useCreateIntent } from 'fe/intent/create/useCreateIntent';
import { useFormik } from 'formik';
import React, { useMemo } from 'react';
import { useMyFollowedCommunities } from 'fe/community/myFollowed/myFollowedCommunities';
import {
  CreateIntentPanel,
  CreateIntentFormValues,
  SelectOption
} from 'ui/modules/CreateIntentPanel';
import { useHistory, useLocation } from 'react-router';

export type TCreateIntentPanelHOC = {
  done(): any;
  communities: Array<SelectOption>;
};

export const CreateIntentPanelHOC: React.FC<TCreateIntentPanelHOC> = ({ done }) => {
  const history = useHistory();
  const location = useLocation();
  const { create } = useCreateIntent();
  const { myCommunityFollowsPage } = useMyFollowedCommunities();
  const communities = useMemo(
    () =>
      myCommunityFollowsPage.edges
        .map(follow => follow.context)
        .filter(
          (context): context is MyFollowedCommunityDataFragment =>
            context.__typename === 'Community'
        )
        .map<SelectOption>(community => {
          return {
            value: community.id,
            label: community.name
          };
        }),
    [myCommunityFollowsPage]
  );

  const formik = useFormik<CreateIntentFormValues>({
    initialValues: {
      name: '',
      communityId: '',
      note: ''
    },
    enableReinitialize: true,
    onSubmit: values => {
      //TODO: do validation and return proper data
      return create({
        name: values.name,
        communityId: values.communityId,
        note: values.note
      })
        .then(res => {
          const redirect = `/communities/${values.communityId}/intents`;
          if (redirect === location.pathname) {
            window.location.reload();
          } else {
            res?.data?.createIntent?.intent && history.replace(redirect);
          }
        })
        .catch(err => console.log(err));
    }
  });

  return <CreateIntentPanel communities={communities} formik={formik} cancel={done} />;
};
