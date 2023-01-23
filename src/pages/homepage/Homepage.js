import React, {useContext} from 'react';

import Header from "../../components/header/Header";
import Button from "../../components/button/Button";
import Navigation from "../../components/navigation/Navigation";
import Footer from "../../components/footer/Footer";
import ProductTile from "../../components/productTiles/ProductTile";
import HelperFunction from "../../helpers/HelperFunction";

import './HomePage.css';
import farmersBasketImage from '../../assets/productPageContent/farmers_basket.jpg'
import tile1 from '../../assets/styleImageTiles/tile1.jpg'
import tile2 from '../../assets/styleImageTiles/tile3.jpg'
import tile3 from '../../assets/styleImageTiles/tile2.jpg'

import { useNavigate} from "react-router-dom";
import SectionContainer from "../../components/sectionContainer/SectionContainer";
import piglets from "../../assets/productPageContent/piglets.jpg";
import {AuthContext} from "../../context/AuthContext";


const Homepage = () => {
    const {isAuth, } = useContext(AuthContext)
    const navigate = useNavigate()



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
                        <p className="mid-section-text">This online store proudly supports local farmers and small producers in fresh farm products by connecting farmers to their local customers.</p>
                        <p className="mid-section-text">Just like the memory of the general store, we provide great service and a wide range of products including fresh milk, free range eggs, crafted bread, farm fresh meat, seasonal fruit & veg, and selected specialty items. </p>
                        <p className="mid-section-text">We focus on supporting local producers who are ethical and really care about where your food comes from. Together, we consistently strive to ensure you receive a first-class product every time. </p>
                        <p className="mid-section-text">We understand the passion and commitment in developing a quality product, that’s why our producers always receive a fair price for their craft. </p>
                    </div>

                    <div id="mid-section-buttons">

                        {!isAuth &&<Button
                            children={"SHOP NOW"}
                            clickhandler={() => HelperFunction(navigate, "/productPage")}
                        />}
                        <Button
                            children={"HOW TO ORDER"}
                            clickhandler={() => HelperFunction(navigate, "/howToOrder")}
                        />
                        <Button
                            children={"FIRST TIME? CLICK HERE"}
                            clickhandler={() => HelperFunction(navigate, "/registerPage")}
                        />

                    </div>
                </span>
            </section>

            <section className="outer-container" id="outer-bottom-section-tile">
                <article className="inner-container" id="inner-bottom-section-tile">

                    <ProductTile
                        className="product-tile"
                        backgroundImage={tile1}
                        productName="SALE"
                        price="up to 10% discount"
                        button="Shop now"
                    />

                    <ProductTile
                        className="product-tile"
                        backgroundImage={tile3}
                        productName="SALE"
                        price="up to 25% discount"
                        button="Shop now"
                    />

                    <ProductTile
                        className="product-tile"
                        backgroundImage={tile2}
                        productName="SALE"
                        price="up to 50% discount"
                        button="Shop now"
                    />

                </article>
            </section>

            <section className="outer-container" id="outer-farmers-section">
                <span className="inner-container" id="inner-farmers-section">
                    <div className="mid-section-farmers">
                        <h1 className="farmers-title">Local farmers</h1>
                        <p className="farmers-text"> Farmers carefully source products from passionate producers who share our commitment to responsible and sustainable practises.</p>
                    </div>
                    <div id="farmers-button">

                    <Button
                        children={"MEET OUR PRODUCERS"}
                        clickhandler={() => HelperFunction(navigate, "/farmerPage")}
                    />

                        </div>
                </span>
            </section>

            <SectionContainer
                backgroundImage={piglets}
                classname="outer-container"
                id="bottom-section"
            />

            <Footer/>

            </body>
        </>
    );
};

export default Homepage;