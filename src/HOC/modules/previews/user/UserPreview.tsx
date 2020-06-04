import { useUserPreview } from 'fe/user/preview/useUserPreview';
import { User } from 'graphql/types.generated';
import React, { FC, useMemo } from 'react';
import {
  User as UserPreviewUI,
  Props as UserPreviewProps
} from 'ui/modules/Previews/User';
import { useFormik } from 'formik';
import { Box } from 'rebass';
import { getActivitySimpleLink } from 'fe/lib/activity/getActivitySimpleLink';
export interface Props {
  userId: User['id'];
  flagged?: boolean;
}

export const UserPreviewHOC: FC<Props> = ({ userId, flagged }) => {
  const { user, toggleFollow } = useUserPreview(userId);

  const toggleFollowFormik = useFormik({
    initialValues: {},
    onSubmit: toggleFollow
  });
  const userPreviewProps = useMemo<UserPreviewProps | null>(() => {
    if (!user) {
      return null;
    }

    const hideActions = flagged ? true : false;

    const { userName, displayUsername, image, icon, summary, myFollow } = user;

    const props: UserPreviewProps = {
      image: icon?.url || image?.url || '',
      name: userName || '',
      username: displayUsername,
      bio: summary || '',
      isFollowing: !!myFollow,
      toggleFollowFormik,
      profileUrl: getActivitySimpleLink(user),
      hideActions: hideActions
    };
    return props;
  }, [user, toggleFollowFormik, flagged]);

  return (
    userPreviewProps && (
      <Box px={2} py={1} pb={0}>
        <UserPreviewUI {...userPreviewProps} />
      </Box>
    )
  );
};
