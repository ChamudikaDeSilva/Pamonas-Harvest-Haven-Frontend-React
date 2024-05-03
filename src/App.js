
import './App.css';
import React from 'react';

import NavBar from './components/NavBar';
import Hero from './components/Hero';

import 'tailwindcss/tailwind.css';


function App() {
  return (
    <div className="App">
      <header className="App-header">
      <div>
        <NavBar />
        <Hero />
      
      
      </div>
      </header>
    </div>
  );
}

export default App;
