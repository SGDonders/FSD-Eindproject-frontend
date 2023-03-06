import React, {useContext, useState} from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { AuthContext } from "../../context/AuthContext";
import { useForm } from "react-hook-form";

import "./RegisterPage.css";

import Header from "../../components/header/Header";
import Button from "../../components/button/Button";
import SectionContainer from "../../components/sectionContainer/SectionContainer";

import brownCow from "../../assets/pageContent/brownCow.jpg";
import beans from "../../assets/pageContent/beans.jpg";

function SignUp() {
    const url = "http://localhost:8080";
    const navigate = useNavigate();
    const { isAuth } = useContext(AuthContext);
    const {register, handleSubmit, formState: { errors }} = useForm();
    const [succesRegister, toggleSuccessRegister] = useState(true)

    const onSubmit = async (data) => {
        try {
            await axios.post(`${url}/accounts`, data);
            navigate("/loginPage");
        } catch (error) {
            console.error(error);
            toggleSuccessRegister(false)
        }
    };

    return (
        <>
            <main>
                <Header
                    title="Join our local farmers community, register here!"
                    backgroundImage={beans}
                    classname="outer-container"
                    id="top-section"
                />

                <form
                    onSubmit={handleSubmit(onSubmit)}
                    className="outer-container"
                    id="outer-container__register"
                >
                    <section className="inner-container" id="inner-container__register">
                        <div className="register-form__innercontainer">



                            <label htmlFor="username-field">
                                Username:
                                <input
                                    type="text"
                                    className="register"
                                    id="register-username"
                                    placeholder="username"
                                    {...register("userName", {
                                        required: {
                                            value: true
                                        }
                                    })}
                                />
                                {errors.userName && <p className="warning-msg">username is required</p>}
                            </label>

                            <label htmlFor="password-field">
                                Password:
                                <input
                                    type="text"
                                    className="register"
                                    id="register-password"
                                    placeholder="password"
                                    {...register("password", {
                                        required: {
                                            value: true
                                        }
                                    })}
                                />
                                {errors.password && <p className="warning-msg">Password is required</p>}
                            </label>

                            <label htmlFor="firstname-field">
                                Firstname:
                                <input
                                    type="text"
                                    className="register"
                                    id="register-firstname"
                                    placeholder="firstname"

                                    {...register("firstName", {
                                        required: {
                                            value: true
                                        }
                                    })}
                                />
                                {errors.firstName && <p className="warning-msg">firstname is required</p>}
                            </label>

                            <label htmlFor="lastname-field">
                                Lastname:
                                <input
                                    type="text"
                                    className="register"
                                    id="register-lastname"
                                    placeholder="lastname"

                                    {...register("lastName", {
                                        required: {
                                            value: true
                                        }
                                    })}
                                />
                                {errors.lastName && <p className="warning-msg">Lastname is required</p>}
                            </label>

                            <label htmlFor="zipcode-field">
                                zipcode:
                                <input
                                    type="text"
                                    className="register"
                                    id="register-zipcode"
                                    placeholder="zipcode"

                                    {...register("zipCode", {
                                        required: {
                                            value: true
                                        }
                                    })}
                                />
                                {errors.zipCode && <p className="warning-msg">Zipcode is required</p>}
                            </label>

                            <label htmlFor="address-field">
                                address:
                                <input
                                    type="text"
                                    className="register"
                                    id="register-address"
                                    placeholder="adress"
                                    {...register("address", {
                                        required: {
                                            value: true
                                        }
                                    })}
                                />
                                {errors.address && <p className="warning-msg">address is required</p>}
                            </label>

                            <label htmlFor="phonenumber-field">
                                phonenumber:
                                <input
                                    type="text"
                                    className="register"
                                    id="register-phonenumber"
                                    placeholder="phonenumber"
                                    {...register("phoneNumber", {
                                        required: {
                                            value: true
                                        }
                                    })}
                                />
                                {errors.phoneNumber && <p className="warning-msg">phonenumber is required</p>}
                            </label>

                            <label htmlFor="email-field">
                                phonenumber:
                                <input
                                    type="text"
                                    className="register"
                                    id="register-email"
                                    placeholder="email"
                                    {...register("email", {
                                        required: {
                                            value: true
                                        }
                                    })}
                                />
                                {errors.email && <p className="warning-msg">email is required</p>}
                            </label>

                        </div>
                    </section>


                    <span className="outer-container" id="register-button__outercontainer">
                <div className=" inner-container" id="regeister-button__innercontainer">

                    {!succesRegister &&
                        <h2 className="register-warning-msg">Something went wrong contact your farmer</h2>}

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
















