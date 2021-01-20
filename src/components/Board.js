import React from "react";
import Square from "./Square";

const Board = ({ squares, onClick }) => {
  return (
    <div className="grid">
      {squares.map((square, index) => (
        <Square
          key={index}
          index={index}
          value={square}
          onClick={(index) => onClick(index)}
        />
      ))}
    </div>
  );
};

export default Board;
