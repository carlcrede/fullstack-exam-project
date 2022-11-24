import SearchBarResult from "./SearchBarResult";
import { MovieResult, TvResult, PersonResult } from '../types/request-types';
import { useLocation, useNavigate } from "react-router-dom";

interface IProps {
    data: (MovieResult | TvResult | PersonResult)[];
    poster_width: number;
    total_results?: number;
}

const SearchResults = () => {
    const location = useLocation();
    const navigate = useNavigate();

    const {data, poster_width, total_results}: IProps = location.state;
    
    const handleClick = (item: MovieResult | TvResult | PersonResult) => {
        navigate(`/${item.media_type}/${item.id}`, { state: { data: item } });
    }

    return (
        <>
            <div className="py-3 px-3 mb-2 bg-slate-800 w-fit rounded-md">Total results: {total_results}</div>
            <div className="flex flex-col">
                {data.map((item) => {
                    return (
                        <SearchBarResult key={item.id} item={item} handleClick={() => handleClick(item)} poster_width={poster_width} />
                    )
                })}
            </div>
        </>
    )
};

export default SearchResults;