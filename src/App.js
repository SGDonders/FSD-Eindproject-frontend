
import React from 'react';
import {Route, Routes} from "react-router-dom";
import HowToOrder from "./pages/howToOrder/HowToOrder";
import Contact from "./pages/contactPage/ContactPage";
import Homepage from "./pages/homepage/Homepage";
import ProductPage from "./pages/productPage/ProductPage";

import './App.css';




function App() {
    return (
        <>


            <Routes>
                <Route path="/" element={<Homepage/>}/>
                <Route path="/product/:id" element={<ProductPage/>} />
                <Route path="/howToOrder" element={<HowToOrder/>}/>
                <Route path="/contact" element={<Contact/>}/>
            </Routes>



        </>
    );
}

export default App;

