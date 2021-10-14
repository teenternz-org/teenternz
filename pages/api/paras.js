import { gql, GraphQLClient } from 'graphql-request'

export default async function handler (req, res) {
  
  const url = process.env.ENDPOINT_URL
  const graphQLClient = new GraphQLClient(url, {
    headers: {
      authorization: process.env.GRAPH_CMS_TOKEN
  }
})

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

const data = await graphQLClient.request(parasQuery) 
const paras = data.paras.reverse()
res.status(200).json(paras)
}