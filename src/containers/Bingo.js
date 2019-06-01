import React, { Component } from 'react';

import { connect } from 'react-redux';
import { actionCreators as actions } from '../reducer';

import { Cell } from '../components/Cell';
import './Bingo.css';

class Bingo extends Component {
  handleSelect(player, num) {
    if (!this.props.isPlaying) {
      alert('게임 시작을 눌러주세요!');
      return;
    }

    if (player !== this.props.turn) {
      alert('잘못된 차례입니다');
      return;
    }
    this.props.selectNum(num);
  }

  render() {
    const { player, bingo, selecteds } = this.props;

    return (
      <table className="bingo">
        <tbody>
          {bingo.map((row, i) => {
            return (
              <tr key={i}>
                {row.map((info, j) => (
                  <td key={j} onClick={e => this.handleSelect(player, info.value)}>
                    <Cell value={info.value} selecteds={selecteds} />
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
  const { isPlaying, selecteds, turn } = state;
  return {
    isPlaying,
    selecteds,
    turn
  };
};

const mapDispatchToProps = dispatch => {
  return {
    selectNum: num => dispatch(actions.selectNum(num))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Bingo);
