import React from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const PromoCards = () => {
  const navigate = useNavigate();
  const { ref: cardRef, inView } = useInView({ triggerOnce: true });

  const handleCardClick = () => {
    navigate('/shop');
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 100 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  return (
    <div className="container mx-auto py-10">
      <div className="flex flex-col lg:flex-row justify-between gap-4">
        {/* Card 1 */}
        <motion.div
          className="w-full lg:w-1/2 h-64 bg-cover bg-center cursor-pointer"
          style={{
            backgroundImage: "url('/Images/Pamonas/banners/vegetables2.jpg')",
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
          onClick={handleCardClick}
          variants={cardVariants}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          ref={cardRef}
        >
          <div className="flex items-center justify-center h-full hover:bg-black hover:bg-opacity-25">
            {/* Optional overlay content */}
          </div>
        </motion.div>

        {/* Card 2 */}
        <motion.div
          className="w-full lg:w-1/2 h-64 bg-cover bg-center cursor-pointer"
          style={{
            backgroundImage: "url('/Images/Pamonas/banners/papaya.jpg')",
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
          onClick={handleCardClick}
          variants={cardVariants}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          ref={cardRef}
        >
          <div className="flex items-center justify-center h-full hover:bg-black hover:bg-opacity-25">
            {/* Optional overlay content */}
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default PromoCards;
