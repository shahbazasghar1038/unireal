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
        'custom-text-gradient': 'linear-gradient(90deg, #58BEFF 0%, #BB4EEE 30.5%, #FE4996 64%, #FEA042 100%)',
        'custom-button-gradient': 'linear-gradient(90deg, #58BEFF 0%, #BB4EEE 28.76%, #FE4996 64.51%, #FEA042 100%)',
        'border-gradient': 'linear-gradient(90deg, rgba(88, 190, 255, 0.5) 3.59%, rgba(187, 78, 238, 0.5) 35.89%, rgba(254, 73, 150, 0.5) 65.78%, rgba(254, 160, 66, 0.5) 100%)',
        'section-gradient': 'linear-gradient(90deg, #5ABBFE 0%, #B150F4 31.48%, #E24BBD 68.21%, #FC934E 100%)',
        'heading-gradient': 'linear-gradient(90deg, #57C3F9 0%, #BB4EEE 32%, #FE4996 65%, #FEA042 100%)',
        'mask-group': "url('/Mask group.svg')",
        'esl-heading-gradient': 'linear-gradient(90deg, #4395BE 0%, #B650EF 29%, #F948A3 62%, #FE9748 100%)',
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
