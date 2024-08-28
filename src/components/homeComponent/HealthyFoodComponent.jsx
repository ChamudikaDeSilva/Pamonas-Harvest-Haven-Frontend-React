import React, { useState, useEffect } from 'react';
import { FaCheckCircle, FaSeedling, FaCarrot, FaAppleAlt } from 'react-icons/fa';
import { motion } from 'framer-motion';

const HealthyFoodComponent = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const images = ['/Images/Pamonas/baskets/girl.jpg'];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 5000); // Change image every 5 seconds

    return () => clearInterval(interval);
  }, [images.length]);

  // State for handling hover effect
  const [hovering, setHovering] = useState(false);

  // Handler to toggle hover state
  const handleMouseEnter = () => setHovering(true);
  const handleMouseLeave = () => setHovering(false);

  return (
    <div className="relative pt-8 pb-8">
      {/* Orange image (top left) */}
      <motion.img
        src="/Images/Pamonas/orange.png"
        alt="Orange"
        className="absolute top-0 left-0 w-32 h-32 md:w-48 md:h-48"
        animate={{
          rotate: hovering ? 360 : 0, // Rotate on hover
        }}
        transition={{
          duration: 10, // Slow rotation speed
          repeat: Infinity, // Infinite rotation
          ease: "linear",
        }}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      />

      {/* Onion image (bottom right) */}
      <motion.img
        src="/Images/Pamonas/avacado.png"
        alt="Onion"
        className="absolute bottom-1/3 right-0 w-32 h-32 md:w-48 md:h-48"
        animate={{
          rotate: hovering ? -360 : 0, // Rotate on hover
        }}
        transition={{
          duration: 10, // Slow rotation speed
          repeat: Infinity, // Infinite rotation
          ease: "linear",
        }}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      />

    <motion.img
        src="/Images/Pamonas/onion.png"
        alt="Onion"
        className="absolute bottom-1/5 right-0 w-32 h-32 md:w-48 md:h-48"
        animate={{
          rotate: hovering ? -360 : 0, // Rotate on hover
        }}
        transition={{
          duration: 10, // Slow rotation speed
          repeat: Infinity, // Infinite rotation
          ease: "linear",
        }}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      />

      <div className="container mx-auto flex flex-col md:flex-row items-center py-12 px-4">
        <div className="md:w-2/5 flex justify-center pt-0">
          <motion.img
            src={images[currentImageIndex]}
            alt="Healthy Food"
            className="w-full h-auto"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            transition={{ duration: 0.5 }}
          />
        </div>
        <div className="md:w-3/5 text-black p-8 rounded-2xl">
          <h2
            className="text-4xl md:text-5xl font-bold mb-4 mb-2 pl-2 text-white"
            style={{
              textShadow:
                '1px 1px 0 #15803d, -1px -1px 0 #15803d, 1px -1px 0 #15803d, -1px 1px 0 #15803d',
            }}
          >
            Best Organic Fruits And Vegetables
          </h2>
          <h2 className="text-sm font-semibold tracking-wide uppercase mb-2 pl-2 text-gray-600">
            Get to know us
          </h2>
          <h1 className="text-4xl md:text-4xl text-green-700 font-semibold mb-4 pl-2">
            Pamona's Harvest Haven
          </h1>
          <p className="mb-6 pl-2">
            Welcome to Pamona's Harvest Haven, your source for the freshest and
            healthiest{' '}
            <span className="text-lime-500 font-style: italic text-xl">
              organic
            </span>{' '}
            produce. <br></br>We are dedicated to growing food that nourishes
            your body and respects the planet.
          </p>
          <ul className="mb-6 pl-2">
            <li className="flex items-center mb-2">
              <FaCheckCircle className="text-yellow-500 mr-2" />
              Fresh, organic, and sustainably grown produce.
            </li>
            <li className="flex items-center mb-2">
              <FaCheckCircle className="text-yellow-500 mr-2" />
              Commitment to environmental stewardship.
            </li>
            <li className="flex items-center mb-2">
              <FaCheckCircle className="text-yellow-500 mr-2" />
              Supporting local farmers and communities.
            </li>
          </ul>
          <div className="flex items-center space-x-6 pl-2">
            <div className="flex flex-col items-center">
              <FaSeedling className="text-4xl text-green-400" />
              <p className="mt-2 text-lg font-bold">100+</p>
              <p className="text-sm">Organic Farms</p>
            </div>
            <div className="flex flex-col items-center">
              <FaCarrot className="text-4xl text-orange-400" />
              <p className="mt-2 text-lg font-bold">50+</p>
              <p className="text-sm">Fresh Vegetables</p>
            </div>
            <div className="flex flex-col items-center">
              <FaAppleAlt className="text-4xl text-red-400" />
              <p className="mt-2 text-lg font-bold">50+</p>
              <p className="text-sm">Juicy Fruits</p>
            </div>
          </div>
          <div className="text-3xl md:text-4xl font-bold mt-6 pl-2">
            2,500+
            <p className="text-lg font-normal font-style: italic">
              Agriculture, Organic and Dairy Products
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HealthyFoodComponent;
