import Link from 'next/link';

export default function CategorySlug({ cats, slug }) {
  return (
    <>
      <div className="m-16 text-2xl font-medium">
          {slug}
              </div>
      
      <div className="grid md:grid-cols-4 sm:grid-cols-2 grid-cols-1">
      <div className="col-span-3">
				<div className="grid md:grid-cols-3 sm:grid-cols-2 grid-cols-1 col-span-3">
					{cats.map(org => {
        	    return (
        	        <div key={org.id}>
										<div className="m-4 grid grid-cols-2">
										<div className="h-20 w-20 m-2 rounded-full overflow-hidden cursor-pointer">
										 <Link href={"/internships/id/" + org.id} passHref><img src={org.org_profile_url} alt="" /	></Link>
										</div>
										<div className="m-2">
                    <Link href={"/internships/id/" + org.id} passHref>
										<p className="text-lg font-medium cursor-pointer">{org.position}</p></Link>
											<h1 className="text-sm text-gray-800 dark:text-gray-200">{org.org_name}</h1>
										</div>
										</div>
        	        </div>           
        	    )
        	})}
				</div>
        </div>
      </div>
    </>
  )
}

export async function getServerSideProps(pageContext) {
  const response = await fetch(process.env.PROD_URL + '/api/internships')
  const data = await response.json()
  function filterByCategory() {
    if ('content-writing' == pageContext.query.categorySlug) {
      return("Content Writing")
    } else if ('graphics-design' == pageContext.query.categorySlug) {
      return("Graphics Design")
    } else if ('web-development' == pageContext.query.categorySlug) {
      return("Web Development")
    } else if ('video-editing-and-film-making' == pageContext.query.categorySlug) {
      return("Video Editing and Film Making")
    } else if ('research' == pageContext.query.categorySlug) {
      return("Research")
    } else {
      return("No Category Found!")
    }

  }
  filterByCategory()
  const slug = filterByCategory()
  const cats = data.filter((org) => {
    return (org.category1 == slug || org.category2 == slug || org.category3 == slug || org.category4 == slug || org.category5 == slug)
  })

return { 
  props: {
    cats,
    slug
}
}
}