import React from 'react'
import FilterOptions from './FilterOptions'
import MediaButtons from './MediaButtons'

const Filters: React.FunctionComponent<any> = ({ onSelectMedia }) => {
  return (
    <div className="flex flex-row my-5 gap-5 justify-center">
        <MediaButtons onSelectMedia={onSelectMedia} />
        <FilterOptions />
    </div>
  )
}

export default Filters