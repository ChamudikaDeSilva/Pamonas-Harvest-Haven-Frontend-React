import React from 'react';
import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';

const mapContainerStyle = {
  width: '100%',
  height: '400px',
};

const center = {
  lat: 40.748817, // Replace with your latitude
  lng: -73.985428, // Replace with your longitude
};

const ContactUS = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex flex-wrap">
        {/* Google Map Section */}
        <div className="w-full lg:w-5/12 mb-8 lg:mb-0">
          <LoadScript googleMapsApiKey="YOUR_GOOGLE_MAPS_API_KEY">
            <GoogleMap
              mapContainerStyle={mapContainerStyle}
              center={center}
              zoom={12}
            >
              <Marker position={center} />
            </GoogleMap>
          </LoadScript>
        </div>

        {/* Contact Info Section */}
        <div className="w-full lg:w-7/12 lg:pl-8"> {/* Added lg:pl-8 for padding-left */}
          <div className="flex flex-wrap">
            <div className="mb-12 w-full md:w-6/12 md:px-3 lg:w-full lg:px-6 xl:w-6/12">
              <div className="flex items-start">
                <div className="shrink-0">
                  <div className="inline-block rounded-md bg-lime-400 p-4 text-primary">
                    {/* SVG Icon */}
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" className="h-6 w-6">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M14.25 9.75v-4.5m0 4.5h4.5m-4.5 0l6-6m-3 18c-8.284 0-15-6.716-15-15V4.5A2.25 2.25 0 014.5 2.25h1.372c.516 0 .966.351 1.091.852l1.106 4.423c.11.44-.054.902-.417 1.173l-1.293.97a1.062 1.062 0 00-.38 1.21 12.035 12.035 0 007.143 7.143c.441.162.928-.004 1.21-.38l.97-1.293a1.125 1.125 0 011.173-.417l4.423 1.106c.5.125.852.575.852 1.091V19.5a2.25 2.25 0 01-2.25 2.25h-2.25z" />
                    </svg>
                  </div>
                </div>
                <div className="ml-6 grow">
                  <p className="mb-2 font-bold">Technical support</p>
                  <p className="text-sm text-neutral-500">pamonaorg@gmail.com</p>
                  <p className="text-sm text-neutral-500">+94 11 3456720</p>
                </div>
              </div>
            </div>

            <div className="mb-12 w-full md:w-6/12 md:px-3 lg:w-full lg:px-6 xl:w-6/12">
              <div className="flex items-start">
                <div className="shrink-0">
                  <div className="inline-block rounded-md bg-lime-400 p-4 text-primary">
                    {/* SVG Icon */}
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" className="w-7 h-7">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M15 9h3.75M15 12h3.75M15 15h3.75M4.5 19.5h15a2.25 2.25 0 002.25-2.25V6.75A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25v10.5A2.25 2.25 0 004.5 19.5zm6-10.125a1.875 1.875 0 11-3.75 0 1.875 1.875 0 013.75 0zm1.294 6.336a6.721 6.721 0 01-3.17.789 6.721 6.721 0 01-3.168-.789 3.376 3.376 0 016.338 0z" />
                    </svg>
                  </div>
                </div>
                <div className="ml-6 grow">
                  <p className="mb-2 font-bold">Address</p>
                  <p className="text-sm text-neutral-500">
                    100, Kandy Road, <br /> Colombo <br />
                  </p>
                </div>
              </div>
            </div>

            <div className="mb-12 w-full md:w-6/12 md:px-3 lg:w-full lg:px-6 xl:w-6/12">
              <div className="flex items-start">
                <div className="shrink-0">
                  <div className="inline-block rounded-md bg-lime-400 p-4 text-primary">
                    {/* SVG Icon */}
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" className="w-7 h-7">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M15 9h3.75M15 12h3.75M15 15h3.75M4.5 19.5h15a2.25 2.25 0 002.25-2.25V6.75A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25v10.5A2.25 2.25 0 004.5 19.5zm6-10.125a1.875 1.875 0 11-3.75 0 1.875 1.875 0 013.75 0zm1.294 6.336a6.721 6.721 0 01-3.17.789 6.721 6.721 0 01-3.168-.789 3.376 3.376 0 016.338 0z" />
                    </svg>
                  </div>
                </div>
                <div className="ml-6 grow">
                  <p className="mb-2 font-bold">Land Line</p>
                  <p className="text-neutral-500">+94 11 3456720</p>
                </div>
              </div>
            </div>

            <div className="w-full md:w-6/12 md:px-3 lg:w-full lg:px-6 xl:w-6/12">
              <div className="flex items-start">
                <div className="shrink-0">
                  <div className="inline-block rounded-md bg-lime-400 p-4 text-primary">
                    {/* SVG Icon */}
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 1.5H8.25A2.25 2.25 0 006 3.75v16.5a2.25 2.25 0 002.25 2.25h7.5A2.25 2.25 0 0018 20.25V3.75a2.25 2.25 0 00-2.25-2.25H13.5m-3 0V3h3V1.5h-3zM10.5 4.5H8.25A2.25 2.25 0 006 6.75v16.5a2.25 2.25 0 002.25 2.25h7.5A2.25 2.25 0 0018 23.25V6.75a2.25 2.25 0 00-2.25-2.25H13.5m-3 0V4.5h3z" />
                    </svg>
                  </div>
                </div>
                <div className="ml-6 grow">
                  <p className="mb-2 font-bold">Office</p>
                  <p className="text-neutral-500">N/A</p>
                </div>
              </div>
            </div>
          </div>

          <div className="relative bg-white rounded-md shadow-lg p-8">
          <h2 className="text-2xl font-bold mb-6">Contact Us</h2>
            <form>
              <div className="mb-4">
                <label htmlFor="name" className="block text-sm font-medium text-gray-700">Name</label>
                <input
                  type="text"
                  id="name"
                  className="mt-1 block w-full border-2 border-lime-500 rounded-md py-2 px-3 text-gray-900 focus-border focus:border-amber-500 focus:ring focus:ring-amber-500 focus:ring-opacity-50"
                />
              </div>

              <div className="mb-4">
                <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
                <input
                  type="email"
                  id="email"
                  className="mt-1 block w-full border-2 border-lime-500 rounded-md py-2 px-3 text-gray-900 focus:border-amber-500 focus:ring focus:ring-amber-500 focus:ring-opacity-50"
                />
              </div>

              <div className="mb-4">
                <label htmlFor="message" className="block text-sm font-medium text-gray-700">Message</label>
                <textarea
                  id="message"
                  rows="4"
                  className="mt-1 block w-full border-2 border-lime-500 rounded-md py-2 px-3 text-gray-900 focus:border-amber-500 focus:ring focus:ring-amber-500 focus:ring-opacity-50"
                ></textarea>
              </div>

              <button
                type="submit"
                className="inline-flex items-center justify-center px-4 py-2 border border-transparent text-base font-medium rounded-md text-white bg-lime-500 hover:bg-lime-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-lime-500"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUS;
