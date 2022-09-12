import { useEffect, useId, useState } from "react";
import Item from "./Item";
import MovieDataService from '../services/Movies.service';
import { MovieResult } from "../types/request-types";

function ItemsContainer(): JSX.Element {
    const [movies, setMovies] = useState<MovieResult[]>([]);
    const id = useId();

    useEffect(() => {
        loadMovies();
    }, [])

    const loadMovies = () => {
        MovieDataService.getAll().then(res => {
            setMovies(res.data.results as MovieResult[]);
        });
    }

    const movieList = movies.map((item) => {
        return <Item key={`${id}-${item.id}`} {...item} />
    });

    return (
        <div className="flex flex-row flex-wrap gap-4 justify-center">
            {movieList}
        </div>
    );
}

export default ItemsContainer;