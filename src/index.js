import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import AWSAppSyncClient from 'aws-appsync';
import { ApolloProvider } from 'react-apollo';
import awsconfiguration from '../APIconfig/awsconfiguration.json';
import gql from 'graphql-tag';

const config = awsconfiguration.AppSync.Default;

const client = new AWSAppSyncClient({
  url: config.ApiUrl,
  region: config.Region,
  auth: {
    type: config.AuthMode,
    apiKey: config.ApiKey,
    // jwtToken: async () => token, // Required when you use Cognito UserPools OR OpenID Connect. token object is obtained previously
  }
});

export const GET_USERS = gql`
query getUsers {
  allUsers{
    firstName,
    lastName,
    favGenres
  }
}
`

client.query({ query: GET_USERS })
  .then(result => console.log(result))

ReactDOM.render(
  <React.StrictMode>
    <ApolloProvider client={client}>
      <App />
    </ApolloProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
