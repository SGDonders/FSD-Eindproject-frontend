import React, {useContext, useEffect, useState} from 'react';
import {AuthContext} from "../../context/AuthContext";
import axios from "axios";
import jwt_decode from "jwt-decode";
import {useForm} from "react-hook-form";

import './ProfilePage.css';

import Header from "../../components/header/Header";
import SectionContainer from "../../components/sectionContainer/SectionContainer";
import Button from "../../components/button/Button";

import tarwe from "../../assets/pageContent/graan.jpg";
import horses from "../../assets/pageContent/horses.jpg";


function ProfilePage() {

    const {
        account: {userName, firstName, lastName, zipCode, address, phoneNumber, email},
        fetchUserData } = useContext(AuthContext);

    const url = "http://localhost:8080";
    const jwt = localStorage.getItem("token")
    const decodedToken = jwt_decode(jwt);
    const {register, handleSubmit, formState: { errors }} = useForm();
    const [clicks, setClicks]= useState(0);
    const [onsubmit, toggleOnSubmit] = useState(true)

    const refreshPage = () =>{
        setClicks(clicks +1 );
        window.location.reload();}

    useEffect(() => {
        fetchUserData(jwt, decodedToken.sub)
    }, [decodedToken.sub, jwt])


        const storedToken = localStorage.getItem( 'token' )

        const onSubmit = async (data) => {
            try {
                await axios.put(`${url}/accounts/${userName}`, data, {
                    headers: {Authorization: `Bearer ${storedToken}`}})

                refreshPage()

            } catch (error) {
                console.error(error);
                toggleOnSubmit(false)
            }
        }

    return (
        <>
            <main>

                <Header
                    title="Welcome on your profile page."
                    backgroundImage={tarwe}
                    classname="outer-container"
                    id="top-section"
                />
                <div className="outer-container" id="outer-container__profile">
                    <div className="inner-container" id="inner-container__profile">

                        <section className="left-column">
                            <h2 className="column-title">Your profile settings: </h2>
                            <span>
                                <p className="profile-settings"><strong>Firstname:</strong> {firstName}</p>
                                <p className="profile-settings"><strong>Lastname:</strong> {lastName}</p>
                                <p className="profile-settings"><strong>Zipcode:</strong> {zipCode}</p>
                                <p className="profile-settings"><strong>Address:</strong> {address}</p>
                                <p className="profile-settings"><strong>Phonenumber:</strong> {phoneNumber}</p>
                                <p className="profile-settings"><strong>Email:</strong> {email}</p>
                            </span>
                        </section>



                        <section className="right-column">
                            <h2 className="column-title">Change profile settings:</h2>
                                <form onSubmit={handleSubmit(onSubmit)} >

                                <label htmlFor="firstname-field">
                                    <strong className="input-field-title">Firstname:</strong>
                                    <input
                                        type="text"
                                        className="profile-field"
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
                                    <strong className="input-field-title">Lastname:</strong>
                                    <input
                                        type="text"
                                        className="profile-field"
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
                                    <strong className="input-field-title">Zipcode:</strong>
                                    <input
                                        type="text"
                                        className="profile-field"
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
                                    <strong className="input-field-title">Address:</strong>
                                    <input
                                        type="text"
                                        className="profile-field"
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
                                        <strong className="input-field-title">Phonenumber:</strong>:
                                        <input
                                            type="text"
                                            className="profile-field"
                                            id="register-phonenumber"
                                            placeholder="phonenumber"
                                            {...register("phoneNumber", {
                                                required: {
                                                    value: true,
                                                    message: "Phonenumber is required"
                                                },
                                                pattern: {
                                                    value: /^[0-9]{10,}$/,
                                                    message: "Phonenumber must contain only digits and be at least 10 characters"
                                                }
                                            })}
                                        />
                                        {errors.phoneNumber && (
                                            <p className="warning-msg">{errors.phoneNumber.message}</p>
                                        )}
                                    </label>

                                    <label htmlFor="email-field">
                                        <strong className="input-field-title">Email:</strong>:
                                        <input
                                            type="text"
                                            className="profile-field"
                                            id="profile-email"
                                            placeholder="email"
                                            {...register("email", {
                                                required: {
                                                    value: true,
                                                    message: "Email is required"
                                                },
                                                pattern: {
                                                    value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                                                    message: "Invalid email address"
                                                }
                                            })}
                                        />
                                        {errors.email && (
                                            <p className="warning-msg">{errors.email.message}</p>
                                        )}
                                    </label>

                                <div className="profile-button">
                                    {<Button className="profile-button"
                                             children="Update your profile"
                                             type="submit"
                                    />}
                                </div>

                                    {!onsubmit &&
                                        <h2 className="warning-msg">Something went wrong contact your farmer</h2>}

                                </form>
                        </section>
                    </div>
                </div>

                <SectionContainer
                    backgroundImage={horses}
                    classname="outer-container"
                    id="bottom-section"

                />
            </main>
        </>
    );
}

export default ProfilePage;