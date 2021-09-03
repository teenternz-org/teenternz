import '../styles/globals.css'

/* Vanilla JS imports */
import '../styles/style.css'
import Layout from '../components/layout'
import '../styles/internships.css'

function MyApp({ Component, pageProps }) {
  return (
  <Layout>
    <Component {...pageProps} />
  </Layout>
  )
}

export default MyApp
