import VJS_Navbar from './vjs-navbar.jsx'

const Layout = ( { children }) => {
  return (
    <>
      <VJS_Navbar />
      { children }
    </>
  )
}

export default Layout
