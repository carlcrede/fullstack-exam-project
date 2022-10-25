import React from "react";
import { Link } from "react-router-dom";
import Navbar from "./Navbar";
import SearchBar from "./SearchBar";

function Header() {
    return (
        <React.Fragment>
            <div className="flex flex-row justify-center gap-4 z-40 py-10 bg-gradient-to-b min-h-fit sticky top-0 items-center">
                <div>
                    <Link to={'/'}>
                        <span 
                            className="bg-clip-text text-transparent bg-gradient-to-r 
                                        from-pink-500 to-violet-500 background-animate text-5xl font-extrabold select-none"
                                        >
                            CineSwipe
                        </span>
                    </Link>
                </div>
                <SearchBar />
                <Navbar />
            </div>
        </React.Fragment>
    );
}

export default Header;