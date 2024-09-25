import React from 'react'
import './campus.css'
import gallery_1 from '../../assets/edusity_assets/gallery-1.png'
import gallery_2 from '../../assets/edusity_assets/gallery-2.png'
import gallery_3 from '../../assets/edusity_assets/gallery-3.png'
import gallery_4 from '../../assets/edusity_assets/gallery-4.png'
import White_arror from '../../assets/edusity_assets/white-arrow.png'

function campus() {
  return (
    <div className='campus' id='campus'>
        <div className="gallery">
            <img src={gallery_1} alt="" />
            <img src={gallery_2} alt="" />
            <img src={gallery_3} alt="" />
            <img src={gallery_4} alt="" />
        </div>
        <button className='btn dark-btn'>See more here <img src={White_arror}></img></button>
      
    </div>
  )
}

export default campus
