import React, { useEffect, useState } from 'react';
import IpService, { IpInfo } from '../services/Ip.service';
import FilterOptions from './FilterOptions';
import Location from './Location';
import MediaButtons from './MediaButtons';

const Filters: React.FunctionComponent<any> = ({ onSelectMedia, setFilters }) => {

  return (
    <div className="flex flex-row my-5 gap-5 justify-center">
        <MediaButtons onSelectMedia={onSelectMedia} />
        <FilterOptions />
        {/* <Location {...ipData} /> */}
    </div>
  )
};

export default Filters;