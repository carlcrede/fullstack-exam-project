import http from '../http-common';
import {MovieResponse, VideosResponse} from '../types/request-types';
class MovieDataService {
    getAll = async (page: number = 1) => await http.get<MovieResponse[]>(`/items/discover/movies?page=${page}`);
    get = async (id: string) => await http.get<MovieResponse & {videos: VideosResponse}>(`/items/movie/${id}`);
}

export default new MovieDataService();