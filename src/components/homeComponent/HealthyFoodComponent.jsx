import React, { useState, useEffect } from 'react';
import { FaCheckCircle, FaSeedling, FaCarrot, FaAppleAlt } from 'react-icons/fa';

const HealthyFoodComponent = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const images = [
    //'/Images/Pamonas/video-1-1.jpg',
    '/Images/Pamonas/fruits & vegetables/29364.jpg',
    // Add more image paths as needed
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 5000); // Change image every 5 seconds (adjust as needed)

    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <div className="relative pt-16 bg-gray-100">
      <div className="container mx-auto flex flex-col md:flex-row items-center py-12 px-4">
        <div className="md:w-1/2 flex justify-center relative z-10 md:-mt-16">
          <img
            src={images[currentImageIndex]}
            alt="Healthy Food"
            className="w-full h-auto rounded-lg shadow-lg transition-opacity duration-1000 ease-in-out"
            style={{ opacity: 1 }}
          />
        </div>
        <div className="md:w-1/2 md:pl-10 bg-green-900 text-white pt-8 pb-8 relative z-20 md:-ml-16 rounded-lg shadow-lg pt-16 pb-16">
          <h2 className="text-sm font-semibold tracking-wide uppercase mb-2 pl-2 pr-2">
            Get to know us
          </h2>
          <h1 className="text-4xl md:text-4xl text-lime-400 font-bold mb-4 pl-2 pr-2">
            Pamona's Harvest Haven
          </h1>
          <p className="mb-6 pl-2 pr-2">
            Welcome to Pamona's Harvest Haven, your source for the freshest and healthiest <span className="text-lime-500">organic</span> produce. We are dedicated to growing food that nourishes your body and respects the planet.
          </p>
          <ul className="mb-6">
            <li className="flex items-center mb-2 pl-2 pr-2">
              <FaCheckCircle className="text-yellow-500 mr-2 pl-2" />
              Fresh, organic, and sustainably grown produce.
            </li>
            <li className="flex items-center mb-2 pl-2 pr-2">
              <FaCheckCircle className="text-yellow-500 mr-2 pl-2" />
              Commitment to environmental stewardship.
            </li>
            <li className="flex items-center mb-2 pl-2 pr-2">
              <FaCheckCircle className="text-yellow-500 mr-2 pl-2" />
              Supporting local farmers and communities.
            </li>
          </ul>
          <div className="flex items-center space-x-6 pl-2 pr-2">
            <div className="flex flex-col items-center">
              <FaSeedling className="text-4xl text-green-400" />
              <p className="mt-2 text-lg font-bold">500+</p>
              <p className="text-sm">Organic Farms</p>
            </div>
            <div className="flex flex-col items-center">
              <FaCarrot className="text-4xl text-orange-400" />
              <p className="mt-2 text-lg font-bold">1M+</p>
              <p className="text-sm">Fresh Vegetables</p>
            </div>
            <div className="flex flex-col items-center">
              <FaAppleAlt className="text-4xl text-red-400" />
              <p className="mt-2 text-lg font-bold">750K+</p>
              <p className="text-sm">Juicy Fruits</p>
            </div>
          </div>
          <div className="text-3xl md:text-4xl font-bold mt-6 pl-2 pr-2">
            870,500
            <p className="text-lg font-normal">Agriculture, Organic and Dairy Products</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HealthyFoodComponent;