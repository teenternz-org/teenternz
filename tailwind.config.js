module.exports = {
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      backgroundImage: theme => ({
       'hero-md': "url('/img/blob-scene-haikei.svg')",
       'hero-sm': "url('/img/blob-scene-haikei-sm.svg')",
       'hero-mobile': "url('/img/blob-scene-haikei-mobile.svg')",
      })
    }
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
