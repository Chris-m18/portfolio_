import React, { useState } from 'react';
import Nav from './Nav'
import Header from './Header'
import About from './About'
import Projects from './Projects'
import Skills from './Skills'
// import OurWork from './OurWork'
import Contact from './Contact'
// import Testimonials from './Testimonials'
import Footer from './Footer'
import '../css/Home.scss'


const Home = () => {

  return (
    <>
      <div className='home'>
      <Nav/>
      <Header />
      <About/>
      <Skills/>
      <Projects />
      {/* <OurWork/>
                <Quote/>
                <Testimonials/>  */}
      <Contact/>
        <Footer />
        </div>
    </>
  )

}

export default Home