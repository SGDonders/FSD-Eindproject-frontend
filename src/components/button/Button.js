import React from 'react';
import './Button.css';


function Button({ text,children, type = 'button', onClick }) {

    return (
        <button className="mid-section-buttons"
                id={text}
                type={type}
                onClick={onClick}>

            {children}
        </button>
    );
}

export default Button;