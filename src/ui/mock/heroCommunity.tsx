import {
  Props as HeroCommunityProps,
  Status as HeroCommunityStatus
} from 'ui/modules/HeroCommunity';
import { useToggleFormik } from './formik';
import { action } from '@storybook/addon-actions';

export const useGetHeroCommunityProps = (
  isCreator = false,
  isAdmin = false,
  following = true,
  icon = 'https://live.staticflickr.com/855/30064665718_d43727c1b8_b.jpg',
  name = 'OER licensing',
  fullName = 'creative_commons_licensing@home.moodle.net',
  summary = 'This community aims to help those new to openly licensing their resources with choosing the correct Creative Commons license. Image CC BY hj_dewaard.'
): HeroCommunityProps => {
  return {
    community: {
      isAdmin,
      isCreator,
      // isFeatured: false,
      basePath: '/',
      status: HeroCommunityStatus.Loaded,
      canModify: true,
      following,
      isFlagged: false,
      icon,
      name,
      fullName,
      summary,
      totalMembers: 193,
      toggleJoinFormik: useToggleFormik(),
      isOpenDropdown: false,
      toggleDropdown: action('toggleDropdown'),
      edit: action('editCollection'),
      addToFeatured: action('showAddToFeatured'),
      flag: action('showFlag')
    }
  };
};
