import http from '../http-common';
import { DiscoverMovieResponse } from '../types/request-types';
class MovieDataService {
    getAll = async (page: number = 1) => await http.get<DiscoverMovieResponse>(`/items/discover/movies?page=${page}`);
}

export default new MovieDataService()