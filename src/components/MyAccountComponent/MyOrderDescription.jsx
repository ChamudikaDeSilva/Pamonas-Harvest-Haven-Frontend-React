import React, { useState } from 'react';
import { motion } from 'framer-motion';



const MyOrderDescription = () => {
    const [hovering, setHovering] = useState(false);

  // Handler to toggle hover state
  const handleMouseEnter = () => setHovering(true);
  const handleMouseLeave = () => setHovering(false);
    return (
        <div className='flex items-center w-full p-6 bg-gray-50'>
            {/* Left Image */}
            <div className='w-1/3 flex justify-center'>
                <motion.img
                    src="/Images/Pamonas/orders1.png" 
                    alt="Left side visual" 
                    className='w-2/3 h-auto rounded-lg ' 
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
            </div>

            {/* Center Text */}
            <div className='w-1/3 text-center'>
                <h1 className='text-3xl font-bold text-lime-600 mb-4'>Welcome to Your Orders</h1>
                <p className='text-lg text-gray-700 font-light'>
                    Here you can track the progress of all your orders, review details, and make sure everything is just the way you like it.
                    Thank you for choosing us to be part of your journey. We're here to make sure your experience is smooth and delightful!
                </p>
            </div>

            {/* Right Image */}
            <div className='w-1/3 flex justify-center'>
            <motion.img
                    src="/Images/Pamonas/orders2.png" 
                    alt="Right side visual" 
                    className='w-2/3 h-auto rounded-lg ' 
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
            </div>
        </div>
    );
};

export default MyOrderDescription;
