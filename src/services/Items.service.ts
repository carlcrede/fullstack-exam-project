import http from '../http-common';
import { MovieResponse, SearchMultiResponse, ShowResponse } from '../types/request-types';
import { Filters } from '../components/ItemsContainer';
class ItemsDataService {
    getAll = async (filters: Filters) =>
        await http.get<(MovieResponse & ShowResponse)[]>(`/items/discover?filters=${JSON.stringify(filters)}`);
    //get = async (id: string) => await http.get<MovieResponse>(`/items/movies/${id}`);
    search = async (query: string) => await http.get<SearchMultiResponse>(`/items/search?query=${JSON.stringify(query)}`);
}

export default new ItemsDataService();