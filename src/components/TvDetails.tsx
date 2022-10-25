import React from 'react'
import { useLocation } from 'react-router-dom'
import { ShowResponse, TvResult } from '../types/request-types';

const TvDetails = () => {
    const location = useLocation();
    const tv: ShowResponse | TvResult = location.state.data;  
    return (
        <div>
            <div className="overflow-hidden relative">
                <img
                loading="lazy"
                className="rounded-lg" 
                src={`https://image.tmdb.org/t/p/original/${tv.backdrop_path}`} 
                alt={tv.name} />
            </div>
        <h1>{tv.name}</h1>
    </div>
  )
}

export default TvDetails