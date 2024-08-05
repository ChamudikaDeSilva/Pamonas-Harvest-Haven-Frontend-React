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

      backgroundImage: {
        'gradient-text': 'linear-gradient(to right, #84cc16, #4ade80)',
      },
      textFillColor: {
        'transparent': 'transparent',
      },
      
    },
    
  },
  plugins: [
    function({ addUtilities }) {
      addUtilities({
        '.bg-clip-text': {
          'background-clip': 'text',
          '-webkit-background-clip': 'text',
        },
        '.text-fill-transparent': {
          'color': 'transparent',
          '-webkit-text-fill-color': 'transparent',
        },
      }, ['responsive', 'hover']);
    },
  ],
}