/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: '#1A7DF1',
        'primary-light': '#63A6F4',
        accent: '#E0F11B',
      },
    },
  },
  plugins: [],
};
