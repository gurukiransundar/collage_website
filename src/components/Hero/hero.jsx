import React from 'react'
import './hero.css'
import dark_arrow from '../../assets/edusity_assets/dark-arrow.png'

function hero() {
  return (
    <div className='hero container' id='hero'>
        <div className="hero-text">
            <h1> We Ensure better education for better world</h1>
            <p>Embark on your educational journey with EduLearn and take the next step towards achieving your goals.
                 Sign up today to access our range of courses and resources, and start learning from the best.</p>
                 <button className='btn'> Explore more <img src={dark_arrow} alt="" /> </button>
        </div>
      
    </div>
  )
}

export default hero
