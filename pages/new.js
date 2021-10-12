import Link from 'next/link'
import Head from 'next/head'

export const getStaticProps = async () => {
  const response = await fetch('http://localhost:3005/api/internships')
  const data = await response.json()
  const internships = data
  return { 
    props: {
        internships,
  }
  }
  }

export default function Internships(internships) {
  return (
    <>
      <Head>
        <title>Internships</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
    {
        internships.internships.map(org => {
            return (
                <div key={org.org_name}>
                    <img src={org.org_profile_url} alt="" />
                    <div>{org.openings.map(opening => {
return(
    <div>{opening}</div>
)
                    }
                        ) }</div>
                    <div>{org.org_name}</div>
                    
                </div>           
            )
        })
    }
    </>
  )
}
