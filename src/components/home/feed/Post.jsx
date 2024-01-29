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

const pStyle = {
  fontSize: '16px',
  color: 'blue'
}
const Post = ({ data }) => {
  // {console.log("Hello ji: "+data)}

//   const [isCommentOpen, setIsCommentOpen] = useState(false);
//   const [commentPostId, setCommentPostId] = useState("");
// ............................
const [commentStates, setCommentStates] = useState({});

const toggleComment = (postId) => {
  setCommentStates((prevStates) => ({
    ...prevStates,
    [postId]: !prevStates[postId],
  }));
};
// .................................................................
const [isLiked, setIsLiked] = useState(false);

const handleLikeClick = () =>{
  setIsLiked(!isLiked);
    
}
// .................................................................


  
// .................................

  return (
    <div>
      {data.map((item, index) => (
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

            {/* <div className='post__headerRight'>
            </div> */}
            <MoreVertIcon />
          </div>

          <div className="post__body">
            <p>{item.content}</p>
          </div>
           {/* ...... */}
           <div className="countLikeComment">
                <span>{item.likeCount}&nbsp;Like</span>  
                <span>{item.commentCount}&nbsp;Comments</span>
            </div>

            {/* ...... */}


          <div className="post__footer">
            <div className="post__footer_option" onClick={handleLikeClick} style={{ color: isLiked ? "blue" : "black" }}>
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
