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

            {/* <div className="input-group bootstrap-touchspin">
                <span className="input-group-btn">
                    <button className="btn btn-success bootstrap-touchspin-down" type="button" onClick={handleDecrement}><i className="icon-dash"></i></button>
                </span>
                <span className="input-group-addon bootstrap-touchspin-prefix" style={{display: "none"}}></span>
                <input type="text" value={value} className="touchspin-empty form-control fs-6 px-1 font-weight-bold" style={{display: "block",textAlign:"center"}} />
                <span className="input-group-addon bootstrap-touchspin-postfix" style={{display: "none"}}></span>
                <span className="input-group-btn">
                    <button className="btn btn-success bootstrap-touchspin-up" type="button" onClick={handleIncrement}><i className="icon-plus2"></i></button>
                </span>
                </div> */}
            <div>
                <span className='px-1 bg-warning rounded cursor-pointer' onClick={()=> setValue(1)}>1</span>&nbsp;
                <span className='px-1 bg-warning rounded cursor-pointer' onClick={()=> setValue(2)}>2</span>&nbsp;
                <span className='px-1 bg-warning rounded cursor-pointer' onClick={()=> setValue(3)}>3</span>&nbsp;
                <span className='px-1 bg-warning rounded cursor-pointer' onClick={()=> setValue(4)}>4</span>&nbsp;
            </div>
        </>
    )
};
export default Counter;
