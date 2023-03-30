import React from 'react';

import './ProductTile.css';

import Button from "../button/Button";

// Pproduct tile component, which displays the product name, price, and a button with
// a background image. The component receives various props for customizing the tile's content and behavior.
const ProductTile = ({ idProductName, idPrice, productName, backgroundImage, price, button, className, clickHandler }) => (
    <div
        className={className}
        style={{ backgroundImage: `url(${backgroundImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center'}}>

        <h1 id={idProductName}>{productName}</h1>
        <p id={idPrice}>{price}</p>

        <Button
                children={button}
                clickhandler={clickHandler}
        />
    </div>
);

export default ProductTile;