import http from '../http-common';
import { DiscoverTvResponse, ShowResponse } from '../types/request-types';
class TvDataService {
    getAll = async (page: number = 1) => await http.get<ShowResponse[]>(`/items/discover/tv?page=${page}`);
}

export default new TvDataService()