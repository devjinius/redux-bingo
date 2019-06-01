import React from 'react';
import { connect } from 'react-redux';

import Bingo from './Bingo';
import { Complete } from '../components/Complete';

import './GameContainer.css';

const getPlayerArea = ({ bingoBoard, bingoList }) => {
  return Object.entries(bingoBoard).map(e => {
    const [player, array] = e;
    return (
      <div className="playArea" key={player}>
        <h2>{player}</h2>
        <Bingo player={player} bingo={array} />
        <Complete bingoList={bingoList[player]} />
      </div>
    );
  });
};

const GameContainer = ({ bingoBoard, bingoList }) => {
  const bingos = getPlayerArea({ bingoBoard, bingoList });

  return <div className="bingoBoard">{bingos}</div>;
};

const mapStateToProps = state => {
  const { bingoBoard, bingoList } = state;
  return {
    bingoBoard,
    bingoList
  };
};

export default connect(
  mapStateToProps,
  null
)(GameContainer);
