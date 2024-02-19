// Headeroption.jsx
import React from 'react'
import Avatar from '@mui/material/Avatar';
import './Header.css';
import { useState } from 'react';
import ProfileDropdown from '../home/profile/ProfileDropdown';


function Headeroptions({Icon, title, avatar, isProfileOption, active}) {
    const [showDropdown, setShowDropdown] = useState(false);

    const handleClick = () => {
        if (isProfileOption) {
          // console.log("isProfileOption is  "+isProfileOption);
          setShowDropdown(!showDropdown);
        }
    }
  return (
    <> 
    <div className={`header__options ${active ? 'header__options--active' : ''}`} onClick={handleClick}>
        {
            Icon && <Icon></Icon>
        } 
        {
            avatar && <Avatar name={avatar} />
        }
        <span>{title}</span>
        { showDropdown && isProfileOption && <ProfileDropdown /> }
    </div>
  </>
  )
}

export default Headeroptions;