import React from 'react';
import './Complete.css';

const Complete = ({ bingoList }) => {
  console.log(bingoList);
  return (
    <div>
      <h4>완료</h4>
      {bingoList.map(bingo => {
        return <div>{bingo}</div>;
      })}
    </div>
  );
};

export default Complete;
