import React from 'react';
import './Bingo.css';

const Bingo = () => {
  return (
    <table className="bingo">
      <tbody>
        {[1, 2, 3, 4, 5].map(v => {
          return (
            <tr>
              <td className="clicked" onClick={e => console.log(e)}>
                {v}
              </td>
              <td>{v}</td>
              <td>{v}</td>
              <td>{v}</td>
              <td>{v}</td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};

export default Bingo;
