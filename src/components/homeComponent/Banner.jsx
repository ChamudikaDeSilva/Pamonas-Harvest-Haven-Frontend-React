import React from 'react';

function Banner() {
  return (
    <div className="container-fluid banner bg-amber-500 my-0 left-0 w-full z-10">
      <div className="container py-5">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-8 items-center">
          <div className="py-4 md:ml-24">  {/* Further increase left margin for the text container */}
            <h1 className="text-5xl md:text-6xl text-white font-bold">Fresh Exotic Fruits</h1>
            <p className="font-light text-4xl md:text-4xl text-gray-600 mb-4">In Our Store</p>
            <p className="text-lg md:text-xl text-dark mb-4">
              Discover a world of fresh, exotic fruits handpicked just for you. Our store offers a unique selection of high-quality produce that brings vibrant flavors and essential nutrients to your table.
            </p>
            <a href=" " className="banner-btn btn border-2 border-white rounded-full text-dark py-3 px-5 inline-block hover:bg-lime-500">BUY</a>
          </div>
          <div className="relative">
            <img src="Images/baner-1.png" alt="Fresh Exotic Fruits" className="w-full rounded transform translate-x-40" />  {/* Further increase translate-x value */}
            <div className="absolute top-0 left-0 bg-white rounded-full flex items-center justify-center w-32 h-32">
              <h1 className="text-6xl font-bold text-gray-600">1</h1>
              <div className="flex flex-col ml-2">
                <span className="text-4xl text-gray-600 font-semi-bold">$50</span>
                <span className="text-4xl font-bold text-gray-600">kg</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Banner;