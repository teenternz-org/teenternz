import Link from 'next/link'

const Internships = () => {
  return (
    <>
    <div className="text-center">

      <h1 className="md:text-3xl m-4 text-xl">
          WHAT TEAM DO YOU WANT TO WORK UPON?
      </h1>
      <p className="md:text-lg text-base m-4">Click on any team and find organizations providing internships and
          <br /> Volunteer opportunities in that particular field.
      </p>
    </div>

      <div className="grid md:grid-cols-3 sm:grid-cols-2 grid-cols-1">

        <div className="flex flex-1 bg-blue-50 m-6 rounded-lg shadow-lg">
          <Link href="/internships/type/content-writing" passHref>
            <div className="align-middle h-36 w-36 cursor-pointer"><img src="/Teams/flat-2126884.svg"alt="" /></div></Link>
          <Link href="/internships/type/content-writing" passHref>
            <div className="mx-4 my-auto text-2xl cursor-pointer">Content Writing</div>
          </Link>  
        </div>

        <div className="flex flex-1 bg-blue-50 m-6 rounded-lg shadow-lg">
          <Link href="/internships/type/graphics-design" passHref>
            <div className="align-middle h-20 w-20 mx-4 my-6 cursor-pointer"><img src="/Teams/tree-576819.svg"alt="" /></div></Link>
          <Link href="/internships/type/graphics-design" passHref>
            <div className="mx-4 my-auto text-2xl cursor-pointer">Graphics Design</div>
          </Link>  
        </div>


        <div className="flex flex-1 bg-blue-50 m-6 rounded-lg shadow-lg">
          <Link href="/internships/type/video-editing-and-film-making" passHref>
            <div className="align-middle h-20 w-20 mx-4 my-6 cursor-pointer"><img src="/Teams/cutting-150066.svg"alt="" /></div></Link>
          <Link href="/internships/type/video-editing-and-film-making" passHref>
            <div className="mx-4 my-auto text-2xl cursor-pointer">Video Editing and Film Making</div>
          </Link>  
        </div>



        <div className="flex flex-1 bg-blue-50 m-6 rounded-lg shadow-lg">
          <Link href="/internships/type/web-dev" passHref>
            <div className="align-middle h-36 w-36 p-6 cursor-pointer"><img src="/Teams/code-6127616.svg"alt="" /></div></Link>
          <Link href="/internships/type/web-dev" passHref>
            <div className="mx-4 my-auto text-2xl cursor-pointer">Web Development</div>
          </Link>  
        </div>

        <div className="flex flex-1 bg-blue-50 m-6 rounded-lg shadow-lg">
          <Link href="/internships/type/research" passHref>
            <div className="align-middle h-28 w-28 mx-4 my-6 cursor-pointer"><img src="/Teams/atom-29539.svg"alt="" /></div></Link>
          <Link href="/internships/type/research" passHref>
            <div className="mx-4 my-auto text-2xl cursor-pointer">Graphics Design</div>
          </Link>  
        </div>

</div>
    
    </>
  )
}

export default Internships
