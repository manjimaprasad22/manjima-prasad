import React from 'react'
import NavBarComp from '../components/NavBarComp'
import Bannerabout from '../components/Bannerabout'
import Skills from '../components/Skills'
import '../assets/style.css'
import Experience from '../components/Experience'
import Projects from '../components/Projects'
import { Link, Element } from 'react-scroll';
import Education from '../components/Education'
import { ContactUs } from '../components/ContactUs'
import Footers from '../components/Footers'
import '@fortawesome/fontawesome-free/css/all.min.css';

const Home = () => {
  return (
    
<>
      <NavBarComp/>
<div className='container'>
    <Element name='About' className='aboutback'>

      <Bannerabout/>
    </Element>
      <Element name='Skills' className='row col-12 slider'>
        <h2>Skills</h2>
      <Skills/>
      </Element>
      <Element name='Experience' className='row col-12 slider'>
        <h2>Experience</h2>
        <Experience/>
      
      </Element>
      <Element name='Projects' className='row col-12 slider'>
        <h2>Projects</h2>
        <Projects/>
      
      </Element>
      <Element name='Education' className='row col-12 slider'>
        <h2>Education</h2>
        <Education/>
      </Element>
      <Element name='hire' className='row col-12 slider'>
        {/* <h2>Contant Me</h2> */}
        <ContactUs/>
      </Element>
    </div>
      <Footers/>
</>
    
   
  )
}

export default Home
