import { getAuthToken } from "../components/auth/Auth";
import http from "../http-common";

class UserService {
    getUserProfile = async () => await http.get(`/me`, { headers: { Authorization: `Bearer ${getAuthToken()}` } });
    updateUserProfile = async (data: any) => await http.put(`/me`, data, { headers: { Authorization: `Bearer ${getAuthToken()}` } });
}

export default new UserService();