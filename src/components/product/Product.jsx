import React, {useContext} from 'react';
import {ShopContext} from "../../context/shop-context";

import './product.css'

import Button from "../button/Button";

// Product component that displays product information and allows the user to add the
// product to their cart. The component receives a "data" prop containing the product information, and uses the
// "useContext" hook to access cart-related functions and data. It renders an image, product name, price, category,
// and an "Add to Cart" button that updates the cart count.
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







