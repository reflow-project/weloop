import { useAllCommunities } from 'fe/community/all/useAllCommunities';
import { CommunityPreviewHOC } from 'HOC/modules/previews/community/CommunityPreview';
import React, { FC, useMemo } from 'react';
import {
  AllCommunities as AllCommunitiesUI,
  Props as AllCommunitiesUIProps
} from 'ui/pages/allCommunities';
import { useFormik } from 'formik';
import { Box } from 'rebass';

export interface AllCommunitiesPage {}
export const AllCommunitiesPage: FC<AllCommunitiesPage> = () => {
  const { allCommunitiesPage } = useAllCommunities();
  const LoadMoreFormik = useFormik({
    initialValues: {},
    onSubmit: () =>
      allCommunitiesPage.ready ? allCommunitiesPage.next() : undefined
  });

  const allCommunitiesUIProps = useMemo<AllCommunitiesUIProps>(() => {
    const CommunitiesBoxes = (
      <Box m={2}>
        {allCommunitiesPage.edges.map(communityPreview => (
          <CommunityPreviewHOC communityId={communityPreview.id} />
        ))}
      </Box>
    );
    const props: AllCommunitiesUIProps = {
      CommunitiesBoxes,
      LoadMoreFormik
    };

    return props;
  }, [allCommunitiesPage, LoadMoreFormik]);

  return <AllCommunitiesUI {...allCommunitiesUIProps} />;
};
