import Link from "next/link"
import Head from 'next/head'
import Blog_Subsection from "../components/blog-subsection"
import Time_Ago from "../components/other/time-ago"
import { gql, GraphQLClient } from 'graphql-request'

export default function Blog({ paras, topics, rankedparas }) {
  return (
    <>
      <Head>
        <title>Blog</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="grid grid-cols-3">
      <div className="sm:col-span-2 col-span-3">

      {/* -- Ranked Paragraphs -- */}

      <div className="grid grid-cols-1 sm:grid-cols-4">
        {
          rankedparas.paras.map((paras) => {
            return (
              <div key="para_slug" className="col-span-2">
              <div className="m-6 rounded-md overflow-hidden">
              <Link href={"/blog/" + paras.para_slug}><a>
              <img src={paras.pic.url} alt="" />
              </a></Link>
              </div>
              <p className="text-2xl cursor-pointer font-semibold mx-6"><Link href={"/blog/" + paras.para_slug}>{paras.title}</Link></p>
              <div className="flex mx-8 mb-8 flex-1">
            <p className="text-sm text-gray-800 dark:text-gray-200 mt-3"><Time_Ago date={paras.date}/></p>
              <div className="flex flex-wrap">
              <Link href={'/blog/topic/' + paras.para_slug} passHref>
        <div className="flex flex-wrap">
          {
          paras.topic_reference.map(topic =>{
            return (
              <div key={topic.slug_of_topic}>
                <Link href={"/blog/topic/" + (topic.slug_of_topic)} passHref>
              <p className="bg-pink-200 dark:bg-pink-800 p-1 ml-4 text-sm rounded-full text-center cursor-pointer mt-2 px-auto">
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
            )
          })
        }
        
      </div>
      <h1 className="text-2xl sm:hidden block font-medium m-16">Recent Blogs</h1>
      </div>
      
      <div className="sm:col-span-2 divide-y-2 col-span-3">
    
    {
        paras.map(paras => {
          return (
            <div key={paras.id}>
              <div className="flex flex-col sm:flex-row sm:m-6 justify-center">
              <div className="m-6 sm:hidden block rounded-md overflow-hidden">
              <Link href={"/blog/" + paras.para_slug}><a>
              <img src={paras.pic.url} alt="" />
              </a></Link>
              </div>
              <div className="hidden sm:block">
        <Link href={'/blog/' + paras.para_slug}><a>
          <img className="h-32 w-48 m-6 rounded-lg" src={paras.pic.url} alt="" />
          </a></Link>
        </div>
        <div className="text-2xl p-6 sm:w-2/3 w-full">
            <div className="font-semibold"><Link href={'/blog/' + paras.para_slug}><a>{paras.title}</a></Link></div>
            <p className="text-base sm:block hidden font-light text-gray-800 dark:text-gray-200 mt-3"><Link href={'/blog/' + paras.para_slug}><a>{paras.para_first_25}..</a></Link></p>
            <div className="flex mx-2 flex-1">
            <p className="text-sm text-gray-800 dark:text-gray-200 mt-3"><Time_Ago date={paras.date}/></p>
            <div className="flex flex-wrap">
        <Link href={'/blog/topic/' + paras.para_slug} passHref>
        <div className="flex flex-wrap">
          {
          paras.topic_reference.map(topic =>{
            return (
              <div key={topic.slug_of_topic}>
                <Link href={"/blog/topic/" + (topic.slug_of_topic)} passHref>
              <p className="bg-pink-200 dark:bg-pink-800 p-1 ml-4 text-sm rounded-full text-center cursor-pointer mt-2 px-auto">
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

export const getStaticProps = async () => {

  const parasresponse = await fetch(process.env.PROD_URL + '/api/paras')
  const paras = await parasresponse.json()
  const rankedparasresponse = await fetch(process.env.PROD_URL + '/api/rankedparas')
  const rankedparas = await rankedparasresponse.json()
  const topicsdataresponse = await fetch(process.env.PROD_URL + '/api/blogtopics')
  const topics = await topicsdataresponse.json()
  return { 
    props: {
      paras,
      topics,
      rankedparas
    }
  }
}