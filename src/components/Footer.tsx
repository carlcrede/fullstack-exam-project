import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import bg from '../assets/footer-bg.jpg';
import logo from '../assets/cineswipe.png';
import { MovieResponse, ShowResponse } from "../types/request-types";
import moviesService from "../services/Movies.service";
import tvService from "../services/Tv.service";

const Footer = () => {
    const [movies, setMovies] = useState<MovieResponse[]>();
    const [series, setSeries] = useState<ShowResponse[]>();


    useEffect(() => {
        moviesService.getTrending().then((response) => {
            setMovies(response.data);
        }),
            tvService.getTrending().then((response) => {
                setSeries(response.data);
            })
    }, [])

    const handleClickedTop5Link = (id: number, media_type: string) => {
        window.location.href = `/${media_type}/${id}`;
    }

    return (
        <div className="py-24 px-8 bg-top bg-cover bg-no-repeat sticky top-full" style={{ backgroundImage: `url(${bg})` }}>
            {/*TODO: I deleted container and no screen width here, works on my 15' laptop and 24' screen, try it out, also change logo?*/}
            <div className="flex items-center justify-center mb-12">
                <div className="font-bold text-4xl flex items-center justify-self-auto">
                    <img className="mr-[10px] w-[50px]" src={logo} alt="" />
                    <Link to="/">CineSwipe</Link>
                </div>
            </div>
            <div className="grid grid-cols-3">
                <div className="flex flex-col justify-center items-center mt-1 font-bold">
                    <Link to="/">Trending 5 movies today</Link>
                    {
                        movies && movies?.slice(0, 5).map((item, i) => (
                            <span onClick={() => handleClickedTop5Link(item.id!, 'movie')} key={item.id}
                                className="text-xs cursor-pointer">{item.title}</span>
                        ))
                    }
                </div>
                <div className="flex flex-col justify-center items-center mt-1 font-bold">
                    <Link to="/">Home</Link>
                    <a href="https://www.rottentomatoes.com/" target="_blank">Rotten Tomatoes</a>
                    <a href="https://www.imdb.com/" target="_blank">IMDB</a>
                </div>
                <div className="flex flex-col justify-center items-center mt-1 font-bold">
                    <Link to="/">Trending 5 series today</Link>
                    {
                        series && series?.slice(0, 5).map((item, i) => (
                            <span key={item.id} onClick={() => handleClickedTop5Link(item.id!, 'tv')}
                                className="text-xs cursor-pointer">{item.name}</span>
                        ))
                    }
                </div>
            </div>
        </div>
    )
}

export default Footer;