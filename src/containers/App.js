import React from 'react';

import BingoContainer from './GameContainer';
import { Button } from '../components/Button';
import './App.css';

function App() {
  return (
    <>
      <header>
        <h1>Hello, This is Bingo</h1>
        <Button />
      </header>

      <BingoContainer />
    </>
  );
}

export default App;
