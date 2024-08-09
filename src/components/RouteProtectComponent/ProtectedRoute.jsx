import React, { useContext } from 'react';
import { Navigate } from 'react-router-dom';
import AuthContext from '../../contexts/AuthContext';
import IsLoading from '../commonComponent/IsLoading';

const ProtectedRoute = ({ element }) => {
    const { isAuthenticated, isLoading } = useContext(AuthContext);

    if (isLoading) {
        return  <div className='absolute inset-0 flex justify-center items-center bg-white bg-opacity-80 z-50'>
            <IsLoading />
      </div>; 
    }

    return isAuthenticated ? element : <Navigate to="/" />;
};

export default ProtectedRoute;
