import React from 'react';
import {
  RecoilRoot,
  atom,
  selector
} from 'recoil';
import './App.css';
import AppWrapper from './Components/AppWrapper';

export const userProfile = atom({
  key: 'userProfile',
  default: null
})

export const usersFavGenres = selector({
  key: 'usersFavGenres',
  get: ({ get }) => {
    const genres = get(userProfile);

    return genres[0].favGenres
  }
})

console.log(userProfile)

function App() {
  return (
    <div className="App" style={{ backgroundColor: "#a8e3cc", height: "100%" }}>
      <RecoilRoot>
        <AppWrapper />
      </RecoilRoot>
    </div>
  );
}

export default App;
