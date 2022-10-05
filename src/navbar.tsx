import React, {Component, useEffect} from 'react';
import {Navigate, NavLink} from "react-router-dom";

const logOut = () => {
    localStorage.setItem('token', '');
}

function Navbar()  {


        return (
            <nav className="flex flex-row gap-5 justify-center"
            >
                {sessionStorage.getItem('token') && navBarLoggedIn()}
                {!sessionStorage.getItem('token') && navBarLoggedOut()}
            </nav>
        );

}
function navBarLoggedIn() {
    return (
        <React.Fragment>
            <NavLink className="nav-item nav-link" to="/" onClick={logOut}>
                Logout
            </NavLink>
        </React.Fragment>
    );
}

function navBarLoggedOut() {
    return (
        <React.Fragment>
            <NavLink className="nav-item nav-link" to="/login">
                Login
            </NavLink>
            <NavLink className="nav-item nav-link" to="/register">
                Register
            </NavLink>
        </React.Fragment>
    );
}

export default Navbar;