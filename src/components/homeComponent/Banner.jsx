import React from 'react';
import { Link } from 'react-router-dom';

function Banner() {
  return (
    <div className="container-fluid banner bg-amber-500 my-0 left-0 w-full z-10 relative py-10">
      {/* Adjust top padding to accommodate the navbar */}
      <div className="container py-5 pt-24"> 
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-8 items-center">
          <div className="py-4 md:ml-24">
            <h1 className="text-5xl md:text-6xl text-white font-bold pl-2 ">Fresh Exotic Products</h1>
            <p className="font-light text-4xl md:text-4xl text-gray-600 mb-4 pl-2">In Our Store</p>
            <p className="text-lg md:text-xl text-dark mb-4 pl-2">
              Discover a world of fresh, exotic products handpicked just for you. 
              Our store offers a unique selection of high-quality produce that brings vibrant flavors and essential nutrients to your table.
            </p>
            <Link to="/shop" className="banner-btn btn border-2 border-white rounded-full text-dark py-3 px-5 inline-block hover:bg-lime-500 ">SHOP</Link>
          </div>
          <div className="relative">
            <img src="Images/baner-1.png" alt="Fresh Exotic Fruits" className="w-full rounded-md md:max-w-full md:rounded-none md:transform max-h-full" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Banner;
