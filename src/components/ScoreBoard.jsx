import React from 'react';

const ScoreBoard = props => {
  return (
    <table className="ScoreBoard">
      <tbody>
        <tr>
          <th>
            <h3>Player</h3>
          </th>
          <th>
            <h3>Score</h3>
          </th>
        </tr>
        <tr>
          <th>X</th>
          <th>{props.xScore}</th>
        </tr>
        <tr>
          <th>O</th>
          <th>{props.oScore}</th>
        </tr>
      </tbody>
    </table>
  );
};

export default ScoreBoard;
