import { MovieResult, TvResult } from "../types/request-types";

function Item(props: MovieResult | TvResult) {
    return (
        <div className="basis-1/6 select-none">
            <div className="overflow-hidden relative">
                <img className="rounded-lg" src={`https://image.tmdb.org/t/p/w500${props.poster_path}`} alt="%PUBLIC_URL%/img-placeholder.png" />
            </div>
        </div>
    );
}

export default Item