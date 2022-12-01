import axios from "axios";

export default axios.create({
    baseURL: import.meta.env.PRODUCTION ? 'https://fullstack-backend-s4bv.onrender.com': 'http://localhost:8080',
    headers: {
        'Content-type': 'application/json',
    },
});