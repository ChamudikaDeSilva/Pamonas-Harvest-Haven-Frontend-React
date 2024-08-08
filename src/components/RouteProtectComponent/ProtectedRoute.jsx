// src/components/ProtectedRoute.js
import React, { useContext } from 'react';
import { Navigate } from 'react-router-dom';
import AuthContext from '../../contexts/AuthContext';

const ProtectedRoute = ({ element }) => {
    const { isAuthenticated } = useContext(AuthContext);
    console.log('ProtectedRoute - isAuthenticated:', isAuthenticated); // Debugging
    return isAuthenticated ? element : <Navigate to="/" />;
};

export default ProtectedRoute;
