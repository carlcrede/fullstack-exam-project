import React from 'react';
import {Link} from "react-router-dom";

function Navbar() {
    return <nav style={{
        borderBottom: "solid 1px",
        paddingBottom: "1rem",
    }}
    >
        <Link to="/login">Login</Link>
        <Link to="/signup">Register</Link>
    </nav>
}

export default Navbar;