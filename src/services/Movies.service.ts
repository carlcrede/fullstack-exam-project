import http from '../http-common';
import { DiscoverMovieResponse, MovieResponse, ShowResponse } from '../types/request-types';
class MovieDataService {
    getAll = async (page: number = 1) => await http.get<MovieResponse[]>(`/items/discover/movies?page=${page}`);
}

export default new MovieDataService()