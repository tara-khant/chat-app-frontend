// src/api/auth.js
import axios from './axiosConfig';

// Signup user
export const signupUser = async ({ username, password }) => {
  try {
    const response = await axios.post('/auth/signup', { username, password });
    return response.data;
  } catch (err) {
    const message =
      err.response?.data?.message || err.message || 'Signup failed';
    throw new Error(message);
  }
};

// Login user
export const loginUser = async ({ username, password }) => {
  try {
    const response = await axios.post('/auth/login', { username, password });
    return response.data;
  } catch (err) {
    const message =
      err.response?.data?.message || err.message || 'Login failed';
    throw new Error(message);
  }
};
