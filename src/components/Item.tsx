import { MovieResult } from "../types/request-types";

function Item(props: MovieResult) {
    const { media_type = 'Movie' } = props;
    return (
        <div className="basis-1/6">
            <div className="overflow-hidden relative rounded-lg">
                <img src={`https://image.tmdb.org/t/p/w500${props.poster_path}`} alt="%PUBLIC_URL%/img-placeholder.png" />
                <span className="absolute bottom-2 right-3 text-xs select-none px-1 py-0.5 text-[#8a8d98] rounded-sm">{media_type}</span>
            </div>
            <p>{props.title}</p>
        </div>
    );
}

export default Item