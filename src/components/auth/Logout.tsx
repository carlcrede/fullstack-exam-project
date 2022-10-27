import {useEffect} from "react";
import { Link } from 'react-router-dom';

const Logout = () => {
    useEffect(() => {
        localStorage.setItem('token', '');
    }, []);
    return <Link className="" to="/"/>;
}
export default Logout;