import React from 'react';
import './HomePage.css';
import farmersBasketImage from '../../assets/farmers_basket.jpg'
import Header from "../../components/header/Header";
import Button from "../../components/button/Button";
import Navigation from "../../components/navigation/Navigation";
import Footer from "../../components/footer/Footer";
import Tiles from "../../components/productTiles/ProductTile";
import {useNavigate} from "react-router-dom";


const Homepage = () => {

    const navigate = useNavigate()
    function  clickHandler1( ) {
        navigate("/registerPage")
    }

    function  clickHandler2( ) {
        navigate("/howToOrder")
    }

    function  clickHandler3( ) {
        navigate("/products")
    }


    return (
        <>
            <body>

            <Navigation/>

            <Header
                title="Get your fresh fruits and vegetables straight from local farmers."
                backgroundImage={farmersBasketImage}
                classname="outer-container"
                id="top-section"
            />

            <section className="outer-container" id="outer-button-section">
                <span className="inner-container" id="inner-button-section">
                    <div className="mid-section">
                        <h1 className="mid-section-title">Welcome to local farmers </h1>
                        <p className="mid-section-text">Our online store proudly supports local farmers and small producers in delivering farm fresh produce to your door.</p>
                        <p className="mid-section-text">Just like the memory of the general store, we provide great service and a wide range of products including fresh milk, free range eggs, crafted bread, farm fresh meat, seasonal fruit & veg, and selected specialty items. </p>
                        <p className="mid-section-text">We focus on supporting local producers who are ethical and really care about where your food comes from. Together, we consistently strive to ensure you receive a first-class product every time. </p>
                        <p className="mid-section-text">We understand the passion and commitment in developing a quality product, that’s why our producers always receive a fair price for their craft. </p>
                    </div>
                    <div id="mid-section-buttons">
                        <Button
                            children={"SHOP NOW"}
                            onClick={clickHandler3}

                        />
                        <Button
                            children={"HOW TO ORDER"}
                            onClick={clickHandler2}
                        />
                        <Button
                            children={"FIRST TIME? CLICK HERE!"}
                            onClick={clickHandler1}
                        />
                    </div>
                </span>
            </section>


            <section className="outer-container" id="outer-farmers-section">
                <span className="inner-container" id="inner-farmers-section">
                    <div className="mid-section-farmers">
                    <h1 className="farmers-title">Local farmers</h1>
                    <p className="farmers-text"> Farmers carefully source products from passionate producers who share our commitment to responsible and sustainable practises.</p>
                        </div>
                    <div id="farmers-button">
                    <Button

                        children={"MEET OUR PRODUCERS"}/>
                        </div>

                </span>
            </section>


            <section className="outer-container" id="outer-bottom-section-tile">
                <article className="inner-container" id="inner-bottom-section-tile">

                    <Tiles/>
                </article>
            </section>


            <Footer/>

            </body>
        </>
    );
};

export default Homepage;