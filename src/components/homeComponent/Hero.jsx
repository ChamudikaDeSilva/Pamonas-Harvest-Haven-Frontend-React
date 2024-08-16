import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/autoplay';

const Hero = () => {
  return (
    <div className="relative bg-fixed bg-cover bg-center">
      <Swiper
        modules={[Autoplay, Pagination]}
        spaceBetween={50}
        slidesPerView={1}
        pagination={{ clickable: true }}
        autoplay={{ delay: 4000 }}
      >
        <SwiperSlide>
          <div
            className="relative w-full h-[85vh]"
            style={{
              backgroundImage: `url('/Images/Pamonas/fruits & vegetables/slider6.jpg')`,
              backgroundSize: 'cover',
              backgroundPosition: 'center'
            }}
          >
            <div className="flex flex-col justify-center items-start h-full p-5">
              <h3 className="text-3xl lg:text-2xl font-bold text-amber-500 mb-4">WELCOME TO PAMONA'S HARVEST HAVEN</h3>
              <h1 className="text-3xl lg:text-6xl font-bold text-black mb-4"><span className="text-green-700">Fresh</span> is Our Passion</h1>
              <div className="w-20 h-2 bg-amber-500 my-4"></div>
              <p className="text-lg text-black mb-8 italic">
                Indulge in the freshest, 100% organic produce, meticulously sourced and delivered straight <br></br>to your doorstep.
              </p>
              <button
                className="bg-lime-500 text-white font-bold py-2 px-4 md:px-6 rounded-full shadow-md hover:bg-lime-600 transition duration-300 ease-in-out transform hover:-translate-y-1 hover:scale-105 w-full md:w-auto"
              >
                Shop Now
              </button>
            </div>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div
            className="relative w-full h-[85vh]"
            style={{
              backgroundImage: `url('/Images/Pamonas/fruits & vegetables/slide-2.jpg')`,
              backgroundSize: 'cover',
              backgroundPosition: 'center'
            }}
          >
            <div className="flex flex-col justify-center items-start h-full p-5">
              <h3 className="text-3xl lg:text-2xl font-bold text-amber-500 mb-4">WELCOME TO PAMONA'S HARVEST HAVEN</h3>
              <h1 className="text-3xl lg:text-6xl font-bold text-black mb-4"><span className="text-green-700">Eat Healthy</span> Live a better life.</h1>
              <div className="w-20 h-2 bg-amber-500 my-4"></div>
              <p className="text-lg text-black mb-8 italic">
                Indulge in the freshest, 100% organic produce, meticulously sourced and delivered straight to your doorstep.
              </p>
              <button 
                className="bg-lime-500 text-white font-bold py-2 px-4 md:px-6 rounded-full shadow-md hover:bg-lime-600 transition duration-300 ease-in-out transform hover:-translate-y-1 hover:scale-105 w-full md:w-auto"
              >
                Shop Now
              </button>
            </div>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div
            className="relative w-full h-[85vh]"
            style={{
              backgroundImage: `url('/Images/Pamonas/fruits & vegetables/slider5.jpg')`,
              backgroundSize: 'cover',
              backgroundPosition: 'center'
            }}
          >
            <div className="flex flex-col justify-center items-start h-full p-5">
              <h3 className="text-3xl lg:text-2xl font-bold text-amber-500 mb-4">WELCOME TO PAMONA'S HARVEST HAVEN</h3>
              <h1 className="text-3xl lg:text-6xl font-bold text-black mb-4"><span className="text-green-700">Fresh</span> & Organic Products</h1>
              <div className="w-20 h-2 bg-amber-500 my-4"></div>
              <p className="text-lg text-black mb-8 italic">
                Indulge in the freshest, 100% organic produce, meticulously sourced and delivered straight<br></br> to your doorstep.
              </p>
              <button 
                className="bg-lime-500 text-white font-bold py-2 px-4 md:px-6 rounded-full shadow-md hover:bg-lime-600 transition duration-300 ease-in-out transform hover:-translate-y-1 hover:scale-105 w-full md:w-auto"
              >
                Shop Now
              </button>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Hero;
