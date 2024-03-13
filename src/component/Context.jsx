import React, {useState } from 'react'
import { createContext } from 'react'

export const Context=createContext()

const ContextProvider = ({children}) => {

    const [theme,setTheme]=useState(false)
    const [active,setActive]=useState("Home")

    const scrollToAbout = (sectionId)=>{
        const about = document.getElementById('about')
        if (about){
            const offsetTop = about.offsetTop;
            window.scrollTo({
                top:offsetTop,behavior:"smooth"
            })
        }
    }

    const scrollToHome = (sectionId)=>{
        const home = document.getElementById('home')
        if (home){
            const offsetTop = home.offsetTop;
            window.scrollTo({
                top:offsetTop,behavior:"smooth"
            })
        }
    }

    const scrollToProjects = (sectionId)=>{
        const projects = document.getElementById('projects')
        if (projects){
            const offsetTop = projects.offsetTop;
            window.scrollTo({
                top:offsetTop,behavior:"smooth"
            })
        }
    }

    const scrollToContact =(sectionId)=>{
        const contact = document.getElementById('contact')
        if(contact){
            const offsetTop = contact.offsetTop;
            window.scrollTo({
                top:offsetTop,behavior:"smooth"
            })
        }
    }


  return (
    <Context.Provider value={{theme,setTheme,active,setActive,scrollToAbout,scrollToHome,scrollToProjects,scrollToContact}}>
        {children}
    </Context.Provider>
  )
}

export default ContextProvider
