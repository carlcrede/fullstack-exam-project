import { MovieResult, TvResult, PersonResult } from "../types/request-types";
import { capitalizeFirstLetter, getYearFromDate } from "../util/formatter"
import { isMovie, isTv } from "../util/typeChecker";

interface IProps {
    item: MovieResult | TvResult | PersonResult;
    handleClick: Function;
    poster_width: number;
}
function SearchBarResult({ item, handleClick, ...props }: IProps) {
    return (
        <div
            key={item.id}
            className="cursor-pointer hover:bg-slate-600 flex flex-row mb-2 gap-x-5 p-2 rounded-md"
        >
            {isMovie(item) && (
                <div onClick={() => handleClick(item)} className="w-full flex gap-5">
                    <img
                        width={props.poster_width}
                        src={item?.poster_path ? `https://image.tmdb.org/t/p/w342${item.poster_path}` : '/img-placeholder.png'} alt="IMG"
                        className="rounded-md"
                    />
                    <div>
                        <p className="font-bold">{item.title}</p>
                        <p>{capitalizeFirstLetter(item.media_type)}, {getYearFromDate(item.release_date)}</p>
                        <p>{item.vote_average}/10 &#9733;</p>
                    </div>
                </div>
            )}
            {isTv(item) && (
                <div onClick={() => handleClick(item)} className='w-full flex gap-5'>
                    <div>
                        <img
                            width={props.poster_width}
                            src={item?.poster_path ? `https://image.tmdb.org/t/p/w342${item.poster_path}` : '/img-placeholder.png'} alt="IMG"
                            className="rounded-md"
                        />
                    </div>
                    <div>
                        <p className="font-bold">{item.name}</p>
                        <p>{capitalizeFirstLetter(item.media_type)}, {getYearFromDate(item.first_air_date)}</p>
                        <p>{item.vote_average}/10 &#9733;</p>
                    </div>
                </div>
            )}
        </div>
    )
}

export default SearchBarResult