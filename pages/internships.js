import Link from 'next/link'
import Head from 'next/head'
import { org} from '../data/internships'
export const getStaticProps = async () => {

    const internships = org
    return { 
      props: {
          internships,
    }
    }
}

export default function Internships({ internships }) {
	return (
    <>
      <Head>
        <title>Internships</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="m-16 text-2xl font-medium">
          New Internships
              </div>
      
      <div className="grid md:grid-cols-4 sm:grid-cols-2 grid-cols-1">
      <div className="col-span-3">
				<div className="grid md:grid-cols-3 sm:grid-cols-2 grid-cols-1 col-span-3">
					{internships.map(org => {
        	    return (
        	        <div key={org.id}>
										<div className="m-4 grid grid-cols-2">
										<div className="h-20 w-20 m-2 rounded-full overflow-hidden cursor-pointer">
										 <Link href={"/internships/" + org.id}><img src={org.org_profile_url} alt="" /	></Link>
										</div>
										<div className="m-2">
                    <Link href={"/internships/" + org.id}>
										<p className="text-lg font-medium cursor-pointer">{org.position}</p></Link>
											<h1 className="text sm">{org.org_name}</h1>
										</div>
										</div>
        	        </div>           
        	    )
        	})}
				</div>
        </div>
<div>
<div className="hidden md:block -mt-24 fixed">
        <h1 className="text-2xl font-medium ml-8">
           
            Categories
           
            </h1>
<div className="flex flex-wrap">
          <Link href="/internships/category/content-writing" passHref>
            <div className="bg-pink-200 p-1 ml-4 text-sm font-medium rounded-full text-center cursor-pointer px-auto mt-6">Content Writing</div>
          </Link>  
        
          <Link href="/internships/category/graphics-design" passHref>
            <div className="bg-pink-200 p-1 ml-4 text-sm font-medium rounded-full text-center cursor-pointer px-auto mt-6">Graphics Design</div>
          </Link>  
          <Link href="/internships/category/video-editing-and-film-making" passHref>
            <div className="bg-pink-200 p-1 ml-4 text-sm font-medium rounded-full text-center cursor-pointer px-auto mt-6">Video Editing and Film Making</div>
          </Link>  
          <Link href="/internships/category/web-dev" passHref>
            <div className="bg-pink-200 p-1 ml-4 text-sm font-medium rounded-full text-center cursor-pointer px-auto mt-6">Web Development</div>
          </Link>  

          <Link href="/internships/category/research" passHref>
            <div className="bg-pink-200 p-1 ml-4 text-sm font-medium rounded-full text-center cursor-pointer px-auto mt-6">Research</div>
          </Link>  
        </div>
</div>
</div>
        

</div>
    </>
  )
}
