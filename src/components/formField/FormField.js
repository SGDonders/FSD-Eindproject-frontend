import React from 'react';

const FormField = (className, clickHandler, firstName,
                    text, name, id) => {
    return (
        <div className={className}>
            <p>
                Voornaam</p>
            <input onChange={clickHandler}
                   value={firstName}
                   type={text}
                   name={name}

            />
        </div>
    );
};
export default FormField;
