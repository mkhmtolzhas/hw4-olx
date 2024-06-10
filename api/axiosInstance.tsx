import axios from 'axios';
import { create } from 'domain';

const axiosInstance = axios.create({
  baseURL: 'https://fakestoreapi.com', 
  headers: {
    'Content-Type': 'application/json',
  },
});


export default axiosInstance;