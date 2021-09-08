import Link from "next/link"
import Time_Ago from "../other/time-ago"

const Blog_Layout = ({ h1, username, image, p}) => {
  return (
    <>
    <h1 className="font-serif text-center md:text-5xl text-3xl mt-32 sm:m-8 md:font-normalfont-semibold">{h1}</h1>
    <div className="grid grid-cols-12 mt-16">
      <div className="grid col-start-2  space-x-8 sm:space-x-4 md:space-x-3 lg:space-x-0 grid-cols-2"><div className="h-10 rounded-full overflow-hidden w-10">{image}</div>
        <div className="grid w-max grid-cols-1"><Link href="/authors/sanskriti-jain">
          <p className="text-sm hover:underline px-1 cursor-pointer">{username}</p></Link>
          <p className="px-1 text-sm w-max"><Time_Ago date="July 25 2021"/></p>
        </div>
      </div>
    </div>
    <p className="font-serif md:mx-28 sm:mx-12 mx-8 md:text-lg text-base font-light mt-8 mb-14">{p}</p>
    </>
  )
}

export default Blog_Layout
