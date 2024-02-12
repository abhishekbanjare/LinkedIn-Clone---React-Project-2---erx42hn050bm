import React from 'react'
import Avatar from '@mui/material/Avatar';
import './Header.css';
import { useState } from 'react';
import ProfileDropdown from '../home/profile/ProfileDropdown';


function Headeroptions({Icon, title, avatar, isProfileOption}) {
    const [showDropdown, setShowDropdown] = useState(false);

    const handleClick = () => {
      console.log("handleClick is called");

      console.log("isProfileOption is  "+isProfileOption);

    if (isProfileOption) {
      // console.log("isProfileOption is  "+isProfileOption);
      setShowDropdown(!showDropdown);
    }
    // Add logic for other options if needed
    }
  return (
    <> 
    <div className='header__options' onClick={handleClick}>
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

export default Headeroptions