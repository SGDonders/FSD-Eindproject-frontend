import React, {useContext, useEffect} from 'react';
import {Link, NavLink, useNavigate} from 'react-router-dom';
import {AuthContext} from "../../context/AuthContext";
import {ShoppingCart} from "phosphor-react";

import './Navigation.css';

import Button from "../button/Button";

// This is a functional component that renders a navigation bar with links to different pages. It also conditionally renders
// login/logout buttons based on authentication status. The component uses context to access authentication
// information and uses the useNavigate hook to handle navigation to the login page.

function Navigation() {
     // This useEffect is necessary for displaying adminPage when logged in as admin.
    useEffect(()=>{},[])

    const {isAuth, logout, account} = useContext(AuthContext)
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
                    {account &&
                    (isAuth && account.user.authorities[0].authority !== "ROLE_USER") && <li className="navbar-list-items">
                        <NavLink className={({isActive}) => isActive ? 'active-menu-link' : 'default-menu-link'}
                                 to="/AdminPage">Adminpage |
                        </NavLink>
                    </li>}
                </div>

                     <li>
                         <div id="login-button">

                             { isAuth && <Link to="/cart" className="cart">
                                 <ShoppingCart size={40} color="white"/>
                             </Link>}

                            {!isAuth && <Button children="LOG IN"
                                                type="button"
                                                clickhandler={clickHandler}
                                                className="nav-button"/>}
                            { isAuth && <Button
                                                children="LOG OUT"
                                                type="button"
                                                clickhandler={logout}
                                                className="nav-button"/>}

                        </div>
                    </li>
            </ul>
        </nav>);
}

export default Navigation;