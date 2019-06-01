import React, { Component } from 'react';

import BingoContainer from './GameContainer';
import { Button } from '../components/Button';
import './App.css';

import { connect } from 'react-redux';
import { actionCreators as actions } from '../reducer';

class App extends Component {
  render() {
    const { isPlaying, onStartGame } = this.props;

    return (
      <>
        <header>
          <h1>Hello, This is Bingo</h1>
          <Button clickHandler={onStartGame} playingStatus={isPlaying} />
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
  onStartGame: () => dispatch(actions.startGame())
});

export default connect(
  mapStateToProps,
  mapToDispatch
)(App);
