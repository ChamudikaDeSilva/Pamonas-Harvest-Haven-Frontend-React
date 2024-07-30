import React, { createContext, useState } from 'react';
import axios from 'axios';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);

    const register = async (name, email, password, confirmPassword) => {
        try {
            const response = await axios.post('http://127.0.0.1:8000/api/auth/register', {
                name,
                email,
                password,
                password_confirmation: confirmPassword
            });
            setUser(response.data.user);
            localStorage.setItem('token', response.data.token);
        } catch (error) {
            console.error('Registration error:', error.response.data);
            throw error;
        }
    };

    const login = async (email, password) => {
        try {
            const response = await axios.post('http://127.0.0.1:8000/api/auth/login', { email, password });
            console.log('Login response:', response.data); // Debugging line
            setUser(response.data.user);
            // Adjust the path to match the actual response structure
            localStorage.setItem('token', response.data.token || response.data.authorisation?.token || response.data.authorization?.token);
        } catch (error) {
            console.error('Login error:', error.response.data);
            throw error;
        }
    };
    

    const logout = () => {
        setUser(null);
        localStorage.removeItem('token');
    };

    const getCurrentUser = async () => {
        try {
            const token = localStorage.getItem('token');
            if (token) {
                const response = await axios.get('http://127.0.0.1:8000/api/auth/user', {
                    headers: { Authorization: `Bearer ${token}` },
                });
                setUser(response.data);
            }
        } catch (error) {
            console.error('Fetch current user error:', error);
        }
    };

    return (
        <AuthContext.Provider value={{ user, register, login, logout, getCurrentUser }}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthContext;
