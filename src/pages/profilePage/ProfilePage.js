import React, {useContext, useEffect, useState} from 'react';
import {AuthContext} from "../../context/AuthContext";
import jwt_decode from "jwt-decode";

import './ProfilePage.css';

import Navigation from "../../components/navigation/Navigation";
import Header from "../../components/header/Header";
import SectionContainer from "../../components/sectionContainer/SectionContainer";
import Footer from "../../components/footer/Footer";

import tractor from "../../assets/tractor.jpg";
import cows from "../../assets/cows.jpg";
import farmer from "../../assets/farmer-picture.jpg";


function ProfilePage() {
    
    const {account:{userName, firstName, lastName, zipCode, address, phoneNumber, email, user}, fetchUserData} = useContext(AuthContext);
    const jwt = localStorage.getItem("token")
    const decodedToken = jwt_decode(jwt);

    useEffect(() => {
        fetchUserData(jwt, decodedToken.sub)
    }, [decodedToken.sub, jwt])


    return (
        <>

            <Navigation/>

            <main>

                <Header
                    title="Welcome on your profile page."
                    backgroundImage={tractor}
                    classname="outer-container"
                    id="top-section"
                />

                <section className="outer-container" id="outer-container__profile">
                    <div className="inner-container" id="inner-container__profile">

                    <span id="farmer-picture">
                        <img src={farmer} alt="farmer-picture"/>
                    </span>
                        <span className="profilePage-fields">
                         <p><strong>Username:</strong> {userName}</p>
                         <p><strong>Firstname:</strong> {firstName}</p>
                         <p><strong>Lastname:</strong> {lastName}</p>
                         <p><strong>Zipcode:</strong> {zipCode}</p>
                         <p><strong>Address:</strong> {address}</p>
                         <p><strong>Phonenumber:</strong> {phoneNumber}</p>
                         <p><strong>Email:</strong> {email}</p>

                    </span>

                    </div>
                </section>

                <SectionContainer
                    backgroundImage={cows}
                    classname="outer-container"
                    id="bottom-section"
                />
            </main>

            <Footer/>
        </>


    );
}

export default ProfilePage;