import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { CreditsResponse, ShowResponse, VideosResponse } from '../../types/request-types';
import tvService from "../../services/Tv.service";
import CastList from "./CastList";
import VideoList from "./VideoList";
import GenreList from "./GenreList";
import FavoriteBtn from '../FavoriteBtn';

const TvDetails = () => {
    const { id } = useParams();
    const [tv, setTv] = useState<ShowResponse & { videos: VideosResponse } & { credits: CreditsResponse }>();

    useEffect(() => {
        tvService.get(id!).then((response) => {
            setTv(response.data);
        })
        window.scrollTo(0, 0);
    }, [])
    return (
        <>
            {
                tv && (
                    <>
                        <div className="relative bg-cover bg-center bg-no-repeat h-[50vh] rounded-md"
                            style={{ backgroundImage: `url('https://image.tmdb.org/t/p/w1280/${tv?.backdrop_path}')` }}></div>
                        <div
                            className="flex mb-[3rem] container items-start justify-start max-w-screen-xl ml-auto mr-auto -mt-[200px] relative py-0 px-8">
                            <div className="pl-8 relative">
                                <div>
                                    <h1 className="text-5xl py-8">{tv?.name} ({tv?.first_air_date?.slice(0, 4)})</h1>
                                </div>
                                <div className="bg-black px-5 rounded-md">
                                    <div className="flex justify-between">
                                        <GenreList genres={tv.genres?.slice(0, 5)}/>
                                        <FavoriteBtn media_type='tv' movieDbId={id!} />
                                    </div>
                                    <p className="font-bold py-4">{tv?.overview}</p>
                                    <h1 className="mb-1"><b>Original language: {tv?.original_language?.toUpperCase()}</b></h1>
                                    <h1 className="mb-1"><b>Seasons: {tv?.number_of_seasons} seasons </b></h1>
                                    <h1 className="mb-1"><b>Episodes: {tv?.number_of_episodes} episodes in total </b></h1>
                                    <h1 className="mb-1"><b>Rating: {tv?.vote_average?.toPrecision(2)} / 10</b> out of <b>{tv?.vote_count}</b> votes </h1>
                                    <div className="grid grid-cols-[repeat(auto-fill_minmax(90px,_1fr))] gap-[10px]">
                                        <div className="flex items-center justify-between">
                                            <h2 className="text-2xl font-bold py-4">Casts</h2>
                                        </div>
                                        <CastList cast={tv.credits.cast?.slice(0, 5)}/>
                                        <VideoList videos={tv.videos.results?.filter(video => video.type === 'Trailer').slice(0, 5)}/>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </>
                )
            }
        </>
    )
};

export default TvDetails;