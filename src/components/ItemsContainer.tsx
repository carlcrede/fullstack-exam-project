import React, { useId, useState } from "react";
import Item from "./Item";
import Filter from "./Filters";
import { DiscoverMovieRequest, DiscoverTvRequest, MovieResponse, ShowResponse } from "../types/request-types";
import InfiniteScroll from 'react-infinite-scroller';
import ItemsDataService from '../services/Items.service';
import MoviesDataService from "../services/Movies.service";
import TvDataService from '../services/Tv.service';

export interface Filters {
    media: { movie: boolean, tv: boolean };
    sort_by: string;
    tv_filters?: DiscoverTvRequest;
    movie_filter?: DiscoverMovieRequest;
    page: number;
}

const defaultFilters: Filters = {
    media: { movie: true, tv: true },
    sort_by: 'popularity.desc',
    page: 1
}
function ItemsContainer(): JSX.Element {
    const [items, setItems] = useState<(MovieResponse & ShowResponse)[]>([]);
    const [filters, setFilters] = useState(defaultFilters);
    const [fetching, setFetching] = useState(false);

    const id = useId();

    const onFiltersUpdated = (new_filters: Filters) => {
        setFilters(filters => {
            return {...filters, ...new_filters}
        });
    }

    const onSelectMedia = async (media: {movie: boolean, tv: boolean}) => {
        setFilters(prev => (
            {...prev, media, page: prev.page + 1}
        ));
        let type;
        if (!media.movie) type = TvDataService;
        else if (!media.tv) type = MoviesDataService;
        else {
            setItems([]);
            setFilters(prev => ({...prev, page: 1, media: { movie: true, tv: true }}));
            const { data: all_items } = await ItemsDataService.getAll(filters);
            setItems([...all_items]);
            setFilters(prev => ({...prev, page: filters.page + 1}));
            return;
        };

        setFetching(prev => !prev);
        const { data: _items } = await type.getAll(1);
        setItems([]);
        setItems([..._items]);
        setFetching(prev => !prev);
    }

    const loadItems = async () => {        
        if (fetching) return;
        setFetching(prev => !prev);
        const { data: all_items } = await ItemsDataService.getAll(filters);
        setItems([...items, ...all_items]);
        setFilters(prev => ({...prev, page: filters.page + 1}));
        setFetching(prev => !prev);
    }

    const movieList = items.map((item) => {
        return <Item key={`${id}-${item.id}`} {...item} />
    });

    return (
        <React.Fragment>
            <Filter onSelectMedia={onSelectMedia} />
            <InfiniteScroll
                className="flex flex-row flex-wrap gap-4 justify-center"
                loadMore={loadItems}
                hasMore={true}
                initialLoad={true}
            >
                {movieList}
            </InfiniteScroll>
        </React.Fragment>
    );
}

export default ItemsContainer;