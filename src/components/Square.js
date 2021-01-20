import React from "react";

const Square = ({ index, value, onClick }) => {
  return (
    <button className="button-1" onClick={() => onClick(index)}>
      {value}
    </button>
  );
};

export default Square;
