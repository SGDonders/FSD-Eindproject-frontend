import React from 'react';
import './Navigation.css';
import {NavLink, useNavigate} from 'react-router-dom';
import Button from "../button/Button";

function Navigation() {

    const navigate = useNavigate()
    function  clickHandler( ) {
        navigate("/loginPage")
    }

    return (
        <nav className="outer-container-navbar">
            <ul className="navbar-list">
                <span id="nav-list-links">
                <li className="navbar-list-items">
                    <NavLink className={({ isActive }) => isActive ? 'active-menu-link' : 'default-menu-link'}
                             to="/">Homepage</NavLink>
                </li>
                <li className="navbar-list-items">
                    <NavLink className={({ isActive }) => isActive ? 'active-menu-link' : 'default-menu-link'}
                             to="/ProductPage">Products</NavLink>
                </li>
                <li className="navbar-list-items">
                    <NavLink className={({ isActive }) => isActive ? 'active-menu-link' : 'default-menu-link'}
                             to="/HowToOrder">How to order</NavLink>
                </li>
                <li className="navbar-list-items">
                    <NavLink className={({ isActive }) => isActive ? 'active-menu-link' : 'default-menu-link'}
                             to="/RegisterPage">Register</NavLink>

                </li>
                    </span>
                <li>
                    <span id="login-button">
                    <Button
                        children="LOG IN"
                        onClick={clickHandler}
                    />
                    </span>
                </li>
            </ul>
        </nav>
    );
}

export default Navigation;