import React from 'react';

import './InputField.css';

// InputField component that renders an input field with a label and optional placeholder,
// value, and click handler function.
const InputField = ({className, clickHandler,
                    type, name, children, value, placeholder, id}) => {
    return (
        <label htmlFor={id}>
            <p>{children}</p>
            <input onChange={clickHandler}
                   value={value}
                   type={type}
                   name={name}
                   className={className}
                   placeholder={placeholder}
                   id={id}
            />
        </label>
    );
};
export default InputField;