import React from 'react';

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