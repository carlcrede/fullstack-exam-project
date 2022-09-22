import React from 'react'
import { useLocation } from 'react-router-dom'
import { MovieResponse } from '../types/request-types';

const MovieDetails = () => {
    const location = useLocation();
    const movie: MovieResponse = location.state.data;
    return (
        <div>
            <div className="overflow-hidden relative">
                <img
                loading="lazy"
                className="rounded-lg" 
                src={`https://image.tmdb.org/t/p/original/${movie.backdrop_path}`} 
                alt={movie.title} />
            </div>
            <h1>{movie.title}</h1>
        </div>
    )
}

export default MovieDetails