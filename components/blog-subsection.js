import Link from 'next/link'

export default function Blog_Subsection(topics) {
  return (
    <>
        <div className="hidden sm:block fixed">
          <div className="max-w-min cursor-default font-semibold text-3xl mx-8">
          Topics
          </div>
        
        <div className="flex flex-wrap">
        {
        topics.topics.map(topic => {
          return (
            <div key={topic.slug_of_topic}>
            <Link href={"/blog/topic/" + (topic.slug_of_topic)} passHref><p className="bg-pink-200 p-1 ml-4 text-sm font-medium rounded-full text-center cursor-pointer px-auto mt-6">{topic.topic_name}</p></Link>
            </div>

          )})}
        </div>
      </div>
    </>
  )
}

