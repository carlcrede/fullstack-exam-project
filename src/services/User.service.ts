import { getAuthToken } from "../components/auth/Auth";
import http from "../http-common";

class UserService {
    getUserProfile = async () => await http.get(`/me`, { headers: { Authorization: `Bearer ${getAuthToken()}` } });
}

export default new UserService();