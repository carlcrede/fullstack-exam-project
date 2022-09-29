import React, {Component} from 'react';
import { NavLink } from "react-router-dom";

class Navbar extends Component {
    render() {
        return (
            <nav style={{
                borderBottom: "solid 1px",
                paddingBottom: "1rem",
            }}
            >
                // TODO: check if works or needs not null
                {!sessionStorage.getItem('token') && this.navBarLoggedOut()}
                {sessionStorage.getItem('token') && this.navBarLoggedIn()}
            </nav>
        );
    }

    navBarLoggedIn() {
        return (
            <React.Fragment>
                <NavLink className="nav-item nav-link" to="/logout">
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
                <NavLink className="nav-item nav-link" to="/signup">
                    Register
                </NavLink>
            </React.Fragment>
        );
    }
}

export default Navbar;