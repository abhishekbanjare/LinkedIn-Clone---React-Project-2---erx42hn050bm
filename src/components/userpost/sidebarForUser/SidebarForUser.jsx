import React from 'react'
import { Avatar } from '@mui/material'
import './SidebarForUser.css';
import { useContext } from 'react';
import { LoginContext } from '../../../context/Login';


const SidebarForUser = () => {
  const loginObj = useContext(LoginContext);
  return (
    <div className='user-sidebar'>
     
      <div className='sidebar__profile'>
        <img src='https://marketplace.canva.com/EAENvp21inc/1/0/1600w/canva-simple-work-linkedin-banner-qt_TMRJF4m0.jpg' />

        <div className='profile__details'>
          <Avatar />
          <h4>{loginObj.user.name}</h4>
          <p>{loginObj.user.email}</p>
        </div>

        <div className='profile__stats'>
           <span>Who viewed your profile</span>
           <span className='stat__number'>20</span>
        </div>

        <div className='profile__stats'>
          <span>Connection<br/><b>Grow Your Network</b></span>
          <span className='stat__number'>150</span>
        </div>

      </div>
      <div className='sidebar__recent'>
          <p>Recent</p>
          <p className='has'><span>#</span> branding</p>
          <p className='has'><span>#</span> marketing</p>
          <p className='has'><span>#</span> web development</p>
          <p className='has'><span>#</span> programming</p>
          <p className='has'><span>#</span> reactjs</p>
          <p className='has'><span>#</span> reduxtoolkit</p>
      </div>

    </div>
  )
}

export default SidebarForUser