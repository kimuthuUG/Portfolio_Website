import React from 'react'
import "./EducationStyles.css"
import rahula from "../assets/rahula.png"
import sliit from "../assets/sliit.jpeg"

export default function Education() {
  return (
    <div className='container'>
        <h1>EDUCATION</h1>
        <div className='work-list'>
            <div className='work'>
                <img src={rahula}/>
                <div className='layer'>
                    <h3>Rahula College Matara</h3>
                    <a>I am a student who attended Rahula College Matara from 2006 to 2019. During my time at the school, I had the opportunity to receive a well-rounded education that nurtured both my academic and personal growth.<br></br><br></br>I had 8A’s & B(English) for O/L in 2016. Also I had – C (Combined Maths) S (Physics) S (Chemistry) C (General English) for A/L in 2020</a>
                </div>
            </div>
            <div className='work'>
                <img src={sliit}/>
                <div className='layer'>
                    <h3>Sri Lanka Institute of Information Technology</h3>
                    <a>I am a student who has completed the second year of the BSc (Hons) in Information Technology - Software Engineering degree at SLIIT. I have been studying at SLIIT since 2021 and continue to pursue my education in the present. During my time at the university, I have gained valuable knowledge and skills in the field of Software Engineering, preparing me for a rewarding career in the IT industry.
</a>
                </div>
            </div>
        </div>
      
    </div>
  )
}
