import React, {useEffect} from "react";
import { Navigate } from 'react-router-dom';
import AuthService from "./services/AuthService";

function Logout() {
    useEffect(() => {
        AuthService.logout(sessionStorage.getItem("userId")!).then();
    }, []);
    return <Navigate to="/"/>;
}
export default Logout