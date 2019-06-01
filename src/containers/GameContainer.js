import React from 'react';
import './GameContainer.css';

import { Bingo } from '../components/Bingo';
import { Complete } from '../components/Complete';

const BingoBoard = () => {
  return (
    <div className="bingoBoard">
      <div className="playArea">
        <h2>P1</h2>
        <Bingo />
        <Complete />
      </div>
      <div className="playArea">
        <h2>P2</h2>
        <Bingo />
        <Complete />
      </div>
    </div>
  );
};

BingoBoard.defaultProps = {
  // number: 0,
  // color: 'black',
  // onIncrement: () => console.warn('onIncrement not defined'),
  // onDecrement: () => console.warn('onDecrement not defined'),
  // onSetColor: () => console.warn('onSetColor not defined')
};

export default BingoBoard;
