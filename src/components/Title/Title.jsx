import React from 'react'
import './Title.css'

function Title({Title,subTitle}) {
  return (
    <div className='title'>
<p>{subTitle}</p>
<h2>{Title}</h2>      
    </div>
  )
}

export default Title
