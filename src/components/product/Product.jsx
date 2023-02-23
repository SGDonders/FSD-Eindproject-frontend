import './product.css'
import React, {useContext} from 'react';
import {ShopContext} from "../../context/shop-context";
import Button from "../button/Button";

export const Product = ({data}) => {
    const { id, productName, price, productImage, category } = data;
    const { addToCart, cartItems } = useContext(ShopContext);
    // console.log(id)


    const cartItemCount = cartItems[id];

    return (


        <>
            <div className="product">
                <img src={productImage} />
                <div className="description">
                    <h2>
                        {productName}
                    </h2>
                    <p> €{price}</p>
                    <p>{category}</p>

                </div>
                <Button className="add-button" clickhandler={() => addToCart(id)}>
                    Add To Cart {cartItemCount > 0 && <> ({cartItemCount})</>}
                </Button>
            </div>

        </>

    );
}

export default Product;




