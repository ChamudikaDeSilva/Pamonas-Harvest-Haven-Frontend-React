import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/autoplay';

const Testimonials = () => {
  const testimonialsData = [
    {
      text: "I absolutely love the quality of the products and the exceptional customer service provided by Pomona's HarvestHaven. Their fresh produce always exceeds my expectations!",
      name: "Ann",
      profession: "Doctor",
      rating: 5,
      image: "Images/testimonial-1.jpg"
    },
    {
      text: "As a busy professional, I rely on Pomona's HarvestHaven to deliver fresh and organic groceries to my doorstep. Their wide selection and convenient service make my life so much easier!",
      name: "Jesica",
      profession: "Lawyer",
      rating: 5,
      image: "Images/testimonial-2.jpg"
    },
    {
      text: "I've been a loyal customer of Pomona's HarvestHaven for years, and I'm continually impressed by the freshness and taste of their fruits and vegetables. Their commitment to quality is unmatched!",
      name: "Adam",
      profession: "Accountant",
      rating: 5,
      image: "Images/testimonial-3.jpg"
    },
  ];

  return (
    <div 
      className="relative bg-fixed bg-cover bg-center py-10" 
      style={{ backgroundImage: `url('Images/Pamonas/fruits & vegetables/testi-banner2.jpg')` }}
    >
      <div className="bg-black bg-opacity-50 absolute inset-0"></div>
      <div className="container mx-auto mt-10 pb-10 relative z-10">
        <Swiper
          modules={[Autoplay, Pagination]}
          spaceBetween={50}
          slidesPerView={1}
          pagination={{ clickable: true }}
          autoplay={{ delay: 3000 }}
        >
          {testimonialsData.map((testimonial, index) => (
            <SwiperSlide key={index}>
              <div className="flex flex-col items-center p-6 text-center" style={{ background: 'none', border: 'none' }}>
                <div className="w-24 h-24 mb-4">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="rounded-full w-full h-full object-cover"
                  />
                </div>
                <h2 className="text-lime-500 font-semibold text-xl mb-1">{testimonial.name}</h2>
                <p className="text-white text-lg mb-2">{testimonial.profession}</p>
                <div className="w-full md:w-3/4 lg:w-1/2">
                  <p className="text-white text-lg font-light break-words whitespace-pre-wrap">
                    {testimonial.text}
                  </p>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default Testimonials;
