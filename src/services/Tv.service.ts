import http from '../http-common';
import { ShowResponse } from '../types/request-types';
class TvDataService {
    getAll = async (page: number = 1) => await http.get<ShowResponse[]>(`/items/discover/tv?page=${page}`);
    get = async (id: string) => await http.get<ShowResponse>(`/items/tv/${id}`);
}

export default new TvDataService()