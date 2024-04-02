import React from "react";

const Counter = ({ value, onIncrement, onDecrement, setCounter, name }) => {
  return (
    <>
      <div
        className="text-center rounded text-dark row m-0"
        style={{ height: "25px" }}
      >
        <div
          onClick={onDecrement}
          className="col backgroundColor-2 rounded-left
                    text-light cursor-pointer h-100
                    d-flex align-items-center justify-content-center px-1"
        >
          -
        </div>

        <div
          className="col backgroundColor-1  h-100
          d-flex align-items-center justify-content-center px-1"
        >
          <input
            name={name}
            value={value}
            className="h-100 w-100 border-0 bg-transparent outline-none"
            readOnly
          />
        </div>
        
        <div
          onClick={onIncrement}
          className="col backgroundColor-2 rounded-right
                text-light cursor-pointer h-100
                d-flex align-items-center justify-content-center px-1"
        >
          +
        </div>
      </div>

      <div className="d-flex justify-content-between align-items-center pt-1" >
        <div
          className="py-0 border rounded cursor-pointer green-hover padding-x 
          d-flex justify-content-center align-items-center"
          onClick={() => setCounter(1)}
          style={{height:'19px'}}
        >
          1
        </div>
        <div
          className="py-0 border rounded cursor-pointer green-hover padding-x
           d-flex justify-content-center align-items-center"
          onClick={() => setCounter(2)}
          style={{height:'19px'}}
        >
          2
        </div>
        <div
          className="py-0 border rounded cursor-pointer green-hover padding-x 
          d-flex justify-content-center align-items-center"
          onClick={() => setCounter(3)}
          style={{height:'19px'}}
        >
          3
        </div>
        <div
          className="py-0 border rounded cursor-pointer green-hover padding-x 
          d-flex justify-content-center align-items-center"
          onClick={() => setCounter(4)}
          style={{height:'19px'}}
        >
          4
        </div>
      </div>
    </>
  );
};
export default Counter;
