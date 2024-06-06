import React from 'react';

const TopInfo = () => (
  <div className="top-info flex flex-wrap justify-between items-center px-4 py-1 bg-lime-500 lg:w-full lg:mx-auto lg:ml-auto sm:px-8 md:px-16 xl:px-24">
    <div className="flex items-center space-x-4">
      <div className="flex items-center">
        <i className="fas fa-map-marker-alt text-secondary"></i>
        <a href=" " className="text-white text-sm ml-2">123 Street, New York</a>
      </div>
      <div className="flex items-center">
        <i className="fas fa-envelope text-secondary"></i>
        <a href=" " className="text-white text-sm ml-2">Email@Example.com</a>
      </div>
    </div>
    <div className="top-link flex items-center space-x-4">
      <a href=" " className="text-white text-sm">Privacy Policy</a>
      <span className="text-white">/</span>
      <a href=" " className="text-white text-sm">Terms of Use</a>
      <span className="text-white">/</span>
      <a href=" " className="text-white text-sm">Sales and Refunds</a>
    </div>
  </div>
);

const AddressComponent = () => (
  <TopInfo />
);

export default AddressComponent;
