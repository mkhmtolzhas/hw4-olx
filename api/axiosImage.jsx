import axios from 'axios';
import { create } from 'domain';


const axiosImageInstance = axios.create({
    baseURL: 'https://api.escuelajs.co/api/v1/files/upload',
    headers: {
        'Content-Type': 'application/json',
    },
})

export default axiosImageInstance;