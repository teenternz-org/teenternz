import { gql, GraphQLClient } from 'graphql-request'

export default async function handler (req, res) {
  
  const url = process.env.ENDPOINT_URL
  const graphQLClient = new GraphQLClient(url, {
    headers: {
      authorization: process.env.GRAPH_CMS_TOKEN
  }
})

const rankedparasQuery = gql`
query {
  rankedParas {
    paras {
      title
      para_slug
      date
      topic_reference {
        topic_name
        slug_of_topic
      }
      pic{
        url
      }
    }
  }
}`

const rankedparadata = await graphQLClient.request(rankedparasQuery) 
const rankedparas = rankedparadata.rankedParas[0]
res.status(200).json(rankedparas)
}