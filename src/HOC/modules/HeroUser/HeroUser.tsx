/* eslint-disable react-hooks/exhaustive-deps */
import { useUser } from 'fe/user/useUser';
import { useFormik } from 'formik';
import { User } from 'graphql/types.generated';
import { useNotifyMustLogin } from 'HOC/lib/notifyMustLogin';
import React, { FC, useMemo, useReducer } from 'react';
import { HeroUser as HeroUserUI, Loaded, LoadedOther, Props, Status } from 'ui/modules/HeroUser';
import Modal from 'ui/modules/Modal';
import { useCreateDefaultEvent } from '../../../fe/resource/create/useCreateDefaultEvent';
import { useEconomicEventsFilteredQuery } from '../EconomicEventManager/EconomicEventManager.generated';
import { FlagModalHOC } from '../FlagModal/flagModalHOC';

export interface HeroUser {
  userId: User['id'];
}
export const HeroUser: FC<HeroUser> = ({ userId }) => {
  const { user, isAdmin, isMe, toggleFollow } = useUser(userId);
  const [isOpenDropdown, toggleDropdown] = useReducer(is => !is, false);
  const { create } = useCreateDefaultEvent([userId]);
  const { data } = useEconomicEventsFilteredQuery({ variables: { action: 'transfer' } });
  const providers = data?.economicEventsFiltered?.map(el => el.provider);
  const receivers = data?.economicEventsFiltered?.map(el => el.receiver);

  const isProvider =
    providers?.some(el => el.id === userId) || receivers?.some(el => el.id === userId);
  const toggleFollowFormik = useFormik({
    initialValues: {},
    onSubmit: toggleFollow
  });
  const notifiedMustLogin = useNotifyMustLogin();

  const [isFlagging, toggleFlagging] = useReducer(is => {
    return notifiedMustLogin() ? false : !is;
  }, false);

  const FlagModal =
    user && isFlagging ? (
      <Modal closeModal={toggleFlagging}>
        <FlagModalHOC done={toggleFlagging} ctx={user} />
      </Modal>
    ) : null;
  const userHeroProps = useMemo<Props>(() => {
    if (!user) {
      return {
        status: Status.Loading
      };
    }

    const loadedProps: Omit<Loaded, 'me'> = {
      status: Status.Loaded,
      displayUsername: user.displayUsername,
      icon: user.icon?.url || '',
      image: user.image?.url || '',
      location: user.location || '',
      name: user.name || '',
      summary: user.summary || '',
      isFlagged: !!user.myFlag
    };

    if (isMe) {
      const props: Props = {
        isAdmin: isAdmin,
        me: isMe,
        createDefaultEvent: create,
        isProvider,
        userId,
        ...loadedProps
      };

      return props;
    } else {
      const props: LoadedOther = {
        flag: toggleFlagging,
        me: isMe,
        following: !!user.myFollow,
        isOpenDropdown,
        toggleDropdown,
        toggleFollowFormik,
        ...loadedProps
      };

      return props;
    }
  }, [isMe, user, toggleFollowFormik, isAdmin, isOpenDropdown]);

  return (
    <>
      {FlagModal}
      <HeroUserUI {...userHeroProps} />
    </>
  );
};
