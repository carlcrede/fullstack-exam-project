import http from '../http-common';
import {LoginParams} from "../types/types";

class AuthService {

    login = async (user: string, password: string) => await http.post("/auth/login", {user, password})
}

export default new AuthService()