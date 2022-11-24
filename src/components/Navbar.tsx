import React, { useState } from 'react';
import { NavLink } from "react-router-dom";
import { isAuthenticated } from './auth/Auth';

const bg = 'bg-gradient-to-r from-pink-500 to-violet-500 background-animate rounded-lg p-0.5 mt-1 hover:text-gray-500 transition duration-500';

const Navbar = (props: any) => {
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
        localStorage.removeItem('token');
        setIsLoggedIn((prev:boolean) => !prev)
        window.location.reload();
    };
    return (
        <React.Fragment>
            <NavLink className={bg} to={'/me'}>
                <div className="bg-black px-3 rounded-lg select-none">
                    Profile
                </div>
            </NavLink>
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