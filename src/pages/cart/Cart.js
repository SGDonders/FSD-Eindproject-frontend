import React, {useContext} from "react";
import {ShopContext} from "../../context/shop-context";
import {useNavigate} from "react-router-dom";

import './Cart.css';

import {CartItem} from "../../components/cart-item/Cart-item";
import Button from "../../components/button/Button";
import {PRODUCTS} from "../../products";


export const Cart = () => {
    const {products, cartItems, getTotalCartAmount, checkout} = useContext(ShopContext);
    const totalAmount = getTotalCartAmount();
    console.log(products)
    console.log(cartItems)

    const navigate = useNavigate();

    return (

        <>
            <section className="outer-container" id="outer-container-cart">
                <div className="inner-container" id="inner-container-cart">
                    <h1>Your cart items</h1>
                    <h2 className="subtotal-top"> Subtotal: € {totalAmount.toFixed(2)} </h2>
                </div>
            </section>




                        <div className="cart">
                            {PRODUCTS.map((product) => {
                                if (cartItems[product.id] !== 0) {
                                    return <CartItem data={product}/>;
                                }
                            })}
                        </div>

                        {totalAmount > 0 ? (
                            <div className="checkout">

                                <Button
                                    className="checkout-button"
                                    clickhandler={() => navigate("/productpage")}> Continue Shopping
                                </Button>
                                <Button
                                    className="checkout-button"
                                    clickhandler={() => {checkout();navigate("/checkout");
                                    }}
                                >
                                    {" "}
                                    Checkout{" "}
                                </Button>
                                <h2 className="subtotal"> Subtotal: € {totalAmount.toFixed(2)} </h2>
                            </div>
                        ) : (
                            <h1 className=" empty-cart"> Your shopping cart is empty</h1>
                        )}



        </>
    );
};