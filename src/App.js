
import React from 'react';
import {Route, Routes} from "react-router-dom";
import HowToOrder from "./pages/howToOrder/HowToOrder";
import Contact from "./pages/contactPage/ContactPage";
import Navigation from "./navigation/Navigation";
import Footer from "./footer/Footer";
import Homepage from "./pages/homepage/Homepage";



function App() {
    return (
        <>
            <Navigation />
            <Routes>
                <Route path="/" element={<Homepage/>}/>
                <Route path="/howToOrder" element={<HowToOrder/>}/>
                <Route path="/contactPage" element={<Contact/>}/>
            </Routes>
            <Footer/>


        </>
    );
}

export default App;

