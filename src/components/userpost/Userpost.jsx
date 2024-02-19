import React from 'react'
import './Userpost.css'
import SidebarForUser from './sidebarForUser/SidebarForUser'
import PostForUser from './postForUser/PostForUser'

const Userpost = () => {
  return (
    <div className='post-wraper'>
      <div className='post-body'>
          <SidebarForUser />
          <PostForUser />
      </div>
    </div>
  )
}

export default Userpost