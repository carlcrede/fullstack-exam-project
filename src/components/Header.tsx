import React from "react";

function Header() {
    return (
        <React.Fragment>
            <div 
                className="py-10 mb-10 sticky top-0 z-10 bg-gradient-to-b from-[#060D17] via-[#060D17]/90 via-[#060D17]/40 to-[#060D17]/10">
                <span 
                    className="bg-clip-text text-transparent bg-gradient-to-r 
                                from-pink-500 to-violet-500 text-5xl font-extrabold select-none"
                                >
                    CineSwipe
                </span>
            </div>
        </React.Fragment>
    );
}

export default Header;