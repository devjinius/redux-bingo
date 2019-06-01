import React from 'react';

import BingoContainer from './GameContainer';
import { Button } from '../components/Button';
import './App.css';

import { connect } from 'react-redux';
import { actionCreators as actions } from '../reducer';

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

const mapToDispatch = dispatch => ({
  onStartGame: () => dispatch(actions.startGame())
});

export default connect(
  null,
  mapToDispatch
)(App);
