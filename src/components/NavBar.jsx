import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass, faShoppingBag, faUser } from '@fortawesome/free-solid-svg-icons';

const NavBar = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  return (
    <nav className="bg-white sm-block p-4 sticky top-0 left-0 w-full z-10">
      <div className="container mx-auto flex items-center justify-between">
        <div> {/* Logo container */}
          <a href="/" className="hover:text-amber-500 text-lime-500 text-4xl font-bold">Pomona's Harvest Haven</a>
        </div>
        <div className="flex items-center justify-center flex-grow"> {/* Centered nav items */}
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
          <div className="ml-auto flex items-center">
            <FontAwesomeIcon icon={faMagnifyingGlass} className="hover:text-amber-500 text-lime-500 text-2xl ml-4" />
            <FontAwesomeIcon icon={faShoppingBag} className="hover:text-amber-500 text-lime-500 text-2xl ml-4" />
            <FontAwesomeIcon icon={faUser} className="hover:text-amber-500 text-lime-500 text-2xl ml-4" />
          </div>
        
      </div>
    </nav>
  );
}

export default NavBar;
