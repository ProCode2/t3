import React, { useState } from "react";
import Board from "./Board";

const Game = () => {
  // to store all the game states
  const [blocks, setBlocks] = useState([Array(9).fill("")]);
  // decide between X and O
  const [xIsNext, setxIsNext] = useState(true);
  const [stepNum, setStepNum] = useState(0);
  const winner = calculateWinner(blocks[stepNum]);

  const value = xIsNext ? "X" : "O";

  // update game state
  const handleClick = (index) => {
    const history = blocks.slice(0, stepNum + 1);
    const current = history[stepNum];
    if (winner || current[index]) return;
    let newArray = [...current];
    newArray[index] = value;

    setBlocks(() => [...history, newArray]);
    setStepNum(history.length);
    setxIsNext(!xIsNext);
  };

  // jump to a game state
  const jumpTo = (step) => {
    setStepNum(step);
    setxIsNext(step % 2 === 0);
  };
  return (
    <div className="container">
      <h1 className="heading">T3 - The Best Tic Tac Toe</h1>
      <Board
        squares={blocks[stepNum]}
        onClick={(index) => handleClick(index)}
      />
      <h1 className="heading">
        {winner ? "Winner: " + winner : "Next Player: " + value}
      </h1>
      <ul>
        {blocks.map((step, move) => (
          <li key={move}>
            <button className="button-2" onClick={() => jumpTo(move)}>
              {move ? "Go to move #" + move : "Go to game start"}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

function calculateWinner(squares) {
  const lines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];
  for (let i = 0; i < lines.length; i++) {
    const [a, b, c] = lines[i];
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      return squares[a];
    }
  }
  return null;
}

export default Game;
