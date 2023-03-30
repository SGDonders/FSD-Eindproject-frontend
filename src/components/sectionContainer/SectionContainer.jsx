import React from 'react';
import './SectionContainer.css';


// This is a React functional component that represents a section container with a background image and text, which can
// be customized with different CSS classes, IDs, and font sizes.
const SectionContainer = ({ backgroundImage, classname, id, txt }) => {
    return (
        <div
            className={classname} id={id}
            style={{
                backgroundImage: `url(${backgroundImage})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                color: "black",
                fontSize: 22
            }}

        >
            {txt}
        </div>
    );
};

export default SectionContainer;
