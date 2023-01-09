import React from 'react';
import Navigation from "../../components/navigation/Navigation";
import Header from "../../components/header/Header";
import farmersBasketImage from "../../assets/farmers_basket.jpg";

function HowToOrder() {
    return (
        <body>
        <Navigation/>
        <Header
            title="How to order..."
            backgroundImage={farmersBasketImage}
            classname="outer-container"
            id="top-section"
        />

        </body>
    );
}

export default HowToOrder;