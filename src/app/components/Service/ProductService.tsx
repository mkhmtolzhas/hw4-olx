import axios from 'axios';
import { toast } from 'react-toastify';


const axiosProducts = axios.create({
    baseURL: 'https://fakestoreapi.com',
});

axiosProducts.interceptors.request.use(config => {
    return config;
}, error => {
    toast.error('Request error');
    return Promise.reject(error);
});

axiosProducts.interceptors.response.use(response => {
    return response;
}, error => {
    if (error.response && error.response.status === 401) {
        toast.error('Unauthorized access');
    } else if (error.response && error.response.status === 500) {
        toast.error('Server error');
    } else {
        toast.error('An error occurred');
    }
    return Promise.reject(error);
});

export default axiosProducts;


export { axiosProducts }