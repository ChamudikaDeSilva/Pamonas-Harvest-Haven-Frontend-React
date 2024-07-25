import React, { useState, useContext } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass, faCartShopping, faUser, faBars, faTimes, faChevronDown, faChevronUp } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
import { CartContext } from '../../CartContext';
import { AuthContext } from '../../AuthContext';
import SigninModal from '../shopComponent/SigninModal';
import SignupModal from '../shopComponent/SignupModal';

const NavBar = () => {
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [isSigninModalOpen, setIsSigninModalOpen] = useState(false);
    const [isSignupModalOpen, setIsSignupModalOpen] = useState(false);
    const [activeItem, setActiveItem] = useState('home'); // Define activeItem and setActiveItem
    const { cartCount } = useContext(CartContext);
    const { user, logout } = useContext(AuthContext);

    const toggleDropdown = () => {
        setIsDropdownOpen(!isDropdownOpen);
    };

    const toggleMobileMenu = () => {
        setIsMobileMenuOpen(!isMobileMenuOpen);
        if (!isMobileMenuOpen) {
            setIsDropdownOpen(false); // Close dropdown when opening mobile menu
        }
    };

    const handleMenuItemClick = (item) => {
        setActiveItem(item); // Update activeItem when a menu item is clicked
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
                    <Link to="/" className="hover:text-amber-500 text-lime-500 text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold">
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
                            <button className="hover:text-amber-500 text-gray-500 text-lg font-semibold focus:outline-none py-2 px-4" onClick={toggleDropdown}>
                                Pages <FontAwesomeIcon icon={isDropdownOpen ? faChevronUp : faChevronDown} className="ml-1" />
                            </button>
                            <ul className={`md:absolute md:bg-gray-200 md:rounded-lg md:pt-1 md:text-gray-700 md:w-48 sm:w-40 sm:relative sm:bg-transparent md:shadow-lg ${isDropdownOpen ? 'block' : 'hidden'}`}>
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
                                        to="/checkout"
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
                                onClick={() => user ? toggleDropdown() : setIsSigninModalOpen(true)}
                            />
                            {user && (
                                <ul className={`absolute right-0 mt-2 w-48 bg-white shadow-lg ${isDropdownOpen ? 'block' : 'hidden'}`}>
                                    <li className="px-4 py-2 text-gray-700 hover:bg-gray-200">
                                        {user.name}
                                    </li>
                                    <li className="px-4 py-2 text-gray-700 hover:bg-gray-200 cursor-pointer" onClick={logout}>
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
