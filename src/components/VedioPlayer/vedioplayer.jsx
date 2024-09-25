import React from 'react'
import './vediopalyer.css'
import video from '../../assets/edusity_assets/vedio.mp3.mp4'

function vedioplayer({setPlaystate,playState}) {
  return (
    <div className={`vedioPlayer ${playState?'':'hide'}`}>
      <video src={video} autoPlay muted controls></video>
    </div>
  )
}

export default vedioplayer
