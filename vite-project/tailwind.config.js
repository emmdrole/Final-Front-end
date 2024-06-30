/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './src/**/*.{js,jsx,ts,tsx}', // JSX files
    './public/index.html',
  ],
  theme: {
    extend: {
      backgroundColor: {
        'widget-grey': '#D9D9D9',
      }
    },

    colors: {
      customBlack: '#292929', // Define your custom black color
    },
    placeholderColor: theme => ({
      'black': theme('colors.customBlack'), // Override placeholder-black utility with custom black color
    }),
  },
  plugins: [],
}

