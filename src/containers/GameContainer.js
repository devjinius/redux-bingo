import React from 'react';
import { connect } from 'react-redux';

import Bingo from './Bingo';
import { Complete } from '../components/Complete';

import './GameContainer.css';

const getPlayerArea = bingoBoard => {
  return Object.entries(bingoBoard).map(e => {
    const [player, array] = e;
    return (
      <div className="playArea" key={player}>
        <h2>{player}</h2>
        <Bingo player={player} bingo={array} />
        <Complete />
      </div>
    );
  });
};

const GameContainer = ({ bingoBoard }) => {
  const bingos = getPlayerArea(bingoBoard);

  return <div className="bingoBoard">{bingos}</div>;
};

const mapStateToProps = state => {
  const { bingoBoard } = state;
  return {
    bingoBoard
  };
};

export default connect(
  mapStateToProps,
  null
)(GameContainer);
