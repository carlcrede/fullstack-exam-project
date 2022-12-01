import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { CreditsResponse, MovieResponse, VideosResponse } from '../types/request-types';
import moviesService from "../services/Movies.service";
import CastList from "./CastList";
import VideoList from "./VideoList";
import GenreList from "./GenreList";

const MovieDetails = () => {
    const { id } = useParams();
    const [movie, setMovie] = useState<MovieResponse & { videos: VideosResponse } & { credits: CreditsResponse }>();

    useEffect(() => {
        moviesService.get(id!).then((response) => {
            setMovie(response.data);
        })
        window.scrollTo(0, 0);
    }, [])
    return (
        <>
            {
                movie && (
                    <>
                        <div className="relative bg-cover bg-center bg-no-repeat h-[50vh] rounded-md"
                            style={{ backgroundImage: `url('https://image.tmdb.org/t/p/w1280/${movie?.backdrop_path}')` }}></div>
                        <div
                            className="flex mb-[3rem] container items-start justify-start max-w-screen-xl ml-auto mr-auto -mt-[200px] relative py-0 px-8">
                            <div className="pl-8 relative">
                                <div>
                                    <h1 className="text-5xl py-8">{movie?.title} ({movie?.release_date?.slice(0, 4)})</h1>
                                </div>
                                <div className="bg-black px-5 rounded-md">
                                    <GenreList genres={movie.genres?.slice(0, 5)}/>
                                    <p className="font-bold py-4">{movie?.overview}</p>
                                    <h1 className="mb-1"><b>Original language: {movie?.original_language?.toUpperCase()}</b></h1>
                                    <h1 className="mb-1"><b>Adult only: {movie?.adult ? "yes" : "no"}</b></h1>
                                    <h1 className="mb-1"><b>Runtime: {movie?.runtime} mins</b></h1>
                                    <h1 className="mb-1"><b>Rating: {movie?.vote_average?.toPrecision(2)} / 10</b> out of <b>{movie?.vote_count}</b> votes </h1>
                                    <div className="grid grid-cols-[repeat(auto-fill_minmax(90px,_1fr))] gap-[10px]">
                                        <div className="flex items-center justify-between">
                                            <h2 className="text-2xl font-bold py-4">Casts</h2>
                                        </div>
                                        <CastList cast={movie.credits.cast?.slice(0, 5)}/>
                                        <VideoList videos={movie.videos.results?.filter(video => video.type === 'Trailer').slice(0, 5)}/>
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