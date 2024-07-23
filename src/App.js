import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import NavBar from './components/commonComponent/NavBar';
import Hero from './components/homeComponent/Hero';
import Services from './components/homeComponent/Services';
import Footer from './components/commonComponent/Footer';
import Banner from './components/homeComponent/Banner';
import Fact from './components/homeComponent/Fact';
import Products from './components/homeComponent/Products';
import Address from './components/commonComponent/address';
import Testimonials from './components/homeComponent/Testimonials';
import ShopHero from './components/shopComponent/ShopHero'; // Import Shop component
import ShopPageContent from './components/shopComponent/ShopPageContent'; 

import ImageContainer from './components/homeComponent/ImageContainer';
import LogoSwiper from './components/homeComponent/LogoSwiper';
import HealthyFoodComponent from './components/homeComponent/HealthyFoodComponent';
import AboutUsHero from './components/aboutUsComponent/AboutUsHero';
import AboutImageContainer from './components/aboutUsComponent/AboutImageContainer';
import ShopRedirect from './components/aboutUsComponent/ShopRedirect';

//import ShopCategory from './components/shopComponent/shopCategory';

function App() {
  return (
    <div className="App">
      <Router>
        <Address />
        <NavBar />
        <Routes>
          <Route path="/" element={
            <>
              <Hero />
              <ImageContainer/>
              <Services />
              <Products />
              
              <Banner />
              
              <Fact />
              <Testimonials />
              
              <LogoSwiper/>
            </>
          } />
          <Route path="/shop" element={
            <>
              <ShopHero />
              <ShopPageContent />
              <Testimonials />

             
            </>
          } />
          <Route path="/about-us" element={
            <>
              <AboutUsHero />
              <HealthyFoodComponent />
              <AboutImageContainer />
              <ShopRedirect />
              <Testimonials />
              <LogoSwiper/>
             
            </>
          } />
          
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
