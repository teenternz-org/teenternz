import Link from 'next/link';
import Blog_Subsection from '../../../components/blog-subsection'
import Time_Ago from '../../../components/other/time-ago'
import { gql, GraphQLClient } from 'graphql-request'

export default function TopicName({ topic, topics, reverseparas }) {
  return (
    <>
      <h1 className="text-3xl max-w-max font-semibold md:ml-36 sm:ml-16 ml-8 my-8">
        {topic.topic_name}
      </h1>
    <div className="grid grid-cols-3">
    <div className="sm:col-span-2 divide-y-2 col-span-3">

    {
        reverseparas.map(para => {
          return (
            <div key={para.id}>
              <div className="flex flex-1 m-8 justify-center">
        <div className="text-2xl font-semibold p-6 sm:w-2/3 w-full">
            <p><Link href={'/blog/' + para.para_slug}><a>{para.title}</a></Link></p>
            <p className="text-base font-light text-gray-800 mt-3"><Link href={'/blog/' + para.para_slug}><a>{para.para_first_25}</a></Link></p>
            <div className="flex flex-1">
            <p className="text-sm font-normal text-gray-800 mt-3"><Time_Ago date={para.date}/></p>
            <div className="flex flex-wrap">
        {para.topic_reference.map(topic => {
          return (
            <div key={topic.slug_of_topic}>
            <Link href="/blogs/topic/self-help" passHref><p className="bg-pink-200 dark:bg-pink-800 p-1 ml-4 text-sm font-medium rounded-full text-center cursor-pointer mt-2 px-auto">{topic.topic_name}</p></Link>
          </div>
          )
        })}
        </div>
        </div>
        </div>
        <div className="hidden sm:block">
        <Link href="/blogs/how-to-find-your-passion"><a>
          <img className="h-32 w-48 m-6 rounded-lg" src={para.pic.url} alt="" />
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

export async function getServerSideProps(pageContext) {
  const url = process.env.ENDPOINT_URL
  const graphQLClient = new GraphQLClient(url, {
    headers: {
      authorization: process.env.GRAPH_CMS_TOKEN
  }
})

const topicSlug = pageContext.query.topicname

const topicQuery = gql`
query($topicSlug: String!) {
  topic(where: {slug_of_topic: $topicSlug}) {
    topic_name
    paras {
      title
      id
      para_slug
      para_first_25
      date
      topic_reference {
        topic_name
        slug_of_topic
      }
      pic {
        url
      }
    }
  }
}`
const variables = {
  topicSlug
}

const topicsQuery = gql`
query {
  topics {
    topic_name
    slug_of_topic
  }
}`

const topicdata = await graphQLClient.request(topicQuery, variables) 
const topic = topicdata.topic
const topicsdata = await graphQLClient.request(topicsQuery)
const topics = topicsdata.topics
const reverseparas = topic.paras.reverse()
return { 
  props: {
    topic,
    topics,
    reverseparas
}
}
}