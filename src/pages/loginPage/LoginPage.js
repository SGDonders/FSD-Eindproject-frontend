import React, {useState} from 'react';
import Navigation from "../../components/navigation/Navigation";
import Header from "../../components/header/Header";
import appletree from "../../assets/appletree.jpg";
import Footer from "../../components/footer/Footer";
import InputField from "../../components/inputField/InputField";
import SectionContainer from "../../components/sectionContainer/SectionContainer";
import chicken from "../../assets/chicken.jpg";
import './LoginPage.css';

const LoginPage = () => {

    const [userName, setUsername] = useState("")
    const [password, setPassword] = useState("")

    return (
        <body>
        <Navigation/>
        <Header
            title="Log in to your personal local farmers account"
            backgroundImage={appletree}
            classname="outer-container"
            id="top-section"
        />
        <section className="outer-container" id="outer-container">
        <InputField
            className="login"
            id="login__username"
            onchange={(event) => setUsername(event.target.value)}
            value={userName}
            type="text"
            name="username"
            placeholder="Username"
        >Username:
        </InputField>

        <InputField
            className="login"
            id="login__[password"
            onchange={(event) => setPassword(event.target.value)}
            value={password}
            type="text"
            name="password"
            placeholder="password"
        >Password:
        </InputField>
        </section>

        <SectionContainer
            backgroundImage={chicken}
            classname="outer-container"
            id="bottom-section"

        />



        <Footer/>
        </body>
    );
};

export default LoginPage;