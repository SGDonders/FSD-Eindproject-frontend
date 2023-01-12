import React from "react";
import { useParams } from "react-router-dom";

import Navigation from "../../components/navigation/Navigation";
import Header from "../../components/header/Header";
import SectionContainer from "../../components/sectionContainer/SectionContainer";
import Footer from "../../components/footer/Footer";
import ProductTile from "../../components/productTiles/ProductTile";

import './ProductPage.css';
import cows from "../../assets/productPageContent/cow.jpg";
import bellpepper from "../../assets/productPageContent/bell-peppers.avif";
import pexelsKarolina from "../../assets/productPageContent/pexelsKarolina.jpg";
import purpleCabbage from "../../assets/productPageContent/purpleCabbage.avif";
import sweetPatato from "../../assets/productPageContent/sweetPotato.webp";
import cherry from "../../assets/cherry.jpg";

function ProductPage() {
    const { id } = useParams();

    return (
        <body>
            <Navigation/>

            <Header
            title="Choose your products here!"
            backgroundImage={cherry}
            classname="outer-container"
            id="top-section"
            />

            <section className="outer-container" id="outer-container">
                <span className="inner-container" id="inner-container">

                    <ProductTile
                        className="

                        product-page-tiles"
                        backgroundImage={bellpepper}
                        productName="test"
                        price="test"
                        //onclick={}
                        button="click here"
                    />

                    <ProductTile
                        className="product-page-tiles"
                        backgroundImage={pexelsKarolina}
                        productName="test"
                        price="test"
                        //onclick={}
                        button="click here"
                    />

                    <ProductTile
                        className="product-page-tiles"
                        backgroundImage={purpleCabbage}
                        productName="test"
                        price="test"
                        //onclick={}
                        button="click here"
                    />

                    <ProductTile
                        className="product-page-tiles"
                        backgroundImage={sweetPatato}
                        productName="test"
                        price="test"
                        //onclick={}
                        button="click here"
                    />

                </span>
            </section>

            <SectionContainer
                backgroundImage={cows}
                classname="outer-container"
                id="bottom-section"
            />

            <Footer/>

        </body>
    )
}
export default ProductPage;