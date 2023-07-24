import React from 'react';
import Navbar from "../components/Navbar";
import HeroImg from '../components/HeroImg';
import Footer from  '../components/Footer';
import AboutContent from "../components/AboutContent"
import WorkCard from "../components/WorkCard"
import Skills from "../components/Skills"
import Education from "../components/Education"



export default function Home() {
  return (
    <div>
      <Navbar/>
      <HeroImg/>
      <AboutContent/>
      <WorkCard/>  
      <Skills/>
      <Education/>
      <Footer/>
    </div>
  )
}
