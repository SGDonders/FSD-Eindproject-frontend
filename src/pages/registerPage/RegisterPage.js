import React, {useContext, useState} from 'react';
import {useNavigate} from "react-router-dom";
import axios from "axios";
import {AuthContext} from "../../context/AuthContext";

import './RegisterPage.css';

import Header from "../../components/header/Header";
import InputField from "../../components/inputField/InputField";
import Button from "../../components/button/Button";
import SectionContainer from "../../components/sectionContainer/SectionContainer";

import brownCow from "../../assets/pageContent/brownCow.jpg";
import beans from "../../assets/pageContent/beans.jpg";


function SignUp() {

    const [userName, setUsername] = useState("")
    const [password, setPassword] = useState("")
    const [firstName, setFirstName] = useState("")
    const [lastName, setLastName] = useState("")
    const [zipCode, setZipCode] = useState("")
    const [address, setAddress] = useState("")
    const [phoneNumber, setPhoneNumber] = useState("");
    const [email, setEmail] = useState("");

    const url = "http://localhost:8080"
    const [error, toggleError] = useState(false);
    const [loading, toggleLoading] = useState(false);
    const navigate = useNavigate();
    const {isAuth,} = useContext(AuthContext)


    async function handleSubmit(e) {
        e.preventDefault();
        toggleError(false);
        toggleLoading(true);

        //Check for data feed.
        // console.log(userName, password, lastName, zipCode, address, phoneNumber, email)

        try {
            await axios.post(`${url}/accounts`, {

                username: userName,
                password: password,

                firstName: firstName,
                lastName: lastName,
                zipCode: zipCode,
                address: address,
                phoneNumber: phoneNumber,
                email: email
            });
            navigate("/loginPage");

        } catch (e) {
            console.error(e);
            toggleError(true);
            console.log("Axios request cancelled")
        }

        toggleLoading(false);
        console.log("User registered")
    }

    return (
        <>


            <main>

                <Header
                    title="Join our local farmers community, register here!"
                    backgroundImage={beans}
                    classname="outer-container"
                    id="top-section"
                />

                <form onSubmit={handleSubmit} className="outer-container" id="outer-container__register">
                    <section className="inner-container" id="inner-container__register">
                        <div className="register-form__innercontainer">

                            <InputField
                                className="register"
                                id="register__username"
                                clickHandler={(event) => setUsername(event.target.value)}
                                value={userName}
                                type="text"
                                name="username"
                                placeholder="Username"
                            > New username:
                            </InputField>

                            <InputField
                                className="register"
                                id="register__password"
                                clickHandler={(event) => setPassword(event.target.value)}
                                value={password}
                                type="text"
                                name="password"
                                placeholder="password"
                            > new password:
                            </InputField>

                            <InputField
                                className="register"
                                id="register__firstname"
                                clickHandler={(event) => setFirstName(event.target.value)}
                                value={firstName}
                                type="text"
                                name="firstname"
                                placeholder="Firstname"
                            > Firstname:
                            </InputField>

                            <InputField
                                className="register"
                                id="register__lastname"
                                clickHandler={(event) => setLastName(event.target.value)}
                                value={lastName}
                                type="text"
                                name="lastname"
                                placeholder="Lastname"
                            > Lastname:
                            </InputField>

                            <InputField
                                className="register"
                                id="register__zipcode"
                                clickHandler={(event) => setZipCode(event.target.value)}
                                value={zipCode}
                                type="text"
                                name="zipcode"
                                placeholder="zipcode"
                            > Zipcode:
                            </InputField>

                            <InputField
                                className="register"
                                id="register__adress"
                                clickHandler={(event) => setAddress(event.target.value)}
                                value={address}
                                type="text"
                                name="adress"
                                placeholder="adress"
                            > Address:
                            </InputField>

                            <InputField
                                className="register"
                                id="register__phoneNumber"
                                clickHandler={(event) => setPhoneNumber(event.target.value)}
                                value={phoneNumber}
                                type="text"
                                name="phonenumber"
                                placeholder="Phonenumber"
                            > Phone number:
                            </InputField>

                            <InputField
                                className="register"
                                id="register__email"
                                clickHandler={(event) => setEmail(event.target.value)}
                                value={email}
                                type="text"
                                name="email"
                                placeholder="Email"
                            > Email:
                            </InputField>

                        </div>
                    </section>


                    <span className="outer-container" id="register-button__outercontainer">
                <div className=" inner-container" id="regeister-button__innercontainer">

            {!isAuth && <Button id="register__button"
                                children={"REGISTER"}
                                type="submit"
            />}

                </div>
            </span>
                </form>

                <SectionContainer
                    backgroundImage={brownCow}
                    classname="outer-container"
                    id="bottom-section"
                />

            </main>

        </>
    );
}

export default SignUp;
















