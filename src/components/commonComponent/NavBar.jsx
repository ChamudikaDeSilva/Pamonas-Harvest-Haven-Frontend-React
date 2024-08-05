import React, { useState, useContext } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass, faCartShopping, faUser, faBars, faTimes, faChevronDown, faChevronUp } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
import { CartContext } from '../../CartContext';
import AuthContext from '../../AuthContext';
import SigninModal from '../shopComponent/SigninModal';
import SignupModal from '../shopComponent/SignupModal';

const NavBar = () => {
    const [isUserDropdownOpen, setIsUserDropdownOpen] = useState(false);
    const [isPagesDropdownOpen, setIsPagesDropdownOpen] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [isSigninModalOpen, setIsSigninModalOpen] = useState(false);
    const [isSignupModalOpen, setIsSignupModalOpen] = useState(false);
    const [activeItem, setActiveItem] = useState('home');
    const { cartCount } = useContext(CartContext);
    const { user, logout } = useContext(AuthContext);

    const toggleUserDropdown = () => {
        setIsUserDropdownOpen(!isUserDropdownOpen);
        if (!isUserDropdownOpen) {
            setIsPagesDropdownOpen(false); // Close pages dropdown when opening user dropdown
        }
    };

    const togglePagesDropdown = () => {
        setIsPagesDropdownOpen(!isPagesDropdownOpen);
        if (!isPagesDropdownOpen) {
            setIsUserDropdownOpen(false); // Close user dropdown when opening pages dropdown
        }
    };

    const toggleMobileMenu = () => {
        setIsMobileMenuOpen(!isMobileMenuOpen);
        if (!isMobileMenuOpen) {
            setIsUserDropdownOpen(false); // Close user dropdown when opening mobile menu
            setIsPagesDropdownOpen(false); // Close pages dropdown when opening mobile menu
        }
    };

    const handleMenuItemClick = (item) => {
        setActiveItem(item);
        setIsMobileMenuOpen(false);
    };

    const handleSwitchToSignin = () => {
        setIsSigninModalOpen(true);
        setIsSignupModalOpen(false);
    };

    const handleSwitchToSignup = () => {
        setIsSigninModalOpen(false);
        setIsSignupModalOpen(true);
    };

    return (
        <nav className="bg-white p-4 sticky top-0 left-0 w-full z-50">
            <div className="container mx-auto flex items-center justify-between">
            <div>
                <Link
                    to="/"
                    className="bg-gradient-to-r from-lime-500 via-amber-400 to-green-600 bg-clip-text text-fill-transparent text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold"
                >
                    Pomona's HarvestHaven
                </Link>
            </div>

                <div className="flex items-center">
                    <div className="ml-4 md:hidden">
                        <button className="text-lime-500 hover:text-amber-500 focus:outline-none" onClick={toggleMobileMenu}>
                            <FontAwesomeIcon icon={isMobileMenuOpen ? faTimes : faBars} className="text-2xl transition duration-300 ease-in-out transform hover:scale-110" />
                        </button>
                    </div>
                </div>

                <div className={`absolute top-full left-0 w-full bg-white md:relative md:flex md:items-center md:justify-center md:space-x-4 ${isMobileMenuOpen ? 'block' : 'hidden'}`}>
                    <div className="flex flex-col sm:flex-row sm:space-x-4 sm:space-y-0">
                        <Link
                            to="/"
                            className={`text-lg font-semibold py-2 px-4 ${activeItem === 'home' ? 'text-amber-500' : 'text-gray-500'} hover:text-amber-500`}
                            onClick={() => handleMenuItemClick('home')}
                        >
                            Home
                        </Link>
                        
                        <Link
                            to="/about-us"
                            className={`text-lg font-semibold py-2 px-4 ${activeItem === 'about-us' ? 'text-amber-500' : 'text-gray-500'} hover:text-amber-500`}
                            onClick={() => handleMenuItemClick('about-us')}
                        >
                            About Us
                        </Link>

                        <Link
                            to="/shop"
                            className={`text-lg font-semibold py-2 px-4 ${activeItem === 'shop' ? 'text-amber-500' : 'text-gray-500'} hover:text-amber-500`}
                            onClick={() => handleMenuItemClick('shop')}
                        >
                            Shop
                        </Link>
                        <div className="relative">
                            <button className="hover:text-amber-500 text-gray-500 text-lg font-semibold focus:outline-none py-2 px-4" onClick={togglePagesDropdown}>
                                Pages <FontAwesomeIcon icon={isPagesDropdownOpen ? faChevronUp : faChevronDown} className="ml-1" />
                            </button>
                            <ul className={`md:absolute md:bg-gray-200 md:rounded-lg md:pt-1 md:text-gray-700 md:w-48 sm:w-40 sm:relative sm:bg-transparent md:shadow-lg ${isPagesDropdownOpen ? 'block' : 'hidden'}`}>
                                <li className="group">
                                    <Link
                                        to="/shopping-cart"
                                        className={`bg-gray-200 text-gray-500 hover:bg-amber-500 py-2 px-4 block whitespace-no-wrap text-base font-semibold ${activeItem === 'cart' ? 'text-amber-500' : ''}`}
                                        onClick={() => handleMenuItemClick('cart')}
                                    >
                                        Cart
                                    </Link>
                                </li>
                                <li className="group">
                                    <Link
                                        to=""
                                        className={`bg-gray-200 text-gray-500 hover:bg-amber-500 py-2 px-4 block whitespace-no-wrap text-base font-semibold ${activeItem === 'checkout' ? 'text-amber-500' : ''}`}
                                        onClick={() => handleMenuItemClick('checkout')}
                                    >
                                        Checkout
                                    </Link>
                                </li>
                                <li className="group">
                                    <Link
                                        to="/testimonial"
                                        className={`bg-gray-200 text-gray-500 hover:bg-amber-500 py-2 px-4 block whitespace-no-wrap text-base font-semibold ${activeItem === 'testimonial' ? 'text-amber-500' : ''}`}
                                        onClick={() => handleMenuItemClick('testimonial')}
                                    >
                                        Testimonial
                                    </Link>
                                </li>
                            </ul>
                        </div>
                        <Link
                            to="/contact"
                            className={`text-lg font-semibold py-2 px-4 ${activeItem === 'contact' ? 'text-amber-500' : 'text-gray-500'} hover:text-amber-500`}
                            onClick={() => handleMenuItemClick('contact')}
                        >
                            Contact
                        </Link>
                    </div>
                    <div className="flex justify-center pb-4 pt-2">
                        <FontAwesomeIcon icon={faMagnifyingGlass} className="hover:text-amber-500 text-lime-500 text-2xl ml-2 md:ml-4" />
                        <Link to="/shopping-cart">
                            <div className="relative">
                                <FontAwesomeIcon icon={faCartShopping} className="hover:text-amber-500 text-lime-500 text-2xl ml-2 md:ml-4" />
                                {cartCount > 0 && (
                                    <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full w-4 h-4 flex items-center justify-center">
                                        {cartCount}
                                    </span>
                                )}
                            </div>
                        </Link>
                        <div className="relative">
                            <FontAwesomeIcon
                                icon={faUser}
                                className="hover:text-amber-500 text-lime-500 text-2xl ml-2 md:ml-4 cursor-pointer"
                                onClick={() => user ? toggleUserDropdown() : setIsSigninModalOpen(true)}
                            />
                            {user && (
                                <ul className={`md:absolute md:bg-gray-200 md:rounded-lg md:pt-1 md:text-gray-700 md:w-48 sm:w-40 sm:relative sm:bg-transparent md:shadow-lg ${isUserDropdownOpen ? 'block' : 'hidden'}`}>
                                    <li className="bg-gray-200 text-gray-500 hover:bg-amber-500 py-2 px-4 block whitespace-no-wrap text-base font-semibold cursor-pointer">
                                        {user.name}
                                    </li>
                                    <li className="bg-gray-200 text-gray-500 hover:bg-amber-500 py-2 px-4 block whitespace-no-wrap text-base font-semibold cursor-pointer" onClick={logout}>
                                        Logout
                                    </li>
                                </ul>
                            )}
                        </div>
                    </div>
                </div>
            </div>
            <SigninModal isOpen={isSigninModalOpen} onClose={() => setIsSigninModalOpen(false)} onSwitchToSignup={handleSwitchToSignup} />
            <SignupModal isOpen={isSignupModalOpen} onClose={() => setIsSignupModalOpen(false)} onSwitchToSignin={handleSwitchToSignin} />
        </nav>
    );
};

export default NavBar;
