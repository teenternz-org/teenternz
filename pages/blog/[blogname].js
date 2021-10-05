import Link from 'next/link'
import Time_Ago from "../../components/other/time-ago"
import { gql, GraphQLClient } from 'graphql-request'
import { RichText } from '@graphcms/rich-text-react-renderer';

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

const data = await graphQLClient.request(paraQuery, variables) 
const para = data.para
return { 
  props: {
    para
}
}
}

export default function BlogName(para){
  return (
    <>
              <h1 className="font-serif text-center md:text-5xl text-3xl mt-32 sm:m-8 md:font-normalfont-semibold">{para.para.title}</h1>
              <div className="grid grid-cols-12 mt-16">
                <div className="grid col-start-2  space-x-8 sm:space-x-4 md:space-x-3 lg:space-x-0 grid-cols-2"><div className="h-10 rounded-full overflow-hidden w-10"><img src={para.para.writer_pic.url} alt="picture" /></div>
                <div className="grid w-max grid-cols-1">
                <p className="text-sm px-1">{para.para.writer_name}</p>
                <p className="px-1 text-sm w-max"><Time_Ago date={para.para.date}/></p>
        </div>
      </div>
    </div>
    <div className="md:mx-28 sm:mx-12 mx-8 mt-8 mb-14">
    <RichText
        content={para.para.article.raw}
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


{/*
    <h1 className="text-2xl text-center mb-8">Read more</h1>
  
    <div className="grid grid-cols-3">
    <div className="sm:col-span-2 divide-y-2 col-span-3">

    
}
    {
        moreblogs.map(moreblogs => {
          return (
            <div key={moreblogs.id}>
              <div className="flex flex-1 m-8 justify-center">
        <div className="text-2xl font-semibold p-6 sm:w-2/3 w-full">
            <p><Link href={'/blog/' + moreblogs.id}><a>{moreblogs.heading}</a></Link></p>
            <p className="text-base font-light text-gray-800 mt-3"><Link href="/blogs/tips-for-overcoming-procrastination"><a>{moreblogs.content}</a></Link></p>
            <div className="flex flex-1">
            <p className="text-sm font-normal text-gray-800 mt-3"><Time_Ago date={moreblogs.date}/></p>
            <div className="flex flex-wrap">
        <Link href="/blogs/topic/self-help" passHref><p className="border-2 bg-gray-100 p-1 ml-4 text-sm font-medium rounded-full text-center cursor-pointer mt-2 px-auto">{moreblogs.topic}</p></Link>
        </div>
        </div>
        </div>
        <div className="hidden sm:block">
        <Link href="/blogs/how-to-find-your-passion"><a>
          <img className="h-32 w-48 m-6 rounded-lg" src={moreblogs.pic} alt="" />
          </a></Link>
        </div>
        </div>
            </div>
          )
        }
          )
        }
    </div>
    </div>

      */}
    </>
  )
}
