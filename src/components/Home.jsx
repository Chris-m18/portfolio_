import React, { useState } from 'react';
import Nav from './Nav'
import Header from './Header'
import About from './About'
import Projects from './Projects'
// import OurWork from './OurWork'
import Contact from './Contact'
// import Testimonials from './Testimonials'
import Footer from './Footer'
// import '../CSS/Home.scss'


const Home = () => {

  return (
    <>
      <Nav />
      <Header />
      <About />
      <Projects />
      {/* <OurWork/>
                <Quote/>
                <Testimonials/>  */}
      <Contact/>
      <Footer />
    </>
  )

}

export default Home