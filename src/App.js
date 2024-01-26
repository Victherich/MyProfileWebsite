import React from 'react';
import Header from './component/Header';
import './CSS/App.css';
import Hero from './component/Hero';
import About from './component/About';
import Projects from './component/Projects';
import Contact from './component/Contact';
import Footer from './component/Footer';
import Blank from './component/Blank';

const App = () => {
  return (
    <div className='App'>
      <Header/>
      <Hero/>
      <About/>
      <Projects/>
      {/* <Blank className="Blank"/> */}
      <Contact/>
      <Footer/>
    </div>
  )
}

export default App
