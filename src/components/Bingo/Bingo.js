import React from 'react';
import './Bingo.css';

const Bingo = ({ bingo }) => {
  return (
    <table className="bingo">
      <tbody>
        {bingo.map(row => {
          return (
            <tr>
              {row.map(v => (
                <td onClick={e => console.log(e)}>{v}</td>
              ))}
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};

export default Bingo;
