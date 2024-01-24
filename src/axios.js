import axios from "axios";

const instance = axios.create({
    baseURL: 'http://localhost:4444'
});

// middleware for get token from localstorage
// and send it to the backend in each request
instance.interceptors.request.use((config) => {
   config.headers.Authorization = window.localStorage.getItem('token');
   return config;
});

export default instance;