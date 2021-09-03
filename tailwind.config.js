module.exports = {
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      backgroundImage: theme => ({
       'hero-pattern': "url('/img/blob-scene-haikei.svg')",
      })
    }
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
