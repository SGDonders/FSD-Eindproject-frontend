
import React from 'react';
import './App.css';
import {Route, Routes} from "react-router-dom";
import HowToOrder from "./pages/howToOrder/HowToOrder";
import Homepage from "./pages/homepage/Homepage";
import ProductPage from "./pages/productPage/ProductPage";
import RegisterPage from "./pages/registerPage/RegisterPage";
import LoginPage from "./pages/loginPage/LoginPage";




function App() {
    return (
        <>

            <Routes>
                <Route path="/" element={<Homepage/>}/>
                <Route path="/product/:id" element={<ProductPage/>} />
                <Route path="/howToOrder" element={<HowToOrder/>}/>
                <Route path="/registerPage" element={<RegisterPage/>}/>
                <Route path="/loginPage" element={<LoginPage/>}/>

            </Routes>



        </>
    );
}

export default App;

