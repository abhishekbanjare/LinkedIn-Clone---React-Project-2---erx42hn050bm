import React from 'react'
import { Avatar } from '@mui/material';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import './Post.css';
import ThumbUpIcon from '@mui/icons-material/ThumbUp';
import CommentIcon from '@mui/icons-material/Comment';
import ShareIcon from '@mui/icons-material/Share';
import SendIcon from '@mui/icons-material/Send';
import Comments from '../api/Comments';

const Post = ({data}) => {
  return (
<div>
     {/* ................. */}
     {/* <h1>Hello Ji to kaise ho aap log</h1> */}
     <Comments />

         {/* ................. */}

    {data.map((item) => (
    <div key={item.id} className='posts'>
        <div className='post__header'>
            <div className='post__headerLeft'>
                <Avatar src={item.author.profileImage}/>
                <div className='post_profile_details'>
                    <h3>{item.author.name}</h3>
                    <p>{item.title}</p>
                </div>
            </div>

            {/* <div className='post__headerRight'>
            </div> */}
            <MoreVertIcon />
        </div>


        <div className='post__body'>
            <p>{item.content}</p> 
        </div>

        <div className='post__footer'>
            <div className='post__footer_option'>
                <ThumbUpIcon />
                <span>Like</span>
                <div className='countLike'> 
                  <span >{item.likeCount}</span>
                </div>
            </div>
            <div className='post__footer_option'>
                <CommentIcon />
                <span>Comment</span>
                <div className='countLike'> 
                  <span >{item.commentCount}</span>
                </div>
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
    ))} 
</div>
  );
};

export default Post