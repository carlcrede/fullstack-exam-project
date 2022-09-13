import http from '../http-common';
import { DiscoverTvResponse } from '../types/request-types';
class TvDataService {
    getAll = async (page: number = 1) => await http.get<DiscoverTvResponse>(`/items/discover/tv?page=${page}`);
}

export default new TvDataService()