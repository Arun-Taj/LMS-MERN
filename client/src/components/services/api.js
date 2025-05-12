import axios from 'axios';

const api = axios.create({
  baseURL: 'http://localhost:5000/api/auth',
  withCredentials: true
});

// Request interceptor to attach token
api.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem('token');
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => Promise.reject(error)
);



// Auth endpoints
export const signup = (userData) => api.post('/signup', userData);
export const login = (credentials) => api.post('/login', credentials);
export const getMe = () => api.get('/me');
export const becomeEducator = () => api.put('/become-educator');

export default api


// export const signup = (userData) => api.post('/signup', userData);
// export const login = (credentials) => api.post('/login', credentials);
// export const getMe = (token) => api.get('/me', {
//   headers: { Authorization: `Bearer ${token}` }
// });


// export const becomeEducator = (token) =>
//   api.put('/become-educator', null, {
//     headers: { Authorization: `Bearer ${token}` },
//   });



// src/services/api.js
// import axios from 'axios';

// const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:5000';

// const api = axios.create({
//   baseURL: `${API_URL}/api/auth`,  // Points at Render in production, localhost in dev
//   withCredentials: true            // Ensures cookies are sent on cross-site requests
// });

// export const signup = userData   => api.post('/signup', userData);
// export const login  = credentials => api.post('/login', credentials);
// export const getMe  = token       =>
//   api.get('/me', { headers: { Authorization: `Bearer ${token}` } });
