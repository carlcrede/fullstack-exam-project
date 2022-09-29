import React, {useEffect} from "react";
import { Navigate } from 'react-router-dom';

function Logout() {
    useEffect(() => {
        localStorage.setItem('token', '');
    }, []);
    return <Navigate to="/"/>;
}
export default Logout