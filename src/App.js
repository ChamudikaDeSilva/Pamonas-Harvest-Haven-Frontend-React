import './App.css';
import React from 'react';

import NavBar from './components/NavBar';
import Hero from './components/Hero';
import Services from './components/Services';
import Footer from './components/Footer'; // Import Footer component
import Banner from './components/Banner';
import Fact from './components/Fact';

import 'tailwindcss/tailwind.css';
import Products from './components/Products';

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
