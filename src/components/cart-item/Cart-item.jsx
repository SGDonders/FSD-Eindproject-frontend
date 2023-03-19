import React, {useContext} from "react";
import {ShopContext} from "../../context/shop-context";

import './Cart-item.css';

import noProduct from "../../assets/NoProduct/notAvailable.png";

export const CartItem = (props) => {
    const {id, productName, price, image} = props.data;
    const {cartItems, addToCart, removeFromCart, updateCartItemCount} =
        useContext(ShopContext);

    console.log(cartItems)


    return (

        <div className="cartItem">

            <span className="cart-img">
                 <img
                     src={image.docFile
                         ? `data:image/webp;base64,${props.data.image.docFile}`
                         : noProduct
                     }
                     alt="picture not available"
                 />
            </span>

            <div className="description">
                <h2>
                    {productName}
                </h2>
                <p> Price: € {price}</p>
                <div className="countHandler">
                    <button
                        className="cart-button"
                        onClick={() => removeFromCart(id)}> -
                    </button>
                    <input
                        className="input-field"
                        value={cartItems[id]}
                        onChange={(e) => updateCartItemCount(Number(e.target.value), id)}
                    />
                    <button
                        className="cart-button"
                        onClick={() => addToCart(id)}> +
                    </button>
                </div>
            </div>
        </div>
    );
};