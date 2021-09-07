import Blog from "../../pages/blog"

const Blogpage_Layout = ({ children }) => {
  return (
    <>
    { children }
    <h1 className="text-2xl text-center mb-8">Read more</h1>
    <Blog />
    </>
  )
}

export default Blogpage_Layout
