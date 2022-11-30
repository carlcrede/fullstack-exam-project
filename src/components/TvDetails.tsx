import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { CreditsResponse, ShowResponse, VideosResponse } from '../types/request-types';
import tvService from "../services/Tv.service";

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
                                    <div className="py-4 flex gap-x-2">
                                        {
                                            tv?.genres && tv.genres.slice(0, 5).map((genre, i) => (
                                                <span key={i}
                                                    className="py-2 px-6 border-solid border-red-400 border-2 text-xs font-bold rounded-[30px]">{genre.name}</span>
                                            ))
                                        }
                                    </div>
                                    <p className="font-bold py-4">{tv?.overview}</p>
                                    <h1 className="mb-1"><b>Original
                                        language: {tv?.original_language?.toUpperCase()}</b>
                                    </h1>
                                    <h1 className="mb-1"><b>Seasons: {tv?.number_of_seasons} seasons </b></h1>
                                    <h1 className="mb-1"><b>Episodes: {tv?.number_of_episodes} episodes in total </b></h1>
                                    <h1 className="mb-1"><b>Rating: {tv?.vote_average?.toPrecision(2)} / 10</b> out of <b>{tv?.vote_count}</b> votes </h1>
                                    <div className="grid grid-cols-[repeat(auto-fill_minmax(90px,_1fr))] gap-[10px]">
                                        <div className="flex items-center justify-between">
                                            <h2 className="text-2xl font-bold py-4">Casts</h2>
                                        </div>
                                        <div className="grid grid-cols-[repeat(auto-fill,_minmax(90px,_1fr))] gap-[10px]">
                                            {
                                                tv.credits.cast?.slice(0, 5).map((item, i) => (
                                                    <div key={item.id}>
                                                        <div className="pt-[160px] bg-cover mb-2 rounded-md"
                                                            style={{ backgroundImage: `url('https://image.tmdb.org/t/p/w500/${item.profile_path}')` }}></div>
                                                        <p className="text-xs font-bold">{item.name}</p>
                                                    </div>
                                                ))
                                            }
                                        </div>
                                        <div className="mb-12 py-0 px-8">
                                            {
                                                tv.videos.results?.filter(video => video.type === 'Trailer').slice(0, 5).map((item, i) => (
                                                    <div key={item.id} className="mb-12">
                                                        <div className="mb-6">
                                                            <h2 className="font-bold">{item.name}</h2>
                                                        </div>
                                                        <iframe
                                                            src={`https://www.youtube.com/embed/${item.key}`}
                                                            height="300px"
                                                            width="100%"
                                                            title="video"
                                                            className="rounded-md"
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
};

export default TvDetails;