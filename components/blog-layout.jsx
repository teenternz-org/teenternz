import Blog from "../pages/blog"

const Blog_Layout = ({ children }) => {
  return (
    <>
    { children }
    <h1 className="text-2xl text-center mb-8">Read more</h1>
    <Blog />
    </>
  )
}

export default Blog_Layout
