import React, { useId, useState } from "react";
import Item from "./Item";
import { DiscoverMovieRequest, DiscoverTvRequest, MovieResponse, ShowResponse } from "../types/request-types";
import InfiniteScroll from 'react-infinite-scroller';
import ItemsDataService from '../services/Items.service';

export interface Filters {
    media: { movie: boolean, tv: boolean };
    sort_by: string;
    tv_filters?: DiscoverTvRequest;
    movie_filter?: DiscoverMovieRequest;
    page: number;
}

function ItemsContainer(): JSX.Element {
    const defaultFilters: Filters = {
        media: { movie: true, tv: true },
        sort_by: 'popularity.desc',
        page: 1
    }
    const [items, setItems] = useState<(MovieResponse & ShowResponse)[]>([]);
    const [filters, setFilters] = useState(defaultFilters);
    const [fetching, setFetching] = useState(false);

    const id = useId();

    const loadItems = async () => {
        if (fetching) return;
        setFetching(true);
        const { data: all_items } = await ItemsDataService.getAll(filters);
        setItems([...items, ...all_items]);
        setFilters({...filters, page: filters.page + 1});
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