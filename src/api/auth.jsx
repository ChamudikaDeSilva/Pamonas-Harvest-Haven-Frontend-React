import axios from 'axios';

const API_URL = 'http://127.0.0.1:8000/api/auth';

export const register = (name, email, password, confirmPassword) => {
    return axios.post(`${API_URL}/register`, {
        name,
        email,
        password,
        password_confirmation: confirmPassword
    });
};

export const login = (email, password) => {
    return axios.post(`${API_URL}/login`, { email, password });
};

export const logout = () => {
    return axios.post(`${API_URL}/logout`);
};

export const getCurrentUser = () => {
    return axios.get(`${API_URL}/me`);
};
