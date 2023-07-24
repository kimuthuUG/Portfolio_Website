import React from 'react'
import "./SkillsStyles.css"

import pro21 from "../assets/agile.jpg"
import pro22 from "../assets/c++.png"
import pro23 from "../assets/c.png"
import pro24 from "../assets/java.jpg"
import pro25 from "../assets/mongo.webp"
import pro26 from "../assets/mysql.png"
import pro27 from "../assets/node.png"
import pro28 from "../assets/oop.jpg"
import pro29 from "../assets/python.png"
import pro30 from "../assets/react.webp"
import pro31 from "../assets/background.jpg"

export default function Skills() {
  return (
    <section className='services'>
        <div className='main-text'>
            <h2> SKILLS</h2>
            <h4>Better Design,Better Experiences</h4>
        </div>
        <div className='services-content'>
            <div className='box'>
                <img src={pro21}/>
                <h3>Agile methodology</h3>
           
            </div>
            <div className='box'>
                <img src={pro22}/>
                <h3>C++</h3>
       
            </div>
            <div className='box'>
                <img src={pro23}/>
                <h3>C</h3>
        
            </div>
            <div className='box'>
                <img src={pro24}/>
                <h3>JAVA</h3>
            
            </div>
            <div className='box'>
                <img src={pro25}/>
                <h3>MONGO DB</h3>
           
            </div>
            <div className='box'>
                <img src={pro26}/>
                <h3>MYSQL</h3>
        
            </div>
            <div className='box'>
                <img src={pro27}/>
                <h3>NODE.JS</h3>
             
            </div>
            <div className='box'>
                <img src={pro28}/>
                <h3>OOP Concepts</h3>
         
            </div>
            <div className='box'>
                <img src={pro29}/>
                <h3>PYTHON</h3>
       
            </div>
            <div className='box'>
                <img src={pro30}/>
                <h3>REACT.JS</h3>
            
            </div>

        </div>
    </section>
    
  )
}
