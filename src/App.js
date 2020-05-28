import React from 'react';
import {
  RecoilRoot,
  atom,
  selector
} from 'recoil';
import './App.css';
import AppWrapper from './Components/AppWrapper';

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
