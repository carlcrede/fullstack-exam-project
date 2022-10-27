<<<<<<< Updated upstream
import React, {useEffect, useState} from 'react'
import {useLocation, useParams} from 'react-router-dom'
import {MovieResponse, MovieResult, ShowResponse} from '../types/request-types';
import itemsService from "../services/Items.service";
import moviesService from "../services/Movies.service";
=======
import { useLocation } from 'react-router-dom'
import { MovieResponse, MovieResult } from '../types/request-types';
>>>>>>> Stashed changes

const MovieDetails = () => {
    const {id} = useParams();
    const [movie, setMovie] = useState<MovieResponse>();

    useEffect(() => {
        moviesService.get(id!).then((response) => {
            setMovie(response.data);
        })
        window.scrollTo(0,0);
    }, [])
    return (
<<<<<<< Updated upstream
        <div style={{backgroundImage: `url('https://image.tmdb.org/t/p/w1280/${movie?.backdrop_path}')`}}
             className={`overflow-hidden relative bg-cover w-full h-screen`}>
            <div className="bg-black">
            <h1>{movie?.title}</h1>
            <h1>{movie?.overview}</h1>
            <h1>{movie?.original_language}</h1>
            </div>
=======
        <div 
            style={{backgroundImage: `url('https://image.tmdb.org/t/p/w1280/${movie.backdrop_path}')`}} 
            className={`overflow-hidden relative bg-cover w-full h-screen`}>
           
>>>>>>> Stashed changes
        </div>
    )
}

export default MovieDetails;