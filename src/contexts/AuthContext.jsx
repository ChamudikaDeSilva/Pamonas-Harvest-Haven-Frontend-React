import React, { createContext, useState, useEffect } from 'react';
import axios from 'axios';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [isAuthenticated, setIsAuthenticated] = useState(false);


    useEffect(() => {
        getCurrentUser();
    }, []);
    

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
            setIsAuthenticated(true);
        } catch (error) {
            console.error('Registration error:', error.response.data);
            throw error;
        }
    };

    const login = async (email, password) => {
        try {
            const response = await axios.post('http://127.0.0.1:8000/api/auth/login', { email, password });
            setUser(response.data.user);
            localStorage.setItem('token', response.data.authorisation.token);
            setIsAuthenticated(true);
        } catch (error) {
            console.error('Login error:', error.response.data);
            throw error;
        }
    };

    const logout = () => {
        setUser(null);
        setIsAuthenticated(false);
        localStorage.removeItem('token');
    };

    const getCurrentUser = async () => {
        try {
            const token = localStorage.getItem('token');
            console.log('Token found:', token); // Debugging
            if (token) {
                const response = await axios.get('http://127.0.0.1:8000/api/auth/user', {
                    headers: { Authorization: `Bearer ${token}` },
                });
                console.log('User data:', response.data); // Debugging
                setUser(response.data);
                setIsAuthenticated(true); // Ensure this line is reached
            } else {
                setIsAuthenticated(false);
            }
        } catch (error) {
            console.error('Fetch current user error:', error);
            setIsAuthenticated(false); // Ensure to handle errors properly
        }
    };
    
    
    
    

    return (
        <AuthContext.Provider value={{ user, isAuthenticated, register, login, logout, getCurrentUser }}>
            {children}
        </AuthContext.Provider>
    );
    
};

export default AuthContext;
