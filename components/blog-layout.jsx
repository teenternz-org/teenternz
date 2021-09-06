import Articles from "../pages/blogs"

const Blog_Layout = ({ children }) => {
  return (
    <>
    { children }
    <h1 className="text-2xl text-center mb-8">Read more</h1>
    <Articles />
    </>
  )
}

export default Blog_Layout
