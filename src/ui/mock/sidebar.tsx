import { Props, Status } from 'ui/modules/Sidebar';
import { useToggleFormik } from './formik';

export const useGetSidebarProps = (): Props => {
  return {
    status: Status.Loaded,
    isSidebarOpen: true,
    LoadMoreFormik: useToggleFormik(),
    communities: [
      {
        link: {
          url: '/',
          external: false
        },
        name: 'OER Licensing',
        icon: 'https://live.staticflickr.com/855/30064665718_d43727c1b8_b.jpg'
      },
      {
        link: {
          url: '/.',
          external: false
        },
        name: 'Grammar nerds',
        icon: 'https://images.pexels.com/photos/278887/pexels-photo-278887.jpeg'
      },
      {
        link: {
          url: '/..',
          external: false
        },
        name: 'Archaeology 101',
        icon:
          'https://images.pexels.com/photos/4039923/pexels-photo-4039923.jpeg'
      }
    ]
  };
};
