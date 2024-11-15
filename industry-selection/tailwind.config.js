/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      gridTemplateColumns: {
        '1': 'repeat(1, 1fr)',
        '2': 'repeat(2, 1fr)',
        '3': 'repeat(3, 1fr)',
        '4': 'repeat(4, 1fr)',
        '5': 'repeat(5, 1fr)',
        '6': 'repeat(6, 1fr)',
      },
    },
  },
  plugins: [],
};