import { gql, GraphQLClient } from 'graphql-request'

export default async function handler (req, res) {
  
  const url = process.env.ENDPOINT_URL
  const graphQLClient = new GraphQLClient(url, {
    headers: {
      authorization: process.env.GRAPH_CMS_TOKEN
  }
})

const topicsQuery = gql`
query {
  topics {
    topic_name
    slug_of_topic
  }
}`

const topicsdata = await graphQLClient.request(topicsQuery)
const topics = topicsdata.topics
res.status(200).json(topics)
}