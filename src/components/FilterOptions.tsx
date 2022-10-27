const FilterOptions = () => {
  return (
    <div className="flex flex-row gap-5 text-gray-500 leading-9 select-none">
      <div>
        <span className="text-lg">FILTERS</span>
      </div>
      <div className='flex flex-row'>
        <span>Genres</span>
      </div>
      <div>
        <span>Release year</span>
      </div>
    </div>
  )
}

export default FilterOptions;