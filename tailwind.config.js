/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      boxShadow: {
        top: '0 -4px 4px rgba(0, 0, 0, 0.1)',
        right: '4px 0 4px rgba(0, 0, 0, 0.1)',
        left: '-4px 0 4px rgba(0, 0, 0, 0.1)',
      },
      
    },
    
  },
  plugins: [],
}