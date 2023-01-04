import React from 'react';
import { NavLink } from 'react-router-dom';

function Navigation() {
    return (
        <nav>
            <ul>
                <li>
                    <NavLink className={({ isActive }) => isActive ? 'active-menu-link' : 'default-menu-link'}
                             to="/">Homepage</NavLink>
                </li>
                <li>
                    <NavLink className={({ isActive }) => isActive ? 'active-menu-link' : 'default-menu-link'}
                             to="/how-to-order">How to order</NavLink>
                </li>
                <li>
                    <NavLink className={({ isActive }) => isActive ? 'active-menu-link' : 'default-menu-link'}
                             to="/contact">Contact</NavLink>
                </li>
            </ul>
        </nav>
    );
}

export default Navigation;