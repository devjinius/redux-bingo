const START_GAME = 'START_GAME';

function startGame() {
  return {
    type: START_GAME
  };
}

const initialState = {
  isPlaying: false
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
    isPlaying: true
  };
}

const actionCreators = {
  startGame
};

export { actionCreators };
export default reducer;
