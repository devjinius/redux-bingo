import React, { Component } from 'react';
import { connect } from 'react-redux';
import { actionCreators as actions } from '../reducer';

import { Bingo } from '../components/Bingo';
import { Complete } from '../components/Complete';

import './GameContainer.css';

class GameContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      players: {
        P1: Array.from(Array(25), _ => ''),
        P2: Array.from(Array(25), _ => '')
      }
    };
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

  getPlayerArea(rawBingos) {
    return Object.entries(this.props.rawBingos).map(e => {
      const [player, array] = e;
      return (
        <div className="playArea" key={player}>
          <h2>{player}</h2>
          <Bingo bingo={this.getBingo(array)} />
          <Complete />
        </div>
      );
    });
  }

  render() {
    const bingos = this.getPlayerArea(this.props.rawBingos);

    return <div className="bingoBoard">{bingos}</div>;
  }
}

const mapStateToProps = state => {
  const { isPlaying, rawBingos } = state;
  return {
    isPlaying,
    rawBingos
  };
};

const mapDispatchToProps = dispatch => {
  return {};
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(GameContainer);
