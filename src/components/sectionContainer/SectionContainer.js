import React from 'react';
import './SectionContainer.css';

const SectionContainer = ({ container, title, backgroundImage, classname, id, txt, rollingText }) => {
    return (
        <div
            className={classname} id={id}
            style={{
                backgroundImage: `url(${backgroundImage})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                color: "blueviolet",
                fontSize: 22

            }}

        >
            <h1 className={container} id={rollingText}>{title}</h1>
            <p >{txt}</p>
        </div>
    );
};

export default SectionContainer;
