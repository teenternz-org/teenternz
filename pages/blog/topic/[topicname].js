import Link from 'next/link';
import Blog_Subsection from '../../../components/blog-subsection'
import Time_Ago from '../../../components/other/time-ago'
import { gql, GraphQLClient } from 'graphql-request'

export const getStaticProps = async () => {
  const url = process.env.ENDPOINT_URL
  const graphQLClient = new GraphQLClient(url, {
    headers: {
      authorization: process.env.GRAPH_CMS_TOKEN
  }
})

const topicsQuery = gql`
query {
  topics {
    topic_name
    slug_of_topic
  }
}`

const topicsdata = await graphQLClient.request(topicsQuery)
const topics = topicsdata.topics
return { 
  props: {
    topics
}
}
}

export default function TopicName(topics) {
  return (
    <>
      <h1 className="text-2xl font-medium md:ml-36 sm:ml-16 ml-8 my-8 ">{topics.map(topic => topic.topic)}</h1>
    <div className="grid grid-cols-3">
    <div className="sm:col-span-2 divide-y-2 col-span-3">

    {
        blogs.map(blog => {
          return (
            <div key={blog.id}>
              <div className="flex flex-1 m-8 justify-center">
        <div className="text-2xl font-semibold p-6 sm:w-2/3 w-full">
            <p><Link href={'/blog/' + blog.heading.replace(/\s/g , "-")}><a>{blog.heading}</a></Link></p>
            <p className="text-base font-light text-gray-800 mt-3"><Link href={'/blog/' + blog.heading.replace(/\s/g , "-")}><a>{blog.content}</a></Link></p>
            <div className="flex flex-1">
            <p className="text-sm font-normal text-gray-800 mt-3"><Time_Ago date={blog.date}/></p>
            <div className="flex flex-wrap">
        <Link href="/blogs/topic/self-help" passHref><p className="border-2 bg-gray-100 p-1 ml-4 text-sm font-medium rounded-full text-center cursor-pointer mt-2 px-auto">{topics.map(topic => topic.topic)}</p></Link>
        </div>
        </div>
        </div>
        <div className="hidden sm:block">
        <Link href="/blogs/how-to-find-your-passion"><a>
          <img className="h-32 w-48 m-6 rounded-lg" src={blog.pic} alt="" />
          </a></Link>
        </div>
        </div>
            </div>
          )
        }
          )
      }

        
    </div>
    <div>

    <Blog_Subsection topics={topics} />
      
    </div>
    </div>
    </>
  )
}

