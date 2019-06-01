import React, { Component } from 'react';
import { connect } from 'react-redux';
import { actionCreators as actions } from '../reducer';

import { Bingo } from '../components/Bingo';
import { Complete } from '../components/Complete';

import './GameContainer.css';
class GameContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {};
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
    return (
      <div className="bingoBoard">
        <div className="playArea">
          <h2>P1</h2>
          <Bingo bingo={this.getBingo(this.props.p1Array)} />
          <Complete />
        </div>
        <div className="playArea">
          <h2>P2</h2>
          <Bingo bingo={this.getBingo(this.props.p2Array)} />
          <Complete />
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  const { isPlaying, p1Array, p2Array } = state;
  return {
    isPlaying,
    p1Array,
    p2Array
  };
};

const mapDispatchToProps = dispatch => {
  return {};
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(GameContainer);
