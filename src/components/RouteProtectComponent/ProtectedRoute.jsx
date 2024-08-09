import React, { useContext } from 'react';
import { Navigate } from 'react-router-dom';
import AuthContext from '../../contexts/AuthContext';

const ProtectedRoute = ({ element }) => {
    const { isAuthenticated, isLoading } = useContext(AuthContext);

    if (isLoading) {
        return  <div className='absolute inset-0 flex justify-center items-center bg-white bg-opacity-80 z-50'>
            <div className='relative w-64 p-4'>
            <span id='ProgressLabel' className='sr-only'>
                Loading
            </span>
            <span
                role='progressbar'
                aria-labelledby='ProgressLabel'
                aria-valuenow='75'
                className='block rounded-full bg-gray-200'
            >
                <span
                className='block h-3 rounded-full bg-[repeating-linear-gradient(45deg,_var(--tw-gradient-from)_0,_var(--tw-gradient-from)_20px,_var(--tw-gradient-to)_20px,_var(--tw-gradient-to)_40px)] from-lime-400 to-lime-500 animate-pulse'
                style={{ width: '75%' }}
                ></span>
            </span>
            </div>
      </div>; 
    }

    return isAuthenticated ? element : <Navigate to="/" />;
};

export default ProtectedRoute;
