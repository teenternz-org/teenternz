import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

const Home: NextPage = () => {
  return (
<div>
  <input type="checkbox" id="active" />
  <label htmlFor="active" className="menu-btn"><i className="fas fa-bars" /></label>
  <div className="wrapper">
    <ul>
      <li><a href="index.html">Home</a></li>
      <li><a href="pages/teams.html">Opportunities</a></li>
      <li><a href="pages/course.html">Courses</a></li>
      <li><a href="pages/Submityourreview.html">Share Feedback</a></li>
      <li><a href="pages/todo.html">To-do List</a></li>
      <li><a href="pages/blog.html">Article</a></li>
      <li><a href="pages/resourses.html">Resourses</a></li>
      <li><a href="pages/Register.html">Register as an Organisation</a></li>
    </ul>
  </div>
</div>

  )
}

export default Home
