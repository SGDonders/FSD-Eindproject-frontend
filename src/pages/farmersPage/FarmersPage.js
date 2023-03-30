import React, { useEffect, useState} from 'react';
import axios from "axios";

import './FarmersPage.css'

import Header from "../../components/header/Header";
import SectionContainer from "../../components/sectionContainer/SectionContainer";

import brownCow from "../../assets/pageContent/brownCow.jpg";
import tractor from "../../assets/pageContent/tractor.jpg";

function FarmersPage() {

    const [picture, setPicture] = useState(null);
    const [error, setError] = useState(null);

    useEffect(() => {
        async function fetchImage() {
            try {
                const response = await axios.get('http://localhost:8080/download/UploadFarmerPicture.jpg', {
                    responseType: 'blob'
                });
                const blob = response.data;

                const reader = new FileReader();

                reader.onload = function (event) {
                    const image = new Image();
                    image.src = event.target.result;
                    setPicture(image);
                }

                reader.readAsDataURL(blob);

            } catch (e) {
                setError(e);
            }
        }

        void fetchImage();
    }, []);


    return (
        <>
            <main>

                <Header
                    title="Meet your Farmer"
                    backgroundImage={tractor}
                    classname="outer-container"
                    id="top-section"
                />

                <section className="outer-container" id="outer-container-farmer">
                    <span className="inner-container" id="inner-container-farmer">

                        <h1 className="farmers-title">Welcome I am your local producer of fresh products.</h1>
                        <h3 className="farmers-title">My name is Herman de Jager.</h3>

                        {error && <div className="error-msg">Something went wrong: {error.message}</div>}
                        {picture && <img className="image-box"
                                         src={picture.src}
                                         alt="profilepicture from farmer"/>}

                        <p className="farmers-text">
                            Welcome to our farm in the beautiful province of Friesland! We're located in the city of Boornzwaag, and we're proud to say that we're committed to both traditional and biological farming practices.
                        </p>
                        <p className="farmers-text">
                            Here on our farm, we believe that it's important to know where your food comes from, and we're passionate about educating others on the importance of sustainable and ethical farming practices. We offer tours and workshops for anyone interested in learning more about what we do, and we always welcome questions and conversations about the work we do here.
                        </p>
                        <p className="farmers-text">
                            In addition to our educational offerings, we also offer a range of fresh, locally produced products. From delicious, ripe fruits and vegetables, to fresh eggs and dairy products, to sustainably raised meats, we have something for everyone. We believe that supporting local farmers is an important part of building strong, sustainable communities, and we're proud to be a part of that effort.
                        </p>
                        <p className="farmers-text">
                            So if you're interested in learning more about what we do, or if you're simply looking for fresh, delicious, locally sourced products, we invite you to come and visit us here at our farm. We can't wait to share our love of traditional and biological farming with you!
                        </p>

                    </span>
                </section>

                <SectionContainer
                    backgroundImage={brownCow}
                    classname="outer-container"
                    id="bottom-section"
                />

            </main>

        </>
    );
}

export default FarmersPage;