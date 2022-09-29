import React, {Component, useEffect} from 'react';
import {Navigate, NavLink} from "react-router-dom";

const logOut = () => {localStorage.setItem('token', '');}

class Navbar extends Component {
    render() {
        return (
            <nav style={{
                borderBottom: "solid 1px",
                paddingBottom: "1rem",
            }}
            >
                {sessionStorage.getItem('token') && this.navBarLoggedIn()}
                {!sessionStorage.getItem('token') && this.navBarLoggedOut()}
            </nav>
        );
    }

    navBarLoggedIn() {
        return (
            <React.Fragment>
                <NavLink className="nav-item nav-link" to="/" onClick={logOut}>
                    Logout
                </NavLink>
            </React.Fragment>
        );
    }

    navBarLoggedOut() {
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
}

export default Navbar;