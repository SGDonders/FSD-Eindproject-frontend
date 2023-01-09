import React, {useState} from 'react';
import InputField from "../../components/inputField/InputField";
import Navigation from "../../components/navigation/Navigation";
import Footer from "../../components/footer/Footer";
import Button from "../../components/button/Button";
import sheep from "../../assets/lamb.jpg";
import Header from "../../components/header/Header";
import SectionContainer from "../../components/sectionContainer/SectionContainer";
import multipleVegetables from "../../assets/MultipleVegetables.webp";




function RegisterPage() {

    const [firstName, setFirstName] = useState("")
    const [lastName, setLastName] = useState("")
    const [zipCode, setZipCode] = useState("")
    const [address, setAddress] = useState("")
    const [phoneNumber, setPhoneNumber] = useState("");
    const [email, setEmail] = useState("");
    const [userName, setUsername] = useState("")
    const [password, setPassword] = useState("")


    function handleSubmit(e) {
        e.preventDefault();
        console.log(`
    firstname: ${firstName}, 
    lastname: ${lastName}, 
    Zipcode: ${zipCode}, 
    Address: ${address}, 
    PhoneNumber: ${phoneNumber},
    Email: ${email},
    Username: ${userName},
    Password: ${password}

    `);
    }


    return (
        <body>
        <Navigation/>
        <Header
            title="Join our local farmers community, our farmers are happy to meet you!"
            backgroundImage={multipleVegetables}
            classname="outer-container"
            id="top-section"
        />

        <form className="outer-container" id="outer-container__register">
        <section className="inner-container" id="inner-container__register">
            <div className="register-form__innercontainer">

            <InputField
                className="register"
                id="register__firstname"
                onchange={(event) => setFirstName(event.target.value)}
                value={firstName}
                type="text"
                name="firstname"
                placeholder="Firstname"
            > Firstname:
            </InputField>

            <InputField
                className="register"
                id="register__lastname"
                onchange={(event) => setLastName(event.target.value)}
                value={lastName}
                type="text"
                name="lastname"
                placeholder="Lastname"
            > Lastname:
            </InputField>

            <InputField
                className="register"
                id="register__zipcode"
                onchange={(event) => setZipCode(event.target.value)}
                value={zipCode}
                type="text"
                name="zipcode"
                placeholder="zipcode"
            > Zipcode:
            </InputField>

            <InputField
                className="register"
                id="register__adress"
                onchange={(event) => setAddress(event.target.value)}
                value={address}
                type="text"
                name="adress"
                placeholder="adress"
            > Address:
            </InputField>

            <InputField
                className="register"
                id="register__phoneNumber"
                onchange={(event) => setPhoneNumber(event.target.value)}
                value={phoneNumber}
                type="text"
                name="phonenumber"
                placeholder="Phonenumber"
            > Phone number:
            </InputField>

            <InputField
                className="register"
                id="register__email"
                onchange={(event) => setEmail(event.target.value)}
                value={email}
                type="text"
                name="email"
                placeholder="Email"
            > Email:
            </InputField>

            <InputField
                className="register"
                id="register__username"
                onchange={(event) => setUsername(event.target.value)}
                value={userName}
                type="text"
                name="username"
                placeholder="Username"
            > New username:
            </InputField>

            <InputField
                className="register"
                id="register__[password"
                onchange={(event) => setPassword(event.target.value)}
                value={password}
                type="text"
                name="password"
                placeholder="password"
            > new password:
            </InputField>
                </div>
        </section>
            </form>
        <span className="outer-container" id="register-button__outercontainer">
        <div className=" inner-container" id="regeister-button__innercontainer">
            <Button id="register__button"
                    children={"SEND!"}
            />
        </div>
            </span>
        <SectionContainer
            backgroundImage={sheep}
            classname="outer-container"
            id="bottom-section"

        />
        <Footer/>
        </body>
    );
}

export default RegisterPage;
















