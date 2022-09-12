import http from '../http-common';
import { DiscoverMovieResponse } from '../types/request-types';
class MovieDataService {
    getAll = async () => await http.get<DiscoverMovieResponse>('/items/discover/movies');
}

export default new MovieDataService()