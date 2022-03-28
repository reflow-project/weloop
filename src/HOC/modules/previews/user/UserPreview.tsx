import { useUserPreview } from 'fe/user/preview/useUserPreview';
import { useFormik } from 'formik';
import { User } from 'graphql/types.generated';
import React, { FC, useMemo } from 'react';
import { Box } from 'rebass';
import { userLocation } from 'routes/UserPageRoute';
import { Props as UserPreviewProps, User as UserPreviewUI } from 'ui/modules/Previews/User';
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
      profileUrl: userLocation.getPath({ userId: user.id, tab: undefined }, undefined),
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
