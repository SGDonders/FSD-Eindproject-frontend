import React, {useContext} from 'react';
import {ShopContext} from "../../context/shop-context";

import './product.css'

import Button from "../button/Button";


export const Product = ({data}) => {
    const { id, productName, price, category, image } = data;
    const { addToCart, cartItems } = useContext(ShopContext);
    const cartItemCount = cartItems[id];

    return (

        <>
            <div className="product">
                <span className="productImage">
                    <img
                        src={image.docFile
                        ? `data:image/webp;base64,${image.docFile}`
                        : image
                        }
                        alt="image of product"
                    />
                </span>
                <div className="description">
                    <h2>
                        {productName}
                    </h2>
                    <p> €{price}</p>
                    <p>{category}</p>


                <Button className="add-button" clickhandler={() => addToCart(id)}>
                    Add To Cart {cartItemCount > 0 && <> ({cartItemCount})</>}
                </Button>
                </div>
            </div>
        </>
    );
}

export default Product;







