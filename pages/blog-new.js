import Link from "next/link"
import Head from 'next/head'
import Blog_Subsection from "../components/blog-subsection"
import Time_Ago from "../components/other/time-ago"
import { gql, GraphQLClient } from 'graphql-request'

export const getStaticProps = async () => {
  const url = process.env.ENDPOINT_URL
  const graphQLClient = new GraphQLClient(url, {
    headers: {
      authorization: process.env.GRAPH_CMS_TOKEN
  }
})

const parasQuery = gql`
query {
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
}`

const topicsQuery = gql`
query {
  topics {
    topic_name
    slug_of_topic
  }
}`

const data = await graphQLClient.request(parasQuery) 
const paras = data.paras.reverse()
const topicsdata = await graphQLClient.request(topicsQuery)
const topics = topicsdata.topics
return { 
  props: {
    paras,
    topics
}
}
}

export default function Blog_New({ paras, topics }) {
  return (
    <>
      <Head>
        <title>Blog</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
    <div className="grid grid-cols-3">
    <div className="sm:col-span-2 divide-y-2 col-span-3">
    
    {
        paras.map(paras => {
          return (
            <div key={paras.id}>

              <div className="flex flex-1 m-8 justify-center">
        <div className="text-2xl font-semibold p-6 sm:w-2/3 w-full">
            <p><Link href={'/blog/' + paras.para_slug}><a>{paras.title}</a></Link></p>
            <p className="text-base font-light text-gray-800 mt-3"><Link href={'/blog/' + paras.para_slug}><a>{paras.para_first_25}</a></Link></p>
            <div className="flex flex-1">
            <p className="text-sm font-normal text-gray-800 mt-3"><Time_Ago date={paras.date}/></p>
            <div className="flex flex-wrap">
        <Link href={'/blog/topic/' + paras.para_slug} passHref>
        <div className="flex flex-wrap">
          {
          paras.topic_reference.map(topic =>{
            return (
              <div key={topic.slug_of_topic}>
                <Link href={"/blog/topic/" + (topic.slug_of_topic)} passHref>
              <p className="border-2 bg-gray-100 p-1 ml-4 text-sm font-medium rounded-full text-center cursor-pointer mt-2 px-auto">
                {topic.topic_name}
                </p></Link>
              </div>
            )
          })}
          </div>
          </Link>
        </div>
        </div>
        </div>
        <div className="hidden sm:block">
        <Link href="/blogs/how-to-find-your-passion"><a>
          <img className="h-32 w-48 m-6 rounded-lg" src={paras.pic.url} alt="" />
          </a></Link>
        </div>
        </div>
            </div>
          )
        }
          )
        }
    </div>
    <div className="mt-24">

    <Blog_Subsection topics={topics} />
      
    </div>
    </div>
    
    </>
  )
}
