module.exports = {
  mode: 'jit',
  purge: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
    './screens/**/*.{js,ts,jsx,tsx}',
  ],
  darkMode: false, // or 'media' or 'class'
  theme: {
    screens: {
      sm: '640px',
      md: '768px',
      lg: '1024px',
      xl: '1280px',
      '2xl': '1536px',
    },
    scale: {
      '0': '0',
     '25': '.25',
      '50': '.5',
      '75': '.75',
      '90': '.9',
     '95': '.95',
      '100': '1',
     '105': '1.05',
     '110': '1.1',
      '125': '1.25',
      '150': '1.5',
     '200': '2',
    },
    extend: {
      spacing: {
        xl: '1280px',
      },
      colors: {
        primary: '#6AC24B',
        secondary: '#F5F5F5',
        gray: {
          text: '#0d1d34',
          text: '#0d1d34',
        },
        success: 'rgba(106, 160, 75)',
        disabled: '#c6c6c6',
        thinGray: '#413E39',
        blueBlack: '#0d1d34',
        placeholder: '#BFBAB8',
      },
      fontFamily: {
        primary: ['Poppins'],
        secondary: ['Roboto'],
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [require('@tailwindcss/forms')],
};
