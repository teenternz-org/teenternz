import { org } from '../../../data/internships'

export async function getServerSideProps(pageContext) {
const internship = org.filter(orgs => orgs.id == pageContext.query.orgid)

return { 
  props: {
    internship
}
}
}

export default function Org_Id({ internship }) {
  return (
    <>
    {internship.map(internship => {
      return (
        <div key={internship.id}>
          <div className="ml-16">
    <h1 className="text-2xl font-medium mt-8">{internship.position}</h1>
      <div className="font-medium my-8 text-lg">{internship.org_name}</div>
      <div className="font-medium">About:</div>
    <p>{internship.about}</p>
            <button className="ml-4 bg-purple-200 p-2 my-4 rounded-md shadow-md">
            <a href={internship.apply_url} rel="noreferrer" target="_blank">
                Apply</a>
            </button>
            <div className="font-medium text-lg">Links:</div>
            {internship.links.map(link => {
              return (
                <div key={internship.id}>
                  <p className="cursor-pointer hover:underline">{link.link1}</p>
                  <p className="cursor-pointer hover:underline">{link.link2}</p>
                  <p className="cursor-pointer hover:underline">{link.link3}</p>
                  <p className="cursor-pointer hover:underline">{link.link4}</p>
                  <p className="cursor-pointer hover:underline">{link.link5}</p>
                  </div>
                  )
                })}
</div>
        </div>
      )
    })}
      
    </>
  )
}
