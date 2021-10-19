import '../styles/globals.css'
import TimeAgo from 'javascript-time-ago'
import en from 'javascript-time-ago/locale/en'
import '../styles/Navbar.css'
import MainLayout from '../layouts/mainLayout'
import { ThemeProvider } from 'next-themes'

TimeAgo.addDefaultLocale(en)

function MyApp({ Component, pageProps }) {
  return (
    <ThemeProvider enableSystem={false} attribute="class">
      <MainLayout>
        <Component {...pageProps} />
      </MainLayout>
    </ThemeProvider>
  )
}

export default MyApp
