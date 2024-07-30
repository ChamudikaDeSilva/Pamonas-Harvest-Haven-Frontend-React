import React, { useState, useContext } from 'react';
import PropTypes from 'prop-types';
import AuthContext from '../../AuthContext';

const SigninModal = ({ isOpen, onClose, onSwitchToSignup }) => {
    const { login } = useContext(AuthContext);
    const [formData, setFormData] = useState({
        email: '',
        password: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await login(formData.email, formData.password);
            onClose();
        } catch (error) {
            console.error("Sign-in error:", error);
        }
    };

    const handleReset = () => {
        setFormData({
            email: '',
            password: ''
        });
    };

    if (!isOpen) return null;
    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50" aria-labelledby="signin-modal" role="dialog" aria-modal="true">
            <div className="relative bg-gray-900 w-full h-full flex items-center justify-center">
                <button
                    onClick={onClose}
                    className="absolute top-4 right-4 text-white font-bold"
                    aria-label="Close"
                >
                    X
                </button>
                <div className="relative py-3 sm:max-w-xl sm:mx-auto w-full">
                    <div className="absolute inset-0 bg-gradient-to-r from-green-700 to-lime-500 shadow-lg transform -skew-y-6 sm:skew-y-0 sm:-rotate-6 sm:rounded-3xl"></div>
                    <div className="text-white relative px-4 py-10 bg-gradient-to-r from-lime-500 to-green-700 shadow-lg sm:rounded-3xl sm:p-20">
                        <div className="text-center pb-6">
                            <h1 className="text-3xl font-bold italic">Sign In</h1>
                            <p className="text-gray-300 font-semibold">Fill up the form below to log into your account.</p>
                        </div>
                        <form onSubmit={handleSubmit}>
                            <input
                                className="shadow mb-4 appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                type="email"
                                placeholder="Email"
                                name="email"
                                value={formData.email}
                                onChange={handleChange}
                                required
                                aria-label="Email"
                            />
                            <input
                                className="shadow mb-4 appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                type="password"
                                placeholder="Password"
                                name="password"
                                value={formData.password}
                                onChange={handleChange}
                                required
                                aria-label="Password"
                            />
                            <div className="flex justify-between">
                                <input
                                    className="shadow bg-lime-500 hover:bg-lime-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                                    type="submit"
                                    value="Sign In ➤"
                                />
                                <input
                                    className="shadow bg-red-600 hover:bg-red-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                                    type="reset"
                                    value="Reset"
                                    onClick={handleReset}
                                />
                            </div>
                        </form>
                        <div className="text-center pt-6">
                            <p className="text-gray-300 font-semibold cursor-pointer" onClick={onSwitchToSignup}>
                                Don't have an account? Sign Up
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

SigninModal.propTypes = {
    isOpen: PropTypes.bool.isRequired,
    onClose: PropTypes.func.isRequired,
    onSwitchToSignup: PropTypes.func.isRequired
};

export default SigninModal;
