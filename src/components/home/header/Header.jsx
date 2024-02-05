// Header.jsx

import React, { useState } from 'react';
// import '../css/header.css';
import './Header.css';
import SearchIcon from '@mui/icons-material/Search';
import Headeroptions from './Headeroptions';
import HomeIcon from '@mui/icons-material/Home';
import PeopleIcon from '@mui/icons-material/People';
import BusinessCenterIcon from '@mui/icons-material/BusinessCenter';
import MessageIcon from '@mui/icons-material/Message';
import NotificationsIcon from '@mui/icons-material/Notifications';
import Avatar from '@mui/material/Avatar';


function Header({setUser, user}) {
  const [loginData, setLoginData] = useState(false);
  return (
    <div className="header">
        <div className='header__left'>
           <div className='header__logo'>
               <img src='https://upload.wikimedia.org/wikipedia/commons/thumb/8/81/LinkedIn_icon.svg/1200px-LinkedIn_icon.svg.png' />
           </div>
           <div className='header__search'>
              <SearchIcon />
              <input type='text' placeholder='Search' />
           </div>

        </div>
        <div className='header__right'>
             <Headeroptions Icon={HomeIcon} title="Home" setUser={setUser}/>
             <Headeroptions Icon={PeopleIcon} title="My Network" setUser={setUser}/>
             <Headeroptions Icon={BusinessCenterIcon} title="Jobs" setUser={setUser}/>
             <Headeroptions Icon={MessageIcon} title="Messaging" setUser={setUser}/>
             <Headeroptions Icon={NotificationsIcon} title="Notification" setUser={setUser}/>
             <Headeroptions avatar={Avatar} title={user.data.name} isProfileOption={true} user={user} setUser={setUser}/>
             {/* {console.log("heyyy ....: "+user.data.name)} */}
        </div>
    </div>
  )
}

export default Header