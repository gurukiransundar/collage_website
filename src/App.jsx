import React, { useState } from 'react'
import Navbar from './components/Navbar/navbar'
import Hero from './components/Hero/hero'
import Programs from './components/Programms/programms'
import Title from './components/Title/Title'
import About from './components/About/about'
import Campus from './components/Campus/campus'
import Testimonilas from './components/Testimonials/testimonilas'
import Contactus from './components/Contact-us/contactus'
import Fotter from './components/Fotter/Fotter'
import Vedioplayer from './components/VedioPlayer/vedioplayer'

const App = () => {
  const [playState,setPlaystate]=useState(false)
  return (
   
    <div>
      <Navbar></Navbar>
      <Hero></Hero>
      <div className="container"> <Title subTitle='Our Programms' Title='What we offer'></Title> 
      <Programs></Programs>
      <About setPlaystate={setPlaystate}></About>
      <Title subTitle='Gallery' Title='Campus photo'></Title> 
      <Campus></Campus>
      <Title subTitle='Testimonials' Title='What Students say'></Title> 
      <Testimonilas></Testimonilas>
      <Title subTitle='Contact-us' Title='Get in touch'></Title> 
      <Contactus></Contactus>
      <Fotter></Fotter>
      </div>
    <Vedioplayer playState={playState} setPlaystate={setPlaystate} ></Vedioplayer>
    </div>
  )
}

export default App
