import React from 'react';
import { NavLink, useLocation } from "react-router-dom";

const logOut = () => {
    sessionStorage.removeItem('token');
}

const bg = 'bg-gradient-to-r from-pink-500 to-violet-500 background-animate rounded-lg p-0.5 mt-1 hover:text-gray-500 transition duration-500';

function Navbar() {
    const loc = useLocation();
    const token = loc.state?.token;

    return (
        <nav>
            <div className='w-fit rounded-l gap-3 flex flex-row'>
                {token && navBarLoggedIn(bg)}
                {!token && navBarLoggedOut(bg)}
            </div>
        </nav>
    );

}
function navBarLoggedIn(bg: string) {
    return (
        <React.Fragment>
            <NavLink className={bg} to="/" onClick={logOut}>
                <div className="bg-black rounded-lg select-none">
                    Logout
                </div>
            </NavLink>
        </React.Fragment>
    );
}

function navBarLoggedOut(bg: string) {
    return (
        <React.Fragment>
            <NavLink className={bg} to="/login">
                <div className='bg-black px-3 rounded-lg select-none'>
                    Login
                </div>
            </NavLink>
            <NavLink className={bg} to="/register">
                <div className='bg-black px-3 rounded-lg select-none'>
                    Register
                </div>
            </NavLink>
        </React.Fragment>
    );
}

export default Navbar;