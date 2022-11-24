import React, {useEffect, useState} from 'react'
import {useParams} from 'react-router-dom'
import {CreditsResponse, MovieResponse, VideosResponse} from '../types/request-types';
import moviesService from "../services/Movies.service";

const MovieDetails = () => {
    const {id} = useParams();
    const [movie, setMovie] = useState<MovieResponse & { videos: VideosResponse } & { credits: CreditsResponse }>();


    useEffect(() => {
        moviesService.get(id!).then((response) => {
            setMovie(response.data);
            console.log(response.data)
        })
        window.scrollTo(0, 0);
    }, [])
    return (
        <>
            {
                movie && (
                    <>
                        <div className="relative bg-cover bg-center bg-no-repeat h-[50vh]"
                             style={{backgroundImage: `url('https://image.tmdb.org/t/p/w1280/${movie?.backdrop_path}')`}}></div>
                        <div
                            className="flex mb-[3rem] container items-start justify-start max-w-screen-xl ml-auto mr-auto -mt-[200px] relative py-0 px-8">
                            <div className="pl-8 relative">
                                <div>
                                    <h1 className="text-5xl py-8">{movie?.title} ({movie?.release_date?.slice(0, 4)})</h1>
                                </div>
                                <div className="bg-black">
                                    <div className="ml-2 py-4">
                                        {
                                            movie.genres && movie.genres.slice(0, 5).map((genre, i) => (
                                                <span key={i}
                                                      className="py-2 px-6 border-solid border-red-400 border-2 text-xs font-bold rounded-[30px]">{genre.name}</span>
                                            ))
                                        }
                                    </div>
                                    <p className="font-bold py-4">{movie?.overview}</p>
                                    <h1 className="mb-1"><b>Original
                                        language: {movie?.original_language?.toUpperCase()}</b>
                                    </h1>
                                    <h1 className="mb-1"><b>Adult only: {movie?.adult ? "yes" : "no"}</b></h1>
                                    <h1 className="mb-1"><b>Runtime: {movie?.runtime} mins</b></h1>
                                    <h1 className="mb-1"><b>Votes: {movie?.vote_count}</b></h1>
                                    <h1 className="mb-1"><b>Rating: {movie?.vote_average} / 10</b></h1>
                                    <div className="grid grid-cols-[repeat(auto-fill_minmax(90px,_1fr))] gap-[10px]">
                                        <div className="flex items-center justify-between">
                                            <h2 className="text-2xl font-bold py-4">Casts</h2>
                                        </div>
                                        <div className="grid grid-cols-[repeat(auto-fill,_minmax(90px,_1fr))] gap-[10px]">
                                            {
                                                movie.credits.cast?.slice(0, 5).map((item, i) => (
                                                    <div key={i}>
                                                        <div className="pt-[160px] bg-cover mb-2"
                                                             style={{backgroundImage: `url('https://image.tmdb.org/t/p/w500/${item.profile_path}')`}}></div>
                                                        <p className="text-xs font-bold">{item.name}</p>
                                                    </div>
                                                ))
                                            }
                                        </div>
                                        <div className="mb-12 py-0 px-8">
                                            {
                                                movie.videos.results?.filter(video => video.type === 'Trailer').slice(0, 5).map((item, i) => (
                                                    <div className="mb-12">
                                                        <div className="mb-6">
                                                            <h2 className="font-bold">{item.name}</h2>
                                                        </div>
                                                        <iframe
                                                            src={`https://www.youtube.com/embed/${item.key}`}
                                                            height="300px"
                                                            width="100%"
                                                            title="video"
                                                        ></iframe>
                                                    </div>
                                                ))
                                            }
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </>
                )
            }
        </>
    )
}

export default MovieDetails;