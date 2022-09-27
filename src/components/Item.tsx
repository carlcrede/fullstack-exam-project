import { Link } from "react-router-dom";
import { MovieResponse, ShowResponse } from "../types/request-types";
import { LazyLoadImage } from 'react-lazy-load-image-component';
import { useState } from "react";

function Item(props: MovieResponse & ShowResponse) {
    const media = (props.title) ? 'movie': 'tv';
    const url = `${media}/${props.id}`;
    const [hasPoster, setHasPoster] = useState(props.poster_path);
    return (
        <div className="basis-1/6 select-none">
            <div className="overflow-hidden relative">
                <Link to={url} state={{ data: props }}>
                    <LazyLoadImage src={hasPoster ? `https://image.tmdb.org/t/p/w342${props.poster_path}` : '/img-placeholder.png'}
                        alt={props.title || props.name}
                        className="rounded-lg"
                    />
                </Link>
            </div>
        </div>
    );
}

export default Item