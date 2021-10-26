import Link from 'next/link'
import Head from 'next/head'
import { server } from '../components/url'

export default function Internships({ opportunities }) {
  return (
    <>
      <Head>
        <title>Internships</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="m-16 text-2xl font-medium">
        New Opportunities
      </div>

      <div className="grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 col-span-4">
        {opportunities.map(post => {
          return (
            <div key={post.id}>
              <div className="m-4 grid grid-cols-2">
                <div className="h-20 w-20 m-2 rounded-full overflow-hidden cursor-pointer">
                  <Link href={"/internships/id/" + post.id} passHref><img src={"/opportunities/" + post.org_profile_url} alt="" /></Link>
                </div>
                <div className="m-2">
                  <Link href={"/internships/id/" + post.id} passHref>
                    <p className="text-lg font-medium cursor-pointer">{post.position}</p></Link>
                  <h1 className="text-sm text-gray-800 dark:text-gray-200">{post.org_name}</h1>
                </div>
              </div>
            </div>
          )
        })}
      </div>
    </>
  )
}

export const getStaticProps = async () => {
  const response = await fetch(`${server}/api/opportunities`)
  const data = await response.json()
  const opportunities = data

  return {
    props: {
      opportunities
    }
  }
}