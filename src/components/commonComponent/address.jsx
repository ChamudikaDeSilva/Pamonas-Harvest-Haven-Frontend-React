import React from 'react';

const TopInfo = () => (
  <div className="top-info sticky flex flex-wrap justify-between items-center px-6 py-1 bg-lime-500 w-3/4 rounded-[16px]">
    <div className="flex items-center space-x-4">
      <div className="flex items-center">
        <i className="fas fa-map-marker-alt text-secondary hover:text-amber-500"></i>
        <a href=" " className="text-white text-sm ml-2 hover:text-amber-500">123 Street, New York</a>
      </div>
      <div className="flex items-center">
        <i className="fas fa-envelope text-secondary hover:text-amber-500"></i>
        <a href=" " className="text-white text-sm ml-2 hover:text-amber-500">Email@Example.com</a>
      </div>
    </div>
    <div className="top-link flex items-center space-x-4">
      <a href=" " className="text-white text-sm hover:text-amber-500">Privacy Policy</a>
      <span className="text-white">/</span>
      <a href=" " className="text-white text-sm hover:text-amber-500">Terms of Use</a>
      <span className="text-white">/</span>
      <a href=" " className="text-white text-sm hover:text-amber-500">Sales and Refunds</a>
    </div>
  </div>
);

const AddressComponent = () => (
  <TopInfo />
);

export default AddressComponent;
