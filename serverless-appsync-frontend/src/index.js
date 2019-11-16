import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { BrowserRouter } from 'react-router-dom';

import AWSAppSyncClient from "aws-appsync";
import { Rehydrated } from 'aws-appsync-react';
import { ApolloProvider } from 'react-apollo';

import Amplify, { Auth } from 'aws-amplify';
import { withAuthenticator } from 'aws-amplify-react';
import awsconfig from './aws-exports';

import App from './App';

Amplify.configure(awsconfig);

const client = new AWSAppSyncClient({
  url: awsconfig.graphqlEndpoint,
  region: awsconfig.region,
  auth: {
    type: awsconfig.authenticationType,
    credentials: async () => {
      let credentials = await Auth.currentCredentials();
      console.log('credentials', credentials);
      return credentials;
    }
  },
  disableOffline: true
});

const AppWithAuth = withAuthenticator(App, true);

const WithProvider = () => (
  <ApolloProvider client={client}>
    <Rehydrated>
      <BrowserRouter>
      <AppWithAuth />
      </BrowserRouter>
    </Rehydrated>
  </ApolloProvider>
);

ReactDOM.render(<WithProvider />, document.getElementById('root'));
