import React, {useContext} from 'react';
import './Navigation.css';
import {NavLink, useNavigate} from 'react-router-dom';
import Button from "../button/Button";
import {AuthContext} from "../../context/AuthContext";

function Navigation() {

    const {isAuth, logout} = useContext(AuthContext)
    const navigate = useNavigate()

    function clickHandler() {
        navigate("/loginPage")
    }



    return (
        <nav className="outer-container-navbar">
            <ul className="navbar-list">
                <span id="nav-list-links">
                <li className="navbar-list-items">
                    <NavLink className={({isActive}) => isActive ? 'active-menu-link' : 'default-menu-link'}
                             to="/">Homepage</NavLink>
                </li>

                    {isAuth &&
                        <li className="navbar-list-items">
                            <NavLink className={({isActive}) => isActive ? 'active-menu-link' : 'default-menu-link'}
                                     to="/ProductPage">Products</NavLink>
                        </li>}

                    <li className="navbar-list-items">
                    <NavLink className={({isActive}) => isActive ? 'active-menu-link' : 'default-menu-link'}
                             to="/HowToOrder">How to order</NavLink>
                </li>

                <li className="navbar-list-items">
                    <NavLink className={({isActive}) => isActive ? 'active-menu-link' : 'default-menu-link'}
                             to="/RegisterPage">Register</NavLink>
                </li>
                    </span>


                <li>
                    <span id="login-button">
                        {!isAuth &&
                            <Button children="LOG IN"
                                    clickhandler={clickHandler}/>}
                        {isAuth &&
                            <Button
                                children="LOG OUT"
                                type="button"
                                clickhandler={logout}/>}
                    </span>
                </li>
            </ul>
        </nav>
    );
}

export default Navigation;