import React from "react";

import {PRODUCTS} from "../../products";
import './ProductPage.css';

import Header from "../../components/header/Header";
import ProductCounter, {Product} from "../../components/product/Product";
import SectionContainer from "../../components/sectionContainer/SectionContainer";

import piglets from "../../assets/pageContent/lamb.jpg";
import cherry from "../../assets/pageContent/cherry.jpg";




function ProductPage() {

    return (
        <>
            <Header
                title="Choose your products here!"
                backgroundImage={cherry}
                className="outer-container"
                id="top-section"
            />

            <section className="outer-container" id="outer-container-products">
                <div className="inner-container" id="inner-container-products">

                <div className="products">
                    {PRODUCTS.map((product) => (
                        <Product data={product} />
                    ))}
                </div>

                </div>
            </section>

            <SectionContainer
                backgroundImage={piglets}
                classname="outer-container"
                id="bottom-section"
            />

        </>
    )
}

export default ProductPage;