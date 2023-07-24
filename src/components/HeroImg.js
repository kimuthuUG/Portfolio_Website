import React from 'react'
import "./HeroImgStyles.css"
import IntroImg from "../assets/intro-bg.jpg"
import { Link } from 'react-router-dom'

export default function HeroImg() {
  return (
    <div className='hero'>
      <div className='mask'>
        <img className="intro-img" src={IntroImg} alt="IntroImg"/>
      </div>
      <div className='content'>
      <div className='section'>
    <div className='home-text'>
      <h4>HELLO !</h4>
      <h1>I AM KIMUTHU </h1>
      <h3>SOFTWARE DEVELOPER</h3>
      <Link to="/Project" className="btn">Projects</Link>
      <Link to="/Contact" className="btn-light">Contact</Link>
    </div>
    </div>
      </div>
    </div>
  )
}
