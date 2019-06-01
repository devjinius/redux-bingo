import React, { Component } from 'react';
import { connect } from 'react-redux';
import { actionCreators as actions } from '../reducer';

import { Bingo } from '../components/Bingo';
import { Complete } from '../components/Complete';

import './GameContainer.css';

class GameContainer extends Component {
  constructor(props) {
    super(props);
  }

  getBingo(playerArray) {
    const row = [];

    return playerArray.reduce((acc, cur, i) => {
      if (i % 5 === 4) {
        row.push(cur);
        acc = [...acc, [...row]];
        row.length = 0;
        return acc;
      }

      row.push(cur);
      return acc;
    }, []);
  }

  getPlayerArea() {
    const { selecteds, rawBingos } = this.props;
    const { getBingo, handleSelect } = this;

    return Object.entries(rawBingos).map(e => {
      const [player, array] = e;
      return (
        <div className="playArea" key={player}>
          <h2>{player}</h2>
          <Bingo
            player={player}
            bingo={getBingo(array)}
            onSelect={handleSelect.bind(this)}
            selecteds={selecteds}
          />
          <Complete />
        </div>
      );
    });
  }

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
    const bingos = this.getPlayerArea();

    return <div className="bingoBoard">{bingos}</div>;
  }
}

const mapStateToProps = state => {
  const { isPlaying, rawBingos, selecteds, turn } = state;
  return {
    isPlaying,
    rawBingos,
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
)(GameContainer);
