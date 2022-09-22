import React, { useEffect, useId, useState } from "react";
import Item from "./Item";
import MovieDataService from '../services/Movies.service';
import TvDataService from '../services/Tv.service';
import { MovieResponse, ShowResponse } from "../types/request-types";
import InfiniteScroll from 'react-infinite-scroller';

function ItemsContainer(): JSX.Element {
    const [items, setItems] = useState<(MovieResponse & ShowResponse)[]>([]);
    const [currPage, setCurrPage] = useState(1);
    const [fetching, setFetching] = useState(false);

    const id = useId();

    const loadItems = async () => {
        if (fetching) return;
        setFetching(true);
        const { data: tvItems } = await TvDataService.getAll(currPage);
        const { data: movieItems } = await MovieDataService.getAll(currPage);
        setItems([...items, ...tvItems, ...movieItems]);
        setCurrPage(currPage + 1);
        setFetching(false);
    }

    const movieList = items.map((item) => {
        return <Item key={`${id}-${item.id}`} {...item} />
    });

    return (
        <InfiniteScroll
            className="flex flex-row flex-wrap gap-4 justify-center"
            loadMore={loadItems}
            hasMore={true}
            initialLoad={true}
        >
            {movieList}
        </InfiniteScroll>
    );
}

export default ItemsContainer;