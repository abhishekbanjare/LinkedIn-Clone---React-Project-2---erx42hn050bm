import React, { useState } from 'react';
// import "../profile/ProfileDropdown.css";
import './PostCard.css';
import Avatar from '@mui/material/Avatar';
import CloseIcon from '@mui/icons-material/Close';
import PermMediaIcon from '@mui/icons-material/PermMedia';
import EventAvailableIcon from '@mui/icons-material/EventAvailable';
import CelebrationIcon from '@mui/icons-material/Celebration';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';

import { useContext } from 'react';
import { LoginContext } from '../../../context/Login';



const PostCard = ({setIsFullScreen}) => {
    const [selectedFile, setSelectedFile] = useState(null);

    const loginObj = useContext(LoginContext)

      const closePostCard=()=>{
        setIsFullScreen(false)
      }

      const handleFileChange = (event) =>{
            const file = event.target.files[0];
            console.log(file);
            setSelectedFile(file);
      }
    
      return (
        <div className="post-card">
         
          {/* <Headeroptions avatar={Avatar} title="Abhishek Banjare" /> */}
          <div className='sec-1'>
              <div className='Aa'>
                <Avatar></Avatar>
                <h3>{loginObj.user.name}</h3>
                {/* <h3>Abhishek Banjare</h3> */}
              </div>
              
              <div className='Bb' onClick={closePostCard}><CloseIcon /></div>        
          </div>

          <div className='sec-2'>
              <input type="text" placeholder='Title' />
              <input type="text" placeholder='What do you want to talk about?' />
          </div>

          <div className='sec-3'>
            <label htmlFor="fileInput"><PermMediaIcon /></label>
            <input type="file" id="fileInput" style={{display: 'none'}} onChange={handleFileChange} />
            <EventAvailableIcon />
            <CelebrationIcon />
            <MoreHorizIcon />
          </div>

          <div className='sec-4'>
            <button onClick={closePostCard}>Cancel</button>
            <button>Post</button>
            
          </div>
          
        </div>
      );
}

export default PostCard