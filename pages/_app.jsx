import '../styles/globals.css'

/* Vanilla JS imports */
import '../styles/vanilla-js/style.css'
import '../styles/vanilla-js/internships.css'
import Layout from '../components/layout'

function MyApp({ Component, pageProps }) {
  return (
  <Layout>
    <Component {...pageProps} />
  </Layout>
  )
}

export default MyApp
