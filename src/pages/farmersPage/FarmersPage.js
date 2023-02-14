import React, {useEffect, useState} from 'react';
import axios from "axios";

import './FarmersPage.css'

import Header from "../../components/header/Header";
import SectionContainer from "../../components/sectionContainer/SectionContainer";

import brownCow from "../../assets/pageContent/brownCow.jpg";
import tractor from "../../assets/pageContent/tractor.jpg";

function FarmersPage() {
    const [error, toggleError] = useState(false);
    const [loading, toggleLoading] = useState(false);
    const [picture, setPicture] = useState("")

    useEffect(() => {
        async function fetchImage() {

            try{
            const response = await axios.get('http://localhost:8080/download/HermanDeBoer.jpg', {
                headers: {
                    "Content-Type": "multipart/form-data"
                }
            });
                console.log(response.data)

                const imageSrc = `data:image/*;base64,${response.data.image.data}`;
                setPicture(imageSrc);

            }catch (e) {
                toggleError(e);
        }}
        void fetchImage()

    }, [])

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

                    <h1>Welcome on my profile I am your local producer of fresh products.</h1>
                        <h3>My name is Herman de Jager.</h3>

                    <picture>
                        <img className="image-box" src={picture} alt="profile-picture"/>
                    </picture>


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