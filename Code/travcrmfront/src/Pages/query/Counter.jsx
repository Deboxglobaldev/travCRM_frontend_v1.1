import React, { useEffect, useState } from "react";

const Counter = ({ onChangeCounter }) => {
  const [value, setValue] = useState(0);
  const handleDecrement = () => {
    if (value > 0) {
      setValue(value-1)
      onChangeCounter(value - 1);

    }
  };
  const handleIncrement = () => {
    setValue(value+1)
    onChangeCounter(value + 1);
  };

  return (
    <>
      <div
        className="text-center rounded text-dark row m-0"
        style={{ height: "30px" }}
      >
        <div
          onClick={handleDecrement}
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
          onClick={handleIncrement}
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
          onClick={() => setValue(1)}
        >
          1
        </span>
        <span
          className="px-2 border rounded cursor-pointer green-hover"
          onClick={() => setValue(2)}
        >
          2
        </span>
        <span
          className="px-2 border rounded cursor-pointer green-hover"
          onClick={() => setValue(3)}
        >
          3
        </span>
        <span
          className="px-2 border rounded cursor-pointer green-hover"
          onClick={() => setValue(4)}
        >
          4
        </span>
      </div>
    </>
  );
};
export default Counter;
