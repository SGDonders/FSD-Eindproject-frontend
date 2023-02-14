import React from 'react';
import ReactDOM from 'react-dom/client';

import './index.css';
import App from './App';

import {BrowserRouter as Router} from 'react-router-dom';
import AuthContextProvider from "./context/AuthContext";
import {ShopContextProvider} from "./context/shop-context";


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
//  <React.StrictMode>
    <Router>
        <AuthContextProvider>
            <ShopContextProvider>

                <App/>

            </ShopContextProvider>
        </AuthContextProvider>
    </Router>
//  </React.StrictMode>
);

