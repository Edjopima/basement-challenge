module.exports = {
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      screens: {
        'xs': '475px',
      },
      colors:{
        'gradient-black-0': '#1D1D1D',
        'gradient-black-1': '#151515'
      },
      spacing: {
        '27.5':'27.5rem',
        '36.2':'36.2rem',
        '5/12':'41.666667%',
        '47.5':'47.5rem',
        '51.5':'51.5rem',
        '505':'505px'
      }
    },
    animation: {
      ticker: "ticker 40s linear infinite",
      ticker2: "ticker2 40s linear infinite",
    },
    keyframes: {
      ticker: {
        "0%": {
          transform: "translateX(100%)",
        },
        "100%": {
          transform: "translateX(-100%)",
        },
      },
      ticker2: {
        "0%": {
          transform: "translateX(0)",
        },
        "100%": {
          transform: "translateX(-200%)",
        },
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
