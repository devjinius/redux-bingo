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
  bingoList: {
    P1: [],
    P2: []
  },
  turn: 'P1',
  winner: '',
  isComplete: false
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
    bingoList: {
      P1: [],
      P2: []
    },
    isPlaying: true,
    turn: 'P1',
    winner: '',
    isComplete: false
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
  const [newBoard, newBingoList] = getNewList({ ...state.bingoBoard }, { ...state.bingoList }, num);
  const winner = getWinner(newBingoList);
  const isComplete = winner === '' ? false : true;

  return {
    ...state,
    bingoBoard: newBoard,
    bingoList: newBingoList,
    turn: nextTurn,
    winner,
    isComplete
  };
}

const getWinner = newBingoList => {
  if (newBingoList.P1.length >= 5 && newBingoList.P2.length >= 5) {
    return '무승부';
  }

  if (newBingoList.P1.length >= 5) {
    return 'P1';
  }

  if (newBingoList.P2.length >= 5) {
    return 'P2';
  }

  return '';
};

const getBingoList = (newBoard, bingoList, x, y) => {
  let count = 0;

  // 가로
  for (let i = 0; i < 5; i++) {
    if (newBoard[x][i].checked) {
      count += 1;
    }
  }

  if (count === 5) {
    bingoList.push(`가로 : ${x + 1}`);
  }

  // 세로
  count = 0;
  for (let i = 0; i < 5; i++) {
    if (newBoard[i][y].checked) {
      count += 1;
    }
  }

  if (count === 5) {
    bingoList.push(`세로 : ${x + 1}`);
  }

  // 대각선 1
  if (x === y) {
    count = 0;

    for (let i = 0; i < 5; i++) {
      if (newBoard[i][i].checked) count++;
    }

    if (count === 5) {
      bingoList.push(`대각선1`);
    }
  }

  // 대각선 2
  if (x === 4 - y) {
    count = 0;

    for (let i = 0; i < 5; i++) {
      if (newBoard[i][4 - i].checked) count++;
    }

    if (count === 5) {
      bingoList.push(`대각선2`);
    }
  }

  return bingoList;
};

const getNewList = (newBoard, bingoList, num) => {
  newBoard.P1.map((row, i) => {
    row.some((col, j) => {
      if (col.value === num) {
        col.checked = true;
        bingoList.P1 = getBingoList(newBoard.P1, bingoList.P1, i, j);
        return true;
      }
    });
  });

  newBoard.P2.map((row, i) => {
    row.some((col, j) => {
      if (col.value === num) {
        col.checked = true;
        bingoList.P2 = getBingoList(newBoard.P2, bingoList.P2, i, j);
        return true;
      }
    });
  });

  return [newBoard, bingoList];
};

const actionCreators = {
  startGame,
  loadBingo,
  selectNum
};

export { actionCreators };
export default reducer;
