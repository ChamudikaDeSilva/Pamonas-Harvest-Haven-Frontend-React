import React from 'react';
import { Link } from 'react-router-dom';

const ShopRedirect = () => {
  return (
    <div
      className=" w-full py-10 flex flex-col items-center justify-center"
      style={{
        backgroundImage: 'url(/Images/svg.png)',
        backgroundAttachment: 'fixed',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      <div className="max-w-4xl mx-auto flex flex-col md:flex-row items-start md:items-center">
        <div className="md:w-2/3 px-2">
          <h2 className="text-4xl md:text-5xl font-bold text-black mb-4">Shop with Us</h2>
          <div className="w-20 h-2 bg-amber-500 my-4"></div>
          <p className="text-gray-800 mb-6 italic font-light text-xl">
            Explore Pamona's Harvest Haven and discover the freshest and healthiest organic produce. Our commitment is to provide food that nourishes your body and respects the planet through sustainable farming practices.
          </p>
          
          <Link to="/shop">
            <button className="bg-lime-500 text-white font-semibold py-2 px-4 rounded-md hover:bg-amber-500 transition duration-300">
              Shop
            </button>
          </Link>
          
        </div>
        <div className="md:w-1/3 flex justify-end items-center px-2 mt-4 md:mt-0">
          <img
            src="/Images/Pamonas/basket.png" 
            alt="Shop with Us"
            className="w-full h-auto rounded-lg"
          />
        </div>
      </div>
    </div>
  );
};

export default ShopRedirect;
