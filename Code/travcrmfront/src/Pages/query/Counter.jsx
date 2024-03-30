import React, { useEffect, useState } from "react";

const Counter = ({ value, onIncrement, onDecrement, setCounter }) => {

  
  return (
    <>
      <div
        className="text-center rounded text-dark row m-0"
        style={{ height: "30px" }}
      >
        <div
          onClick={onDecrement}
          className="col backgroundColor-2 rounded-left
                    text-light font-weight-bold cursor-pointer h-100
                    d-flex align-items-center justify-content-center"
        >
          -
        </div>

        <div
          className="col backgroundColor-1 font-weight-bold h-100
                d-flex align-items-center justify-content-center"
        >
          {value}
        </div>

        <div
          onClick={onIncrement}
          className="col backgroundColor-2 rounded-right
                text-light font-weight-bold cursor-pointer h-100
                 d-flex align-items-center justify-content-center"
        >
          +
        </div>
      </div>
      <div className="d-flex justify-content-between align-items-center pt-1">
        <span
          className="px-2 border rounded cursor-pointer green-hover"
          onClick={() => setCounter(1)}
        >
          1
        </span>
        <span
          className="px-2 border rounded cursor-pointer green-hover"
          onClick={() => setCounter(2)}
        >
          2
        </span>
        <span
          className="px-2 border rounded cursor-pointer green-hover"
          onClick={() => setCounter(3)}
        >
          3
        </span>
        <span
          className="px-2 border rounded cursor-pointer green-hover"
          onClick={() => setCounter(4)}
        >
          4
        </span>
      </div>
    </>
  );
};
export default Counter;
