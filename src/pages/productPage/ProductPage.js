import React, {useState} from "react";
import {useParams} from "react-router-dom";

import Navigation from "../../components/navigation/Navigation";
import Header from "../../components/header/Header";
import SectionContainer from "../../components/sectionContainer/SectionContainer";
import Footer from "../../components/footer/Footer";
import ProductTile from "../../components/productTiles/ProductTile";

import './ProductPage.css';
import lamb from "../../assets/productPageContent/lamb.jpg";
import cherry from "../../assets/productPageContent/cherry.jpg";

import Counter from "../../components/counter/Counter";
import milk from "../../assets/milk.jpg";

function ProductPage() {
    const {id} = useParams();

    const [basis, setBasis] = useState(0)

    function reset() {
        setBasis(0)
    }

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


                    <div className="productPage-counter">
                    <Counter
                        className="counter-button"
                        type="button"
                        countValue={basis}
                        decrement={() => setBasis(basis => basis - 1)}
                        increment={() => setBasis(basis => basis + 1)}
                        isDisabled={(basis === 0)}
                    />

                    <ProductTile
                        className="product-page-tiles"
                        backgroundImage={milk}
                        productName="test"
                        price="test"
                        //onclick={}
                        button="click here"
                    />
                    </div>

                    <div className="productPage-counter">
                    <Counter
                        className="counter-button"
                        type="button"
                        countValue={basis}
                        decrement={() => setBasis(basis => basis - 1)}
                        increment={() => setBasis(basis => basis + 1)}
                        isDisabled={(basis === 0)}
                    />

                    <ProductTile
                        className="product-page-tiles"
                        backgroundImage={milk}
                        productName="test"
                        price="test"
                        //onclick={}
                        button="click here"
                    />
                    </div>

                                        <div className="productPage-counter">
                    <Counter
                        className="counter-button"
                        type="button"
                        countValue={basis}
                        decrement={() => setBasis(basis => basis - 1)}
                        increment={() => setBasis(basis => basis + 1)}
                        isDisabled={(basis === 0)}
                    />

                    <ProductTile
                        className="product-page-tiles"
                        backgroundImage={milk}
                        productName="test"
                        price="test"
                        //onclick={}
                        button="click here"
                    />
                    </div>


                </span>
        </section>

        <SectionContainer
            backgroundImage={lamb}
            classname="outer-container"
            id="bottom-section"
        />

        <Footer/>

        </body>
    )
}

export default ProductPage;