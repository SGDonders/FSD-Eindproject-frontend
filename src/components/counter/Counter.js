import './Counter.css'
import React from 'react';

const Counter = ({ type, increment, decrement, isDisabled, className, countValue}) => {

    return (
        <div className={className}>

                <button
                    className="btn"
                    type={type}
                    onClick={decrement}
                    disabled={isDisabled}
                >-
                </button>
                <div id="count-value">{countValue}</div>
                <button
                    className="btn"
                    type={type}
                    onClick={increment}
                >+
                </button>
            </div>
    );
}

export default Counter;