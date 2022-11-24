import React, {useEffect, useState} from 'react';
import {Link} from 'react-router-dom';
import bg from '../assets/footer-bg.jpg';
import logo from '../assets/cineswipe.png';
import {TrendingResponse} from "../types/request-types";
import moviesService from "../services/Movies.service";

const Footer = () => {
    const [movies, setMovies] = useState<TrendingResponse>();


    useEffect(() => {
        moviesService.getTrending().then((response) => {
            setMovies(response.data);
            console.log(response.data)
        })
    }, [])

    return (
        <div className="py-24 px-8 bg-top bg-cover bg-no-repeat sticky top-full" style={{backgroundImage: `url(${bg})`}}>
            {/*TODO: I deleted container and no screen width here, works on my 15' laptop and 24' screen, try it out, also change logo?*/}
            <div className="flex items-center justify-center mb-12">
                    <div className="font-bold text-4xl flex items-center justify-self-auto">
                        <img className="mr-[10px] w-[50px]" src={logo} alt=""/>
                        <Link to="/">CineSwipe</Link>
                    </div>
                </div>
                <div className="grid grid-cols-3">
                    <div className="flex flex-col justify-center items-center mt-1 font-bold">
                        <Link to="/">Home</Link>
                        {
                            movies?.results?.slice(0, 5).map((movie, i) => (
                                <span key={i} className="py-2 px-6 border-solid border-red-400 border-2 text-xs font-bold rounded-[30px]">{movie.title}</span>
                            ))
                        }
                    </div>
                    <div className="flex flex-col justify-center items-center mt-1 font-bold">
                        <Link to="/">Home</Link>
                        <Link to="https://www.rottentomatoes.com/">Rotten Tomatoes</Link>
                    </div>
                    <div className="flex flex-col justify-center items-center mt-1 font-bold">
                        <Link to="https://www.imdb.com/">IMDB</Link>
                    </div>
                </div>
        </div>
    )
}

export default Footer;