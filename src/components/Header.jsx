import React from 'react';
import '../css/header.css';
import SearchIcon from '@mui/icons-material/Search';
import Headeroptions from './Headeroptions';
import HomeIcon from '@mui/icons-material/Home';
import PeopleIcon from '@mui/icons-material/People';
import BusinessCenterIcon from '@mui/icons-material/BusinessCenter';
import MessageIcon from '@mui/icons-material/Message';
import NotificationsIcon from '@mui/icons-material/Notifications';
import Avatar from '@mui/material/Avatar';


function Header() {
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
             <Headeroptions Icon={HomeIcon} title="Home" />
             <Headeroptions Icon={PeopleIcon} title="My Network" />
             <Headeroptions Icon={BusinessCenterIcon} title="Jobs" />
             <Headeroptions Icon={MessageIcon} title="Messaging" />
             <Headeroptions Icon={NotificationsIcon} title="Notification" />
             <Headeroptions avatar={Avatar} title="Abhishek Banjare" />
        </div>
    </div>
  )
}

export default Header