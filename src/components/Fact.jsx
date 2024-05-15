import React from 'react';

function CounterSection() {
  return (
    <div className="container-fluid py-10"> {/* Increased vertical padding */}
      <div className="container max-w-7xl mx-auto"> {/* Set a max-width and center the container */}
        <div className="p-12 rounded-lg bg-gray-200"> {/* Increased padding */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 justify-center"> {/* Increased gap */}
            <div className="counter bg-white rounded-xl p-12 text-center"> {/* Increased padding and rounded-xl */}
              <i className="fa fa-users text-amber-500 text-6xl mb-6"></i> {/* Increased icon size */}
              <h4 className="text-2xl font-medium text-lime-500 mb-4">Satisfied Customers</h4> {/* Increased font size */}
              <h1 className="text-6xl font-bold text-gray-800">1963</h1> {/* Increased font size */}
            </div>
            <div className="counter bg-white rounded-xl p-12 text-center"> {/* Increased padding and rounded-xl */}
              <i className="fa fa-star text-amber-500 text-6xl mb-6"></i> {/* Increased icon size */}
              <h4 className="text-2xl font-medium text-lime-500 mb-4">Quality of Service</h4> {/* Increased font size */}
              <h1 className="text-6xl font-bold text-gray-800">99%</h1> {/* Increased font size */}
            </div>
            <div className="counter bg-white rounded-xl p-12 text-center"> {/* Increased padding and rounded-xl */}
              <i className="fa fa-certificate text-amber-500 text-6xl mb-6"></i> {/* Increased icon size */}
              <h4 className="text-2xl font-medium text-lime-500 mb-4">Quality Certificates</h4> {/* Increased font size */}
              <h1 className="text-6xl font-bold text-gray-800">33</h1> {/* Increased font size */}
            </div>
            <div className="counter bg-white rounded-xl p-12 text-center"> {/* Increased padding and rounded-xl */}
              <i className="fa fa-box text-amber-500 text-6xl mb-6"></i> {/* Increased icon size */}
              <h4 className="text-2xl font-medium text-lime-500 mb-4">Available Products</h4> {/* Increased font size */}
              <h1 className="text-6xl font-bold text-gray-800">789</h1> {/* Increased font size */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CounterSection;
