import React from 'react';

const ShopRedirect = () => {
  return (
    <div className="bg-green-700 w-full py-10 flex flex-col items-center justify-center">
      <div className="max-w-4xl mx-auto flex flex-col md:flex-row items-start md:items-center">
        <div className="md:w-2/3 px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Shop with Us</h2>
          <p className="text-gray-200 mb-6 font-style: italic">
            Explore Pamona's Harvest Haven and discover the freshest and healthiest organic produce. Our commitment is to provide food that nourishes your body and respects the planet through sustainable farming practices.
          </p>
        </div>
        <div className="md:w-1/3 flex justify-end items-center px-4 mt-4 md:mt-0">
          <button className="bg-white text-lime-500 font-semibold py-2 px-4 rounded-md hover:bg-gray-100 transition duration-300">
            Shop
          </button>
        </div>
      </div>
    </div>
  );
};

export default ShopRedirect;
