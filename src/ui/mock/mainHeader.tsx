import React from 'react';
import { Props } from 'ui/modules/MainHeader';
import { Input } from '@rebass/forms';
import Modal from 'ui/modules/Modal';

export const getMainHeaderProps = (): Props => {
  return {
    user: {
      name: 'Estrella',
      icon:
        'https://docs.moodle.org/dev/images_dev/thumb/2/2b/estrella.jpg/100px-estrella.jpg',
      link: '/',
      isAdmin: false,
      logout: () => console.log(false)
    },
    toggleSideBar: () => console.log(true),
    Search: <Input placeholder="Search..." />,
    CreateCommunityModal: ({ done }) => (
      <Modal closeModal={done}>Community creation modal</Modal>
    )
  };
};
