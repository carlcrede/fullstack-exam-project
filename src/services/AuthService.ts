import http from '../http-common';
import {LoginParams} from "../types/types";

class AuthService {

    login = async (user: string, password: string) => await http.post("http://localhost:8080/auth/login", null, {
        headers: { 'Content-Type': 'application/json' },
        params: {
            user: user,
            password: password
        }
    });
}

export default new AuthService()