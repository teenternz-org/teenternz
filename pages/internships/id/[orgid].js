export default function Org_Id({ internship }) {
  return (
    <>
    {internship.map(internship => {
      return (
        <div key={internship.id}>
    <h1 className="text-2xl font-medium mx-14 md:mx-24 mt-8">{internship.position}</h1>
      <div className="font-medium mx-12 my-8 text-lg">{internship.org_name}</div>
      <div className="font-medium mx-14">About:</div>
    <p className="mx-12 md:mx-20">{internship.about}</p>
            <button className="mx-4 md:mx-24 bg-purple-200 p-2 my-4 rounded-md shadow-md">
            <a href={internship.apply_url} rel="noreferrer" target="_blank">
                Apply</a>
            </button>
            <div className="font-medium mx-6 md:mx-16 text-lg">Links:</div>
            {internship.links.map(link => {
              return (
                <div key={internship.id}>
                  <p className="cursor-pointer mx-2 md:mx-20 hover:underline"><a href={link.link1} rel="noreferrer" target="_blank">{link.link1}</a></p>
                  <p className="cursor-pointer mx-2 md:mx-20 hover:underline"><a href={link.link2} rel="noreferrer" target="_blank">{link.link2}</a></p>
                  <p className="cursor-pointer mx-2 md:mx-20 hover:underline"><a href={link.link3} rel="noreferrer" target="_blank">{link.link3}</a></p>
                  <p className="cursor-pointer mx-2 md:mx-20 hover:underline"><a href={link.link4} rel="noreferrer" target="_blank">{link.link4}</a></p>
                  <p className="cursor-pointer mx-2 md:mx-20 hover:underline"><a href={link.link5} rel="noreferrer" target="_blank">{link.link5}</a></p>
                  </div>
                  )
                })}

        </div>
      )
    })}
      
    </>
  )
}

export async function getServerSideProps(pageContext) {
  const response = await fetch(process.env.PROD_URL + '/api/internships')
  const data = await response.json()
  const internship = data.filter(orgs => orgs.id == pageContext.query.orgid)
  
  return { 
    props: {
      internship
  }
  }
}