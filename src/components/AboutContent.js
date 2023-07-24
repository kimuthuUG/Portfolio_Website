import React from 'react'
import "./AboutContentStyles.css"
import { Link } from 'react-router-dom'
import React1 from "../assets/kk.jpg"


export default function () {
  return (
    <div className='back'>
    <div className='about'>
        <div className='left1'>
            <h1>Who Am I ?</h1>
            <p>Driven by a deep passion for technology, I am a dedicated individual with strong coding
skills and a keen eye for detail. Problem-solving is my forte, and I thrive in finding innovative
solutions to complex technical challenges. Collaborating with others is where I find
inspiration and enjoy leveraging my skills to achieve common goals. As a motivated and
enthusiastic IT professional, I am eager to contribute my technical expertise and contribute
to the success of projects and teams.
</p>
            <Link to="/Contact">
                <br></br>
                <button className='btn'>Contact</button>
            </Link>
        </div>

        <div className='right1'>
            <div className='img-container'>
                <div className='img-stack top'>
                    <img src={React1} className='img' alt='true'/>
                </div>
  
            </div>

        </div>
      
    </div>
    </div>
  )
}
