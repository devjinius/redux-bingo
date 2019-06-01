import React from 'react';
import './Bingo.css';

const Bingo = ({ bingo }) => {
  return (
    <table className="bingo">
      <tbody>
        {bingo.map((row, i) => {
          return (
            <tr key={i}>
              {row.map((v, i) => (
                <td key={i} onClick={e => console.log(e)}>
                  {v}
                </td>
              ))}
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};

export default Bingo;
