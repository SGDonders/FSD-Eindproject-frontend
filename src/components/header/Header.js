import React from 'react';
import './Header.css';

const Header = ({ title, backgroundImage, classname }) => {
    return (
        <header
            className={classname}
            style={{
                backgroundImage: `url(${backgroundImage})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                color: "white",
                fontSize: 25
            }}
        >
            <h1 className="inner-container">{title}</h1>
        </header>
    );
};

export default Header;
