import { Props, Status } from 'ui/modules/Sidebar';
import { useToggleFormik } from './formik';

export const useGetSidebarProps = (): Props => {
  return {
    status: Status.Loaded,
    isSidebarOpen: true,
    LoadMoreFormik: useToggleFormik(),
    discoverPath: '/discover',
    homePath: '/home',
    communities: [
      {
        link: '/',
        name: 'OER Licensing',
        icon: 'https://live.staticflickr.com/855/30064665718_d43727c1b8_b.jpg'
      },
      {
        link: '/2',
        name: 'Grammar nerds',
        icon: 'https://images.pexels.com/photos/278887/pexels-photo-278887.jpeg'
      },
      {
        link: '/3',
        name: 'Archaeology 101',
        icon: 'https://images.pexels.com/photos/4039923/pexels-photo-4039923.jpeg'
      }
    ]
  };
};
