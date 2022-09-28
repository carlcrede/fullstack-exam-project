import http from '../http-common';
import { MovieResponse, ShowResponse } from '../types/request-types';
import { Filters } from '../components/ItemsContainer';
class ItemsDataService {
    getAll = async (filters: Filters) => 
        await http.get<(MovieResponse & ShowResponse)[]>(`/items/discover?filters=${JSON.stringify(filters)}`);
    //get = async (id: string) => await http.get<MovieResponse>(`/items/movies/${id}`);
}

export default new ItemsDataService();