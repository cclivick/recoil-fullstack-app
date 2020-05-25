import React from 'react';
import {
  RecoilRoot,
  atom,
  selector,
  useRecoilState,
  useRecoilValue,
} from 'recoil';
import './App.css';
import AppWrapper from './Components/AppWrapper';

export const headerData = atom({
  key: 'headerData',
  default: []
})

function App() {
  return (
    <div className="App">
      <RecoilRoot>
        <AppWrapper />
      </RecoilRoot>
    </div>
  );
}

export default App;
