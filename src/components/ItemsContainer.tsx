import React, { useEffect, useId, useState } from "react";
import Item from "./Item";
import MovieDataService from '../services/Movies.service';
import TvDataService from '../services/Tv.service';
import { MovieResult, TvResult } from "../types/request-types";
import InfiniteScroll from 'react-infinite-scroller';

function ItemsContainer(): JSX.Element {
    const [movies, setMovies] = useState<(MovieResult | TvResult)[]>([]);
    const [currPage, setCurrPage] = useState(1);
    const [prevPage, setPrevPage] = useState(2);
    const [fetching, setFetching] = useState(false);

    const id = useId();

    const loadMovies = () => {
        if (fetching) return;
        TvDataService.getAll(currPage).then(res => {
            setFetching(true);
            setMovies([...movies, ...res.data.results ?? []]);
            setCurrPage(currPage + 1);
            setFetching(false);
        });
    }

    useEffect(() => {
        loadMovies();
    }, [])


    const movieList = movies.map((item) => {
        return <Item key={`${id}-${item.id}`} {...item} />
    });

    return (
        <InfiniteScroll
            className="flex flex-row flex-wrap gap-4 justify-center"
            loadMore={loadMovies}
            hasMore={movies.length > 0}
        >
            {movieList}
        </InfiniteScroll>
    );
}

export default ItemsContainer;