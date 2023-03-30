import React from 'react';

import './Footer.css';

// Footer component that displays the footer of the web page, including a message and the current year.
const Footer = () => {
    const year = new Date().getFullYear();

    return (
        <footer>
            <p>In opdracht van Novi hogeschool</p>
            <p>@{year}</p>
        </footer>
    );
};

export default Footer;