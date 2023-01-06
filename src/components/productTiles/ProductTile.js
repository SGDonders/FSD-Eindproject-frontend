import React from 'react';
import './ProductTile.css';
import milk from '../../assets/milk.jpg'
import fruit from '../../assets/peren.jpg'
import vegetable from '../../assets/vegetables.jpg'
import Button from "../button/Button";

const ProductTile = ({ title, backgroundImage, text }) => (
    <div style={{ backgroundImage: `url(${backgroundImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center'}}
         className="Tiles">
        <h1 id="tiles-title">{title}</h1>
        <p id="tiles-text">{text}</p>
        <Button
        children="Click here!"
        />
    </div>
);

const Tiles = () => (
    <div className="product-tiles">
        <ProductTile title="MILK" backgroundImage={milk} text="Text for tile 1" />
        <ProductTile title="VEGETABLES" backgroundImage={vegetable} text="Text for tile 2" />
        <ProductTile title="FRUIT" backgroundImage={fruit} text="Text for tile 3" />

    </div>
);

export default Tiles;