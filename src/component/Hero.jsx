import React, { useContext, useEffect, useState } from 'react'
import CarousalImg1 from '../Images/Most-Beautiful-Cities-in-Canada-to-Visit-With-Your-Family-and-Friends.jpg'
import CarousalImg2 from '../Images/istockphoto-1399714603-170667a.webp'
import CarousalImg3 from '../Images/istockphoto-467829216-612x612.jpg'
import HeroImg1 from '../Images/profile pic 1.jpeg'
import HeroImg2 from '../Images/profile pic 2.jpeg'
import HeroImg3 from '../Images/profile pic 3.jpeg'
import '../CSS/Carousel.css'
import { Context } from './Context'
// import { Link } from 'react-router-dom'

const Carocel = () => {
  const {theme}=useContext(Context)
const [carousalImageIndex,setCarousalImageIndex]=useState(0);
// const carousalmages = [CarousalImg1,CarousalImg2,CarousalImg3]
const carousalmages = [HeroImg1,HeroImg2,HeroImg3]
// const [circle,setCirlcle]=useState(false)
// const carousalImagesSlider = [Slider1,Slider2,Slider3]


//option 1
// useEffect(()=>{
//  const intervalId = setInterval(() => {
//     if(carousalImageIndex===carousalmages.length-1){
//       setCarousalImageIndex(0)
//     }else{
//       setCarousalImageIndex(carousalImageIndex+1)
//     }
//  }, 3000);
 
//  return ()=>{clearInterval(intervalId)}
// },[carousalImageIndex,carousalmages.length])


//option 2
// useEffect(()=>{
//   const intervalId = setInterval(()=>{
//     setCarousalImageIndex((carousalImageIndex+1)%carousalmages.length)
//   },3000);
//   return()=>{clearInterval(intervalId)}
// },[carousalImageIndex,carousalmages.length])

//option 3 also works without dependency
useEffect(()=>{
  const intervalId = setInterval(()=>{
    setCarousalImageIndex((i)=>(i+1)%carousalmages.length)
  },1000)
  return ()=>{clearInterval(intervalId)}
},[carousalImageIndex])



  return (
    <div className={theme?"CarouselWrapLight":'CarouselWrap'} id="home">
      <div className={theme?'HeroLeftLight':'HeroLeft'}>
      {/* <h1>EbubeChukwu</h1> */}
        <h1>Victor Ndu</h1>
        <p>| Software Developer | Front-end Development |</p>
        <p>| UIUX Design | HTML | CSS | JavaScript |</p>
        <p>| React js | React-Native | Git-hub |</p>
      </div>
      <div className='Carousel'>
      <img src={carousalmages[carousalImageIndex]} alt="Img"/>
      <div className='CircleWrap'>
        <div className='CircleB'>
          <div className={carousalImageIndex===0?"CircleA" : ""}></div>
        </div>
        <div className='CircleB'>
          <div className={carousalImageIndex===1?"CircleA" : ""}></div>
        </div>
        <div className='CircleB'>
          <div className={carousalImageIndex===2?"CircleA" : ""}></div>
        </div>

      </div>
      {/* <Link to ={'/'} className='backToMainMenu'>BACK TO MAIN MENU</Link> */}
    </div>

    </div>
      )
}

export default Carocel
