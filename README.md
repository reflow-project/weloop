# ZenPub Client

![Deployment](https://github.com/reflow-project/zenpub-client/workflows/Deployment/badge.svg)

## About the project
This app is based on [CommonsPub](http://commonspub.org), a project to create a generic federated server, based on the `ActivityPub` and `ActivityStreams` web standards). 

## Index

- [Deploying MoodleNet](#deploying-moodlenet)
- [Structure](#structure)
    - [High level folder structure](#high-level-folder-structure)
    - [Application source folder structure](#application-source-folder-structure)
- [Development Scripts](#development-scripts)
    - [`yarn start`](#yarn-start)
    - [`yarn add-locale`](#yarn-add-locale)
    - [`yarn extract`](#yarn-extract)
    - [`yarn compile`](#yarn-compile)
    - [`yarn build`](#yarn-build)
- [Libraries](#libraries)
- [Localisation](#localisation)
    - [Set up](#set-up)
    - [Usage](#usage)
    - [Simple language strings](#simple-language-strings)
    - [Language strings as reference](#language-strings-as-reference)
    - [Plural language strings](#plural-language-strings)
    - [Interpolated language strings](#interpolated-language-strings)
    - [Updating language files](#updating-language-files)
- [Dependencies](#dependencies)

## Deploying MoodleNet


Do you wish to run the client on your local machine? Read the [Getting started](https://gitlab.com/CommonsPub/Client/blob/develop/GETTING_STARTED.md).

1. Make sure you have [Docker](https://www.docker.com/), a recent [docker-compose](https://docs.docker.com/compose/install/#install-compose) (which supports v3 configs) installed:

```sh
$ docker version
Docker version 18.09.1-ce
$ docker-compose -v                                                                                                                                              
docker-compose version 1.23.2
...
```

### Flavours 

CommonsPub comes in different flavours, which are made up of a combination of extensions and probably some custom branding. Each flavour has its own branch in the [CommonsPub repo](https://gitlab.com/CommonsPub/Server) regularly merged back-and-forth with its own repository.

- `flavour/commonspub` - Contains the generic flavour of [CommonsPub](http://commonspub.org) (currently packaged with all extensions except for `extension/valueflows`). 
- `flavour/moodlenet` - The original [MoodleNet](https://gitlab.com/moodlenet/frontend) flavour. 
- `flavour/zenpub` - WIP [ZenPub](https://github.com/dyne/zenpub-client) flavour (with all extensions), which will use [ZenRoom](https://zenroom.org/) for public key signing and end-to-end encryption.

### Extensions

New functionality should be developed in seperate namespaces in order to make the software more modular (there are future plans for a plugin system). Each "extension" has its own branch in the [CommonsPub repo](https://gitlab.com/CommonsPub/Client). Here are some examples of extensions:

- `extension/valueflows` - WIP implementation of the [ValueFlows](https://valueflo.ws/) economic vocabulary, to power distributed economic networks for the next economy.
- `extension/organisation` - Adds functionality for organisations to maintain a shared profile.
- `extension/taxonomy` - WIP to enable user-maintained taxonomies and tagging objects with tree-based categories. 
- `extension/measurement` - Various units and measures for indicating amounts (incl duration).
- `extension/locales` - Extensive schema of languages/countries/etc. The data is also open and shall be made available oustide the repo.
- `extension/geolocation` - Shared 'spatial things' database for tagging objects with a location.

### Commit & merge workflow

Please commit your work to the appropriate extension branches (and your WIP to new feature/fix branches as needed). 

Avoid commiting directly to `flavour/commonspub` or any of the flavours. 

#### Merging completed work

If you made changes to an extension used by a flavour, merge it into the appropriate flavour branche(s).

If you made changes to core functionality (outside of any extension), merge those (and only those) into `flavour/moodlenet`.

#### Please **avoid mixing flavours!** 

For example, DO NOT merge from `flavour/commonspub`-->`flavour/moodlenet`. 

The only exception to this rule being that we DO merge changes from `flavour/moodlenet`-->`flavour/commonspub` since upstream MoodleNet development is still happening directly in core modules.

#### Merging with upstream 

Regularly merge-request changes from `flavour/moodlenet` to [MoodleNet](https://gitlab.com/moodlenet/backend)'s `develop` branch.

Regularly merge changes from [MoodleNet](https://gitlab.com/moodlenet/backend)'s `develop` branch to `flavour/moodlenet`.

---

We need to set some environment variables in order for MoodleNet to function, a list of which can be found in these files:
- `.env` 
	- If you have a domain configured to point to your server, replace every instance of 'localhost' with 'your-domain-here.tld' and those of 'http:' with 'https:'  (the 's' is critical)
	- **If you want to connect your instance with the MoodleNet "mothership" for indexing public content, search, and discovery**, and you agree with the [Terms for Instance Administrators](https://moodle.net/terms/admins/index.html), set CONNECT_WITH_MOTHERSHIP to true, otherwise set it to false. You should then email moodlenet-moderators@moodle.com to request an API key. 
- `.env.secrets.example` (which you must copy to `.env.secrets`)
	- set each password and secret with something random and secure
	- MAIL_DOMAIN and MAIL_KEY are needed to configure transactional email, sign up at [Mailgun](https://www.mailgun.com/) and then configure the domain name and key 


4. Once configured, build the docker image:

```
$ docker-compose build
```

Or if you're building on a Raspberry Pi:
```
$ docker-compose -f docker-compose.pi.yml build
```

5. Try it out 

a) run the backend in console mode: `docker-compose run --rm backend bin/moodle_net start_iex`

b) if you're in invite-only mode, add your email to the allowlist in order to be able to sign up: `MoodleNet.Access.create_register_email("myemail@domain.com")` and then exit (Ctrl+C and then `abort`)

c) Start the docker containers with docker-compose:

```sh
$ docker-compose up
```

Or if you're running on a Raspberry Pi:
```
$ docker-compose -f docker-compose.pi.yml up
```

6. The MoodleNet backend and frontend should now be running at [http://localhost/](http://localhost/) on your machine and at https://your-domain-name.tld/ with SSL certificates automatically configured thanks to letsencrypt.org (if your domain was correctly configured).

Once you've signed up, you may want to make yourself an instance admin, by running this in the backend console (see above): `MoodleNet.ReleaseTasks.make_instance_admin("your_username")`

7. If that worked, start the app as a daemon next time:
```sh
$ docker-compose up -d
```

Or if you're running on a Raspberry Pi:
```
$ docker-compose -f docker-compose.pi.yml up -d
```


## Structure

### High level folder structure:

| Folder | Description |
|------|---|
| `/build` | the output directory containing static assets & application files |
| `/config` | contains all configuration for the build tooling, i.e. webpack |
| `/public` | files that will be copied into the `build` folder |
| `/scripts` | "run" files should be invoked via their respective `yarn` command |
| `/src` | the application source | 

### Application source folder structure:

**Please note that the project is undergoing some refactoring, and some of these may be changing...**

| Folder | Description |
|------|---|
| `/src/apollo` | all (react-)apollo boilerplate, type definitions, and resolvers |
| `/src/components` | all react components are stored here which are reusable, organised by type |
| `/src/containers` | high-level react container components which handle routing, state, and localisation set-up |
| `/src/graphql` | contains queries & (local state) mutation grapql query definitions |
| `/src/locales` | locale folders define the available locales (managed by linguijs) and each contains its locale's language data |
| `/src/pages` | user-facing application pages which are used in routing in the App container |
| `/src/static` | static assets such as images that are used within the application code (for example, images can be `require`'d with webpack) |
| `/src/styleguide` | contains files pertaining to react-styleguidist, such as a Wrapper component used to display all components in the styleguide within the Zen Garden theme provider |
| `/src/styles` | css files go in here, for styles that are not component-specific (i.e. not generated with `styled-component`) or for which a library relies on (e.g. flag icons) |
| `/src/themes` | the application Zen Garden theme set configuration and own theme files, with the `default.theme.ts` being the MoodleNet theme |
| `/src/types` | application typescript types, enums, & interfaces |
| `/src/util` | application utility functions |

## Development Scripts

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.
You will also see any lint errors in the console.

### `yarn add-locale`

Adds a locale for localisation, with [lingui library](https://lingui.js.org/ref/react.html).<br>

### `yarn extract`

Extracts new/updated strings from the codebase into JSON files for localisation (they need to be encapsulated with [lingui library](https://lingui.js.org/ref/react.html)'s <Trans>).<br>

### `yarn compile`

Compiles localisation files for production.<br>

### `yarn build`

Builds the app for production to the `build` folder.<br>
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br>

## Libraries

This section mentions notable libraries and tools used within the application and provides links to their documentation.

- React, UI framework (https://reactjs.org/docs/getting-started.html)
- TypeScript, programming language (https://www.typescriptlang.org)
- webpack, build tool (https://webpack.js.org)
- React Apollo, GraphQL client (https://www.apollographql.com/docs/react/)
- Phoenix.js, Phoenix channels JS client (https://hexdocs.pm/phoenix/js/index.html)

### Browser testing

We're using [BrowserStack](https://www.browserstack.com/open-source) for testing the front-end in various browsers.
![BrowserStack](docs/assets/images/Browserstack-logo.svg)

## Localisation

[LinguiJS](https://lingui.js.org/) is the localisation library used for i18n.

### Set up

- LinguiJS is configured in the `.linguirc` file in the root of the application.

- It comes with a provider component that sets up i18n within the application and makes components
within the app able to consume the language strings of the user's chosen locale. The provider
is configured in the App container (`src/containers/App/App.tsx`).

- The app uses React 16 Context to manage the chosen locale and maintain a state around this.
The context (state) is also set up and handled within the aforementioned App container.

- Any component can "consume" the locale context by using the `LocaleContext` exported from the App 
container. This allows any component to access the API for changing the active locale. For example, 
the LanguageSelect component (`/src/components/inputs/LanguageSelect/LanguageSelect.tsx`) is wrapped
in the `LocaleContext.Consumer` component, giving it the `setLocale` function:

    ```jsx
      <LocaleContext.Consumer>
        {({ setLocale }) => (
          //...
        )})
      </LocaleContext.Consumer>
    ```

### Usage

Wherever you write visible text, i.e. anything user-facing, the copy should be written using the LinguiJS
components. The text used within the LinguiJS components can then be extracted using the CLI operations
provided by the library, which are detailed in the [Scripts](#scripts) section of this document.

Examples of using the LinguiJS library are given below.

#### Simple language strings

- First import the [`Trans` component](https://lingui.js.org/ref/react.html#trans):

    ```js
    import { Trans } from '@lingui/macro';
    ````
    
- _Note:_ the `Trans` component is imported from the `macro` package, not the `react` package! 

- Then consume the `Trans` component wherever text is used, like so:

    ```jsx
    <Trans>Sign in using your social media account</Trans>
    ```

#### Language strings as reference

- Import the [`i18nMark` function](https://lingui.js.org/ref/react.html#i18nmark).

    ```js
    import { i18nMark } from '@lingui/react';
    ```

- Define the language string however you like. It is usually the case that a file will contain more than one 
language string accessed via reference, in this case organise the strings within an object with properties
that describe their purpose. For example, from the Login page:

    ```js
    const tt = {
      //...
      validation: {
        email: i18nMark('The email field cannot be empty'),
        //...
      }
    }
    ````
    
- _Note:_ the `validation.email` string is wrapped in a call to `i18nMark`. As the string is not passed to (as props
or directly as children) to the `Trans` component it will not be picked up automatically by the LinguiJS extract
script. In order to "mark" the string as a language string to be included in the compiled language files we must
wrap it in a call to `i18nMark`.  

- Then consume the strings. Again, for example, from the Login page:
    
    ```jsx
    validation.push({
      field: ValidationField.email,
      type: ValidationType.error,
      message: tt.validation.email // <- notice the string reference here
    } as ValidationObject);
    ```
    
#### Plural language strings

LinguiJS has a `Plural` component, which is like the `Trans` component but used where the 
language contains pluralization.

> <Plural> component handles pluralization of words or phrases. 
> Selected plural form depends on active language and value props.

The LinguiJS documentation is very comprehensive and should be referred to for usage of the `Plural` component:

https://lingui.js.org/ref/react.html#plural

#### Interpolated language string

It is very common to interpolate values into language strings. This can be done using the `Trans` and `Plural` 
components, where the interpolated string names are denoted with curly braces (but still within the actual string) 
and the component is given a key/value hash via a `values` prop, where a key of the hash is the name of a string
to be interpolated. For example, from the Login page:

```jsx
<Trans
  id="You don't need an account to browse {site_name}."
  values={{ site_name: 'MoodleNet' }}
/>
```

It is possible then to have `site_name` or any other interpolated string value produced dynamically and inserted
during runtime. If interpolated values also require localisation then you would use a language string hash,
as above in [Language strings as reference](#language-strings-as-reference), making sure to use the `i18nMark`
function to mark them for extraction by the LinguiJS CLI.     

### Updating language files

Whenever updates are made to any language within the application you must run the LinguiJS `extract` script.
This will pull out all the language strings and add or update them in the specific locale messages files, which
live in `locales`.

All changes to the language within the application, including changes to the files within `locales`, should
be committed alongside other changes.    

## Dependencies

**Please note that the project is undergoing some refactoring, and some of these may be changing...**

| Development Only | Package | Description |
|---|------|---|
| | `@absinthe/*` | the JS Absinthe toolkit used to interface with the Elixir Phoenix backend with GraphQL |
| X | `@babel/*` | compiles down ESNext syntax and functionality & includes runtime polyfills |
| | `@fortawesome/*` | a collection of react components and pre-packaged FontAwesome icon SVGs |
| | `@jumpn/utils-graphql` | a collection of utilities used to interrogate GraphQL links, such as is it a subscription, which determines what channel to communicate on (WebSocket if yes, HTTP if no) |
| | `@lingui/*` | lib for localisation of react applications, includes scripts for parsing the app code and pulling out language into locale files (which lives in `/locales/`), and react components such as localisation provider which sets up the react tree to get the correct language data depending on chosen locale | 
| | `@types/*` | the `@types` package namespace contains type definitions for some of packages we use, as TypeScript is opt-in an they are not included by default in some packages |
| | `apollo-cache-inmemory` | standalone cache for apollo, it caches responses from the graphql backend |
| | `apollo-client` | a client for graphql |
| | `apollo-link-context` | allows setting the _context_ of apollo operations, used for example to set the Auth Bearer token in HTTP request headers |
| | `apollo-link-http` | allows the application to make graphql requests over HTTP |
| | `apollo-link-logger` | logs apollo operations as they happen, used in development for debugging apollo queries |
| | `apollo-link-retry` | allows apollo to automatically retry failed requests to the graphql backend |
| | `apollo-link-state` | like Redux but is queryable through graphql queries |
|X| `autoprefixer` | used to automatically apply vendor prefixes to styles output by webpack (via postcss) |
|X| `awesome-typescript-loader` | a webpack loader that compiles TypeScript files |
|X| `babel-core` | this is necessary even though we have `@babel/core` because some older libs depend on it (it is actually just the "bridge" which is installed) |
|X| `babel-plugin-async-import` | allows Babel to compile the async import syntax (`import()`) |
|X| `babel-plugin-macros` | allows us to use Babel macros, such as the one included with `linguijs` that pulls out language data to create the locales
|X| `case-sensitive-paths-webpack-plugin` | see `webpack.config.dev.js` |
|X| `chalk` | used to create colour in terminal logs using ascii escape codes |
|X| `cross-env` | allows us to apply environment variables in yarn scripts that run across all platforms |
|X| `css-loader` | allows webpack to process CSS files |
| | `dotenv` | loads and processes `.env` files and applies contents to the environment (`process.env`) |
| | `dotenv-expand`  | allows interpolation of environment variables within the `.env` files themselves |
|X| `eslint` | used for linting application code |
|X| `eslint-config-react-app` | an ESLint config that CRA applications come bundles with |
|X| `eslint-loader` | allows webpack to run application files through ESLint |
|X| `file-loader` | allows webpack to copy files into the build directory |
| | `flag-icon-css` | used to generate flag icons |
|X| `fs-extra` | a better FS lib that comes with extra filesystem operations and is promisied |
| | `graphql` | the JS implementation of graphql, used by other graphql libs |
| | `graphql-tag` | a template literal tag that processes graphql query strings into their object representations |
|X| `html-webpack-plugin` | used in webpack to produce an `index.html` file, that includes script and style tags for all application stuff that is generated via webpack |
|X| `husky` | used by `lint-staged` to configure git hooks |
|X| `interpolate-html-plugin` | see `webpack.config.dev.js` |
|X| `lint-staged` | used to lint staged code before it is committed |
|X| `mini-css-extract-plugin` | pulls out CSS styles from application bundles into their own stylesheet files |
| | `object-assign` | `Object.assign` polyfill for older browsers (<=IE8) |
| | `phoenix` | JavaScript toolkit for interfacing with an Elixir Phoenix backend |
|X| `postcss-flexbugs-fixes` | fixes flexbox issues to make flexbox use cross-browser compatible |
|X| `postcss-loader` | allows webpack to make use of the postcss toolkit and plugin ecosystem |
|X| `prettier` | code formatter that automatically fixes linting problems and keeps the code looking according to a default code style |
| | `promise` | simple implementation of promises |
|X| `raf` | requestAnimationFrame polyfill for node and the browser |
| | `react` | used to build the user-interface of the application |
| | `react-apollo` | react components for connecting apollo and react, e.g. a provider that gives all components a context with which to make request to graphql backend |
| | `react-click-outside` | HOC used for catching clicks outside of a component, for example in order to close a menu when the user clicks off the menu |
|X| `react-dev-utils` | webpack utilities used by CRA |
|X| `react-docgen-typescript` | used by `react-styleguidist` to generate propType docs for react components from TypeScript prop definitions |
| | `react-dom` | react lib to render react trees into the browser's DOM |
| | `react-loadable` | makes loading components async and code-splitting easy in react-land |
| | `react-router-dom` | react router DOM-specific renderer |
|X| `react-styleguidist` | used to produce and display a styleguide for the application components |
| | `recompose` | utilities for react, such as HOC compose function to make multiple HOCs more readable |
|X| `style-loader` | webpack loader used in development to insert CSS as style tags |
| | `styled-components` | used to write CSS-in-JS |
|X| `sw-precache-webpack-plugin` | produces a service worker for the application via webpack that caches application files and makes the web app load offline |
|X| `terser-webpack-plugin` | minifier for webpack |
| | `time-ago` | produces readable strings for how long ago something happened from a timestamp, e.g. "5 minutes ago" |
| | `tslib` | TypeScript runtime |
| | `typescript` | TypeScript |
|X| `url-loader` | allows webpack to inline files (e.g. images) into base64 strings if they are below a certain byte limit |
|X| `webpack` | application build tool, bundles the application into compiled and servable files |
|X| `webpack-dev-server` | used to create a development server that reacts to changes in app files and serves them on-the-fly |
|X| `webpack-manifest-plugin` | see `webpack.config.dev.js` |
| | `whatwg-fetch` | `window.fetch` polyfill |