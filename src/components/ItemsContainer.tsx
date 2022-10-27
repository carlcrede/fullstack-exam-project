import React, { useEffect, useId, useState } from "react";
import Item from "./Item";
import Filter from "./Filters";
import { DiscoverMovieRequest, DiscoverTvRequest, MovieResponse, ShowResponse } from "../types/request-types";
import InfiniteScroll from 'react-infinite-scroller';
import ItemsDataService from '../services/Items.service';
import IpService, { IpInfo } from "../services/Ip.service";

export interface Filters {
    media: { movie: boolean, tv: boolean };
    sort_by?: string;
    tv_filters?: DiscoverTvRequest;
    movie_filter?: DiscoverMovieRequest;
    page: number;
    watch_region?: string;
    region?: string;
}

const defaultFilters: Filters = {
    media: { movie: true, tv: true },
    sort_by: 'popularity.desc',
    page: 1,
}

function ItemsContainer(): JSX.Element {
    const [items, setItems] = useState<(MovieResponse & ShowResponse)[]>([]);
    const [filters, setFilters] = useState(defaultFilters);
    const [fetching, setFetching] = useState(false);
    const [ipData, setIpData] = useState<IpInfo>({});
    const id = useId();

    const onFiltersUpdated = (new_filters: Filters) => {
        setFilters(filters => {
            return { ...filters, ...new_filters }
        });
    }

    const onSelectMedia = (media: any) => {
        onFiltersUpdated({ media, page: 1 });
        setItems(prev => []);
    }

    const getIpData = async () => (await IpService.getIpData()).data;

    const loadItems = async () => {
        const ip = await getIpData();
        setIpData(ip);
        if (fetching) return;
        setFetching(prev => !prev);
        const { data: all_items } = await ItemsDataService.getAll({...filters, watch_region: ipData.countryCode, region: ipData.countryCode});
        setItems([...items, ...all_items]);
        setFilters(prev => ({ ...prev, page: filters.page + 1 }));
        setFetching(prev => !prev);
    }

    const movieList = items.map((item) => {
        return <Item key={`${id}-${item.id}`} {...item} />
    });

    return (
        <React.Fragment>
            <Filter setFilters={setFilters} onSelectMedia={onSelectMedia} />
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