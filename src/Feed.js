import React from 'react'
import './Feed.css'
import StoryReel from './StoryReel'
import MessageSender from './MessageSender'
import Post from './Post'
import neeraj from './Images/neeraj.jpg'


function Feed() {
  return (
    <div className='feed'>
    {/* StoryReel  */}
    <StoryReel />
    {/* MessageSender */}
    <MessageSender />

    <Post 
    profilePic ={neeraj}
    message='Wow this works!!'
    timestamp='This is a timeStamp'
    username='ghildiyalInsta'
    image='https://images.app.goo.gl/7gG3gLqhkPk2UEjbA'
    />
    <Post />
    <Post />
    </div>
  )
}

export default Feed
