import React, {useContext, useEffect, useState} from 'react';
import {Link, NavLink, useNavigate} from 'react-router-dom';
import {AuthContext} from "../../context/AuthContext";
import {ShoppingCart} from "phosphor-react";

import './Navigation.css';

import Button from "../button/Button";

function Navigation() {

    const {isAuth, logout} = useContext(AuthContext)
    const navigate = useNavigate()




    function clickHandler() {
        navigate("/loginPage")
    }

    return (<nav className="outer-container-navbar">
            <ul className="navbar">
                <div id="nav-links">
                    <li className="navbar-list-items">
                        <NavLink className={({isActive}) => isActive ? 'active-menu-link' : 'default-menu-link'}
                             to="/">Homepage  |
                        </NavLink>
                    </li>

                    <li className="navbar-list-items">
                         <NavLink className={({isActive}) => isActive ? 'active-menu-link' : 'default-menu-link'}
                             to="/HowToOrder">How to order |
                         </NavLink>
                    </li>

                    {!isAuth && <li className="navbar-list-items">
                         <NavLink className={({isActive}) => isActive ? 'active-menu-link' : 'default-menu-link'}
                             to="/RegisterPage">Register |
                         </NavLink>
                    </li>}

                    <li className="navbar-list-items">
                        <NavLink className={({isActive}) => isActive ? 'active-menu-link' : 'default-menu-link'}
                                 to="/ProductPage">Shop |
                        </NavLink>
                    </li>

                    <li className="navbar-list-items">
                         <NavLink className={({isActive}) => isActive ? 'active-menu-link' : 'default-menu-link'}
                             to="/FarmerPage">Farmerpage |
                         </NavLink>
                    </li>

                    { isAuth && <li className="navbar-list-items">
                        <NavLink className={({isActive}) => isActive ? 'active-menu-link' : 'default-menu-link'}
                                 to="/ProfilePage">Profilepage |
                        </NavLink>
                    </li>}

                    {isAuth && <li className="navbar-list-items">
                        <NavLink className={({isActive}) => isActive ? 'active-menu-link' : 'default-menu-link'}
                                 to="/AdminPage">Adminpage |
                        </NavLink>
                    </li>}
                </div>

                     <li>
                         <div id="login-button">
                            {!isAuth && <Button children="LOG IN"
                                                clickhandler={clickHandler}/>}
                            { isAuth && <Button
                                                children="LOG OUT"
                                                type="button"
                                                clickhandler={logout}/>}

                            { isAuth && <Link to="/cart" className="cart">
                                            <ShoppingCart size={40} color="white"/>
                                        </Link>}
                        </div>
                    </li>
            </ul>
        </nav>);
}

export default Navigation;