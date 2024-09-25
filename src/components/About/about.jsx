import React from 'react'
import './about.css'
import about_img from '../../assets/edusity_assets/about.png'
import paly_icon from '../../assets/edusity_assets/play-icon.png'
function about({setPlaystate}) {
  return (
    <div className='about'>
        <div className="about-left">
            <img src={about_img} className='about_img'></img>
            <img src={paly_icon} className='play_icon' onClick={()=>{
              setPlaystate(true)
            }}></img>
        </div>
        <div className="about-right">
            <h3>ABOUT UNIVERSITY</h3>
            <h2>Nurturing Tommoros leaders today</h2>
            <p>Welcome to [College Name], where excellence in education meets
                 a commitment to personal growth. Founded in [Year], our college has been dedicated to
                  providing a transformative learning experience that prepares students for success in a dynamic world</p>
                  <p> With a diverse range of programs and a supportive community, we empower our students to explore their
                    passions and achieve their academic and professional goals. Our state-of-the-art facilities, experienced faculty, and innovative</p>
                    <p>curriculum ensure that each student receives a high-quality education tailored to their aspirations. Join us at [College Name] .

</p>
        </div>
      
      
    </div>
  )
}

export default about
