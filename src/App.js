import './App.css';
import React from 'react';
import { RecoilRoot, atom, selector } from 'recoil';
import AppWrapper from './Components/AppWrapper';
import { ApolloProvider } from '@apollo/react-hooks';
import ApolloClient from 'apollo-boost';
import awsconfiguration from './APIconfig/awsconfiguration.json';

const config = awsconfiguration.AppSync.Default;

const client = new ApolloClient({
  uri: config.ApiUrl,
  headers: {
    "X-Api-Key": config.ApiKey
  }
});

//RECOIL CODE

export const userProfile = atom({
  key: 'userProfile',
  default: null
})

console.log(userProfile)

export const usersFavGenres = selector({
  key: 'usersFavGenres',
  get: ({ get }) => {
    const genres = get(userProfile);

    return genres[0].favGenres
  }
})

console.log(userProfile)

//-------------

function App() {
  return (
    <ApolloProvider client={client}>
            <RecoilRoot>
              <div className="App" style={{ backgroundColor: "#a8e3cc", height: "100%" }}>
                <AppWrapper />
              </div>
            </RecoilRoot>
    </ApolloProvider>
  );
}

export default App;
