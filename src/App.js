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
import ShopHero from './components/shopComponent/ShopHero';
import ShopPageContent from './components/shopComponent/ShopPageContent';
import ImageContainer from './components/homeComponent/ImageContainer';
import LogoSwiper from './components/homeComponent/LogoSwiper';
import HealthyFoodComponent from './components/homeComponent/HealthyFoodComponent';
import AboutUsHero from './components/aboutUsComponent/AboutUsHero';
import AboutImageContainer from './components/aboutUsComponent/AboutImageContainer';
import ShopRedirect from './components/aboutUsComponent/ShopRedirect';
import { CartProvider } from './contexts/CartContext';
import CartHero from './components/cartComponent/CartHero';
import CartDetails from './components/cartComponent/CartDetails';
import { AuthProvider } from './contexts/AuthContext';
import CheckoutCart from './components/CheckoutComponent/CheckoutCart';
import CheckoutHero from './components/CheckoutComponent/CheckoutHero';
import ContactUS from './components/ContactUsComponent/ContactUS';
import ContactUsHero from './components/ContactUsComponent/ContactUsHero';
import ProtectedRoute from './components/RouteProtectComponent/ProtectedRoute';
import PrivacyPolicyHero from './components/PrivacyPolicyComponent/PrivacyPolicyHero';
import PrivacyPolicy from './components/PrivacyPolicyComponent/PrivacyPolicy';
import TermHero from './components/TermsComponent/TermsHero';
import TermsConditions from './components/TermsComponent/TermsConditions';
import FrequentlyAskQuestion from './components/ContactUsComponent/F&Q';

function App() {
  return (
    <div className='App'>
      <Router>
        <AuthProvider>
          <CartProvider>
            <Address />
            <NavBar />
            <Routes>
              <Route path='/' element={
                  <>
                    <Hero />
                    <ImageContainer />
                    <Services />
                    <Products />
                    <Banner />
                    <Fact />
                    <Testimonials />
                    <LogoSwiper />
                  </>
                }
              />

              <Route path='/shop' element={
                  <>
                    <ShopHero />
                    <ShopPageContent />
                    <Testimonials />
                  </>
                }
              />

              <Route path='/about-us' element={
                  <>
                    <AboutUsHero />
                    <HealthyFoodComponent />
                    <AboutImageContainer />
                    <ShopRedirect />
                    <Testimonials />
                    <LogoSwiper />
                  </>
                }
              />

              <Route path='/shopping-cart' element={
                  <>
                    <CartHero />
                    <CartDetails />
                  </>
                }
              />

              <Route path='/checkout' element={
                  <ProtectedRoute element={
                  <>
                    <CheckoutHero />
                    <CheckoutCart />
                  </>
                  }/>
                }
              />

              <Route path='/contact-us'element={
                  <>
                    <ContactUsHero />
                    <ContactUS />
                    <FrequentlyAskQuestion />
                  </>
                }
              />

              <Route path='/privacy-policy' element={
                  <>
                    <PrivacyPolicyHero />
                    <PrivacyPolicy />
                    
                  </>
              }
              />

              <Route path='/terms-conditions' element={
                <>
                  <TermHero />
                  <TermsConditions />
                </>
              }
              />
            </Routes>
            <Footer />
          </CartProvider>
        </AuthProvider>
      </Router>
    </div>
  );
}

export default App;
<Route path="/contact-us" element={
                        <ProtectedRoute element={
                            <>
                                <ContactUsHero />
                                <ContactUS />
                            </>
                        } />
                    } />