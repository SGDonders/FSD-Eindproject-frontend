import React from 'react';
import './Navigation.css';
import { NavLink } from 'react-router-dom';
import Button from "../button/Button";

function Navigation() {
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
                             to="/Products">Products</NavLink>
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
                    />
                    </span>
                </li>
            </ul>
        </nav>
    );
}

export default Navigation;