import React from 'react'
import { useContext } from 'react'
import { Context } from './Context'
import '../CSS/About.css'
import AboutImg from '../Images/AboutImgB.png'


const About = () => {
    const {theme}=useContext(Context)
   

  return (
    <div className={theme?'AboutWrapLight':'AboutWrap'} id="about">
      <div className={theme?'AboutLight':'About'}>
        <div className='AboutLeft'>
          <img src={AboutImg} alt="AboutImg"/>
        </div>
        <div className='AboutRight'>
          <h1>About</h1>
          <p>Victor Ndu is a Proficient web developer with good knowledge of HTML, CSS, JavaScript, React, UI/UX, and GitHub, 
            I breathe life into innovative projects. Whether crafting user-friendly bank apps, 
            optimizing task management systems, or designing engaging real estate and e-commerce websites,
             my commitment to excellence is unwavering. Beyond the code, my personal character adds a distinctive 
             touch to each project. Join me in transforming ideas into interactive realities, 
             where creativity seamlessly merges with functionality.</p>
             {/* <Link>Click to Explore</Link> */}
        </div>
      </div>
    </div>
  )
}

export default About
