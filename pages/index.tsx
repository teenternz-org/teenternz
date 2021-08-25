import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Teenternz</title>
        <meta name="description" content="A platform for highschool students to find Internships worldwide" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div>
        <div className="text-center">
          <h1 className="text-4xl p-8 hover:bg-red-200 font-medium">
            Welcome to <a className="text-blue-600" href="https://teenternz.online">Teenternz</a>
          </h1>
        </div>
      </div>
    </>
  )
}

export default Home
