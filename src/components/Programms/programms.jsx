import React from 'react'
import './programms.css'
import program_1 from '../../assets/edusity_assets/program-1.png'
import program_2 from '../../assets/edusity_assets/program-2.png'
import program_3 from '../../assets/edusity_assets/program-3.png'
import program_icon_1 from '../../assets/edusity_assets/program-icon-1.png'
import program_icon_2 from '../../assets/edusity_assets/program-icon-2.png'
import program_icon_3 from '../../assets/edusity_assets/program-icon-3.png'

function programms() {
  return (
    <div className='programs' id='programms'>
        <div className="program"><img src={program_1}></img>
        <div className="caption"><img src={program_icon_1}></img>
        <p>Graduation dergree</p></div></div>
        <div className="program"><img src={program_2}></img>
        <div className="caption"><img src={program_icon_2}></img>
        <p>Master dergree</p></div></div>
        <div className="program"><img src={program_3}></img>
        <div className="caption"><img src={program_icon_3}></img>
        <p>Post Gradution</p></div></div>
      
    </div>
  )
}

export default programms
