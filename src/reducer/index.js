import * as utils from '../util';

const START_GAME = 'START_GAME';

function startGame() {
  return {
    type: START_GAME
  };
}

const initialState = {
  isPlaying: false,
  rawBingos: {
    P1: Array.from(Array(25), _ => ''),
    P2: Array.from(Array(25), _ => '')
  }
};

function reducer(state = initialState, action) {
  switch (action.type) {
    case START_GAME:
      return applyStartGame(state);
    default:
      return state;
  }
}

function applyStartGame(state) {
  return {
    ...state,
    isPlaying: true,
    rawBingos: {
      P1: utils.getRandomArray(),
      P2: utils.getRandomArray()
    }
  };
}

const actionCreators = {
  startGame
};

export { actionCreators };
export default reducer;
