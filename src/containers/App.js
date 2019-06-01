import React, { Component } from 'react';

import BingoContainer from './GameContainer';
import { Button } from '../components/Button';
import './App.css';

import { connect } from 'react-redux';
import { actionCreators as actions } from '../reducer';
import { getRandomArray } from '../util';

class App extends Component {
  render() {
    const { isPlaying } = this.props;

    const startHandler = () => {
      const { onStartGame, loadBingo } = this.props;
      onStartGame();

      const p1Nums = getRandomArray();
      const p2Nums = getRandomArray();

      loadBingo(p1Nums, p2Nums);
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
  }
}

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
