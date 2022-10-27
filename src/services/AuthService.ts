import http from '../http-common';

class AuthService {

    login = async (user: string, password: string) => await http.post("/auth/login", {user, password});
    register = async (email: string, username: string, password: string) => await http.post("/auth/register", {email, username, password});
}

export default new AuthService();