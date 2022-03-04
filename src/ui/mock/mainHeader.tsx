import React from 'react';
import { Input } from '@rebass/forms';
import { action } from '@storybook/addon-actions';
import { Props } from 'ui/modules/MainHeader';

export const getMainHeaderProps = (): Props => {
  return {
    user: {
      name: 'Estrella',
      icon: 'https://docs.moodle.org/dev/images_dev/thumb/2/2b/estrella.jpg/100px-estrella.jpg',
      link: '/'
    },
    toggleSideBar: () => console.log(true),
    Search: <Input placeholder="Search..." />,
    toggleDropdown: action('toggle Dropdown'),
    createCommunity: action('create Community'),
    createResource: action('create Resource'),
    createIntent: action('create Intent'),
    isOpenDropdown: false
  };
};
