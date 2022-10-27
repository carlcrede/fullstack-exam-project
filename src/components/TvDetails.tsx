import React, {useEffect, useState} from 'react'
import {useLocation, useParams} from 'react-router-dom'
import {MovieResponse, ShowResponse, TvResult} from '../types/request-types';
import tvService from "../services/Tv.service";

const TvDetails = () => {
    const {id} = useParams();
    const [tv, setTv] = useState<ShowResponse>();

    useEffect(() => {
        tvService.get(id!).then((response) => {
            setTv(response.data);
        })
        window.scrollTo(0,0);
    }, [])
    return (
        <div style={{backgroundImage: `url('https://image.tmdb.org/t/p/w1280/${tv?.backdrop_path}')`}}
             className={`overflow-hidden relative bg-cover w-full h-screen`}>
        <h1>{tv?.name}</h1>
        <h1>{tv?.overview}</h1>
        <h1>{tv?.number_of_episodes}</h1>
        <h1>{tv?.number_of_seasons}</h1>
    </div>
  )
}

export default TvDetails