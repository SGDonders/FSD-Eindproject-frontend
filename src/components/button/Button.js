import React from 'react';
import './Button.css';


function Button({ text,children, type = 'button', onClick, className }) {

    return (
        <button className={className}
                id={text}
                type={type}
                onClick={onClick}>

            {children}
        </button>
    );
}

export default Button;