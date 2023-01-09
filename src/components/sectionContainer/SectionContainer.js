import React from 'react';
import './SectionContainer.css';

const SectionContainer = ({ title, backgroundImage, classname, txt }) => {
    return (
        <div
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
            <p>{txt}</p>
        </div>
    );
};

export default SectionContainer;
