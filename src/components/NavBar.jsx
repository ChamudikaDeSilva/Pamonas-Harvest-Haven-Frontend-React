import React, { useState } from 'react';

const NavBar = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  return (
    <nav className="bg-lime-500 p-4 fixed top-0 left-0 w-full z-10">
      <div className="container mx-auto flex items-center justify-between">
        <div> {/* Logo container */}
          <a href="/" className="text-white font-semibold">Pomona's Fruit Hub</a>
        </div>
        <div className="flex items-center space-x-4"> {/* Centered nav items */}
          <a href="/" className="text-white text-base">Home</a>
          <a href="/" className="text-white text-base">Shop</a>
          <a href="/" className="text-white text-base">Shop Details</a>
          <div className="relative">
            <button className="text-white text-base focus:outline-none" onClick={toggleDropdown}>Pages</button>
            {isDropdownOpen && (
              <ul className="absolute text-gray-700 pt-1 bg-gray-200 rounded-lg">
                <li className="group">
                  <a href="#" className="hover:bg-amber-500 py-2 px-4 block whitespace-no-wrap text-sm">Cart</a>
                </li>
                <li className="group">
                  <a href="#" className="hover:bg-amber-500 py-2 px-4 block whitespace-no-wrap text-sm">Checkout</a>
                </li>
                <li className="group">
                  <a href="#" className="hover:bg-amber-500 py-2 px-4 block whitespace-no-wrap text-sm">Testimonial</a>
                </li>
              </ul>
            )}
          </div>
          <a href="/" className="text-white text-base">Contact</a>
        </div>
      </div>
    </nav>
  );
}

export default NavBar;
