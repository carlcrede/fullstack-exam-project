import React, { useState } from 'react';
import { NavLink } from "react-router-dom";
import { isAuthenticated } from './auth/Auth';


const bg = 'bg-gradient-to-r from-pink-500 to-violet-500 background-animate rounded-lg p-0.5 mt-1 hover:text-gray-500 transition duration-500';

const Navbar = () => {
    const [isLoggedIn, setIsLoggedIn] = useState<boolean>(isAuthenticated());
    return (
        <nav>
            <div className='w-fit rounded-l gap-3 flex flex-row'>
                {isLoggedIn && NavBarLoggedIn(bg, setIsLoggedIn)}
                {!isLoggedIn && NavBarLoggedOut(bg)}
            </div>
        </nav>
    );
};

const NavBarLoggedIn = (bg: string, setIsLoggedIn: Function) => {
    const logOut = () => {
        sessionStorage.removeItem('token');
        setIsLoggedIn((prev:boolean) => !prev)
    };
    return (
        <React.Fragment>
            <NavLink className={bg} to="/" onClick={() => logOut()}>
                <div className="bg-black px-3 rounded-lg select-none">
                    Logout
                </div>
            </NavLink>
        </React.Fragment>
    );
};

const NavBarLoggedOut = (bg: string) => {
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
};

export default Navbar;