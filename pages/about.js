import Head from 'next/head'
import { FaLinkedin, FaTwitter, FaInstagram, FaYoutube, FaGithub } from 'react-icons/fa'
import { SiGmail } from 'react-icons/si'
import { MdArticle } from 'react-icons/md'

const About = () => {
  return (
    <>
      <Head>
        <title>About Us</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className=" m-16 text-center font-medium text-2xl">
        About Teenternz
      </div>
      <p className="text-lg md:mx-36 sm:mx-24 text-center mx-16">Teenternz is a platform for students and organisations.
        Here at teenternz we connect students with Organizations to provide them Volunteer Opportunities and Remote Internships.

        We bring NGOs and Non-profit organisations to provide students with a lot of opportunities such as Volunteer Opportunities and Remote Internships.

        Teenternz was founded in July 2021 and the main aim behind it was to provide students with      opportunities. As of now we have 60 organizations partnered with us to provide opportunities to     students.

        Since, during the ongoing pandemic students have faced a lot of difficulties and there was a lack of      opportunities, we built a platform for students where they can find Remote Volunteer Opportunities and Remote Internships.
      </p>
      <h1 className=" m-16 text-center font-medium mt-28 text-2xl">Our Team</h1>
      <div className="grid md:grid-cols-3 lg:grid-cols-4 sm:grid-cols-2 grid-cols-1 m-16">
        <div className="grid mt-6 sm:mt-0 grid-cols-1">
          <div className="mx-auto">
            <img className="h-48 w-48 shadow-md hover:shadow-2xl rounded-full" src="/about-us/sanskriti-jain.jpg" alt="" />
          </div>
          <div className=" p-5">
            <p className="font-semibold text-center">
              Sanskriti Jain<br /><span className="font-normal text-blue-500">Founder</span>
            </p>
            <div className="flex flex-1 mt-2 space-x-2 justify-center">
              <div className="cursor-pointer text-pink-900 dark:text-pink-300">
                <a href="https://mail.google.com/mail/u/0/?tf=cm&fs=1&to=sanskritiijain16@gmail.com&hl=en" target="_blank" rel="noreferrer"><SiGmail size="20" /></a>
              </div>
              <div className="cursor-pointer text-pink-900 dark:text-pink-300">
                <a href="https://www.linkedin.com/in/sanskritijain16/" target="_blank" rel="noreferrer"><FaLinkedin size="20" /></a>
              </div>
              <div className="cursor-pointer text-pink-900 dark:text-pink-300">
                <a href="https://twitter.com/Sanskritiii16" target="_blank" rel="noreferrer"><FaTwitter size="20" /></a>
              </div>
              <div className="cursor-pointer text-pink-900 dark:text-pink-300">
                <a href="https://www.instagram.com/sanskriti_jain_16/" target="_blank" rel="noreferrer"><FaInstagram size="20" /></a>
              </div>
            </div>
          </div>
        </div>
        <div className="grid mt-6 sm:mt-0 grid-cols-1">
          <div className="mx-auto">
            <img className="h-48 w-48 shadow-md hover:shadow-2xl rounded-full" src="/about-us/tejas-chaudhari.jpg" alt="" />
          </div>
          <div className=" p-5">
            <p className="font-semibold text-center">
              Tejas Chaudhari<br /><span className="font-normal text-blue-500">Software Engineer</span>
            </p>
            <div className="flex flex-1 mt-2 space-x-2 justify-center">
              <div className="cursor-pointer text-pink-900 dark:text-pink-300">
                <a href="https://twitter.com/tejasc0" target="_blank" rel="noreferrer"><FaTwitter size="20" /></a>
              </div>
              <div className="cursor-pointer text-pink-900 dark:text-pink-300">
                <a href="https://www.linkedin.com/in/tejasc0/" target="_blank" rel="noreferrer"><FaLinkedin size="20" /></a>
              </div>
              <div className="cursor-pointer text-pink-900 dark:text-pink-300">
                <a href="https://github.com/tejasc0" target="_blank" rel="noreferrer"><FaGithub size="20" /></a>
              </div>
              <div className="cursor-pointer text-pink-900 dark:text-pink-300">
                <a href="https://dev.to/tejasc0" target="_blank" rel="noreferrer"><MdArticle size="20" /></a>
              </div>
            </div>
          </div>
        </div>
        <div className="grid mt-6 md:mt-0 grid-cols-1">
          <div className="mx-auto">
            <img className="h-48 w-48 shadow-md hover:shadow-2xl rounded-full" src="/about-us/ayisha-necholi.jpg" alt="" />
          </div>
          <div className=" p-5">
            <p className="font-semibold text-center">
              Ayisha Necholi<br /><span className="font-normal text-blue-500">Executive Assistant</span>
            </p>
            <div className="flex flex-1 mt-2 space-x-2 justify-center">
              <div className="cursor-pointer text-pink-900 dark:text-pink-300">
                <a href="https://mail.google.com/mail/u/0/?tf=cm&fs=1&to=ayishanecholiofficial@gmail.com&hl=en" target="_blank" rel="noreferrer"><SiGmail size="20" /></a>
              </div>
              <div className="cursor-pointer text-pink-900 dark:text-pink-300">
                <a href="https://www.instagram.com/ayishanecholisocial_/" target="_blank" rel="noreferrer"><FaInstagram size="20" /></a>
              </div>
              <div className="cursor-pointer text-pink-900 dark:text-pink-300">
                <a href="https://www.linkedin.com/in/ayisha-necholi-ab5115202" target="_blank" rel="noreferrer"><FaLinkedin size="20" /></a>
              </div>
              <div className="cursor-pointer text-pink-900 dark:text-pink-300">
                <a href="https://youtube.com/channel/UCpVVEwMhc9MuIo5fs0iU7fQ" target="_blank" rel="noreferrer"><FaYoutube size="20" /></a>
              </div>
            </div>
          </div>
        </div>
        <div className="grid mt-6 lg:mt-0 grid-cols-1">
          <div className="mx-auto">
            <img className="h-48 w-48 shadow-md hover:shadow-2xl rounded-full" src="/about-us/Julean Palpallatoc.jpeg" alt="" />
          </div>
          <div className=" p-5">
            <p className="font-semibold text-center">
              Julean Palpallatoc<br /><span className="font-normal text-blue-500">Writing Lead</span>
            </p>
            <div className="flex flex-1 mt-2 space-x-2 justify-center">
              <div className="cursor-pointer text-pink-900 dark:text-pink-300">
                <a href="https://mail.google.com/mail/u/0/?tf=cm&fs=1&to=julean.palpallatoc1@gmail.com&hl=en" target="_blank" rel="noreferrer"><SiGmail size="20" /></a>
              </div>
              <div className="cursor-pointer text-pink-900 dark:text-pink-300">
                <a href="https://www.linkedin.com/in/julean-palpallatoc-19ab961b1/" target="_blank" rel="noreferrer"><FaLinkedin size="20" /></a>
              </div>
            </div>
          </div>
        </div>
        <div className="grid mt-6 md:col-start-2 lg:col-start-1 grid-cols-1">
          <div className="mx-auto">
            <img className="h-48 w-48 shadow-md hover:shadow-2xl rounded-full" src="/about-us/kunal-aggarwal.jpg" alt="" />
          </div>
          <div className=" p-5">
            <p className="font-semibold text-center">
              Kunal Aggarwal<br /><span className="font-normal text-blue-500">Community Manager</span>
            </p>
          </div>
        </div>

      </div>
    </>
  )
}

export default About
