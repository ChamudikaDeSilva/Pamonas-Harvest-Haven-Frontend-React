import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const ImageContainer = () => {
  const { ref, inView } = useInView({
    triggerOnce: true, // Trigger the animation only once
    threshold: 0.2, // Trigger when 20% of the component is visible
  });

  const containerVariants = {
    hidden: { opacity: 0, y: 100 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 100 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
  };

  const images = [
    { src: "/Images/Pamonas/baskets/farm.png", alt: "Nature", title: "Farm to Hand", description: "Discover the beauty of the natural world", span: true },
    { src: "/Images/Pamonas/baskets/meat2.png", alt: "Food", title: "Fresh Meat, Fish & Eggs" },
    { src: "/Images/Pamonas/baskets/spice.png", alt: "Spices", title: "Spices & Condiments" },
    { src: "/Images/Pamonas/baskets/dairy1.png", alt: "Dairy", title: "Fresh Dairy Products" },
    { src: "/Images/Pamonas/baskets/cereal1.png", alt: "Cereal", title: "Fresh Rice & Grains" },
    { src: "/Images/Pamonas/baskets/veg2.png", alt: "Vegetables", title: "Fresh Vegetables" },
    { src: "/Images/Pamonas/baskets/fruit1.png", alt: "Fruits", title: "Fresh Fruits" },
    { src: "/Images/Pamonas/baskets/yams.png", alt: "Yams", title: "Fresh Yams" },
    { src: "/Images/Pamonas/baskets/green1.png", alt: "Greens", title: "Fresh Greens" },
  ];

  return (
    <motion.div
      ref={ref}
      className="container mx-auto px-4 py-8"
      initial="hidden"
      animate={inView ? 'visible' : 'hidden'}
      variants={containerVariants}
    >
      <div className="grid grid-cols-1 md:grid-cols-4 grid-rows-2 gap-4">
        {images.map((image, index) => (
          <motion.div
            key={index}
            className={`relative overflow-hidden rounded-2xl shadow-lg group ${
              image.span ? 'md:col-span-2 md:row-span-2' : ''
            }`}
            initial="hidden"
            animate={inView ? 'visible' : 'hidden'}
            variants={itemVariants}
          >
            <img src={image.src} alt={image.alt} className="w-full h-full object-cover" />
            <div className="absolute inset-0 bg-black bg-opacity-60 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <div className="absolute bottom-0 left-0 right-0 p-4">
                <h3 className="text-2xl font-bold text-white">{image.title}</h3>
                {image.description && <p className="text-white">{image.description}</p>}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
};

export default ImageContainer;
