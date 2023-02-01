
import React, {useContext} from 'react';
import './App.css';
import {Route, Routes} from "react-router-dom";
import HowToOrder from "./pages/howToOrder/HowToOrder";
import Homepage from "./pages/homepage/Homepage";
import ProductPage from "./pages/productPage/ProductPage";
import RegisterPage from "./pages/registerPage/RegisterPage";
import LoginPage from "./pages/loginPage/LoginPage";
import FarmersPage from "./pages/farmersPage/FarmersPage";
import {AuthContext} from "./context/AuthContext";
import ProfilePage from "./pages/profilePage/ProfilePage";




function App() {
    const { isAuth } =useContext(AuthContext)

    return (
        <>

            <Routes>
                <Route path="/" element={<Homepage/>}/>
                <Route path="/productPage" element={<ProductPage/>} />
                <Route path="/howToOrder" element={<HowToOrder/>}/>
                <Route path="/registerPage" element={<RegisterPage/>}/>
                <Route path="/loginPage" element={<LoginPage/>}/>
                <Route path="/farmerPage" element={<FarmersPage/>}/>
                <Route path="/profilePage" element={<ProfilePage/>}/>
            </Routes>



        </>
    );
}

export default App;

