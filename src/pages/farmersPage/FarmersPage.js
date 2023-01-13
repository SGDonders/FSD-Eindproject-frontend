import React from 'react';
import Navigation from "../../components/navigation/Navigation";
import Header from "../../components/header/Header";
import tractor from "../../assets/tractor.jpg";
import SectionContainer from "../../components/sectionContainer/SectionContainer";
import cows from "../../assets/cows.jpg";
import Footer from "../../components/footer/Footer";
import ProductTile from "../../components/productTiles/ProductTile";
import beans from "../../assets/beans.jpg";
import milk from "../../assets/milk.jpg";
import peren from "../../assets/peren.jpg";
import tomato from "../../assets/tomato.jpg";

function FarmersPage() {
    return (
        <body>

        <Navigation/>

        <Header
            title="Meet our farmers"
            backgroundImage={tractor}
            classname="outer-container"
            id="top-section"
        />

        <section className="outer-container" id="outer-container">
                <span className="inner-container" id="inner-container">

                    <ProductTile
                        className="

                        product-page-tiles"
                        backgroundImage={beans}
                        productName="test"
                        price="test"
                        //onclick={}
                        button="click here"
                    />

                    <ProductTile
                        className="product-page-tiles"
                        backgroundImage={milk}
                        productName="test"
                        price="test"
                        //onclick={milk}
                        button="click here"
                    />

                    <ProductTile
                        className="product-page-tiles"
                        backgroundImage={peren}
                        productName="test"
                        price="test"
                        //onclick={}
                        button="click here"
                    />

                    <ProductTile
                        className="product-page-tiles"
                        backgroundImage={tomato}
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
    );
};

export default FarmersPage;