/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      screens:{
        "3xl": "1600px",
        "3xxl": "1696px",
        "4xl": "1920px",
        "5xl": "2560px",
      },
      fontSize:{
        "hero": ['148px', '148px'],
        "title": ['45px', '72px']
      },
      colors: {
        tp: {
          darkBlue: "#1D1131",
          dark: "#232323",
          red: "#E00927",
          gray: "#8E8E8E",
          gray2: "#C9C9C9",
          white: "#FFFFFF",
          whiteTranslucent: "rgba(255, 255, 255, 0.20)",
          yellow: '#E0B709',
          blackTranslucent: 'rgba(0, 0, 0, 0.15)'
        },
      },
    },
  },
  fontFamily: {
    SourceSansPro: ['Source Sans Pro', 'sans-serif'],
    PlayfairDisplay: ['Playfair Display', 'sans-serif'],
    ClashDisplay: ['ClashDisplayRegular'],
  },
  plugins: [],
};
