import React from 'react';

import './Button.css';

// Button component that renders a button element with text, children, and a click handler function.

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