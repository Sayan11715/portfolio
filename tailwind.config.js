/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        neonGreen: '#00ff00',
        cyan: '#00ffff',
        magenta: '#ff00ff',
        background: '#0a0e27',
      },
      boxShadow: {
        glow: '0 0 5px rgba(0, 255, 0, 0.7), 0 0 10px rgba(0, 255, 0, 0.7)', // Green glow
        glowCyan: '0 0 5px rgba(0, 255, 255, 0.7), 0 0 10px rgba(0, 255, 255, 0.7)', // Cyan glow
        glowMagenta: '0 0 5px rgba(255, 0, 255, 0.7), 0 0 10px rgba(255, 0, 255, 0.7)', // Magenta glow
      },
      textShadow: {
        glow: '0 0 5px rgba(0, 255, 0, 0.7), 0 0 10px rgba(0, 255, 0, 0.7)', // Green text glow
        glowCyan: '0 0 5px rgba(0, 255, 255, 0.7), 0 0 10px rgba(0, 255, 255, 0.7)', // Cyan text glow
        glowMagenta: '0 0 5px rgba(255, 0, 255, 0.7), 0 0 10px rgba(255, 0, 255, 0.7)', // Magenta text glow
      },
    },
  },
  variants: {
    extend: {
      boxShadow: ['responsive', 'hover', 'focus'],
      textShadow: ['responsive', 'hover', 'focus'], // Enable text shadow in variants
    },
  },
  plugins: [
    require('tailwindcss-textshadow'), // Ensure to install this plugin
  ],
};
