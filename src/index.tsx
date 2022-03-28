import * as Sentry from '@sentry/browser';
// import { MngErrorLink } from 'fe/lib/graphql/ctx';
import * as React from 'react';
import { ApolloProvider } from 'react-apollo';
import ReactDOM from 'react-dom';
import { Slide, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { createGlobalStyle } from 'styled-components';
import media from 'styled-media-query';
import getApolloClient from './apollo/client';
import App from './containers/App/App';
import { ProvideContexts } from './context/global';
import * as K from './mn-constants';
import { colors, typography } from './mn-constants';
import registerServiceWorker from './registerServiceWorker';
import { createLocalSessionKVStorage } from './util/keyvaluestore/localSessionStorage';

K.SENTRY_KEY &&
  Sentry.init({
    dsn: K.SENTRY_KEY
  });

run();
async function run() {
  const Global = createGlobalStyle`
      body, html {
          border: 0;
          margin: 0;
          padding: 0;
          width: 100%;
          height: 100%;
          font-family: ${typography.type.primary} !important;
      }

      * {
        box-sizing: border-box;
      }
      input, textarea {
        ::placeholder {
          font-family: ${typography.type.primary} !important;
        }
      }
      h1 {
        font-size: 50px;
      }
      h2 {
        font-size: 30px;
      }
      h3 {
        font-size: 18px;
      }
      p {
        font-size: 18px;
      }

      body {
        background: ${colors.app};
        .ais-SearchBox {
          border-radius: 4px;
          border: ${colors.border}
          height: 34px;
          width: 380px;
          background: ${colors.app}
          input {
            border: none;
            margin: 0 !important; 
            border-radius: 4px;
            text-indent: 30px;
            padding: 0;
            height: 32px;
            background: ${colors.app};
          }
        }
        .ais-InstantSearch__root { 
          display: flex;
        width: 100%;
        }
      }

      .Toastify__toast--success{
        background-color: ${colors.secondary};
      }

      .Toastify__toast-container--top-right{
        top:60px !important;
        ${media.lessThan('480px')` 
          width: 90vw !important;
          margin: 0 auto; 
        `}; 
    }

    input, textarea{
      &:focus::placeholder{
        color: transparent;
      }
    }

    input:focus::-webkit-input-placeholder, textarea:focus::-webkit-input-placeholder { color:transparent; }
    input:focus:-moz-placeholder, textarea:focus:-moz-placeholder { color:transparent; } /* FF 4-18 */
    input:focus::-moz-placeholder, textarea:focus::-moz-placeholder { color:transparent; } /* FF 19+ */
    input:focus:-ms-input-placeholder, textarea:focus:-ms-input-placeholder { color:transparent; } /* IE 10+ */
  `;
  const createLocalKVStore = createLocalSessionKVStorage('local');

  const apolloClient = await getApolloClient({
    localKVStore: createLocalKVStore('APOLLO#'),
    appLinks: []
  });

  const ApolloApp = () => (
    <ApolloProvider client={apolloClient.client}>
      <ProvideContexts>
        <Global />
        <ToastContainer hideProgressBar transition={Slide} autoClose={3000} newestOnTop />
        <App />
      </ProvideContexts>
    </ApolloProvider>
  );

  ReactDOM.render(<ApolloApp />, document.getElementById('root'));

  registerServiceWorker();
}
