import React from 'react'
import Navbar from "../components/Navbar";

import Footer from  '../components/Footer';
import HeroImg2 from '../components/HeroImg2';
import AboutContent from '../components/AboutContent';
import Skills from '../components/Skills';
import Education from '../components/Education';

export default function About() {
  return (
    <div>
      <Navbar/>
      <HeroImg2 heading="ABOUT" text="I am friendly software developer"/>
      <AboutContent/>
      <Skills/>
      <Education/>
      <Footer/>
     
    </div>
  )
}
