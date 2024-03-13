import React, { useContext } from 'react';
import Header from './component/Header';
import './CSS/App.css';
import Hero from './component/Hero';
import About from './component/About';
import Projects from './component/Projects';
import Contact from './component/Contact';
import { Context } from './component/Context';

const App = () => {
  const {theme}=useContext(Context)
  return (
    <div className={theme?'AppLight':'App'}>
      <Header/>
      <Hero/>
      <About/>
      <Projects/>
      <Contact/>
    </div>
  )
}

export default App
