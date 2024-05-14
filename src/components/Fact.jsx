import React from 'react';

function CounterSection() {
  return (
    <div className="container-fluid py-5">
      <div className="container">
        <div className="p-8 rounded bg-gray-200"> {/* Increased padding */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 justify-center">
            <div className="counter bg-white rounded-lg p-8 text-center"> {/* Increased padding and rounded-lg */}
              <i className="fa fa-users text-amber-500 text-5xl mb-4"></i> {/* Increased icon size */}
              <h4 className="text-xl font-medium text-lime-500 mb-2">Satisfied Customers</h4> {/* Increased font size */}
              <h1 className="text-5xl font-bold text-gray-800">1963</h1> {/* Increased font size */}
            </div>
            <div className="counter bg-white rounded-lg p-8 text-center"> {/* Increased padding and rounded-lg */}
              <i className="fa fa-star text-amber-500 text-5xl mb-4"></i> {/* Increased icon size */}
              <h4 className="text-xl font-medium text-lime-500 mb-2">Quality of Service</h4> {/* Increased font size */}
              <h1 className="text-5xl font-bold text-gray-800">99%</h1> {/* Increased font size */}
            </div>
            <div className="counter bg-white rounded-lg p-8 text-center"> {/* Increased padding and rounded-lg */}
              <i className="fa fa-certificate text-amber-500 text-5xl mb-4"></i> {/* Increased icon size */}
              <h4 className="text-xl font-medium text-lime-500 mb-2">Quality Certificates</h4> {/* Increased font size */}
              <h1 className="text-5xl font-bold text-gray-800">33</h1> {/* Increased font size */}
            </div>
            <div className="counter bg-white rounded-lg p-8 text-center"> {/* Increased padding and rounded-lg */}
              <i className="fa fa-box text-amber-500 text-5xl mb-4"></i> {/* Increased icon size */}
              <h4 className="text-xl font-medium text-lime-500 mb-2">Available Products</h4> {/* Increased font size */}
              <h1 className="text-5xl font-bold text-gray-800">789</h1> {/* Increased font size */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CounterSection;
