// src/api/axiosConfig.js
import axios from 'axios';
import { message } from 'antd';

const BASE_URL = import.meta.env.VITE_API_BASE_URL;

const axiosInstance = axios.create({
  baseURL: BASE_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

// Request interceptor to include token
axiosInstance.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem('token');
    if (token) {
      config.headers['Authorization'] = `Bearer ${token}`;
    }
    return config;
  },
  (error) => Promise.reject(error)
);

// Response interceptor to handle errors globally
axiosInstance.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response) {
      if (error.response.status === 401) {
        localStorage.removeItem('token');
        message.error('Session expired. Please login again.');
        window.location.href = '/login';
      } else if (error.response.data?.message) {
        message.error(error.response.data.message);
      } else {
        message.error('Something went wrong!');
      }
    } else {
      message.error('Network error!');
    }
    return Promise.reject(error);
  }
);

export default axiosInstance;
