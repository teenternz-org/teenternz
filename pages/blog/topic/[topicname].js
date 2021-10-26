import Link from 'next/link';
import Time_Ago from '../../../components/other/time-ago'
import { gql, GraphQLClient } from 'graphql-request'

export default function TopicName({ topic, reverseparas }) {
  return (
    <div className="mb-36">
      <div className="m-16 text-2xl font-medium">
        {topic.topic_name}
      </div>
      <div className="grid grid-cols-6">
        <div className="lg:col-span-4 divide-y-2 lg:col-start-2 col-start-1 col-span-6">

          {
            reverseparas.map(paras => {
              return (
                <div key={paras.id}>
                  <div className="flex flex-col sm:flex-row justify-center">
                    <div className="m-6 sm:hidden block rounded-md overflow-hidden">
                      <Link href={"/blog/" + paras.para_slug}><a>
                        <img src={paras.pic.url} alt="" />
                      </a></Link>
                    </div>
                    <div className="hidden sm:block">
                      <Link href={'/blog/' + paras.para_slug}><a>
                        <img className="h-32 w-48 m-4 rounded-lg" src={paras.pic.url} alt="" />
                      </a></Link>
                    </div>
                    <div className="text-2xl p-6 sm:w-2/3 w-full">
                      <div className="font-semibold"><Link href={'/blog/' + paras.para_slug}><a>{paras.title}</a></Link></div>
                      <p className="text-base sm:block hidden font-light text-gray-800 dark:text-gray-200 mt-3"><Link href={'/blog/' + paras.para_slug}><a>{paras.para_first_25}..</a></Link></p>
                      <div className="flex mx-2 flex-1">
                        <p className="text-sm text-gray-800 dark:text-gray-200 mt-3"><Time_Ago date={paras.date} /></p>
                        <div className="flex flex-wrap">
                          <Link href={'/blog/topic/' + paras.para_slug} passHref>
                            <div className="flex flex-wrap">
                              {
                                paras.topic_reference.map(topic => {
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
      </div>
    </div>
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

  const topicdata = await graphQLClient.request(topicQuery, variables)
  const topic = topicdata.topic
  const reverseparas = topic.paras.reverse()
  return {
    props: {
      topic,
      reverseparas
    }
  }
}