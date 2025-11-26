import type { Config } from 'tailwindcss';

const config: Config = {
  darkMode: 'class',
  content: [
    './app/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
    './lib/**/*.{js,ts,jsx,tsx}'
  ],
  theme: {
    extend: {
      fontFamily: {
        headline: ['"Bebas Neue"', 'cursive'],
        sans: ['"Inter"', 'system-ui', 'sans-serif']
      },
      colors: {
        brand: {
          primary: '#FA8128',
          secondary: '#ECF2FF',
          accent: '#14213D'
        }
      },
      boxShadow: {
        glow: '0 0 80px rgba(250, 129, 40, 0.35)'
      }
    }
  },
  plugins: []
};

export default config;
