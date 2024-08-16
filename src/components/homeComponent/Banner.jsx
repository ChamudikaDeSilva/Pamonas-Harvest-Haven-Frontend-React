import React from 'react';
import { Link } from 'react-router-dom';

function Banner() {
  return (
    <div className="banner-container relative bg-amber-500 my-0 left-0 w-full z-10 py-10">
      {/* Adjust top padding to accommodate the navbar */}
      <div className="banner-content container py-5 pt-24">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-8 items-center">
          <div className="py-4 md:ml-24">
            <h1 className="text-5xl md:text-6xl text-white font-bold pl-2">Fresh Exotic Products</h1>
            <p className="font-light text-4xl md:text-4xl text-gray-600 mb-4 pl-2">In Our Store</p>
            <p className="text-lg md:text-xl text-dark mb-4 pl-2">
              Discover a world of fresh, exotic products handpicked just for you. 
              Our store offers a unique selection of high-quality produce that brings vibrant flavors and essential nutrients to your table.
            </p>
            <Link to="/shop" className="banner-btn btn border-2 border-white rounded-full text-dark py-3 px-5 inline-block hover:bg-lime-500">SHOP</Link>
          </div>
          <div className="relative">
            <img src="Images/baner-1.png" alt="Fresh Exotic Fruits" className="w-full rounded-md md:max-w-full md:rounded-none md:transform max-h-full" />
          </div>
        </div>
      </div>
      <style jsx>{`
        .banner-container {
          background-image: url('data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"%3E%3Cpath fill="%23FFC107" fill-opacity="1" d="M0,160L40,144C80,128,160,96,240,112C320,128,400,192,480,186.7C560,181,640,107,720,69.3C800,32,880,32,960,58.7C1040,85,1120,139,1200,149.3C1280,160,1360,128,1400,112L1440,96L1440,320L1400,320C1360,320,1280,320,1200,320C1120,320,1040,320,960,320C880,320,800,320,720,320C640,320,560,320,480,320C400,320,320,320,240,320C160,320,80,320,40,320L0,320Z"%3E%3C/path%3E%3C/svg%3E');
          background-attachment: fixed;
          background-size: cover;
          background-position: center;
        }
      `}</style>
    </div>
  );
}

export default Banner;
