import { useState } from 'react'
import Link from 'next/link'

const Blog_Subsection = () => {

  const [topics, settopics] = useState([])
  const fetchTopics = async () => {
    const response = await fetch('/api/topics')
    const data = await response.json()
    settopics(data)
  }

  fetchTopics()

  return (
    <>
      <div className="hidden sm:block fixed">
        <h1 className="text-xl font-medium ml-8">Topics</h1>
        <div className="flex flex-wrap">
        {
        topics.map(topics => {
          return (
            <div key={topics.id}>
            <Link href={'/blog/topic/' + topics.topic.replace(/\s/g , "-")} passHref><p className="border-2 bg-gray-100 p-1 ml-4 text-sm font-medium rounded-full text-center cursor-pointer px-auto mt-6">{topics.topic}</p></Link>
            </div>
          )
        }
          )
        }
        </div>
      </div>
      
    </>
  )
}

export default Blog_Subsection
