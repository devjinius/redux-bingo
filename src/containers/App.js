import React from 'react';

import BingoContainer from './GameContainer';
import { Button } from '../components/Button';
import './App.css';

import { connect } from 'react-redux';
import { actionCreators as actions } from '../reducer';
import { getRandomArray } from '../util';

const getBingo = array => {
  const row = [];

  return array.reduce((acc, cur, i) => {
    if (i % 5 === 4) {
      row.push({ value: cur, checked: false });
      acc = [...acc, [...row]];
      row.length = 0;
      return acc;
    }

    row.push({ value: cur, checked: false });
    return acc;
  }, []);
};

const App = props => {
  const { isPlaying } = props;

  const startHandler = () => {
    const { onStartGame, loadBingo } = props;
    onStartGame();

    const p1Bingo = getBingo(getRandomArray());
    const p2Bingo = getBingo(getRandomArray());

    loadBingo(p1Bingo, p2Bingo);
  };

  return (
    <>
      <header>
        <h1>Hello, This is Bingo</h1>
        <Button clickHandler={startHandler} playingStatus={isPlaying} />
      </header>

      <BingoContainer />
    </>
  );
};

const mapStateToProps = state => {
  const { isPlaying } = state;
  return {
    isPlaying
  };
};

const mapToDispatch = dispatch => ({
  onStartGame: () => dispatch(actions.startGame()),
  loadBingo: (p1Nums, p2Nums) => dispatch(actions.loadBingo(p1Nums, p2Nums))
});

export default connect(
  mapStateToProps,
  mapToDispatch
)(App);
