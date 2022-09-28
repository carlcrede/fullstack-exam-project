import React from 'react'

const Filters: React.FunctionComponent<any> = ({onSelectMedia}) => {
  return (
    <div className="flex flex-row gap-4 justify-center">
        <button onClick={() => onSelectMedia({movie: true, tv: true})}>All</button>
        <button onClick={() => onSelectMedia({movie: true, tv: false})}>Movies</button>
        <button onClick={() => onSelectMedia({movie: false, tv: true})}>Tv</button>
    </div>
  )
}

export default Filters