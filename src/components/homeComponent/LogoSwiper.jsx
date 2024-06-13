import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/autoplay';

const LogoSwiper = () => {
  const images = [
    '/Images/Pamonas/logos/logo1.png',
    '/Images/Pamonas/logos/logo2.png',
    '/Images/Pamonas/logos/logo3.png',
    '/Images/Pamonas/logos/logo4.png',
    '/Images/Pamonas/logos/logo5.png',
    '/Images/Pamonas/logos/logo6.png',
    '/Images/Pamonas/logos/logo7.png',
    '/Images/Pamonas/logos/logo8.png',
    '/Images/Pamonas/logos/logo9.png',
    '/Images/Pamonas/logos/logo10.png',
    '/Images/Pamonas/logos/logo11.png',
  ];

  return (
    <div className='container mx-auto mt-20 pb-8'>
      <div className='flex justify-center'>
        <Swiper
          modules={[Autoplay]}
          spaceBetween={30}
          slidesPerView={8}
          autoplay={{ delay: 3000 }}
          className='mySwiper'
        >
          {images.map((img, index) => (
            <SwiperSlide key={index}>
              <div className='flex justify-center'>
                <img
                  src={img}
                  alt={`slide-${index + 1}`}
                  className='rounded-lg max-h-24 w-auto h-auto'
                />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default LogoSwiper;
