import './App.css';
import React from 'react';

import NavBar from './components/commonComponent/NavBar';
import Hero from './components/homeComponent/Hero';
import Services from './components/homeComponent/Services';
import Footer from './components/commonComponent/Footer'; // Import Footer component
import Banner from './components/homeComponent/Banner';
import Fact from './components/homeComponent/Fact';

import 'tailwindcss/tailwind.css';
import Products from './components/homeComponent/Products';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <NavBar />
        <Hero />
        <Services />
        <Products />
        <Banner />
        <Fact />
        <Footer />
      </header>
    </div>
  );
}

export default App;
