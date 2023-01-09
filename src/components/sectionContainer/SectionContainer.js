import React from 'react';
import './SectionContainer.css';

const SectionContainer = ({ title, backgroundImage, classname }) => {
    return (
        <header
            className={classname}
            style={{
                backgroundImage: `url(${backgroundImage})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                color: "white",
                fontSize: 22
            }}
        >
            <h1 className="inner-container">{title}</h1>
        </header>
    );
};

export default SectionContainer;
