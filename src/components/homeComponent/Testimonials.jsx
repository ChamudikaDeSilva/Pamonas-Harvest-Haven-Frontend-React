import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';
import { faArrowLeft, faArrowRight } from '@fortawesome/free-solid-svg-icons';

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

  const [currentTestimonialIndex, setCurrentTestimonialIndex] = useState(0);

  const nextTestimonial = () => {
    setCurrentTestimonialIndex((prevIndex) =>
      prevIndex === testimonialsData.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevTestimonial = () => {
    setCurrentTestimonialIndex((prevIndex) =>
      prevIndex === 0 ? testimonialsData.length - 1 : prevIndex - 1
    );
  };

  const testimonial = testimonialsData[currentTestimonialIndex];

  return (
    <div className="container mx-auto mt-10">
      <div className="flex flex-col md:flex-row items-center justify-between mb-6 pb-2">
      {/*<h1 className="text-3xl md:text-5xl text-left text-gray-600 font-semibold mb-4 md:mb-0">
          Testimonials
        </h1>*/}
        
        <div className="flex space-x-2 md:space-x-4 flex-wrap justify-center md:justify-end">
          <button
              onClick={prevTestimonial}
              className="bg-amber-500 hover:bg-lime-500 rounded-full p-3 text-white focus:outline-none"
            >
              <FontAwesomeIcon icon={faArrowLeft} className="text-xl" />
            </button>
            <button
              onClick={nextTestimonial}
              className="bg-amber-500 hover:bg-lime-500 rounded-full p-3 text-white focus:outline-none ml-4"
            >
              <FontAwesomeIcon icon={faArrowRight} className="text-xl" />
            </button>
        </div>
      </div>
      <div className="max-w-3xl mx-auto grid grid-cols-1 gap-8">
        <div className="col-span-3 md:col-span-2 bg-white border border-amber-500 rounded-lg shadow-md overflow-hidden">
            <div className="p-4">
              <p className="text-gray-900 text-base mb-4 md:mb-6">{testimonial.text}</p>
              <hr className="border-t border-amber-500 my-4" />
              <div className="flex items-center">
                <div className="bg-gray-200 rounded-full p-1 mr-3">
                  <img src={testimonial.image} className="w-12 h-12 rounded-full" alt={testimonial.name} />
                </div>
                <div>
                  <h2 className="text-lime-500 font-semibold mb-1">{testimonial.name}</h2>
                  <p className="text-gray-600 text-lg mb-1">{testimonial.profession}</p>
                  <div className="flex text-lime-500">
                    {[...Array(testimonial.rating)].map((_, index) => (
                      <FontAwesomeIcon key={index} icon={faStar} className="text-xl" />
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
  );
};

export default Testimonials;
