import { Link } from "react-router-dom";
import { MovieResponse, MovieResult, ShowResponse, TvResult } from "../types/request-types";

function Item(props: MovieResponse & ShowResponse) {
    const media = (props.title) ? 'movie': 'tv';
    const url = `${media}/${props.title || props.name}`;
    return (
        <div className="basis-1/6 select-none">
            <div className="overflow-hidden relative">
                <Link to={url} state={{ data: props }}>
                    <img
                    loading="lazy"
                    className="rounded-lg" 
                    src={`https://image.tmdb.org/t/p/w500${props.poster_path}`} 
                    alt={props.title || props.name} />
                </Link>
            </div>
        </div>
    );
}

export default Item