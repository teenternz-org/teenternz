import Blog_Layout from "../../components/blog-layout"
import Time_Ago from '../../components/time-ago'
import Link from 'next/link'

const Blog_1 = () => {
  return (
    <Blog_Layout>
    <h1 className="font-serif text-center md:text-5xl text-3xl m-6 sm:m-8 mt-32 md:font-normal font-semibold">
        HOW TO PREPARE FOR AN INTERVIEW AS A HIGH SCHOOL STUDENT!
        </h1>
        <div className="grid grid-cols-12 mt-16">
    <div className="grid col-start-2 grid-cols-2"><div className="h-10 rounded-full overflow-hidden w-10"><img src="/authors/sanskriti-jain.jpg" alt="" /></div>
    <div className="grid w-max grid-cols-1"><Link href="/authors/sanskriti-jain"><p className="text-sm hover:underline px-1 cursor-pointer">Sanskriti Jain</p></Link>
    <p className="px-1 text-sm w-max"><Time_Ago date="July 8 2021"/></p>
      </div></div>
    </div>
    <p className="font-serif md:mx-28 sm:mx-12 mx-8 md:text-lg text-base font-light mt-8 mb-14">
        The interview is one of the key fragments of the
        process of getting hired and is a complete 
        game-changer if it goes well. But it is a 
        non-academic skill. So, students have to
        prepare themselves for the job or school 
        interviews.
<br /><br /><br />

As high schoolers/teenagers, a lot of us get 
anxious about the interviewing part. This anxiety
can lead us to low confidence and bad influence. 
So, the first thing to do is to buildup confidence, 
and here are some tips and examples which will
help you to ace the interview.

<br /><br /><br />
<b>BEFORE GOING TO THE INTERVIEW</b>
<br /><br /><br />

1. <b> RESEARCH;</b> This is a really important step. 
Make good thorough research from the web or the
application form of what the main motto of the
organization is or what skills they want in 
their candidate, etc.

<br /><br />


2. <b> practice;</b> Practice the interview with your 
friends-family or even with online mock interviews. 
This will help you to get familiar with speaking and 
giving relevant answers. Because practice makes a man perfect.
<br /> <br />

3. <b>OTHER DOCUMENTS;</b>  collect all the preferred documents
for the interview. Make a resume/CV this will help you
get whatever you want to say (your skills, etc.) neatly
arranged so you won’t jumble if such questions are asked
and your thoughts will also be organized so you can give
clear and effective answers.


<br /> <br />


4. <b>WRITE;</b>  many students have a lot of things on their minds. 
In the interview, students have to present themselves
accurately and positively. Writing always helps to
clear your mind and create more and more perfection.
This will give you confidence and a sense of doing right.


<br /> <br /><br /> <br />


<b>DURING THE INTERVIEW -</b> 
<br /><br /><br />

1. Be respectful and polite here is your chance to show your skills through good manners and behavior.
<br /><br />
2. Be on time this shows how punctual you are.
<br /><br />
3. Maintain a good posture and be positive, makes you look more professional and confident.
<br /><br />
4. Provide information that is asked appropriately to be clear.
<br /><br />
5. Ask questions at the end so they can know how interested you are to get the opportunity and this impacts your presence.

<br /><br /><br /><br />


Also, in this situation of the pandemic, many of us have to give our interviews online. That can be a positive or negative aspect depending on us. It is positive in the sense we don’t have to travel long distances and get exhausted and, here we have more chances of getting late.
<br />
<br />
But the negative aspect might be a poor internet connection, no appropriate area to sit (without noise, etc.) so to conquer negative aspects you have to make sure these problems don’t come in your way. these points are given above also have to be kept in mind before giving an online interview.
</p>

    </Blog_Layout>
  )
}

export default Blog_1
