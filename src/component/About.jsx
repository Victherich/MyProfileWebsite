import React from 'react'
import { useContext } from 'react'
import { Context } from './Context'
import '../CSS/About.css'

const About = () => {
    // const {theme}=useContext(Context)
   

  return (
    <div className='AboutWrap' id="about">
      <div className='About'>
        <div className='AboutLeft'>

        </div>
        <div className='AboutRight'>
          <h1>About</h1>
          <p>I am a Proficient web developer in HTML, CSS, JavaScript, React, UI/UX, and GitHub, 
            I breathe life into innovative projects. Whether crafting user-friendly bank apps, 
            optimizing task management systems, or designing engaging real estate and e-commerce websites,
             my commitment to excellence is unwavering. Beyond the code, my personal character adds a distinctive 
             touch to each project. Join me in transforming ideas into interactive realities, 
             where creativity seamlessly merges with functionality.</p>
        </div>
      </div>
    </div>
  )
}

export default About
