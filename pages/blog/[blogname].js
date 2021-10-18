import Link from 'next/link'
import Time_Ago from "../../components/other/time-ago"
import { gql, GraphQLClient } from 'graphql-request'
import { RichText } from '@graphcms/rich-text-react-renderer';

export default function BlogName({ para, paras }) {
  return (
    <>
              <h1 className="font-serif text-center md:text-5xl text-3xl mt-32 sm:m-8 md:font-normalfont-semibold">{para.title}</h1>
              <div className="grid grid-cols-12 mt-16">
                <div className="grid col-start-2  space-x-8 sm:space-x-4 md:space-x-3 lg:space-x-0 grid-cols-2"><div className="h-10 rounded-full overflow-hidden w-10"><img src={para.writer_pic.url} alt="picture" /></div>
                <div className="grid w-max grid-cols-1">
                <p className="text-sm text-gray-800 dark:text-gray-200 px-1">{para.writer_name}</p>
                <p className="px-1 text-sm text-gray-800 dark:text-gray-200 w-max"><Time_Ago date={para.date}/></p>
        </div>
      </div>
    </div>
    <div className="md:mx-28 sm:mx-12 mx-8 mt-8 mb-14">
    <RichText
        content={para.article.raw}
        renderers={{
        bold: ({ children }) => <div className="text-lg my-6 font-semibold">{children}</div>,
        p: ({ children }) => <div className="text-base my-3">{children}</div>,
        h1: ({ children }) => <div className="text-xl my-6 font-semibold">{children}</div>,
        h2: ({ children }) => <div className="text-xl my-6 font-semibold">{children}</div>,
        h3: ({ children }) => <div className="text-xl my-6 font-semibold">{children}</div>,
        h4: ({ children }) => <div className="text-xl my-6 font-semibold">{children}</div>,
        h5: ({ children }) => <div className="text-xl my-6 font-semibold">{children}</div>,
        h6: ({ children }) => <div className="text-xl my-6 font-semibold">{children}</div>,
        blockquote: ({ children }) => <div className="my-3 bg-gray-200 rounded-md p-3">{children}</div>,
        code: ({ children }) => <div className="my-3 bg-gray-200 font-mono rounded-md p-3">{children}</div>,
        code_block: ({ children }) => <div className="my-3 bg-gray-200 font-mono rounded-md p-3">{children}</div>,
        table: ({ children }) => <div className="my-3 bg-gray-200 border-2 border-black rounded-md">{children}</div>,
        table_head: ({ children }) => <div className="my-3 bg-blue-400">{children}</div>,
        li: ({ children }) => <div className="text-base my-2 ml-6">{children}</div>,
        ol: ({ children }) => <div className="text-base my-2 ml-6">{children}</div>,
        img: ({ src, altText }) => (
          <img
            src={src}
            alt={altText}
            objectFit="cover" className="mx-auto w-auto max-h-full"
          />
        ),
        a: ({ children, openInNewTab, href, rel, ...rest }) => {
          if (href.match(/^https?:\/\/|^\/\//i)) {
            return (
              <span className="text-blue-800">
              <a
                href={href}
                target="_blank"
                rel="noreferrer"
                {...rest}
              >
                {children}
              </a>
              </span>
            );
          }
          return (
            <Link href={href}>
              <a {...rest}>{children}</a>
            </Link>
          );
        },
        }}
      />
    </div>

    <h1 className="text-2xl text-center mb-8">Read more</h1>
    {
        paras.map(paras => {
          return (
            <div key={paras.id}>            
        <div className="flex flex-1 m-8 justify-center">
        <div className="hidden sm:block">
        <Link href="/blogs/how-to-find-your-passion"><a>
          <img className="h-32 w-48 m-6 rounded-lg" src={paras.pic.url} alt="" />
          </a></Link>
        </div>
        <div className="text-2xl font-semibold p-6 sm:w-2/3 w-full">
            <p><Link href={'/blog/' + paras.para_slug}><a>{paras.title}</a></Link></p>
            <p className="text-base font-light text-gray-800 dark:text-gray-200 mt-3"><Link href={'/blog/' + paras.para_slug}><a>{paras.para_first_25}</a></Link></p>
            <div className="flex flex-1">
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
        <div className="mt-24"></div>
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

const blogSlug = pageContext.query.blogname

const paraQuery = gql`
query($blogSlug: String!) {
  para(where: {para_slug: $blogSlug}) {
    title
    para_slug
    date
    writer_name
    writer_pic{
      url
    }
    article {
      raw
    }
  }
}`
const variables = {
  blogSlug
}

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

const blogdata = await graphQLClient.request(paraQuery, variables) 
const para = blogdata.para
const data = await graphQLClient.request(parasQuery) 
const paras = data.paras.reverse().filter(para => para.para_slug !== blogSlug)

return { 
  props: {
    para,
    paras,
}
}
}