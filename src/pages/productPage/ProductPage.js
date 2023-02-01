import React, {useContext, useEffect, useState} from "react";
import axios, {Axios} from "axios";
import {AuthContext} from "../../context/AuthContext";

import './ProductPage.css';

import Navigation from "../../components/navigation/Navigation";
import Header from "../../components/header/Header";
import ProductCounter from "../../components/counter/Counter";
import SectionContainer from "../../components/sectionContainer/SectionContainer";
import Footer from "../../components/footer/Footer";

import piglets from "../../assets/pageContent/lamb.jpg";
import tomato from "../../assets/ProductContent/productContent/saint-remy.jpg";
import cherry from "../../assets/pageContent/cherry.jpg";
import header from "../../components/header/Header";


function ProductPage() {

    function resetCounter() {
        setCounter(0)
    }

    // const [productName, setProductName] = useState("")
    // const [price, setPrice] = useState("")
    // const [availableStock, setAvailableStock] = useState("")
    // const [category, setCategory] = useState("")

    const [counter, setCounter] = useState(0)
    const [error, toggleError] = useState(false);
    const [loading, toggleLoading] = useState(false);
    const [list, setList] = useState([]);
    const token = localStorage.getItem('token');
    const {authAxios} = useContext(AuthContext);

    useEffect(() => {
        async function fetchProducts() {

            try {
                const response = await axios.get(`http://localhost:8080/product`, {
                    headers: {
                        "Content-Type": "application/json",
                        "Authorization": `Bearer ${token}`,
                    }
                });

                setList(response.data);
                console.log(response)

            } catch (e) {
                if (axios.isCancel(e)) {
                    console.log('The axios request was cancelled')
                } else {
                    console.error(e)
                }
            }
        }

        void fetchProducts()
    }, [authAxios]);


    return (
        <>
            <Navigation/>

            <main>

                <Header
                    title="Choose your products here!"
                    backgroundImage={cherry}
                    classname="outer-container"
                    id="top-section"
                />

                <SectionContainer
                    classname="outer-container"
                    id="intro-section"
                    title="Fresh daily products!"
                />

                <section className="outer-container" id="outer-container">
                <span className="inner-container" id="inner-container">

                    {Object.keys(list).length > 0 &&
                        <ul className="productPage-counter">
                            {list.map((product) => {
                                return (
                                    <ProductCounter
                                        img={tomato}
                                        type="button"
                                        title={product.productName}
                                        price={product.price}
                                        stock={product.availableStock}
                                        key={product.productName}

                                        countValue={counter}
                                        decrement={() => setCounter(counter => counter - 1)}
                                        increment={() => setCounter(counter => counter + 1)}
                                        isDisabled={(counter === 0)}
                                    />
                                )
                            })
                            }
                        </ul>
                    }
                </span>
                </section>

                <SectionContainer
                    classname="outer-container"
                    id="outro-section"
                />

                <SectionContainer
                    backgroundImage={piglets}
                    classname="outer-container"
                    id="bottom-section"
                />

            </main>

            <Footer/>

        </>
    )
}

export default ProductPage;