import http from '../http-common';
import {CreditsResponse, MovieResponse, VideosResponse} from '../types/request-types';
class MovieDataService {
    getAll = async (page: number = 1) => await http.get<MovieResponse[]>(`/items/discover/movies?page=${page}`);
    get = async (id: string) => await http.get<MovieResponse & {videos: VideosResponse} & {credits: CreditsResponse}>(`/items/movie/${id}`);
}

export default new MovieDataService();