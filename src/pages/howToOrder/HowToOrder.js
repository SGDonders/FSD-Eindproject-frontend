import React from 'react';
import Navigation from "../../components/navigation/Navigation";
import Header from "../../components/header/Header";
import peach from "../../assets/productPageContent/peach.jpg";
import SectionContainer from "../../components/sectionContainer/SectionContainer";
import Footer from "../../components/footer/Footer";
import chicken from "../../assets/productPageContent/chicken.jpg";
import './HowToOrder.css';
import Button from "../../components/button/Button";



function HowToOrder() {
    return (
        <body>

        <Navigation/>

        <Header
            title="How to order..."
            backgroundImage={peach}
            classname="outer-container"
            id="top-section"
        />

        <section className="outer-container" id="howToOrder-outer-section">
            <div className="inner-container" id="howToOrder-inner-section">
                <h5 className='howToOrder-section-title'>1. Register your details</h5>
                <p>Enter you registration details on the register form</p>
                <h5 className="howToOrder-section-title">2. Add to chart</h5>
                <p>Select your farmer you want to buy products from.</p>
                <p> Add the products to your cart</p>
                <h5 className="howToOrder-section-title">3. sign in</h5>
                <p>Sign into your account and select a timeframe to collect your order.</p>
                <p>Review and accept the Term&Conditions, proceed to checkout.</p>
                <h5 className="howToOrder-section-title">4.Collect</h5>
                <p>Your farmer will pack your order and and send conformation of the order details.</p>
            </div>

            <Button id="howToOrder__button"
                    children={"SHOP NOW!"}
                    />

            <h6>Any questions, contact us!</h6>

        </section>

        <SectionContainer
            backgroundImage={chicken}
            classname="outer-container"
            id="bottom-section"
        />

        <Footer/>

        </body>
    );
}

export default HowToOrder;