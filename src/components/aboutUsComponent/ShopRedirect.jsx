import React from 'react';

const ShopRedirect = () => {
  return (
    <div className="bg-green-700 w-full py-10 flex flex-col items-center justify-center">
      <div className="max-w-4xl mx-auto flex flex-col md:flex-row items-start md:items-center">
        <div className="md:w-2/3 px-2">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">Shop with Us</h2><div className="w-20 h-2 bg-amber-500 my-4"></div>
          <p className="text-gray-200 mb-6 italic font-light text-xl">
            Explore Pamona's Harvest Haven and discover the freshest and healthiest organic produce. Our commitment is to provide food that nourishes your body and respects the planet through sustainable farming practices.
          </p>
          <button className="bg-lime-500 text-white font-semibold py-2 px-4 rounded-md hover:bg-amber-500 transition duration-300">
            Shop
          </button>
        </div>
        <div className="md:w-1/3 flex justify-end items-center px-2 mt-4 md:mt-0">
          <img
            src="/Images/Pamonas/basket.png" // Replace with the actual image path
            alt="Shop with Us"
            className="w-full h-auto rounded-lg"
          />
        </div>
      </div>
    </div>
  );
};

export default ShopRedirect;
