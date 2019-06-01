import * as utils from '../util';

const START_GAME = 'START_GAME';
const LOAD_BINGO = 'LOAD_BINGO';

function startGame() {
  return {
    type: START_GAME
  };
}

function loadBingo(p1Nums, p2Nums) {
  return {
    type: LOAD_BINGO,
    p1Nums,
    p2Nums
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
    case LOAD_BINGO:
      return applyLoadBingo(state, action.p1Nums, action.p2Nums);
    default:
      return state;
  }
}

function applyStartGame(state) {
  return {
    ...state,
    isPlaying: true
  };
}

function applyLoadBingo(state, p1Nums, p2Nums) {
  return {
    ...state,
    rawBingos: {
      P1: p1Nums,
      P2: p2Nums
    }
  };
}

const actionCreators = {
  startGame,
  loadBingo
};

export { actionCreators };
export default reducer;
