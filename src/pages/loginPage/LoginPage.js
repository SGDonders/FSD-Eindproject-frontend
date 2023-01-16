import React, {useContext, useState} from 'react';
import Navigation from "../../components/navigation/Navigation";
import Header from "../../components/header/Header";
import appletree from "../../assets/appletree.jpg";
import Footer from "../../components/footer/Footer";
import InputField from "../../components/inputField/InputField";
import SectionContainer from "../../components/sectionContainer/SectionContainer";
import chicken from "../../assets/productPageContent/chicken.jpg";
import './LoginPage.css';
import axios from "axios";
import {AuthContext} from "../../context/AuthContext";
import Button from "../../components/button/Button";



function SignIn() {
    const [email, setEmail] = useState('');
    const [username, setUsername] = useState(' ')
    const [password, setPassword] = useState('');
    const [error, toggleError] = useState(false);
    const {login} = useContext(AuthContext);

    async function handleSubmit(e) {
        e.preventDefault();
        toggleError(false);

        try {
            const result = await axios.post('http://localhost:8080/login', {
                email: email,
                password: password,
                username: username
            });
            console.log(result.data);

            login(result.data.accessToken);

        } catch (e) {
            console.error(e);
            toggleError(true);
        }
    }

    return (

        <body>

        <Navigation/>

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
                placeholder="Username"
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

            <InputField
                className="login"
                id="login__email"
                clickHandler={(e) => setEmail(e.target.value)}
                value={email}
                type="text"
                name="email"
                placeholder="email"
            >Email:
            </InputField>


            <Button id="login-btn"
                    children={"LOG IN"}/>


        </section>
        </form>

        <SectionContainer
            backgroundImage={chicken}
            classname="outer-container"
            id="bottom-section"

        />

        <Footer/>
        </body>
    );
};


export default SignIn;