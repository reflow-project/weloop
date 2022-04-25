# WeLoop

**WeLoop is a React/TypeScript client for BonFire (formerly ZenPub) and a key component of ReflowOS**

![Deployment](https://github.com/reflow-project/weloop/workflows/Deployment/badge.svg)

## About the project

This app is based on [CommonsPub](http://commonspub.org), a project to create a generic federated server, based on the `ActivityPub` and `ActivityStreams` web standards and originally developed as part of [moodle.net](https://moodle.net/).

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

## Development Environment

In the project directory, you can run:

### Before you start

We recommend using `nvm` to ensure you are running the right [node](https://nodejs.org/en/) version specified in `.nvmrc`. Install `nvm` [here](https://github.com/nvm-sh/nvm#install--update-script). 

Then run `nvm use` every time before `yarn` to ensure you are using the right version.

You might also need to install `yarn` the first time by doing `npm install --global yarn`.

### Customize your instance

Before we start we need to create an `.env` file pointing to the REFLOW OS GraphQL API:
Example part of an `.env` file (see `.env.example` for the whole file):

```
REACT_APP_GRAPHQL_ENDPOINT=https://api.reflowproject.eu/api/graphql
```

We also need to add the app root end-point for the sign up email confirmation to work

```
REACT_APP_FRONTEND_HOSTNAME=https://your-weloop-instance.org
```

### `nvm use`

Sets the right node version.

### `yarn`

Installs the app dependencies. 

### `yarn start`

Runs the app in the development mode.

Open [http://localhost:4000](http://localhost:4000) to view it in the browser.

The page will reload if you make edits. You will also see any lint errors in the console.

### `yarn add-locale`

Adds a locale for localisation, with [lingui library](https://lingui.js.org/ref/react.html).

### `yarn extract`

Extracts new/updated strings from the codebase into JSON files for localisation (they need to be encapsulated with [lingui library](https://lingui.js.org/ref/react.html)'s <Trans>).

### `yarn compile`

Compiles localisation files for production.

### `yarn build`

Builds the app for production to the `build` folder.
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.

## Production deployment

Complete deployment of the full bundle will be described as part of the overall Reflow OS installation guide:

### Self-hosted

Manually use yarn build to generate the `./build` folder including the index.html file and all the static dependencies. Host the resulting website on any static web server such as NGINX or Apache Web Server. 

### Github Pages

WeLoop main repository uses **Github Actions** to automatically deploy the repository default branch as a public website using **Github Pages** every time changes are pushed. Anyone can **fork** the existing repository and deploy their own version quickly. Custom domains are defined via a `./build/CNAME` following the standard Github pages workflow. Two **Github Secrets** can be defined to customize the app `REACT_APP_GRAPHQL_ENDPOINT` and `REACT_APP_SENTRY_API_KEY`. Learn more about them in the Customize your instance basic settings and Remote monitorings sections.

## Remote monitoring

WeLoop integrates with Sentry, a cross-platform application monitoring. It allows you to remotely detect JavaScript performance issues before they become downtime. Sentry is fully open source and instances can be locally deployed together with the other Reflow OS tools. 

Sentry can also be used as a SAAS from [sentry.io](https://sentry.io/) without any installation required. To use it you need to provide a valid **Sentry Key** in your `.env` file under `REACT_APP_SENTRY_API_KEY. When deploying via Github Pages that can be set via  **Github Secrets**.

## Libraries

This section mentions notable libraries and tools used within the application and provides links to their documentation.

- React, UI framework (https://reactjs.org/docs/getting-started.html)
- TypeScript, programming language (https://www.typescriptlang.org)
- webpack, build tool (https://webpack.js.org)
- React Apollo, GraphQL client (https://www.apollographql.com/docs/react/)
- Phoenix.js, Phoenix channels JS client (https://hexdocs.pm/phoenix/js/index.html)

## Browser testing

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
  values={{ site_name: 'Weloop' }}
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

### Licensing


The present software is released under a copyleft license (GNU Affero General Public License v3.0) to promote use, customization and contribution inside and outside the consortium. The license conditions developers to make available the complete source code and any modifications. It fosters an open ecosystem and protects rights users
by granting them access to the source code.
