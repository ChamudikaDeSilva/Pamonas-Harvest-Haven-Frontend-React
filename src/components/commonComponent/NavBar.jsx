import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass, faShoppingBag, faUser, faBars, faTimes, faChevronDown, faChevronUp } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';

const NavBar = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
    if (!isMobileMenuOpen) {
      setIsDropdownOpen(false); // Close dropdown when opening mobile menu
    }
  };

  return (
    <nav className="bg-white p-4 sticky top-0 left-0 w-full z-50">
      <div className="container mx-auto flex items-center justify-between">
        <div>
          <Link to="/" className="hover:text-amber-500 text-lime-500 text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold">Pomona's HarvestHaven</Link>
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
            <Link to="/" className="hover:text-amber-500 text-gray-500 text-lg font-semibold py-2 px-4">Home</Link>
            <Link to="/about-us" className="hover:text-amber-500 text-gray-500 text-lg font-semibold py-2 px-4">About Us</Link>
            <Link to="/shop" className="hover:text-amber-500 text-gray-500 text-lg font-semibold py-2 px-4">Shop</Link>
            <div className="relative">
              <button className="hover:text-amber-500 text-gray-500 text-lg font-semibold focus:outline-none py-2 px-4" onClick={toggleDropdown}>
                Pages <FontAwesomeIcon icon={isDropdownOpen ? faChevronUp : faChevronDown} className="ml-1" />
              </button>
              <ul className={`md:absolute md:bg-gray-200 md:rounded-lg md:pt-1 md:text-gray-700 md:w-48 sm:w-40 sm:relative sm:bg-transparent md:shadow-lg ${isDropdownOpen ? 'block' : 'hidden'}`}>
                <li className="group">
                  <Link to="/" className="bg-gray-200 text-gray-500 hover:bg-amber-500 py-2 px-4 block whitespace-no-wrap text-base font-semibold">Cart</Link>
                </li>
                <li className="group">
                  <Link to="/" className="bg-gray-200 text-gray-500 hover:bg-amber-500 py-2 px-4 block whitespace-no-wrap text-base font-semibold">Checkout</Link>
                </li>
                <li className="group">
                  <Link to="/" className="bg-gray-200 text-gray-500 hover:bg-amber-500 py-2 px-4 block whitespace-no-wrap text-base font-semibold">Testimonial</Link>
                </li>
              </ul>
            </div>
            <Link to="/" className="hover:text-amber-500 text-gray-500 font-semibold text-lg py-2 px-4">Contact</Link>
          </div>
          <div className="flex justify-center pb-4 pt-2">
            <FontAwesomeIcon icon={faMagnifyingGlass} className="hover:text-amber-500 text-lime-500 text-2xl ml-2 md:ml-4" />
            <FontAwesomeIcon icon={faShoppingBag} className="hover:text-amber-500 text-lime-500 text-2xl ml-2 md:ml-4" />
            <FontAwesomeIcon icon={faUser} className="hover:text-amber-500 text-lime-500 text-2xl ml-2 md:ml-4" />
          </div>
        </div>
      </div>
    </nav>
  );
}

export default NavBar;
