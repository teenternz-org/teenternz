import '../styles/globals.css'

/* Vanilla JS imports */
import '../styles/vanilla-js/style.css'
import '../styles/vanilla-js/internships.css'
import Layout from '../components/vanilla-js/layout'

function MyApp({ Component, pageProps }) {
  return (
  <Layout>
    <Component {...pageProps} />
  </Layout>
  )
}

export default MyApp
