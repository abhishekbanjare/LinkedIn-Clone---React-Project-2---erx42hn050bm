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
import {Link, NavLink} from 'react-router-dom';
import { useContext } from 'react';
import { LoginContext } from '../../context/Login';


function Header({user, setUser}) {
  const loginObj = useContext(LoginContext)  //context api
  const [activeOption, setActiveOption] = useState(null);

  const handleOptionClick = (title) => {
    setActiveOption(title);
  };


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
          <NavLink to="" onClick={() => handleOptionClick("Home")} >
             <Headeroptions Icon={HomeIcon} title="Home" active={activeOption === "Home"} />
          </NavLink>

          <NavLink to="mynetwork" onClick={() => handleOptionClick("My Network")}>
             <Headeroptions Icon={PeopleIcon} title="My Network" active={activeOption === "My Network"}  />
          </NavLink>

          <NavLink to="job" onClick={() => handleOptionClick("Jobs")} >
            <Headeroptions Icon={BusinessCenterIcon} title="Jobs" active={activeOption === "Jobs"}  />
          </NavLink>

          <NavLink to="messaaging" onClick={() => handleOptionClick("Messaging")} >
            <Headeroptions Icon={MessageIcon} title="Messaging" active={activeOption === "Messaging"}  />
          </NavLink>

          <NavLink to="notification" onClick={() => handleOptionClick("Notification")} >
            <Headeroptions Icon={NotificationsIcon} title="Notification" active={activeOption === "Notification"}  />
          </NavLink>

            <Headeroptions avatar={Avatar} title={loginObj.user.data.name} isProfileOption={true} />
            {/* <Headeroptions avatar={Avatar} title="Abhishek Bhaiya" isProfileOption={true}/> */}
             {/* {console.log("heyyy ....: "+user.name)} */}
        </div>
    </div>
  )
}

export default Header