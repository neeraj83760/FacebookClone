import React from 'react'
import './StoryReel.css'
import Story  from './Story'
import photo1 from './Images/photo1.jpg'
import photo2 from './Images/photo2.jpg'
import photo3 from './Images/photo3.jpg'
import photo4 from './Images/photo4.jpg'
import photo5 from './Images/photo5.jpg'
import neeraj from './Images/neeraj.jpg'

function StoryReel() {
  return (
    <div className='storyReel'>
    <Story image= {photo1}
     profileSrc={neeraj}
     title='Neeraj'
    />
    <Story image= {photo2}
     profileSrc={neeraj}
     title='Neeraj'     
    /> 
    <Story image= {photo3}
    profileSrc={neeraj}
    title='Neeraj'
    /> 
    <Story image= {photo4}
    profileSrc={neeraj}
    title='Neeraj'
    />
    <Story image= {photo5}
    profileSrc={neeraj}
    title='Neeraj'
    />      
    </div>
  )
}

export default StoryReel;
