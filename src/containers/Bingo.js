import React, { Component } from 'react';

import { connect } from 'react-redux';
import { actionCreators as actions } from '../reducer';

import { Cell } from '../components/Cell';
import './Bingo.css';

class Bingo extends Component {
  async handleSelect(player, num) {
    const { isPlaying, turn, selectNum } = this.props;

    if (!isPlaying) {
      alert('게임 시작을 눌러주세요!');
      return;
    }

    if (player !== turn) {
      alert('잘못된 차례입니다');
      return;
    }

    await selectNum(num);

    const { winner } = this.props;
    if (winner !== '') {
      if (winner === '무승부') {
        alert('무승부입니다');
      } else {
        alert(`${winner}가 빙고를 완성했습니다.`);
      }

      this.props.restartGame();
    }
  }

  render() {
    const { player, bingo } = this.props;

    return (
      <table className="bingo">
        <tbody>
          {bingo.map((row, i) => {
            return (
              <tr key={i}>
                {row.map((cell, j) => (
                  <td key={j} onClick={e => this.handleSelect(player, cell.value)}>
                    <Cell value={cell.value} isChecked={cell.checked} />
                  </td>
                ))}
              </tr>
            );
          })}
        </tbody>
      </table>
    );
  }
}

const mapStateToProps = state => {
  const { isPlaying, turn, winner } = state;
  return {
    isPlaying,
    turn,
    winner
  };
};

const mapDispatchToProps = dispatch => {
  return {
    restartGame: () => dispatch(actions.restartGame()),
    selectNum: num => dispatch(actions.selectNum(num))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Bingo);
