import React from 'react'
import Navbar from "../components/Navbar";
import HeroImg2 from '../components/HeroImg2';
import Footer from  '../components/Footer';

import WorkCard from '../components/WorkCard';

export default function Project() {
  return (
    <div>
      <Navbar/>
      <HeroImg2 heading="PROJECTS" text="some of my most recent works"/>
      <WorkCard/>  
      <Footer/>
    </div>
  )
}
