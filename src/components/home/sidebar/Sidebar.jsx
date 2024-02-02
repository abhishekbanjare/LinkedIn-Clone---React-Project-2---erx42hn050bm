// Sidebar.jsx

import React from 'react';
import './Sidebar.css';
import { Avatar } from '@mui/material';
import { useState } from 'react';
import Userpost from "../userpost/Userpost";
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
// import { Link } from 'react-router-dom'; // Import Link from react-router-dom

function Sidebar({user}) {

 const [isProfile, setIsProfile]=useState(false);

 const handleClickProfileSection=()=>{
      setIsProfile(!isProfile);

 }

  return (
    <>
    
    <div className='sidebar'>
        <div className='sidebar__profile'>
            <img src="https://marketplace.canva.com/EAENvp21inc/1/0/1600w/canva-simple-work-linkedin-banner-qt_TMRJF4m0.jpg" />
            <div className='profile__details' onClick={handleClickProfileSection}>
                <Avatar />
                {/* <h4>Abhishek Banjare</h4> */}
                {/* <p> Web Developer</p> */}
                <h4>{user.data.name}</h4>
                <p>{user.data.email}</p>
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
    {isProfile && (
        <Link to="/userpost" className='profile__link'>
          <Userpost />
        </Link>
      )}
    </>
  )
}

export default Sidebar;