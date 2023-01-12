import React from 'react';
import './ProductTile.css';
import Button from "../button/Button";

const ProductTile = ({ idProductName, idPrice, productName, backgroundImage, price, button, className }) => (
    <div
        className={className}
        style={{ backgroundImage: `url(${backgroundImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center'}}>
        <h1 id={idProductName}>{productName}</h1>
        <p id={idPrice}>{price}</p>
        <Button
        children={button}
        />
    </div>
);

export default ProductTile;