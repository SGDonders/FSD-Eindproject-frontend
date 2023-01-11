import React from 'react';
import './ProductTile.css';
import Button from "../button/Button";

const ProductTile = ({ productName, backgroundImage, price, children, className }) => (
    <div
        style={{ backgroundImage: `url(${backgroundImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center'}}
        className={className}>
        <h1 id="tiles-title">{productName}</h1>
        <p id="tiles-text">{price}</p>
        <Button
        children={children}
        />
    </div>
);

export default ProductTile;