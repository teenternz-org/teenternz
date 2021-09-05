import '../styles/globals.css'
import TimeAgo from 'javascript-time-ago'
import en from 'javascript-time-ago/locale/en'
import '../styles/Navbar.css'
import Layout from '../components/layout'

TimeAgo.addDefaultLocale(en)

function MyApp({ Component, pageProps }) {
  return (
  <Layout>
    <Component {...pageProps} />
  </Layout>
  )
}

export default MyApp
