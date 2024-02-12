import React from 'react';
// import "../profile/ProfileDropdown.css";
import './PostCard.css';
import Avatar from '@mui/material/Avatar';



const PostCard = ({setIsFullScreen}) => {

      const closePostCard=()=>{
        setIsFullScreen(false)
      }
    
      return (
        <div className="post-card">
         
          {/* <Headeroptions avatar={Avatar} title="Abhishek Banjare" /> */}
          <div className='sec-1'>
              <Avatar>A</Avatar>
              <h3>Abhishek Banjare</h3>
          </div>

          <div className='sec-2'>
              <input type="text" placeholder='Title' />
              <input type="text" placeholder='What do you want to talk about?' />
          </div>

          <div className='sec-3'>
            <button onClick={closePostCard}>Cancel</button>
            <button>Post</button>
            
          </div>
          
        </div>
      );
}

export default PostCard