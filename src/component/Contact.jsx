import React, { useContext } from 'react'
import '../CSS/Contact.css'
import EmailIcon from '../Images/ic_outline-email.png'
import PhoneIcon from '../Images/Group.png'
import LinkedInIcon from '../Images/Vector.png'
import { Context } from './Context'

const Contact = () => {
  const {theme}=useContext(Context)
  return (
    <div className={theme?'ContactLight':'Contact'} id="contact">
      <div className={theme?'ContactLeftLight':'ContactLeft'}>
        <h1>Let's <br/>Connect</h1>
      </div>
      <div className='ContactRight'>
       <div className='ContactDetails'>
          <img src={EmailIcon} alt="EmailIcon"/><p>Victherich@gmail.com</p>
        </div>
        <div className='ContactDetails'>
          <img src={PhoneIcon} alt="PhoneIcon"/><p>+2347063480314</p>
        </div>
        <div className='ContactDetails'>
        <img src={LinkedInIcon} alt="LinkedInIcon"/><p>linkedin.com/in/victor-ndu-54336b140</p>
        </div>
      </div>
    </div>
  )
}

export default Contact
