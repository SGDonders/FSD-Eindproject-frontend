import React, {useContext} from 'react';
import {AuthContext} from "../../context/AuthContext";
import {useNavigate} from "react-router-dom";
import HelperFunction from "../../helpers/HelperFunction";

import './HowToOrder.css';

import Header from "../../components/header/Header";
import SectionContainer from "../../components/sectionContainer/SectionContainer";
import Button from "../../components/button/Button";

import peach from "../../assets/pageContent/peach.jpg";
import chicken from "../../assets/pageContent/chicken.jpg";



function HowToOrder() {
    const navigate = useNavigate()
    const {isAuth,} = useContext(AuthContext)



    return (
        <>


            <main>

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
                        <h5 className="howToOrder-section-title">2. Sign in</h5>
                        <p>Sign-in your account, visit our shop and order some fresh products.</p>
                        <h5 className="howToOrder-section-title">3. Add to chart</h5>
                        <p>Select your products you want to order.</p>
                        <p> Add the products to your cart</p>
                        <h5 className="howToOrder-section-title">4.Collect</h5>
                        <p>Your farmer will pack your order and and send conformation of the order details.</p>
                    </div>

                    {isAuth && <Button className="howToOrder__button"
                             children={"SHOP NOW!"}
                             clickhandler={() => HelperFunction(navigate, "/productPage")}
                    />}

                    {!isAuth && <Button className="howToOrder__button"
                                       children={"REGISTER"}
                                       clickhandler={() => HelperFunction(navigate, "/registerPage")}
                    />}

                </section>

                <SectionContainer
                    backgroundImage={chicken}
                    classname="outer-container"
                    id="bottom-section"
                />

            </main>


        </>
    );
}

export default HowToOrder;