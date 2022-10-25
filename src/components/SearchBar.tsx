import ItemsDataService from "../services/Items.service";
import { useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useOnClickOutside } from "../hooks";
import { MovieResult, TvResult, PersonResult } from "../types/request-types";
import { capitalizeFirstLetter, getYearFromDate } from "../util/formatter";

const isMovie = (item: MovieResult | TvResult | PersonResult): item is MovieResult => {
  return (item as MovieResult).title !== undefined;
}
const isTv = (item: MovieResult | TvResult | PersonResult): item is TvResult => {
  return (item as TvResult).name !== undefined;
}

const psoter_width = 80;

function SearchBar() {
  const [searchResults, setSearchResults] = useState<(MovieResult | TvResult | PersonResult)[]>([]);
  const [searchFocus, setSearchFocus] = useState(false);
  const [query, setQuery] = useState('');

  const ref = useRef<any>();
  const navigate = useNavigate();

  const search = async (value: string) => {
    setQuery(value);
    const data = (await ItemsDataService.search(value)).data;
    if (data.results) {
      setSearchResults(data.results);
      setSearchFocus(true);
    }
  }
  
  const handleClick = (item: MovieResult | TvResult) => {
    setSearchFocus(false);
    navigate(`${item.media_type}/${item.id}`, { state: { data: item } });
  }

  const resetSearch = () => { 
    setSearchResults([]); 
    setSearchFocus(false); 
    setQuery(''); 
  };
  
  useOnClickOutside(ref, () => setSearchFocus(false));
  
  return (
    <div className="w-1/3" ref={ref}>
      <div id="searchInput" className="relative block"
        onFocus={(e) => setSearchFocus((prev) => { if (searchResults.length < 1) return false; return true })}>
        <span className="absolute flex items-center inset-y-0 left-0 pl-2">
          <svg className="h-5 w-5 fill-slate-300" viewBox="0 0 20 20">
            <path fillRule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clipRule="evenodd"></path>
          </svg>
        </span>
        <input
          className="bg-[#282c34] rounded-md p-2 focus:outline-none block w-full pl-9"
          placeholder="Search for movies or TV shows..."
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
            <div 
              key={item.id} 
              className="cursor-pointer hover:bg-slate-600 flex flex-row mb-2 gap-x-5 p-2 rounded-md"
            >
                {isMovie(item) && (
                  <div onClick={() => handleClick(item)} className="w-full flex gap-5">
                    <img 
                      width={psoter_width} 
                      src={item?.poster_path ? `https://image.tmdb.org/t/p/w342${item.poster_path}` : '/img-placeholder.png'} alt="IMG"
                      className="rounded-md"
                    />
                    <div>
                      <p className="font-bold">{item.title}</p>
                      <p>{capitalizeFirstLetter(item.media_type)}, {getYearFromDate(item.release_date)}</p>
                      <p>{item.vote_average}/10</p>
                    </div>
                  </div>
                )}
                {isTv(item) && (
                  <div onClick={() => handleClick(item)} className='w-full flex gap-5'>
                    <div>
                      <img 
                        width={psoter_width} 
                        src={item?.poster_path ? `https://image.tmdb.org/t/p/w342${item.poster_path}` : '/img-placeholder.png'} alt="IMG"
                        className="rounded-md"
                        />
                    </div>
                    <div>
                      <p className="font-bold">{item.name}</p>
                      <p>{capitalizeFirstLetter(item.media_type)}, {getYearFromDate(item.first_air_date)}</p>
                      <p>{item.vote_average}/10</p>
                    </div>
                  </div>
                )}
              </div>
          )
        })}
      </div>
    </div>
  )
}

export default SearchBar