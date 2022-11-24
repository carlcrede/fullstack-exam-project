import { useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useOnClickOutside } from "../hooks";
import { MovieResult, TvResult, PersonResult } from "../types/request-types";
import SearchBarResult from "./SearchBarResult";
import ItemsDataService from "../services/Items.service";

const SearchBar = () => {
  const [searchResults, setSearchResults] = useState<(MovieResult | TvResult | PersonResult)[]>([]);
  const [searchTotalResults, setSearchTotalResults] = useState<number | undefined>();
  const [searchFocus, setSearchFocus] = useState(false);
  const [query, setQuery] = useState('');

  const ref = useRef<any>();
  const navigate = useNavigate();

  const search = async (value: string) => {
    setQuery(value);
    const { data } = await ItemsDataService.search(value);
    if (data.results) {
      setSearchResults(data.results);
      setSearchFocus(true);
    }
    if (data.total_results) { setSearchTotalResults(data.total_results) }
    if (!value || value === '') {
      resetSearch();
      setSearchTotalResults(0);
    }
    
  };
  
  const handleClick = (item: MovieResult | TvResult | PersonResult) => {
    setSearchFocus(false);
    navigate(`${item.media_type}/${item.id}`, { state: { data: item } });
  };

  const handleSeeAllResults = (items: (MovieResult | TvResult | PersonResult)[]) => {
    setSearchFocus(false);
    navigate(`search?q=${query}`, { state: { data: items, poster_width: 100, total_results: searchTotalResults } });
  };

  const resetSearch = () => { 
    setSearchResults([]); 
    setSearchFocus(false); 
    setQuery(''); 
  };
  
  useOnClickOutside(ref, () => setSearchFocus(false));
  
  return (
    <div className="w-1/3 select-none" ref={ref}>
      <div id="searchInput" className="relative block"
        onFocus={(e) => setSearchFocus((prev) => { if (searchResults.length < 1) return false; return true })}>
        <span className="absolute flex items-center inset-y-0 left-0 pl-2">
          <svg className="h-5 w-5 fill-slate-300" viewBox="0 0 20 20">
            <path fillRule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clipRule="evenodd"></path>
          </svg>
        </span>
        <input
          className="bg-[#282c34] rounded-md p-2 focus:outline-none block w-full pl-9"
          placeholder="Explore..."
          onChange={(e) => search(e.target.value)}
          value={query}
          type="text"
        />
        <span onClick={resetSearch} className="absolute flex items-center right-0 inset-y-0 pr-2 cursor-pointer">&#10005;</span>
      </div>
      <div 
        id="searchResults" 
        className={`${searchFocus ? 'block' : 'hidden'} z-10 absolute bg-[#282c34] w-1/3 backdrop-blur-sm bg-[#282c34] block p-3 rounded-md`}
      >
        {searchResults.slice(0, 5).map((item) => {
          return (
            <SearchBarResult key={item.id} item={item} poster_width={60} handleClick={handleClick} />
          )
        })}
        {query && (
          <div
            onClick={() => handleSeeAllResults(searchResults)}
            className="text-center hover:bg-slate-600 p-2 rounded-md cursor-pointer"
            >See all results for {query} »
          </div>
        )}
      </div>
    </div>
  )
};

export default SearchBar;