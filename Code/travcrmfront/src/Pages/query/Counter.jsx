import React, { useState } from 'react';

const Counter = () =>{
    const [value, setValue] = useState(0);
    const handleDecrement = () =>{
        if(value>0){
            setValue(value-1)
        }
    }
    const handleIncrement = () =>{
        setValue(value+1)
    }
    return(
        <>
            <div
            className='text-center backgroundColor-1 py-1 rounded text-dark'
            >
                <span className='px-1 bg-light rounded'><i className="fa-solid fa-minus font-weight-bold cursor-pointer"
                onClick={handleDecrement}></i></span>
                <span className='fs-6 px-1 font-weight-bold'>{value}</span>
                <span className='px-1 bg-light rounded'><i className="fa-solid fa-plus font-weight-bold cursor-pointer" 
                onClick={handleIncrement}></i></span>
            </div>
        </>
    )
};
export default Counter;
