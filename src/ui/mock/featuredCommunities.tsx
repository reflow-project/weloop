import React from 'react';
import { FeaturedCommunitiesData as FeaturedCommunitiesProps } from 'ui/modules/FeaturedCommunities';
import CommunitySmall from 'ui/modules/FeaturedCommunities/preview';
import { action } from '@storybook/addon-actions';

export const getFeaturedCommunitiesProps = (canEdit = false): FeaturedCommunitiesProps => {
  return {
    canEdit,
    toggleEdit: () => action('edit featured'),
    isEditing: false,
    featuredCommunities: [
      <CommunitySmall
        {...{
          community: {
            link: '/community/1',
            name: 'OER licensing',
            icon: 'https://live.staticflickr.com/855/30064665718_d43727c1b8_b.jpg'
          },
          canEdit: true,
          isEditing: true,
          remove: action('show remove featured')
        }}
      />,
      <CommunitySmall
        {...{
          community: {
            link: '/community/2',
            name: 'The Lounge',
            icon:
              'https://images.unsplash.com/photo-1581428982868-e410dd047a90?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80'
          },
          canEdit: true,
          isEditing: true,
          remove: action('show remove featured')
        }}
      />,
      <CommunitySmall
        {...{
          community: {
            link: '/community/3',
            name: 'History teachers',
            icon:
              'https://images.unsplash.com/photo-1515325595179-59cd5262ca53?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1489&q=80'
          },
          canEdit: true,
          isEditing: true,
          remove: action('show remove featured')
        }}
      />,
      <CommunitySmall
        {...{
          community: {
            link: '/community/4',
            name: 'Europeana',
            icon:
              'https://upload.wikimedia.org/wikipedia/commons/thumb/4/49/Europeana_logo_black.svg/1280px-Europeana_logo_black.svg.png'
          },
          canEdit: true,
          isEditing: true,
          remove: action('show remove featured')
        }}
      />
    ]
  };
};
