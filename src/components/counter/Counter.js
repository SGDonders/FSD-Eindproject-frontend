import './Counter.css'
import React, {useState} from 'react';


const ProductCounter = ({ title, price, stock, img, description, type, decrement, isDisabled, countValue, increment }) => {


    return (


        <>
            <section className="container-product__counter">
                <div >
                    <img className="product-img"
                         src={img}
                         alt={description}/>
                </div>

                <div className="container-info">
                    <h3>Productname: {title}</h3>
                    <p>Price: € {price} </p>
                    <p>Quantity: {stock}</p>
                </div>

                 <span className="count__buttons">
                     <button
                         className="btn"
                         type={type}
                         onClick={decrement}
                         disabled={isDisabled}
                     >-
                     </button>
                         <h6 id="count-value">{countValue}</h6>
                     <button
                         className="btn"
                         type={type}
                         onClick={increment}
                     >+
                     </button>
                 </span>
            </section>

        </>

    );
}

export default ProductCounter;




