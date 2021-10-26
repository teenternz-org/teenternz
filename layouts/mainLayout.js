import Navbar from '../components/navbar'
import Footer from '../components/footer'

const MainLayout = ({ children }) => {
  return (
    <>
      <Navbar />
      <div className="h-16"></div>
      {children}
      <Footer />
    </>
  )
}

export default MainLayout
