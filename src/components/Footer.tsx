import React, {useEffect, useState} from 'react';
import {Link} from 'react-router-dom';
import bg from '../assets/footer-bg.jpg';
import logo from '../assets/cineswipe.png';
import {MovieResult, TrendingResponse, TvResult} from "../types/request-types";
import moviesService from "../services/Movies.service";
import tvService from "../services/Tv.service";

const Footer = () => {
    const [movies, setMovies] = useState<TrendingResponse>();
    const [series, setSeries] = useState<TrendingResponse>();


    useEffect(() => {
        moviesService.getTrending().then((response) => {
            setMovies(response.data);
        }),
        tvService.getTrending().then((response) => {
            setSeries(response.data);
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
                        <Link to="/">Trending 5 movies today</Link>
                        {
                            movies && movies?.filter(movie => movie.media_type === 'movie').slice(0, 5).map((item:MovieResult, i) => (
                                <span key={i}
                                      className="text-xs">{item.title}</span>
                            ))
                        }
                    </div>
                    <div className="flex flex-col justify-center items-center mt-1 font-bold">
                        <Link to="/">Home</Link>
                        <Link to="https://www.rottentomatoes.com/">Rotten Tomatoes</Link>
                        <Link to="https://www.imdb.com/">IMDB</Link>
                    </div>
                    <div className="flex flex-col justify-center items-center mt-1 font-bold">
                        <Link to="/">Trending 5 series today</Link>
                        {
                            series && series?.filter(serie => serie.media_type === 'tv').slice(0, 5).map((item:TvResult, i) => (
                                <span key={i}
                                      className="text-xs">{item.name}</span>
                            ))
                        }
                    </div>
                </div>
        </div>
    )
}

export default Footer;