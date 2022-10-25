const Footer = () => {
    return (
        <div className="flex flex-row justify-center text-center">
            <div 
                className="w-screen p-10 mt-10 text-5xl font-extrabold select-none fixed
                            bottom-0 bg-gradient-to-t from-[#060D17] via-[#060D17]/90 to-[#060D17]/10">
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-violet-500">
                    This is the footer
                </span>
            </div>
        </div>
    )
}

export default Footer;