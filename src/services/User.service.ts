import http from "../http-common";

class UserService {
    getUserProfile = async () => await http.get(`/me`, { headers: { Authorization: `Bearer ${sessionStorage.getItem("token")}` } });
}

export default new UserService();