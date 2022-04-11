import { useFormik } from 'formik';
import { useNotifyMustLogin } from 'HOC/lib/notifyMustLogin';
import React, { FC, useMemo, useReducer } from 'react';
import { HeroUser as HeroUserUI, Props, Status } from 'ui/modules/HeroUser';
import Modal from 'ui/modules/Modal';
import { useUserById } from '../../../fe/user/useUserById';

export interface HeroUser {
  userId: string;
}
export const HeroUser: FC<HeroUser> = ({ userId }) => {
  const { user, isMe } = useUserById(userId);
  const [isOpenDropdown, toggleDropdown] = useReducer(is => !is, false);

  const toggleFollowFormik = useFormik({
    initialValues: {},
    onSubmit: () => {}
  });
  const notifiedMustLogin = useNotifyMustLogin();

  const [isFlagging, toggleFlagging] = useReducer(is => {
    return notifiedMustLogin() ? false : !is;
  }, false);

  const FlagModal =
    user && isFlagging ? <Modal closeModal={toggleFlagging}>FlagModal</Modal> : null;
  const userHeroProps = useMemo<Props>(() => {
    if (!user) {
      return {
        status: Status.Loading
      };
    }

    const loadedProps: any = {
      user
    };

    if (isMe) {
      const props: any = {
        me: isMe,
        ...loadedProps
      };

      return props;
    } else {
      const props: any = {
        flag: toggleFlagging,
        me: isMe,
        isOpenDropdown,
        toggleDropdown,
        toggleFollowFormik,
        ...loadedProps
      };

      return props;
    }
  }, [isMe, user, toggleFollowFormik, isOpenDropdown]);

  return (
    <>
      {FlagModal}
      <HeroUserUI {...userHeroProps} />
    </>
  );
};
