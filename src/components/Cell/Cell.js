import React from 'react';
import './Cell.css';

const isActive = (selecteds, v) => selecteds.includes(v);

const Cell = ({ selecteds, value }) => {
  return <button className={isActive(selecteds, value) ? 'selected cell' : 'cell'}>{value}</button>;
};

export default Cell;
