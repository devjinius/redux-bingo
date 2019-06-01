import React from 'react';
import './Cell.css';

const Cell = ({ isChecked, value }) => {
  return <button className={isChecked ? 'selected cell' : 'cell'}>{value}</button>;
};

export default Cell;
