/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {},
    screens:{
      'mobile': '640px',
      'laptop': '1024px',
    },
    fontFamily: {
      'serif': ['ADLaM Display', 'serif']
    },
  },
  plugins: [],
}

