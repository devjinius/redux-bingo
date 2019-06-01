import React, { Component } from 'react';
import { connect } from 'react-redux';

import Bingo from './Bingo';
import { Complete } from '../components/Complete';

import './GameContainer.css';

const getBingo = playerArray => {
  const row = [];

  return playerArray.reduce((acc, cur, i) => {
    if (i % 5 === 4) {
      row.push(cur);
      acc = [...acc, [...row]];
      row.length = 0;
      return acc;
    }

    row.push(cur);
    return acc;
  }, []);
};

const getPlayerArea = rawBingos => {
  return Object.entries(rawBingos).map(e => {
    const [player, array] = e;
    return (
      <div className="playArea" key={player}>
        <h2>{player}</h2>
        <Bingo player={player} bingo={getBingo(array)} />
        <Complete />
      </div>
    );
  });
};

const GameContainer = ({ rawBingos }) => {
  const bingos = getPlayerArea(rawBingos);

  return <div className="bingoBoard">{bingos}</div>;
};

const mapStateToProps = state => {
  const { rawBingos } = state;
  return {
    rawBingos
  };
};

export default connect(
  mapStateToProps,
  null
)(GameContainer);
