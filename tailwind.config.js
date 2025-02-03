/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backdropBlur: {
        '34': '34px', // Custom blur value
      },
      backgroundImage: {
        'custom-gradient': 'linear-gradient(180deg, rgba(217, 217, 217, 0.7) 0%, rgba(234, 234, 234, 0.381317) 22.05%, rgba(255, 255, 255, 0) 63.11%)',
        'div-custom-gradient': 'linear-gradient(269.08deg, #FE9748 2.58%, #FE489E 21.41%, #A952FE 67.8%, #4ECBFF 99.21%)',
        'grid-custom-gradient': 'linear-gradient(359.5deg, rgba(0, 0, 0, 0.79) 8.36%, rgba(0, 0, 0, 0) 99.74%)',

      },
      screens: {
        '300': '300px',
        '400': '400px',
        '500': '500px',
        '600': '600px',
        '700': '700px',
        '800': '800px',
        '900': '900px',
        '1000': '1000px',
        '1100': '1100px',
        '1200': '1200px',
        '1300': '1300px',
        '1400': '1400px',
        '1500': '1500px',
        '1600': '1600px',
        '1700': '1700px',
        '1800': '1800px',
        '1900': '1900px',
        '1920': '1920px',
        xsm: '440px',
        sm: '640px',
        md: '768px',
        lg: '1024px',
        xl: '1280px',
        '2xl': '1550px'
      },
    },
  },
  plugins: [],
};
