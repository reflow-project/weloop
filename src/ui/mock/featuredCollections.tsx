import React from 'react';
import { FeaturedCollectionsData as FeaturedCollectionsProps } from 'ui/modules/FeaturedCollections';

export const useGetFeaturedCollectionsProps = (
  isAdmin = false
): FeaturedCollectionsProps => {
  return {
    isAdmin,
    FeaturedModal: () => <div>FeaturedModal</div>,
    featuredCollections: [
      {
        id: '1',
        name: 'Spaced repetition',
        icon:
          'https://i0.wp.com/japanese-journey.com/wp-content/uploads/2016/03/spaced-repetition.png'
      },
      {
        id: '2',
        name: 'Badge basics',
        icon:
          'https://upload.wikimedia.org/wikipedia/commons/6/63/Open_Badges_-_Logo.png'
      },
      {
        id: '3',
        name: 'Affinity Spaces',
        icon: 'https://media.giphy.com/media/Ws7jeb3W5eCeA/giphy.gif'
      },
      {
        id: '4',
        name: 'Mountain Training',
        icon:
          'https://www.mountain-training.org/App_Themes/MLT/Images/mt-logo.png'
      }
    ]
  };
};
