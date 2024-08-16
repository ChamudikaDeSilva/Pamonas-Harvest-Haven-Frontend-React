import React from 'react';
import { useInView } from 'react-intersection-observer';
import CountUp from 'react-countup';

function CounterSection() {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.3,
  });

  return (
    <div ref={ref} className="relative py-10 w-full z-10 overflow-hidden bg-gray-200">
      {/* Asymmetric Background Shapes */}
      <div className="absolute top-0 left-0 w-full h-full z-0 overflow-hidden">
        <div className="absolute top-1/2 left-0 w-[150%] h-[150%] bg-lime-500 rounded-full transform -rotate-45 translate-x-[-50%] translate-y-[-50%] opacity-50"></div>
      </div>
      <div className="container max-w-7xl mx-auto z-10 relative">
        <div className="p-12 rounded-lg">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 justify-center">
            <div className="counter bg-white rounded-xl p-12 text-center shadow-lg">
              <i className="fa fa-users text-amber-500 text-6xl mb-6"></i>
              <h4 className="text-2xl font-medium text-lime-500 mb-4">Satisfied Customers</h4>
              <h1 className="text-6xl font-bold text-gray-800">
                {inView && <CountUp end={1963} duration={3} />}
              </h1>
            </div>
            <div className="counter bg-white rounded-xl p-12 text-center shadow-lg">
              <i className="fa fa-star text-amber-500 text-6xl mb-6"></i>
              <h4 className="text-2xl font-medium text-lime-500 mb-4">Quality of Service</h4>
              <h1 className="text-6xl font-bold text-gray-800">
                {inView && <CountUp end={99} duration={3} suffix="%" />}
              </h1>
            </div>
            <div className="counter bg-white rounded-xl p-12 text-center shadow-lg">
              <i className="fa fa-certificate text-amber-500 text-6xl mb-6"></i>
              <h4 className="text-2xl font-medium text-lime-500 mb-4">Quality Certificates</h4>
              <h1 className="text-6xl font-bold text-gray-800">
                {inView && <CountUp end={33} duration={3} />}
              </h1>
            </div>
            <div className="counter bg-white rounded-xl p-12 text-center shadow-lg">
              <i className="fa fa-box text-amber-500 text-6xl mb-6"></i>
              <h4 className="text-2xl font-medium text-lime-500 mb-4">Available Products</h4>
              <h1 className="text-6xl font-bold text-gray-800">
                {inView && <CountUp end={789} duration={3} />}
              </h1>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CounterSection;
