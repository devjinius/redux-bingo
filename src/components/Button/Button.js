import React from 'react';
import './Button.css';

const Button = ({ clickHandler, playingStatus }) => {
  return <button onClick={clickHandler}>{playingStatus ? '게임재시작' : '게임시작'}</button>;
};

export default Button;
