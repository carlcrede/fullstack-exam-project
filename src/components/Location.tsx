import { IpInfo } from '../services/Ip.service';

function Location(ipData: IpInfo) {
  return (
    <div className='text-gray-500 leading-9'>Country: {ipData.countryName || ipData.countryCode}</div>
  )
}

export default Location;