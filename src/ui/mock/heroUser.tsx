import React from 'react';
import {
  LoadedMe as HeroUserProps,
  Status,
  LoadedOther
} from 'ui/modules/HeroUser';
import { useToggleFormik } from './formik';

export const useGetHeroUserProps = (
  me = false,
  name = 'Estrella',
  displayUsername = 'estrella@home.moodle.net',
  image = 'https://images.unsplash.com/photo-1543783207-ec64e4d95325?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80',
  icon = 'https://docs.moodle.org/dev/images_dev/thumb/2/2b/estrella.jpg/100px-estrella.jpg',
  location = 'Madrid',
  summary = 'Spanish educator teaching at a local ESO (secondary) school, and leading a busy life!'
) => {
  const toggleFollowFormik = useToggleFormik();

  if (me) {
    const props: HeroUserProps = {
      name,
      status: Status.Loaded,
      displayUsername,
      image,
      icon,
      me: true,
      isFlagged: false,
      FlagModal: ({ done }) => {
        return <></>;
      },
      isAdmin: false,
      location,
      summary
    };

    return props;
  } else {
    const props: LoadedOther = {
      me: false,
      status: Status.Loaded,
      following: false,
      name,
      displayUsername,
      image,
      icon,
      isFlagged: false,
      FlagModal: ({ done }) => {
        return <></>;
      },
      isOpenDropdown: false,
      setOpenDropdown: () => console.log('test'),
      toggleFollowFormik,
      location,
      summary
    };

    return props;
  }
};
