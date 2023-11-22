import React from 'react'
import { Avatar } from '@mui/material';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import './Post.css';
import ThumbUpIcon from '@mui/icons-material/ThumbUp';
import CommentIcon from '@mui/icons-material/Comment';
import ShareIcon from '@mui/icons-material/Share';
import SendIcon from '@mui/icons-material/Send';

function Post({name, description, message, photoURL}) {
  return (
    <div className='posts'>
        <div className='post__header'>
            <div className='post__headerLeft'>
                <Avatar src={photoURL}/>
                <div className='post_profile_details'>
                    {/* <h3>Abhishek Banjare</h3> */}
                    <h3>{name}</h3>
                    {/* <p>React Developer</p> */}
                    <p>{description}</p>
                </div>
            </div>

            {/* <div className='post__headerRight'>
            </div> */}
            <MoreVertIcon />
        </div>

        <div className='post__body'>
            {/* <p>
                Hi linkedin family, 
               <br/>
               <br/>
               I want to wish you all a very Happy happiest Diwali 🪔🪔🪔<br/>
               I want to wish you all a very Happy happiest Diwali 🪔🪔🪔
            </p> */}
            <p>{message}</p>
            
        </div>

        <div className='post__footer'>
            <div className='post__footer_option'>
                <ThumbUpIcon />
                <span>Like</span>
            </div>
            <div className='post__footer_option'>
                <CommentIcon />
                <span>Comment</span>
            </div>
            <div className='post__footer_option'>
                <ShareIcon />
                <span>Share</span>
            </div>
            <div className='post__footer_option'>
                <SendIcon />
                <span>Send</span>
            </div>
        </div>


    </div>
  )
}

export default Post