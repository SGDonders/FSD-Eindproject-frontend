import React, {useState} from "react";
import {useParams} from "react-router-dom";

import Navigation from "../../components/navigation/Navigation";
import Header from "../../components/header/Header";
import ProductCounter from "../../components/counter/Counter";
import SectionContainer from "../../components/sectionContainer/SectionContainer";
import Footer from "../../components/footer/Footer";

import './ProductPage.css';

import piglets from "../../assets/productPageContent/lamb.jpg";
import tomato from "../../assets/tomato.jpg";
import cherry from "../../assets/productPageContent/cherry.jpg";



function ProductPage() {
    const {id} = useParams();

    const [counter, setCounter] =useState(0)
    function resetCounter() {
        setCounter(0)
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
                    <ProductCounter
                        img={tomato}
                        type="button"
                        title="product"
                        price="price"
                        stock="available stock"

                        countValue={counter}
                        decrement={() => setCounter(counter => counter -1) }
                        increment={() => setCounter(counter => counter +1) }
                        isDisabled={(counter === 0)}
                    />
                    <ProductCounter
                        img={tomato}
                        type="button"
                        title="product"
                        price="price"
                        stock="available stock"

                        countValue={counter}
                        decrement={() => setCounter(counter => counter -1) }
                        increment={() => setCounter(counter => counter +1) }
                        isDisabled={(counter === 0)}
                    />

                    <ProductCounter
                        img={tomato}
                        type="button"
                        title="product"
                        price="price"
                        stock="available stock"

                        countValue={counter}
                        decrement={() => setCounter(counter => counter -1) }
                        increment={() => setCounter(counter => counter +1) }
                        isDisabled={(counter === 0)}
                    />

                    <ProductCounter
                        img={tomato}
                        type="button"
                        title="product"
                        price="price"
                        stock="available stock"

                        countValue={counter}
                        decrement={() => setCounter(counter => counter -1) }
                        increment={() => setCounter(counter => counter +1) }
                        isDisabled={(counter === 0)}
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
    )
}

export default ProductPage;