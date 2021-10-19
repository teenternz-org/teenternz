import Navbar from '../navbar'
import Footer from '../footer'
import NewNavbar from '../newNavbar'
const MainLayout = ( { children }) => {
  return (
    <>
      <NewNavbar />
      { children }
      <Footer />
    </>
  )
}

export default MainLayout
