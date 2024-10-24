import axios from 'axios';

const axiosInstance = axios.create({
  baseURL: 'http://localhost:5000/catalog', // Sesuaikan dengan URL backend Anda
  headers: {
    'Content-Type': 'application/json',
  },
});

export default axiosInstance;
