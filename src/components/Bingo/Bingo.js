import React from 'react';
import './Bingo.css';

const isActive = (selecteds, v) => selecteds.includes(v);

const Bingo = ({ bingo, onSelect, selecteds }) => {
  return (
    <table className="bingo">
      <tbody>
        {bingo.map((row, i) => {
          return (
            <tr key={i}>
              {row.map((v, i) => (
                <td
                  className={isActive(selecteds, v) ? 'selected' : ''}
                  key={i}
                  onClick={e => onSelect(v)}
                >
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
