import React from 'react'
import Avatar from '@mui/material/Avatar';
import './Header.css';





function Headeroptions({Icon, title, avatar}) {
  return (
    <div className='header__options'>
        {
            Icon && <Icon></Icon>
        }
        {
            avatar && <Avatar name={avatar} />
        }
         
         <span>{title}</span>
    </div>
  )
}

export default Headeroptions