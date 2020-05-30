import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import AWSAppSyncClient from 'aws-appsync';
import { ApolloProvider } from 'react-apollo';
import awsconfiguration from './APIconfig/awsconfiguration.json';

const config = awsconfiguration.AppSync.Default;

const client = new AWSAppSyncClient({
  url: config.ApiUrl,
  region: config.Region,
  auth: {
    type: config.AuthMode,
    apiKey: config.ApiKey,
  }
});

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
