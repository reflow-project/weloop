import React from 'react';
import { FeaturedCollectionsData as FeaturedCollectionsProps } from 'ui/modules/FeaturedCollections';
import { action } from '@storybook/addon-actions';
import CollectionSmall from 'ui/modules/FeaturedCollections/preview';

export const useGetFeaturedCollectionsProps = (canEdit = false): FeaturedCollectionsProps => {
  return {
    canEdit,
    toggleEdit: () => action('edit featured'),
    isEditing: false,
    featuredCollections: [
      <CollectionSmall
        {...{
          collection: {
            link: '/collection/1',
            name: 'Spaced repetition',
            icon:
              'https://i0.wp.com/japanese-journey.com/wp-content/uploads/2016/03/spaced-repetition.png'
          },
          canEdit: true,
          isEditing: true,
          remove: action('show remove featured')
        }}
      />,
      <CollectionSmall
        {...{
          collection: {
            link: '/collection/2',
            name: 'Badge basics',
            icon: 'https://upload.wikimedia.org/wikipedia/commons/6/63/Open_Badges_-_Logo.png'
          },
          canEdit: true,
          isEditing: true,
          remove: action('show remove featured')
        }}
      />,
      <CollectionSmall
        {...{
          collection: {
            link: '/collection/3',
            name: 'Affinity Spaces',
            icon: 'https://media.giphy.com/media/Ws7jeb3W5eCeA/giphy.gif'
          },
          canEdit: true,
          isEditing: true,
          remove: action('show remove featured')
        }}
      />,
      <CollectionSmall
        {...{
          collection: {
            link: '/collection/4',
            name: 'Mountain Training',
            icon: 'https://www.mountain-training.org/App_Themes/MLT/Images/mt-logo.png'
          },
          canEdit: true,
          isEditing: true,
          remove: action('show remove featured')
        }}
      />
    ]
  };
};
