import Link from 'next/link'

export default function Blog_Subsection(topics) {
  return (
    <>
        <div className="hidden sm:block overflow-y-auto scrollbar-hide -mt-96 fixed h-80">
        <h1 className="text-2xl mb-2 font-medium ml-8">
           
            Topics
           
            </h1>
        <div className="flex flex-wrap">
  {
    topics.topics.map(topic => {
      return (
        <div key={topic.id}>
<Link href={"/blog/topic/" + (topic.slug_of_topic)} passHref><p className="bg-pink-200 dark:bg-pink-800 p-1 ml-3 text-sm rounded-full cursor-pointer px-auto mt-3">{topic.topic_name}</p></Link>
        </div>
      )
    })
  }
        </div>

      </div>
    </>
  )
}

