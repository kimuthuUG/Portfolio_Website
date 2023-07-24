import React from 'react'
import "./HFormStyles.css"



export default function Form() {
  return (
    <div className='formJ'>
      <form>
        <label>Your Name</label>
        <input type='text'></input>
        <label>Email</label>
        <input type='email'></input>
        <label>Subject</label>
        <input type='text'></input>
        <textarea rows='6' placeholder="Type your massege here"/>
        <button className='btn'>Submit</button>
      </form>
    </div>
  )
}
