import React, {useContext, useState} from 'react';
import {useNavigate} from "react-router-dom";

import {AuthContext} from "../../context/AuthContext";
import axios from "axios";

import './LoginPage.css';

import Navigation from "../../components/navigation/Navigation";
import Header from "../../components/header/Header";
import InputField from "../../components/inputField/InputField";
import Button from "../../components/button/Button";
import SectionContainer from "../../components/sectionContainer/SectionContainer";
import Footer from "../../components/footer/Footer";

import appletree from "../../assets/appletree.jpg";
import chicken from "../../assets/pageContent/chicken.jpg";


function SignIn() {
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('');
    const [error, toggleError] = useState(false);
    const {login} = useContext(AuthContext);
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        toggleError(false);

        console.log(username, password)

        try {
            const result = await axios.post('http://localhost:8080/authenticate', {
                username: username,
                password: password

            });
            console.log(result.data);

            login(result.data.jwt);
            navigate("/homePage");


        } catch (e) {
            console.error(e);
            toggleError(true);
        }
    }

    return (

        <>

            <Navigation/>

            <main>

                <Header
                    title="Log in to your personal local farmers account"
                    backgroundImage={appletree}
                    classname="outer-container"
                    id="top-section"
                />

                <form onSubmit={handleSubmit}>
                    <section className="outer-container" id="outer-container">

                        <InputField
                            className="login"
                            id="login__username"
                            clickHandler={(e) => setUsername(e.target.value)}
                            value={username}
                            type="text"
                            name="username"
                            placeholder="username"
                        >Username:
                        </InputField>

                        <InputField
                            className="login"
                            id="login__password"
                            clickHandler={(e) => setPassword(e.target.value)}
                            value={password}
                            type="text"
                            name="password"
                            placeholder="password"
                        >Password:
                        </InputField>

                        <Button id="login-btn"
                                type="submit"
                                clickhandler={handleSubmit}
                                children={"LOG IN"}/>

                    </section>
                </form>

                <SectionContainer
                    backgroundImage={chicken}
                    classname="outer-container"
                    id="bottom-section"

                />
            </main>

            <Footer/>
        </>
    );
};


export default SignIn;