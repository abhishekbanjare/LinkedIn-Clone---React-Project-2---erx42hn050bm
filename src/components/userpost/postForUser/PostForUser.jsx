import {React, useState} from 'react'
import "./PostForUser.css"
import { Avatar } from "@mui/material";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import ThumbUpIcon from "@mui/icons-material/ThumbUp";
import CommentIcon from "@mui/icons-material/Comment";
import ShareIcon from "@mui/icons-material/Share";
import SendIcon from "@mui/icons-material/Send";
import CommentForUser from '../commentForUser/CommentForUser';

import Input from '@mui/material/Input';
import InputAdornment from '@mui/material/InputAdornment';
import IconButton from '@mui/material/IconButton';
import PhotoIcon from '@mui/icons-material/Photo';
import EmojiEmotionsIcon from '@mui/icons-material/EmojiEmotions';

const PostForUser = () => {
  const [commentOpen, setCommentOpen] = useState(false)

  const handleComment=()=>{
        setCommentOpen(!commentOpen);
  }
  return (
    <div className='user-post-body'>
        <div className="user-posts">

          <div className="post__header">
             <div className="post__headerLeft">
                <Avatar />
                <div className="post_profile_details">
                   <h3>Prashant Surya</h3>
                   <p>Software Engineer</p>
                </div>
              </div>

              {/* <div className='post__headerRight'>
              </div> */}
              <MoreVertIcon />
          </div>

          <div className="post__body">
            <p>The future of work is digital. From remote work tools to AI-powered productivity solutions, discover the technologies reshaping the modern workplace.</p>
          </div>
           {/* ...... */}
           <div className="countLikeComment">
                <span>200 &nbsp;Like</span>  
                <span>200 &nbsp;Comments</span>
            </div>

            {/* ...... */}


          <div className="post__footer">
            <div className="post__footer_option"  >
              <ThumbUpIcon />
              <span>Like</span>
            </div>

            <div  className="post__footer_option" onClick={handleComment}>
              <CommentIcon  />
              <span>Comment</span>
            </div>

            <div className="post__footer_option">
              <ShareIcon />
              <span>Share</span>
            </div>
            <div className="post__footer_option">
              <SendIcon />
              <span>Send</span>
            </div>
            
          </div>
          {commentOpen && (
            <div className='comment-show'>
              <div className='input-sec'>
                <Avatar>A</Avatar>
                <Input
                    className='comment-input'
                    type='text'
                    placeholder='Enter your comments..'
                    endAdornment={
                      <InputAdornment position="end">
                        <IconButton>
                          <label htmlFor="fileInput" ><PhotoIcon /></label>
                          <input type="file" id="fileInput" style={{display: 'none'}}  />
                        </IconButton>
                        <IconButton>
                          <EmojiEmotionsIcon />
                        </IconButton>
                      </InputAdornment>
                    }disableUnderline
                />
              </div>
              
              <CommentForUser />
            </div>
        ) }
    
        </div>
       

      
     </div>

  )
}

export default PostForUser