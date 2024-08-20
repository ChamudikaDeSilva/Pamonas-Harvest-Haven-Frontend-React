import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Autoplay } from 'swiper/modules';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartShopping, faEye, faHeart } from '@fortawesome/free-solid-svg-icons';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/autoplay';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const DealsCombos = () => {
  const productsData = [
    {
      image: 'Images/Pamonas/baskets/veg1.png',
      price: '$20.00',
      name: 'Small Veg Combo',
    },
    {
      image: 'Images/Pamonas/baskets/veg2.png',
      price: '$15.00',
      name: 'Large Veg Combo',
    },
    {
      image: 'Images/Pamonas/baskets/fruit1.png',
      price: '$30.00',
      name: 'Large Fruit Combo',
    },
    {
      image: 'Images/Pamonas/baskets/fruit-basket.jpg',
      price: '$25.00',
      name: 'Small Fruit Combo',
    },
    {
      image: 'Images/Pamonas/baskets/meat-1.png',
      price: '$10.00',
      name: 'Meat Combo',
    },
    {
      image: 'Images/Pamonas/baskets/dairy1.png',
      price: '$10.00',
      name: 'Dairy Combo',
    },
    {
      image: 'Images/Pamonas/baskets/mix1.png',
      price: '$10.00',
      name: 'Mix Combo',
    },
  ];

  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  const slideInVariants = {
    hidden: { opacity: 0, y: 100 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
  };

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={inView ? 'visible' : 'hidden'}
      variants={slideInVariants}
      className="relative bg-fixed bg-cover bg-gray-100 bg-center py-10"
    >
      <div className="flex items-center justify-center pl-24 pr-22">
        <h2
          className="text-3xl md:text-4xl lg:text-5xl text-white font-semibold mb-4 md:mb-6"
          style={{
            textShadow: '1px 1px 0 #15803d, -1px -1px 0 #15803d, 1px -1px 0 #15803d, -1px 1px 0 #15803d',
          }}
        >
          Today’s Best Deal
        </h2>
        <div className="h-px flex-1 bg-green-600 pr-24"></div>
      </div>
      <div className="container mx-auto mt-10 pb-10 relative z-10">
        <Swiper
          modules={[Autoplay, Navigation]}
          spaceBetween={20}
          slidesPerView={1} // Default to 1 slide for small screens
          breakpoints={{
            640: { slidesPerView: 2, spaceBetween: 20 }, // 2 slides on small screens
            768: { slidesPerView: 3, spaceBetween: 20 }, // 3 slides on medium screens
            1024: { slidesPerView: 4, spaceBetween: 20 }, // 4 slides on large screens
          }}
          navigation={{ nextEl: '.swiper-button-next', prevEl: '.swiper-button-prev' }}
          autoplay={{ delay: 3000 }}
          loop={true}
        >
          {productsData.map((product, index) => (
            <SwiperSlide key={index}>
              <div className="flex flex-col items-center p-4 bg-white shadow-lg">
                <div className="w-full h-40 mb-4">
                  <img
                    src={product.image}
                    alt={`Product ${index + 1}`}
                    className="w-full h-full object-cover"
                  />
                </div>
                <h2 className="text-black font-bold text-xl mb-2">{product.name}</h2>
                <h2 className="text-gray-700 font-semibold text-sm sm:text-base mb-2">
                  {product.price}
                </h2>
                <div className="flex justify-center items-center space-x-4 mt-2">
                  <FontAwesomeIcon icon={faCartShopping} className="text-amber-500 text-lg hover:text-gray-700 transition duration-300" />
                  <FontAwesomeIcon icon={faEye} className="text-amber-500 text-lg hover:text-gray-700 transition duration-300" />
                  <FontAwesomeIcon icon={faHeart} className="text-amber-500 text-lg hover:text-gray-700 transition duration-300" />
                </div>
              </div>
            </SwiperSlide>
          ))}
          <div className="swiper-button-prev text-lime-500"></div>
          <div className="swiper-button-next text-lime-500"></div>
        </Swiper>
      </div>
    </motion.div>
  );
};

export default DealsCombos;
