const START_GAME = 'START_GAME';
const LOAD_BINGO = 'LOAD_BINGO';
const SELECT_NUM = 'SELECT_NUM';

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

function selectNum(num) {
  return {
    type: SELECT_NUM,
    num
  };
}

const initialState = {
  isPlaying: false,
  bingoBoard: {
    P1: Array.from(Array(5), () => Array(5).fill({ value: '', checked: false })),
    P2: Array.from(Array(5), () => Array(5).fill({ value: '', checked: false }))
  },
  selecteds: [],
  turn: 'P1'
};

function reducer(state = initialState, action) {
  switch (action.type) {
    case START_GAME:
      return applyStartGame(state);
    case LOAD_BINGO:
      return applyLoadBingo(state, action.p1Nums, action.p2Nums);
    case SELECT_NUM:
      return applySelectNum(state, action.num);
    default:
      return state;
  }
}

function applyStartGame(state) {
  return {
    ...state,
    isPlaying: true,
    selecteds: [],
    turn: 'P1'
  };
}

function applyLoadBingo(state, p1Nums, p2Nums) {
  return {
    ...state,
    bingoBoard: {
      P1: p1Nums,
      P2: p2Nums
    }
  };
}

function applySelectNum(state, num) {
  const nextTurn = state.turn === 'P1' ? 'P2' : 'P1';
  const newBoard = getNewBoard({ ...state.bingoBoard }, num);

  return {
    ...state,
    bingoBoard: newBoard,
    selecteds: [...state.selecteds, num],
    turn: nextTurn
  };
}

const getNewBoard = (newBoard, num) => {
  newBoard.P1.some(row => {
    row.some(col => {
      if (col.value === num) {
        col.checked = true;
        return true;
      }
    });
  });

  newBoard.P2.some(row => {
    row.some(col => {
      if (col.value === num) {
        col.checked = true;
        return true;
      }
    });
  });

  return newBoard;
};

const actionCreators = {
  startGame,
  loadBingo,
  selectNum
};

export { actionCreators };
export default reducer;
