import axios from 'axios';

const api = axios.create({
  baseURL: 'http://localhost:5000/api/auth',
  withCredentials: true
});

export const signup = (userData) => api.post('/signup', userData);
export const login = (credentials) => api.post('/login', credentials);
export const getMe = (token) => api.get('/me', {
  headers: { Authorization: `Bearer ${token}` }
});