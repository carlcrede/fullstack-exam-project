import React from "react";
import { Link } from "react-router-dom";
import Navbar from "../navbar";

function Header() {
    return (
        <React.Fragment>
            <div className="flex flex-row justify-center gap-4 z-40 py-10 bg-gradient-to-b min-h-fit sticky top-0 from-[#060D17] via-[#060D17]/90 via-[#060D17]/40 to-[#060D17]/10">
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
                <Navbar />
            </div>
        </React.Fragment>
    );
}

export default Header;