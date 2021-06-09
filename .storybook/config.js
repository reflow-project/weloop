import { configure, addDecorator, addParameters } from '@storybook/react';
import { withA11y } from '@storybook/addon-a11y';
import { themeDeco } from 'ui/styleguide/storiesThemeDecorator';
import { DocsPage, DocsContainer } from '@storybook/addon-docs/blocks';
import { logo_large_url, APP_NAME, related_urls } from 'mn-constants';
import { create } from '@storybook/theming';
import StoryRouter from 'storybook-react-router';

const theme = create({
  brandImage: logo_large_url,
  brandTitle: APP_NAME,
  url: related_urls.code
});

addParameters({
  options: {
    theme,
    showPanel: false
  },
  docs: {
    container: DocsContainer,
    page: DocsPage,
    prepareForInline: storyFn => storyFn()
  }
});

addDecorator(withA11y);
addDecorator(themeDeco());
addDecorator(StoryRouter());

const loaderFn = () => {
  // const allExports = [];
  // const Intro = []
  const allExports = [
    require('./welcome.stories.mdx'),
    require('./designer.stories.mdx'),
    require('./developer.stories.mdx'),
    require('./admin.stories.mdx'),
    require('./palette.stories.mdx'),
    require('./typography.stories.mdx'),
    require('../src/ui/pages/login/a.stories.mdx'),
    require('../src/ui/pages/signUp/a.stories.mdx'),
    require('../src/ui/pages/termsAndConditions/a.stories.mdx'),
    require('../src/ui/pages/confirmEmail/a.stories.mdx'),
    require('../src/ui/pages/createNewPassword/a.stories.mdx'),
    require('../src/ui/pages/resetPassword/a.stories.mdx'),
    require('../src/ui/pages/home/a.stories.mdx'),
    require('../src/ui/pages/discover/a.stories.mdx'),
    require('../src/ui/pages/allCommunities/a.stories.mdx'),
    require('../src/ui/pages/allCollections/a.stories.mdx'),
    require('../src/ui/pages/community/a.stories.mdx'),
    require('../src/ui/pages/collection/a.stories.mdx'),
    require('../src/ui/pages/thread/a.stories.mdx'),
    require('../src/ui/pages/user/a.stories.mdx'),
    require('../src/ui/pages/user/b.stories.mdx'),
    require('../src/ui/pages/settings/admin.stories.mdx'),
    require('../src/ui/pages/notFound/a.stories.mdx'),
    require('../src/ui/pages/maps/a.stories.mdx'),
    // Modules
    require('../src/ui/modules/ActivityPreview/a.stories.mdx'),
    require('../src/ui/modules/ShareLink/a.stories.mdx'),
    // require('../src/ui/modules/addResource/a.stories.mdx'),
    require('../src/ui/modules/ConfirmationPanel/a.stories.mdx'),
    require('../src/ui/modules/CreateCollectionPanel/a.stories.mdx'),
    require('../src/ui/modules/CreateCommunityPanel/a.stories.mdx'),
    require('../src/ui/modules/CreateIntentPanel/a.stories.mdx'),
    require('../src/ui/modules/CreateResourcePanel/a.stories.mdx'),
    require('../src/ui/modules/EditCollectionPanel/a.stories.mdx'),
    require('../src/ui/modules/EditCommunityPanel/a.stories.mdx'),
    require('../src/ui/modules/EditResourcePanel/a.stories.mdx'),
    require('../src/ui/modules/FeaturedCollections/a.stories.mdx'),
    require('../src/ui/modules/FeaturedCommunities/a.stories.mdx'),
    require('../src/ui/modules/FlagModal/a.stories.mdx'),
    // require('../src/ui/modules/Footer/a.stories.mdx'),
    require('../src/ui/modules/Header/a.stories.mdx'),
    require('../src/ui/modules/HeroCollection/a.stories.mdx'),
    require('../src/ui/modules/HeroCommunity/a.stories.mdx'),
    require('../src/ui/modules/HeroUser/a.stories.mdx'),
    require('../src/ui/modules/Loadmore/a.stories.mdx'),
    require('../src/ui/modules/MainHeader/a.stories.mdx'),
    require('../src/ui/modules/Previews/a.stories.mdx'),
    require('../src/ui/modules/Sidebar/a.stories.mdx'),
    require('../src/ui/modules/SocialText/a.stories.mdx'),
    require('../src/ui/modules/ProposedIntentPanel/a.stories.mdx')
  ];
  // allExports.push(Intro.map(a => a))
  // allExports.push(pages.map(a => a))

  // const pages = require.context('../src/ui/pages', true, /\.stories\.mdx$/);
  // const modules = require.context('../src/ui/modules', true, /\.stories\.mdx$/);
  // pages.keys().forEach(fname => allExports.push(pages(fname)));
  // modules.keys().forEach(fname => allExports.push(modules(fname)));
  return allExports;
  // const req = require.context('../src/ui', true, /\.stories\.(tsx|mdx)$/)
  // req.keys().forEach(fname => allExports.push(req(fname)));
  // return allExports;
};

configure(loaderFn, module);

// automatically import all files ending in *.stories.tsx
// const req = [
//   require.context('../src/ui/', true, /\.stories\.tsx$/),
//   require.context('../src/ui/', true, /\.stories\.mdx$/),
// ];

// function loadStories() {
//   req.keys().forEach(req);
// }

// configure(require.context('../src/ui', true, /\.stories\.(tsx|mdx)$/), module);

// configure(loadStories, module);
