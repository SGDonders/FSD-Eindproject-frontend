import React, {useContext, useEffect, useState} from "react";
import axios, {Axios} from "axios";
import {AuthContext} from "../../context/AuthContext";
import {useNavigate} from "react-router-dom";
import jwt_decode from "jwt-decode";

import './AdminPage.css';

import InputField from "../../components/inputField/InputField";
import Button from "../../components/button/Button";
import SectionContainer from "../../components/sectionContainer/SectionContainer";

function AdminPage() {


    // const {
    //     account: {userName, firstName, lastName, zipCode, address, phoneNumber, email},
    //     fetchUserData
    // } = useContext(AuthContext);


    const jwt = localStorage.getItem("token")
    const decodedToken = jwt_decode(jwt);

    const [productName, setProductName] = useState("")
    const [price, setPrice] = useState("")
    const [availableStock, setAvailableStock] = useState("")
    const [category, setCategory] = useState("")
    const [delProductName, setDelProductName] = useState("")

    const [patchProduct, setPatchProductName] = useState("")
    const [patchPrice, setPatchPrice] = useState("")
    const [patchAvailableStock, setPatchAvailableStock] = useState("")
    const [patchCategory, setPatchCategory] = useState("")
    const [previewURL, setPreviewURL] = useState("")
    const [file, setFile] = useState("")
    const [productImage, setProductImage] = useState("")
    const [productImagePreviewURL, setProductImagePreviewURL] = useState("")

    const [error, toggleError] = useState(false);
    const [loading, toggleLoading] = useState(false);
    const navigate = useNavigate();
    const {isAuth,} = useContext(AuthContext)
    const token = localStorage.getItem('token');

    function HandleFileChange(e) {
        const uploadedFile = e.target.files[0]
        console.log(uploadedFile)
        setFile(uploadedFile)
        setPreviewURL(URL.createObjectURL(uploadedFile));
    }

    function HandleProductImageChange(e) {
        const uploadedImage = e.target.files[0];
        console.log(uploadedImage);
        setProductImage(uploadedImage);
        setProductImagePreviewURL(URL.createObjectURL(uploadedImage));
    }



    async function handleSubmitPost(e) {
        e.preventDefault();
        toggleError(false);
        toggleLoading(true);

        try {
            await axios.post(`http://localhost:8080/product`, {

                productName: productName,
                price: price,
                availableStock: availableStock,
                category: category,

                headers: {
                    Authorization: `Bearer ${token}`

                }
            });

        } catch (e) {
            console.error(e);
            toggleError(true);
            console.log("Axios request cancelled")
        }

        toggleLoading(false);
        // console.log("Product posted")
    }

    async function handleSubmitDelete(e) {
        e.preventDefault();
        toggleError(false);
        toggleLoading(true);

        try {
            await axios.delete(`http://localhost:8080/product/${delProductName}`, {

                headers: {
                    Authorization: `Bearer ${token}`

                }
            });
        } catch (e) {
            console.error(e);
            toggleError(true);
            console.log("Axios request cancelled")
        }

        toggleLoading(false);
    }

    async function handleSubmitPatch(e) {
        e.preventDefault();
        toggleError(false);
        toggleLoading(true);


        try {
            await axios.patch(`http://localhost:8080/product/${patchProduct}`, {

                productName: productName,
                price: price,
                availableStock: availableStock,
                category: category,

                headers: {
                    Authorization: `Bearer ${token}`

                }
            });

        } catch (e) {
            console.error(e);
            toggleError(true);
            console.log("Axios request cancelled")
        }

        toggleLoading(false);
        // console.log("Product patched")
    }

    async function uploadProfilePicture(e) {
        const formData = new FormData();
        formData.append("file", file)
        try {
            await axios.post(`http://localhost:8080/single/upload`, formData,
                {
                    headers: {
                        "Content-Type": "multipart/form-data"
                    },
                })
            console.log("Picture uploaded")
        } catch (e) {
            console.error(e);
            toggleError(true);
            console.log("Axios request cancelled")
        }

        toggleLoading(false);
        console.log("Error - picture upload.")
    }

    async function uploadProductPicture(e) {
        console.log("functie uitgevoerd")
        const formData = new FormData();
        formData.append("file", productImage)
        try {
            await axios.post(`http://localhost:8080/single/uploadDb/${productName}`, formData,
                {
                    headers: {
                        "Content-Type": "multipart/form-data"
                    },
                })
            console.log("Picture uploaded")
        } catch (e) {
            console.error(e);
            toggleError(true);
            console.log("Axios request cancelled")
        }

        toggleLoading(false);
        console.log("Error - picture upload.")
    }


    return (

        <>

            <SectionContainer
                classname="outer-container"
                id="outer-container-adminpage"


            />


            <section className="outer-container">
                <div className="inner-container" id="inner-container-products">

                    <form className="admin-form" onSubmit={handleSubmitPost}>
                        <h1>POST PRODUCT</h1>
                        <InputField
                            className="admin-field"
                            id="post__username"
                            clickHandler={(event) => setProductName(event.target.value)}
                            value={productName}
                            type="text"
                            name="Productname"
                            placeholder="Productname"
                        > Productname:
                        </InputField>

                        <InputField
                            className="admin-field"
                            id="post__password"
                            clickHandler={(event) => setPrice(event.target.value)}
                            value={price}
                            type="text"
                            name="Price"
                            placeholder="Price"
                        > Price:
                        </InputField>

                        <InputField
                            className="admin-field"
                            id="post__firstname"
                            clickHandler={(event) => setAvailableStock(event.target.value)}
                            value={availableStock}
                            type="text"
                            name="Available stock"
                            placeholder="Available stock"
                        > Available stock:
                        </InputField>

                        <InputField
                            className="admin-field"
                            id="post__lastname"
                            clickHandler={(event) => setCategory(event.target.value)}
                            value={category}
                            type="text"
                            name="Category"
                            placeholder="Category"
                        > Category:
                        </InputField>

                        {<Button id="post__button"
                                 children={"Post product"}
                                 type="submit"
                        />}
                    </form>


                    <form className="admin-form" onSubmit={handleSubmitPatch}>
                        <h1>PATCH PRODUCT</h1>
                        <InputField
                            className="admin-field"
                            id="patch__username"
                            clickHandler={(event) => setPatchProductName(event.target.value)}
                            value={patchProduct}
                            type="text"
                            name="Productname"
                            placeholder="Productname"
                        > Productname:
                        </InputField>

                        <InputField
                            className="admin-field"
                            id="patch__password"
                            clickHandler={(event) => setPatchPrice(event.target.value)}
                            value={patchPrice}
                            type="text"
                            name="Price"
                            placeholder="Price"
                        > Price:
                        </InputField>

                        <InputField
                            className="admin-field"
                            id="patch__firstname"
                            clickHandler={(event) => setPatchAvailableStock(event.target.value)}
                            value={patchAvailableStock}
                            type="text"
                            name="Available stock"
                            placeholder="Available stock"
                        > Available stock:
                        </InputField>

                        <InputField
                            className="admin-field"
                            id="patch__lastname"
                            clickHandler={(event) => setPatchCategory(event.target.value)}
                            value={patchCategory}
                            type="text"
                            name="Category"
                            placeholder="Category"
                        > Category:
                        </InputField>

                        {<Button id="patch__button"
                                 children={"Patch product"}
                                 type="submit"
                        />}
                    </form>

                    <form className="admin-form" onSubmit={handleSubmitDelete}>
                        <h1>DELETE PRODUCT</h1>
                        <InputField
                            className="admin-field"
                            id="delete__product"
                            clickHandler={(event) => setDelProductName(event.target.value)}
                            value={delProductName}
                            type="text"
                            name="DelProductname"
                            placeholder="Productname"
                        > Productname:
                        </InputField>


                        {<Button className="delete__button"
                                 children={"Delete product"}
                                 type="submit"
                        />}
                    </form>

                    <div className="upload-product-img">
                    <h1>UPLOAD PRODUCT PICTURE</h1>
                    <form className="img-form" onSubmit={uploadProductPicture}>

                        <label className="upload-img-product">
                            <InputField
                                className="admin-field"
                                id="upload-product-img"
                                clickHandler={(event) => setProductName(event.target.value)}
                                value={productName}
                                type="text"
                                name="upload-productname"
                                placeholder="Productname"
                            >ProductName:
                            </InputField>
                            <label>
                                <input onChange={HandleProductImageChange} className="choose-file-btn" type="file" name="file" accept="image.*"/>
                            </label>
                        </label>

                        <Button
                            children="Upload productpicture"
                            type="submit"
                            className="upload-product-img-button"
                        />
                    </form>
                </div>

                </div>
            </section>


            <section className="outer-container" id="outer-container__img">
                <div className="inner-container" id="inner-container__img">

                    <h1>UPLOAD YOUR PROFILE PICTURE</h1>
                    <form className="img-form" onSubmit={uploadProfilePicture}>
                        <label>
                            <input onChange={HandleFileChange} className="choose-file-btn" type="file" name="file" accept="image.*"/>
                        </label>

                        <Button
                            children="Upload profilepicture"
                            type="submit"
                            className="upload-img-button"
                        />
                    </form>
                </div>
            </section>

            <section className="outer-container">
                <div className="inner-container">

                    <h1>PICTURE PREVIEWS</h1>

                    <div className="preview-product-box">
                        {productImagePreviewURL &&
                            <label >
                                <div className="product-image-span">
                                    <img src={productImagePreviewURL} alt="preview product picture"/>
                                </div>
                            </label>}

                        {previewURL &&
                            <label className="preview-box">
                                <div className="image-span">
                                    <img src={previewURL} alt="preview picture"/>
                                </div>
                            </label>}
                    </div>

                </div>
            </section>


            <SectionContainer
                classname="outer-container"
                id="outer-container-bottom"


            />


        </>
    )
}


export default AdminPage;
















