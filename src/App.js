
import React from 'react';
import {Route, Routes} from "react-router-dom";

import './App.css';

import Homepage from "./pages/homepage/Homepage";
import ProductPage from "./pages/productPage/ProductPage";
import HowToOrder from "./pages/howToOrder/HowToOrder";
import RegisterPage from "./pages/registerPage/RegisterPage";
import LoginPage from "./pages/loginPage/LoginPage";
import FarmersPage from "./pages/farmersPage/FarmersPage";
import ProfilePage from "./pages/profilePage/ProfilePage";
import AdminPage from "./pages/adminPage/AdminPage";
import Navigation from "./components/navigation/Navigation";
import Footer from "./components/footer/Footer";
import {Cart} from "./pages/cart/Cart";
import PageNotFound from "./pages/pageNotFound/PageNotFound";




function App() {

    return (
        <>

            <Navigation/>
                <Routes>
                    <Route path="/" element={<Homepage/>}/>
                    <Route path="/productPage" element={<ProductPage/>} />
                    <Route path="/howToOrder" element={<HowToOrder/>}/>
                    <Route path="/registerPage" element={<RegisterPage/>}/>
                    <Route path="/loginPage" element={<LoginPage/>}/>
                    <Route path="/farmerPage" element={<FarmersPage/>}/>
                    <Route path="/profilePage" element={<ProfilePage/>}/>
                    <Route path="/adminPage" element={<AdminPage/>}/>
                    <Route path="/cart" element={<Cart/>}/>
                    <Route path="*" element={<PageNotFound/>}/>
                </Routes>
            <Footer/>

        </>
    );
}

export default App;

