import { HeroUser } from 'HOC/modules/HeroUser/HeroUser';
import React, { FC, useMemo } from 'react';
import { Props, User as UserPageUI } from 'ui/pages/user';
import { InventoryPage } from '../inventory/InventoryPage';
import { useUserById } from '../../../fe/user/useUserById';
import { ActivityPreview } from '../../../ui/modules/ActivityPreview';

export enum UserPageTab {
  Starred,
  Communities,
  Collections,
  Following,
  Activities,
  Inventory
}

export const UserPage: FC<any> = ({ userId, basePath, tab }) => {
  const { user, loading } = useUserById(userId);

  const userPageProps = useMemo<Props>(() => {
    const LikesBoxes = <></>;
    const ActivityBoxes = (
      <ActivityPreview userActivity={user?.userActivities} status={{ Loading: !loading }} />
    );
    const CollectionsBoxes = <></>;
    const CommunityBoxes = <></>;

    const InventoryBoxes = <InventoryPage userId={userId} />;

    const UserBoxes = <></>;

    const HeroUserBox = <HeroUser userId={userId} />;

    const props: any = {
      basePath,
      userInfo: user,
      ActivityBoxes,
      LikesBoxes,
      HeroUserBox,
      CollectionsBoxes,
      CommunityBoxes,
      InventoryBoxes,
      UserBoxes
    };
    return props;
  }, [user, basePath, userId, loading]);
  return <UserPageUI {...userPageProps} />;
};
