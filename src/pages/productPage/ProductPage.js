import React from "react";
import { useParams } from "react-router-dom";
import Navigation from "../../components/navigation/Navigation";
import Header from "../../components/header/Header";
import beans from "../../assets/beans.jpg";
import SectionContainer from "../../components/sectionContainer/SectionContainer";
import Footer from "../../components/footer/Footer";
import tomato from "../../assets/tomato.jpg";
import ProductTile from "../../components/productTiles/ProductTile";
import './ProductPage.css';

function ProductPage() {
    const { id } = useParams();

    return (
        <body>
            <Navigation/>

            <Header
            title="Choose your products here!"
            backgroundImage={beans}
            classname="outer-container"
            id="top-section"
            />

            <section className="outer-container" id="outer-container">
                <span className="inner-container" id="inner-container">

                    <ProductTile
                        backgroundImage={beans}
                        productName="test"
                        price="test"
                        children="click here"
                    />

                    <ProductTile
                        backgroundImage={beans}
                        productName="test"
                        price="test"
                        children="click here"

                    />

                    <ProductTile
                        backgroundImage={beans}
                        productName="test"
                        price="test"
                        children="click here"

                    />

                    <ProductTile
                        backgroundImage={beans}
                        productName="test"
                        price="test"
                        children="click here"

                    />

                </span>
            </section>

            <SectionContainer
                backgroundImage={tomato}
                classname="outer-container"
                id="bottom-section"
            />

            <Footer/>

        </body>
    )
}
export default ProductPage;