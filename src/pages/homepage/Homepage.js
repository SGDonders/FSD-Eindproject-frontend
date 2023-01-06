import React from 'react';
import './HomePage.css';
import farmersBasketImage from '../../assets/farmers_basket.jpg'
import Header from "../../components/header/Header";
import Button from "../../components/button/Button";
import Navigation from "../../components/navigation/Navigation";
import Footer from "../../components/footer/Footer";
import Tiles from "../../components/productTiles/ProductTile";


const Homepage = () => {

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
                        <h1 className="mid-section-title"></h1>
                        <p className="mid-section-text"></p>
                        <p className="mid-section-text"></p>
                        <p className="mid-section-text"></p>
                        <p className="mid-section-text"></p>
                    </div>
                    <div id="mid-section-buttons">
                        <Button
                            children={"SHOP NOW"}
                        />
                        <Button
                            children={"HOW TO ORDER"}
                        />
                        <Button
                            children={"FIRST TIME? CLICK HERE!"}
                        />
                    </div>
                </span>
            </section>


            <section className="outer-container" id="outer-farmers-section">
                <span className="inner-container" id="inner-farmers-section">
                    <div className="mid-section-farmers">
                    <h1 className="farmers-title"></h1>
                    <p className="farmers-text"> </p>
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