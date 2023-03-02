import React, {useContext} from 'react';
import {AuthContext} from "../../context/AuthContext";
import './HomePage.css';
import {useNavigate} from "react-router-dom";


import Header from "../../components/header/Header";
import Button from "../../components/button/Button";
import ProductTile from "../../components/productTiles/ProductTile";
import HelperFunction from "../../helpers/HelperFunction";
import SectionContainer from "../../components/sectionContainer/SectionContainer";


import farmersBasketImage from '../../assets/pageContent/farmers_basket.jpg';
import tile1 from '../../assets/styleImageTiles/tile1.jpg';
import tile2 from '../../assets/styleImageTiles/tile3.jpg';
import tile3 from '../../assets/styleImageTiles/tile2.jpg';
import piglets from "../../assets/pageContent/piglets.jpg";


const Homepage = () => {
    const {isAuth,} = useContext(AuthContext)
    const navigate = useNavigate()


    return (
        <>



            <main>

                <Header
                    title="Get your fresh fruits and vegetables straight from local farmers."
                    backgroundImage={farmersBasketImage}
                    classname="outer-container"
                    id="top-section"
                />

                <section className="outer-container" id="outer-button-section">
                <span className="inner-container" id="inner-button-section">

                    <div className="mid-section">
                        <h1 className="mid-section-title">Welcome to farmers for locals </h1>
                        <p className="mid-section-text">Hello and welcome to our farmer's website! We're so glad you're here and considering ordering fresh, organic products from our farm. At our farm, we take pride in growing and producing high-quality, healthy and sustainable food for you and your family. Our goal is to provide you with fresh, locally grown produce that is not only good for you but also good for the environment.</p>
                        <p className="mid-section-text">Whether you're looking for fresh fruits and vegetables, you'll find everything you need here. Our products are carefully selected and grown with love and attention to detail, ensuring that each bite is bursting with flavor and nutrients.</p>
                        <p className="mid-section-text">We hope you'll enjoy browsing our products and selecting the perfect items for your next meal. If you have any questions or special requests, don't hesitate to contact us. We're always here to help!</p>
                        <p className="mid-section-text">Thank you for choosing our farm, and we look forward to serving you.



</p>
                    </div>

                    <div id="mid-section-buttons">

                        {isAuth && <Button
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
                            clickHandler={() => HelperFunction(navigate, "/PageNotFound")}

                        />

                        <ProductTile
                            className="product-tile"
                            backgroundImage={tile3}
                            productName="SALE"
                            price="up to 25% discount"
                            button="Shop now"
                            clickHandler={() => HelperFunction(navigate, "/PageNotFound")}

                        />

                        <ProductTile
                            className="product-tile"
                            backgroundImage={tile2}
                            productName="SALE"
                            price="up to 50% discount"
                            button="Shop now"
                            clickHandler={() => HelperFunction(navigate, "/PageNotFound")}

                        />

                    </article>
                </section>

                <section className="outer-container" id="outer-farmers-section">
                <span className="inner-container" id="inner-farmers-section">
                    <div className="mid-section-farmers">
                        <h1 className="farmers-title">Your local producer</h1>
                        <p className="farmers-text">We are a family-owned farm that has recently started selling our products online due to the impact of the COVID-19 pandemic. The pandemic has taught us the importance of shorter production cycles and the benefits of direct-to-consumer sales. Our farm is dedicated to growing and raising fresh, healthy, and high-quality products without relying on large wholesalers. All of our products are hand-picked and hand-packed with care to ensure their freshness.</p>
                    </div>

                    <div id="farmers-button">
                    <Button
                        children={"MEET YOUR FARMER"}
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

            </main>


        </>
    );
};

export default Homepage;