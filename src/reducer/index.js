import * as utils from '../util';

const START_GAME = 'START_GAME';

function startGame() {
  return {
    type: START_GAME
  };
}

const initialState = {
  isPlaying: false,
  p1Array: Array.from(Array(25), _ => ''),
  p2Array: Array.from(Array(25), _ => '')
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
    p1Array: utils.getRandomArray(),
    p2Array: utils.getRandomArray()
  };
}

const actionCreators = {
  startGame
};

export { actionCreators };
export default reducer;
