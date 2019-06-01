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
      players: ['player1', 'player2']
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

  render() {
    const bingos = Object.entries(this.props.rawBingos).map(e => {
      const [player, array] = e;
      return (
        <div className="playArea" key={player}>
          <h2>{player}</h2>
          <Bingo bingo={this.getBingo(array)} />
          <Complete />
        </div>
      );
    });

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
