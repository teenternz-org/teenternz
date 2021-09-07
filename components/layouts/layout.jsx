import Navbar from '../navbar.jsx'

const Layout = ( { children }) => {
  return (
    <>
      <Navbar />
      { children }
    </>
  )
}

export default Layout
