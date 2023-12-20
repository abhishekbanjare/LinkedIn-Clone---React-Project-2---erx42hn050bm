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


const Post = ({ data }) => {

  const [isCommentOpen, setIsCommentOpen] = useState(false);
  const [commentPostId, setCommentPostId] = useState("");

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

          <div className="post__footer">
            <div className="post__footer_option">
              <ThumbUpIcon />
              <span>Like</span>
              <div className="countLike">
                <span>{item.likeCount}</span>                
              </div>
            </div>
            <div
              className="post__footer_option"
              onClick={()=>{
                setIsCommentOpen(!isCommentOpen) 
                setCommentPostId(item._id)
            
        }}
            >
              <CommentIcon />
              <span>Comment &nbsp;</span>
              <span>{item.commentCount}</span>

              {/* <div className='countLike'> 
                  <span >{item.commentCount}</span>
                  <Comments parameter={item._id}/>
                </div> */}
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
        
        </div>
      ))}
        {isCommentOpen && (
            <div className="countLike" style={{position:"absolute",top:"35vh",display:"block",backgroundColor:"yellow"}}>
              {/* <span >{item.commentCount}</span> */}
              {/* <Comments parameter={item._id} /> */}
              <Comments parameter={commentPostId} />
            </div>
          )}
    </div>
  );
};

export default Post;
