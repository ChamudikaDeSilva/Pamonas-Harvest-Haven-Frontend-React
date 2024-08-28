import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTruckFast, faShieldAlt, faPhoneAlt, faSeedling } from '@fortawesome/free-solid-svg-icons';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const Services = () => {
  const { ref, inView } = useInView({
    triggerOnce: false,
    threshold: 0.2, // Trigger the animation when the component is 20% in view
  });

  const variants = {
    hidden: { opacity: 0, y: 100 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
  };

  return (
    <div className="mx-auto py-8 pt-16 pb-16 w-screen">
      <motion.div
        ref={ref}
        className="flex items-center justify-center pl-32"
        initial="hidden"
        animate={inView ? 'visible' : 'hidden'}
        variants={variants}
      >
        <h2
          className="text-3xl md:text-4xl lg:text-5xl text-white font-semibold mb-4 md:mb-6"
          style={{
            textShadow: '1px 1px 0 #15803d, -1px -1px 0 #15803d, 1px -1px 0 #15803d, -1px 1px 0 #15803d',
          }}
        >
          What We Offer
        </h2>
        <div className="h-px flex-1 bg-green-600"></div>
      </motion.div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 pr-4 pl-4">
        {[
          { icon: faTruckFast, title: 'Free Shipping', description: 'Free on orders over $300' },
          { icon: faShieldAlt, title: 'Security Payment', description: '100% secure payment' },
          { icon: faSeedling, title: 'Natural Process', description: 'Fresh Organic Products' },
          { icon: faPhoneAlt, title: '24/7 Support', description: 'Fast support anytime' },
        ].map((service, index) => (
          <motion.div
            key={index}
            className="p-6 text-center transition duration-300 ease-in-out transform hover:scale-105"
            initial="hidden"
            animate={inView ? 'visible' : 'hidden'}
            variants={variants}
          >
            <div className="bg-lime-500 rounded-full p-4 inline-block">
              <FontAwesomeIcon icon={service.icon} className="text-4xl text-white" />
            </div>
            <h3 className="text-lg text-gray-600 font-semibold">{service.title}</h3>
            <p className="text-base text-gray-600 italic">{service.description}</p>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Services;