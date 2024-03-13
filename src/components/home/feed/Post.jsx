import React from "react";
import { Avatar, colors } from "@mui/material";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import "./Post.css";
import ThumbUpIcon from "@mui/icons-material/ThumbUp";
import CommentIcon from "@mui/icons-material/Comment";
import ShareIcon from "@mui/icons-material/Share";
import SendIcon from "@mui/icons-material/Send";
import Comments from "../comment/Comments";
import { useState } from 'react';

import Input from '@mui/material/Input';
import InputAdornment from '@mui/material/InputAdornment';
import IconButton from '@mui/material/IconButton';
import PhotoIcon from '@mui/icons-material/Photo';
import EmojiEmotionsIcon from '@mui/icons-material/EmojiEmotions';
import {Popover} from "@mui/material";

import { useContext } from "react";
import { PostContext } from "../../../context/PostCont";
import DeletePost from "../deletePost/DeletePost";


const pStyle = {
  fontSize: '16px',
  color: 'blue'
}
const Post = () => {
  // {console.log("Hello ji: "+data)}

//   const [isCommentOpen, setIsCommentOpen] = useState(false);
//   const [commentPostId, setCommentPostId] = useState("");
// ............................
const [commentStates, setCommentStates] = useState({});
const [likedPosts, setLikedPosts] = useState({});
const [stateLikeCounts, setLikeCounts] = useState({});
const [anchorEl, setAnchorEl] = useState(null);

const postObj = useContext(PostContext)  //context api



const handleMoreVertClick = (event) => {
  setAnchorEl(event.currentTarget);
};
const handleClose = () => {
  setAnchorEl(null);
};

const toggleComment = (postId) => {
  setCommentStates((prevStates) => ({
    ...prevStates,
    [postId]: !prevStates[postId],
  }));
};
// .................................................................

const handleLikeClick = (postId) =>{
  setLikedPosts((prevLikedPost)=> ({
     ...prevLikedPost,
     [postId]: !prevLikedPost[postId],
  }));

  // setLikeCounts((prevLikeCounts)=>({
  //      ...prevLikeCounts,
  //    [postId]: (prevLikeCounts[postId] || 0) + 1,
  // }));
}
// .................................................................

// console.log(stateLikeCounts[postId].commentCount);
  
// .................................
const handleEditPost = (postId) => {
  // Implement logic to edit the post with postId
  // console.log(`Editing post with ID: ${postId}`);
  handleClose(); // Close the popover after performing the action
};

const handleDeletePost = async (postId) => {
  // console.log("Abhishek",postId)
try {
    // const response = await fetch(`https://academics.newtonschool.co/api/v1/linkedin/post/65e5a602f66fadab324d42da`, {
    const response = await fetch(`https://academics.newtonschool.co/api/v1/linkedin/post/${postId}`, {
      method: 'DELETE',
      headers: {
        Authorization: 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY1N2ViZTY3MzNlMjViNTQ5NDMyNGQ5ZSIsImlhdCI6MTcwOTY3ODI1NiwiZXhwIjoxNzQxMjE0MjU2fQ.as8pjoeoJTOnwnXdBR5Fh8z2xRh5iK3WVcJIZg6vZOo',
        projectId: 'erx42hn050bm'

        // Add any additional headers if required (e.g., authorization token)
      },
      // You may include a body if needed for the DELETE request
      body: JSON.stringify({}),
    });

    if (response.ok) {
      console.log(`Post with ID ${postId} deleted successfully`);
      // Implement any additional logic you need after successful deletion
    } else {
      console.error(`Failed to delete post with ID ${postId}`);
    }
  } catch (error) {
    console.error('Error deleting post:', error);
  }
  handleClose(); // Close the popover after performing the action
};

  return (
    <div>
      {postObj.post.map((item, index) => (
        <div key={item._id} className="posts">
          <div className="post__header">
            <div className="post__headerLeft">
              <Avatar src={item.author.profileImage} />
              <div className="post_profile_details">
                <h3>{item.author.name}</h3>
                <p>{item.title}</p>
                {/* <p>{item._id}</p> */}
              </div>
            </div>

            <div className='post__headerRight'>
                <MoreVertIcon onClick={handleMoreVertClick}/>
                <Popover
                              open={Boolean(anchorEl)}
                              anchorEl={anchorEl}
                              onClose={handleClose}
                              anchorOrigin={{
                                vertical: 'bottom',
                                horizontal: 'right',
                              }}
                              transformOrigin={{
                                vertical: 'top',
                                horizontal: 'right',
                              }}
                              PaperProps={{
                                style: {
                                  // Your custom styles go here
                                  borderRadius: 4,
                                  boxShadow: '0px 1px 3px rgba(0, 0, 0, 0.03)',
                                },
                              }}
                            >
                              <div className="options-container-post">
                                <div className='editPost' onClick={() => handleEditPost(item._id)}>Edit Post</div>
                                <div className='deletePost' onClick={() => handleDeletePost(item._id)}>Delete Post</div>
                              </div>
                            </Popover>
            </div> 

          </div>

          <div className="post__body">
            <p>{item.content}</p>
            {item.images && <img src={item.images} alt="Img Photo" />}
          </div>
           {/* ...... */}
           <div className="countLikeComment">
                <span>{item.likeCount}&nbsp;Like</span>  
                <span>{item.commentCount}&nbsp;Comments</span>
            </div>

            {/* ...... */}


          <div className="post__footer">
            <div className="post__footer_option" onClick={()=>handleLikeClick(item._id)} style={{ color: likedPosts[item._id] ? 'blue':'black' }} >
              <ThumbUpIcon />
              <span>Like</span>
              {/* <div className="countLike">
                <span>{item.likeCount}</span>                
              </div> */}
            </div>

            <div
              className="post__footer_option"
              onClick={() => toggleComment(item._id)}
            >
              <CommentIcon />
              <span>Comment</span>
              {/* <span>{item.commentCount}</span> */}
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
          {commentStates[item._id] && (
                <div className="commentShow">
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
                    <Comments parameter={item._id} />
                    {/* console.log(item.) */}
                </div>

            )}
          

        
        </div>
      ))}
    </div>

  );
};

export default Post;
