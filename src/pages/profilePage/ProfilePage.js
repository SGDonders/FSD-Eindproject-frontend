import React, {useContext, useEffect, useState} from 'react';
import {AuthContext} from "../../context/AuthContext";
import axios from "axios";
import jwt_decode from "jwt-decode";

import './ProfilePage.css';

import Header from "../../components/header/Header";
import SectionContainer from "../../components/sectionContainer/SectionContainer";
import InputField from "../../components/inputField/InputField";
import Button from "../../components/button/Button";

import tarwe from "../../assets/pageContent/graan.jpg";
import horses from "../../assets/pageContent/horses.jpg";




function ProfilePage() {

    const {
        account: {userName, firstName, lastName, zipCode, address, phoneNumber, email},
        fetchUserData
    } = useContext(AuthContext);
    const jwt = localStorage.getItem("token")
    const decodedToken = jwt_decode(jwt);

    const [newFirstName, setNewFirstName] = useState("")
    const [newLastName, setNewLastName] = useState("")
    const [newZipCode, setNewZipCode] = useState("")
    const [newAddress, setNewAddress] = useState("")
    const [newPhoneNumber, setNewPhoneNumber] = useState("")
    const [newEmail, setNewEmail] = useState("")
    const [error, toggleError] = useState(false);
    const [loading, toggleLoading] = useState(false);
    const [clicks, setClicks]= useState(0);
    const refreshPage = () =>{
        setClicks(clicks +1 );
        window.location.reload();}



    useEffect(() => {
        fetchUserData(jwt, decodedToken.sub)
    }, [decodedToken.sub, jwt])

    async function updateProfile (e) {

        const storedToken = localStorage.getItem( 'token' )


        e.preventDefault();
        toggleError(false);
        toggleLoading(true);


        try {
            await axios.put(`http://localhost:8080/accounts/${userName}`, {

                firstName: newFirstName,
                lastName: newLastName,
                address: newAddress,
                zipCode: newZipCode,
                phoneNumber: newPhoneNumber,
                email: newEmail,

                headers: {Authorization: `Bearer ${storedToken}`

                }
            });
            refreshPage()

        } catch (e) {
            console.error(e);
            toggleError(true);
            console.log("Axios request cancelled")
        }

        toggleLoading(false);
        console.log("New profile uploaded")

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
                        <section>

                            <h2 className="register-title">Your profile settings: </h2>
                            <span>
                                <p className="profilePage-fields"><strong>Firstname:</strong> {firstName}</p>
                                <p className="profilePage-fields"><strong>Lastname:</strong> {lastName}</p>
                                <p className="profilePage-fields"><strong>Zipcode:</strong> {zipCode}</p>
                                <p className="profilePage-fields"><strong>Address:</strong> {address}</p>
                                <p className="profilePage-fields"><strong>Phonenumber:</strong> {phoneNumber}</p>
                                <p className="profilePage-fields"><strong>Email:</strong> {email}</p>
                            </span>
                        </section>

                        <section>

                            <h2 className="register-title">Change profile settings:  </h2>
                            <form onSubmit={updateProfile} >

                                <InputField
                                    className="newProfile"
                                    id="patch__password"
                                    clickHandler={(event) => setNewFirstName(event.target.value)}
                                    value={newFirstName}
                                    type="text"
                                    name="New firstname"
                                    placeholder="new firstname"
                                > Firstname:
                                </InputField>

                                <InputField
                                    className="newProfile"
                                    id="patch__firstname"
                                    clickHandler={(event) => setNewLastName(event.target.value)}
                                    value={newLastName}
                                    type="text"
                                    name="New LastName"
                                    placeholder="New Lastname"
                                > Lastname:
                                </InputField>

                                <InputField
                                    className="newProfile"
                                    id="patch__lastname"
                                    clickHandler={(event) => setNewZipCode(event.target.value)}
                                    value={newZipCode}
                                    type="text"
                                    name="New zipcode"
                                    placeholder="New zipcode"
                                > Zipcode:
                                </InputField>

                                <InputField
                                    className="newProfile"
                                    id="patch__lastname"
                                    clickHandler={(event) => setNewAddress(event.target.value)}
                                    value={newAddress}
                                    type="text"
                                    name="New address"
                                    placeholder="New address"
                                > Address:
                                </InputField>

                                <InputField
                                    className="newProfile"
                                    id="patch__lastname"
                                    clickHandler={(event) => setNewPhoneNumber(event.target.value)}
                                    value={newPhoneNumber}
                                    type="text"
                                    name="New phonenumber"
                                    placeholder="New phonenumber"
                                > Phonenumber:
                                </InputField>

                                <InputField
                                    className="newProfile"
                                    id="patch__lastname"
                                    clickHandler={(event) => setNewEmail(event.target.value)}
                                    value={newEmail}
                                    type="text"
                                    name="New email"
                                    placeholder="New email"
                                > Email:
                                </InputField>

                            </form>
                        </section>
                    </div>
                </div>

                <section className="outer-container" id="outer-container__button">
                    <div className="inner-container" id="inner-container__button">
                        {<Button className="profile-button"
                                 children="Update your profile"
                                 type="submit"
                                 clickhandler={updateProfile}
                        />}
                    </div>
                </section>


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