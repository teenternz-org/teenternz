import Link from 'next/link'

const VJS_Articles = () => {
  return (
    <>
    <div className="article-cards">

    <div className="card-article">
        <div className="img-article">
            <img src="/Blogs/blog-8.png" alt="Cover"/>
        </div>
        <div className="text-article">
            <p><Link href="/blogs/how-to-find-your-passion"><a> How to Find your Passion</a></Link></p>
        </div>
      </div>

      <div className="card-article">
        <div className="img-article">
            <img src="/Blogs/blog-7.png" alt="Cover"/>
        </div>
        <div className="text-article">
            <p><Link href="/blogs/how-to-build-remote-teams-effectively"><a> How to Build a team for your organisation</a></Link></p>
        </div>
      </div>

      <div className="card-article">
        <div className="img-article">
            <img src="/Blogs/blog-6.png" alt="Cover"/>
        </div>
        <div className="text-article">
            <p><Link href="/blogs/how-to-unfocus-to-focus"><a> How to Unfocus to Focus</a></Link></p>
        </div>
      </div>

      <div className="card-article">
        <div className="img-article">
            <img src="/Blogs/blog-5.png" alt="Cover"/>
        </div>
        <div className="text-article">
            <p><Link href="/blogs/how-to-deal-with-stress-and-still-enjoy-our-highschool-life"><a> How to deal with stress and Anxiety as a student</a></Link></p>
        </div>
      </div>

      <div className="card-article">
        <div className="img-article">
            <img src="/Blogs/blog-3.png" alt="Cover"/>
        </div>
        <div className="text-article">
            <p><Link href="/blogs/how-can-students-make-the-most-out-of-their-time"><a> How to Manage time as a Student</a></Link></p>
        </div>
      </div>

      <div className="card-article">
        <div className="img-article">
          <img src="/Blogs/blog-1.png" alt="Cover"/>
        </div>
        <div className="text-article">
          <p><Link href="/blogs/how-to-prepare-for-an-interview-as-a-high-school-student"><a> How to crack an Interview as a High school Student</a></Link></p>
        </div>
      </div>


    </div> 
    </>
  )
}

export default VJS_Articles
