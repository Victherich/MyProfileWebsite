import React from 'react';
import '../CSS/Header.css'
import { useContext } from 'react';
import { Context } from './Context';
import Sun from '../Images/sun 2.jpg'
import Moon from '../Images/moon.webp'
import LightMode from '../Images/Lightmode.png'
import NightMode from '../Images/NightMode.png'
import Logo from '../Images/Vanilla-1s-280px.gif'


const Header = () => {
  const {theme,setTheme,active,setActive,scrollToAbout,scrollToHome,scrollToProjects,scrollToContact}=useContext(Context)
  
  const handleAboutFuction = ()=>{
      setActive("About")
      scrollToAbout('about')
  }

 const handleHomeFuction=()=>{
  setActive('Home')
  scrollToHome('home')
 }

 const handleProjectsFuction=()=>{
  setActive('Projects')
  scrollToProjects('home')
 }

 const handleContactFuction=()=>{
  setActive("Contact")
  scrollToContact('contact')
 }

const handleActiveTheme=()=>{
  if(!theme){
    return 'HeaderActive'
  }else{
    return 'HeaderActiveLight'
  }
}

  return (
    <div className={theme?'HeaderWrapLight':'HeaderWrap'}>
      <div className='Header'>
        <div className='HeaderImageWrap'><img src={Logo} alt="Logo"/></div>
        <div className='HeaderRight'>
          <p onClick={handleHomeFuction} className={active==="Home"? handleActiveTheme():""}>Home</p>
          <p onClick={handleAboutFuction} className={active==="About"?handleActiveTheme():""}>About</p>
          <p onClick={handleProjectsFuction} className={active==="Projects"?handleActiveTheme():""}>Projects</p>
          <p onClick={handleContactFuction} className={active==="Contact"?handleActiveTheme():""}>Contact</p>
          <div className='HeaderRightRight'>
            <img src={LightMode} alt="LightModeImg" className='LightModeNightMode'/>
          <div onClick={()=>setTheme(!theme)}className={theme?'ThemeSwitchPathLeft':'ThemeSwitchPathRight'}>
            <div className='ThemeSwitch'>
              <img src={theme?Sun:Moon} alt="Im"/>
            </div>
          </div>
          <img src={NightMode} alt="NightModeImg" className='LightModeNightMode'/>
          </div>
        </div>
    </div>
    </div>
  )
}

export default Header
