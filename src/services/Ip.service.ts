import http from '../http-common';

export interface IpInfo {
    ipAddress?: string;
    continentCode?: 'AF' | 'AS' | 'EU' | 'NA' | 'OC' | 'SA' | 'AN';
    continentName?: string;
    countryCode?: string;
    countryName?: string;
    stateProv?: string;
    city?: string;
}

class IpDataService {
    getIpData = async () => await http.get<IpInfo>('/ipinfo');
}

export default new IpDataService();