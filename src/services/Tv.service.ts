import http from '../http-common';
import {CreditsResponse, ShowResponse, VideosResponse} from '../types/request-types';
class TvDataService {
    getAll = async (page: number = 1) => await http.get<ShowResponse[]>(`/items/discover/tv?page=${page}`);
    get = async (id: string) => await http.get<ShowResponse & {videos: VideosResponse} & {credits: CreditsResponse}>(`/items/tv/${id}`);
}

export default new TvDataService();