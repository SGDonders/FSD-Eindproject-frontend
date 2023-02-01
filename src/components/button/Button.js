import React from 'react';
import './Button.css';


function Button({ text,children, type = 'button', clickhandler, className }) {

    return (
        <button className={className}
                id={text}
                type={type}
                onClick={clickhandler}>

            {children}
        </button>
    );
}

export default Button;