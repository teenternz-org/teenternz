import { server } from '../../../components/url'
import Time_Ago from '../../../components/other/time-ago'

export default function Org_Id({ post }) {
  return (
    <div className="mb-36">
      {post.map(post => {
        return (
          <div key={post.id}>
            <h1 className="text-2xl font-medium mx-14 md:mx-24 mt-8">{post.position}</h1>
            <div className="flex space-x-2 flex-1">
              <div className="h-12 w-12 my-auto ml-12"><img src={"/opportunities/" + post.org_profile_url} className="rounded-full" alt="" /></div>
              <div className="flex flex-col">
                <div className="font-medium mx-6 text-gray-800 dark:text-gray-200 mt-8 text-lg">{post.org_name}</div>
                <div className="font-medium mx-6 text-gray-800 dark:text-gray-200 text-sm">{post.publisher_name} ({post.publisher_position} at {post.org_name})</div>
                <div className="mx-6 mb-8 text-gray-800 dark:text-gray-200 text-sm"><Time_Ago date={post.date} /></div>
              </div>

            </div>
            <div className="font-medium mx-14">Responsibilities:</div>
            <p className="mx-12 md:mx-20 my-6">{post.responsibilities}</p>
            <div className="font-medium mx-14">Skills:</div>
            <p className="mx-12 md:mx-20 my-6">{post.skills}</p>
            <div className="font-medium mx-14">About:</div>
            <p className="mx-12 md:mx-20 my-6">{post.about}</p>
            <button className="mx-4 md:mx-24 bg-purple-200 dark:bg-purple-800 p-2 my-4 rounded-md shadow-md">
              <a href={post.apply_url} rel="noreferrer" target="_blank">
                Apply</a>
            </button>
            <div className="font-medium mx-6 md:mx-16 text-lg">Links:</div>
            {post.links.map(link => {
              return (
                <div key={post.id}>
                  <p className="cursor-pointer text-gray-800 dark:text-gray-300 mx-2 md:mx-20 hover:underline"><a href={link.link1} rel="noreferrer" target="_blank">{link.link1}</a></p>
                  <p className="cursor-pointer text-gray-800 dark:text-gray-300 mx-2 md:mx-20 hover:underline"><a href={link.link2} rel="noreferrer" target="_blank">{link.link2}</a></p>
                  <p className="cursor-pointer text-gray-800 dark:text-gray-300 mx-2 md:mx-20 hover:underline"><a href={link.link3} rel="noreferrer" target="_blank">{link.link3}</a></p>
                  <p className="cursor-pointer text-gray-800 dark:text-gray-300 mx-2 md:mx-20 hover:underline"><a href={link.link4} rel="noreferrer" target="_blank">{link.link4}</a></p>
                  <p className="cursor-pointer text-gray-800 dark:text-gray-300 mx-2 md:mx-20 hover:underline"><a href={link.link5} rel="noreferrer" target="_blank">{link.link5}</a></p>
                </div>
              )
            })}
          </div>
        )
      })}

    </div>
  )
}

export async function getServerSideProps(pageContext) {
  const response = await fetch(`${server}/api/opportunities`)
  const data = await response.json()
  const post = data.filter(orgs => orgs.id == pageContext.query.postid)

  return {
    props: {
      post
    }
  }
}