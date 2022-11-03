import React, {useEffect, useState} from 'react'
import {useLocation, useParams} from 'react-router-dom'
import {MovieResponse, MovieResult, ShowResponse, VideosResponse} from '../types/request-types';
import itemsService from "../services/Items.service";
import moviesService from "../services/Movies.service";
import YouTube from "react-youtube";

const MovieDetails = () => {
    const {id} = useParams();
    const [movie, setMovie] = useState<MovieResponse & { videos: VideosResponse }>();

    useEffect(() => {
        moviesService.get(id!).then((response) => {
            setMovie(response.data);
            console.log(response.data)
        })
        window.scrollTo(0, 0);
    }, [])
    return (
        <div style={{backgroundImage: `url('https://image.tmdb.org/t/p/w1280/${movie?.backdrop_path}')`}}
             className={`overflow-hidden relative bg-cover w-full h-screen`}>
            <YouTube className=""
                     videoId={movie?.videos.results?.filter(video => video.type === 'Trailer')[0].key}/>
            <div className="bg-black">
                <h1 className="text-5xl text-center">{movie?.title} ({movie?.release_date?.slice(0, 4)})</h1>
                <div className="grid grid-cols-2 divide-x">
                    <div>
                        <h1 className="text-center mb-1"><b>Original language: {movie?.original_language?.toUpperCase()}</b></h1>
                        <h1 className="text-center mb-1"><b>Adult only: {movie?.adult ? "yes" : "no"}</b></h1>
                        <h1 className="text-center mb-1"><b>Runtime: {movie?.runtime} mins</b></h1>
                        <h1 className="text-center mb-1"><b>Votes: {movie?.vote_count}</b></h1>
                        <h1 className="text-center mb-1"><b>Rating: {movie?.vote_average} / 10</b></h1>
                        <img src={`https://image.tmdb.org/t/p/w1280/${movie?.poster_path}`}/>
                    </div>
                    <div>
                        <ul className="">
                            {movie?.genres?.map(genre => <li className="inline font-bold"> *** {genre.name} </li>)}
                        </ul>
                        <h1 className="mb-1"><b>Synopsis</b></h1>
                        <h2>{movie?.overview}</h2>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default MovieDetails;