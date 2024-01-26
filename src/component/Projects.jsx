import React from 'react'
import '../CSS/Projects.css'

const Projects = () => {
  return (
    <div className='Projects' id="projects">
      <div className='Line'></div>
     <h1>Projects</h1>
     <div className='Project'>
        <div className='ProjectLeft'> 
          <h1>Task Management System</h1>
          <div className='TaskManagerImageWrap'>
            <img src='' alt="ScreenShot"/>
          </div>
        </div>
        <div className='ProjectRight'> 
          <p>
            This project offers 
users a seamless experience in creating, editing, and deleting 
tasks across customizable boards and categories like 
"ToDo," "Doing," and "Done." With an intuitive interface, 
it promotes efficient task management, empowering users 
to enhance productivity and stay organized effortlessly.
          </p>
          <button>Click to Explore</button>
        </div>
      </div>
      <div className='Project'>
      <div className='ProjectRight'> 
          <p>
          This React-based Banking Application enables users to effortlessly
           manage their finances. With features like balance inquiry, fund transfers,
            transaction history viewing, and deposit/withdrawal functionalities, it provides
             a seamless and secure platform 
          for users to stay in control of their financial activities.
          </p>
          <button>Click to Explore</button>
        </div>
        <div className='ProjectLeft'> 
          <h1>Banking Web Application</h1>
          <div className='TaskManagerImageWrap'>
            <img src='' alt="ScreenShot"/>
          </div>
        </div>
        
      </div>
      <div className='Project'>
        <div className='ProjectLeft'> 
          <h1>Real Estate Website</h1>
          <div className='TaskManagerImageWrap'>
            <img src='' alt="ScreenShot"/>
          </div>
        </div>
        <div className='ProjectRight'> 
          <p>
          This real estate website, crafted with precision, empowers agents and real estate companies to list 
          properties for sale or rent. Prospective tenants and buyers effortlessly
           browse listed homes, connecting directly with agents and real estate companies 
           to facilitate deals. It's a streamlined platform fostering efficient property transactions 
          and meaningful connections in the real estate market.
          </p>
          <button>Click to Explore</button>
        </div>
      </div>
      <div className='Project'>
      <div className='ProjectRight'> 
          <p>
          This e-commerce website, meticulously designed, offers users a seamless
           shopping experience. They can explore product lists, add desired items
            to their cart, and securely complete transactions through a reliable payment
             gateway, ensuring a smooth and secure checkout process. It's a user-friendly
           platform for convenient online shopping and secure transactions.
          </p>
          <button>Click to Explore</button>
        </div>
        <div className='ProjectLeft'> 
          <h1>E-Commerce Website</h1>
          <div className='TaskManagerImageWrap'>
            <img src='' alt="ScreeShot"/>
          </div>
        </div>
        
      </div>
    </div>
  )
}

export default Projects
