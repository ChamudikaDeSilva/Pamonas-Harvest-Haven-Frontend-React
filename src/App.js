import './App.css';
import React from 'react';

import NavBar from './components/NavBar';
import Hero from './components/Hero';
import Services from './components/Services';
import Footer from './components/Footer'; // Import Footer component

import 'tailwindcss/tailwind.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <NavBar />
        <Hero />
        <Services />
        {/* Include Footer component */}
        <Footer />
      </header>
    </div>
  );
}

export default App;
