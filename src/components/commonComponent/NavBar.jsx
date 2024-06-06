import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass, faShoppingBag, faUser, faBars, faTimes } from '@fortawesome/free-solid-svg-icons';

const NavBar = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <nav className="bg-white p-4 sticky top-0 left-0 w-full z-10">
      <div className="container mx-auto flex items-center justify-between">
        <div> {/* Logo container */}
          <a href="/" className="hover:text-amber-500 text-lime-500 text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold">Pomona's HarvestHaven</a>
        </div>
        {/* Hamburger menu button for smaller screens */}
        <div className="block sm:hidden">
          <button className="text-lime-500 hover:text-amber-500 focus:outline-none" onClick={toggleMobileMenu}>
            <FontAwesomeIcon icon={isMobileMenuOpen ? faTimes : faBars} className="text-2xl" />
          </button>
        </div>
        <div className={`flex-grow sm:flex sm:items-center sm:justify-center ${isMobileMenuOpen ? 'block' : 'hidden'}`}> {/* Centered nav items */}
          <div className="flex flex-col sm:flex-row sm:space-x-4 sm:space-y-0">
            <a href="/" className="hover:text-amber-500 text-lime-500 text-lg font-semibold py-2 px-4">Home</a>
            <a href="/" className="hover:text-amber-500 text-lime-500 text-lg font-semibold py-2 px-4">Shop</a>
            <a href="/" className="hover:text-amber-500 text-lime-500 text-lg font-semibold py-2 px-4">Shop Details</a>
            <div className="relative">
              <button className="hover:text-amber-500 text-lime-500 text-lg font-semibold focus:outline-none py-3 px-4" onClick={toggleDropdown}>Pages</button>
              {isDropdownOpen && (
                <ul className="absolute text-gray-700 pt-1 bg-gray-200 rounded-lg">
                  <li className="group">
                    <a href="/" className="hover:bg-amber-500 py-2 px-4 block whitespace-no-wrap text-base font-semibold">Cart</a>
                  </li>
                  <li className="group">
                    <a href="/" className="hover:bg-amber-500 py-2 px-4 block whitespace-no-wrap text-base font-semibold">Checkout</a>
                  </li>
                  <li className="group">
                    <a href="/" className="hover:bg-amber-500 py-2 px-4 block whitespace-no-wrap text-base font-semibold">Testimonial</a>
                  </li>
                </ul>
              )}
            </div>
            <a href="/" className="hover:text-amber-500 text-lime-500 font-semibold text-lg py-2 px-4 ">Contact</a>
          </div>
        </div>
        <div className="ml-auto flex items-center hidden sm:flex"> {/* Right-aligned icons */}
          <FontAwesomeIcon icon={faMagnifyingGlass} className="hover:text-amber-500 text-lime-500 text-2xl ml-4" />
          <FontAwesomeIcon icon={faShoppingBag} className="hover:text-amber-500 text-lime-500 text-2xl ml-4" />
          <FontAwesomeIcon icon={faUser} className="hover:text-amber-500 text-lime-500 text-2xl ml-4" />
        </div>
      </div>
    </nav>
  );
}

export default NavBar;
