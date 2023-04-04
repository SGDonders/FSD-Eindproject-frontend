import React from 'react';

import './Header.css';

// Header component that displays the header of the web page, including a background image and a title.
const Header = ({ id, title, backgroundImage, classname }) => {
    return (
        <header
            className={classname}
            style={{
                backgroundImage: `url(${backgroundImage})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                color: "white",
                fontSize: 28,

            }}
            id={id}
        >
            <h1 className="inner-container">{title}</h1>
        </header>
    );
};
export default Header;
