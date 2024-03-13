import React from 'react'
import { useState } from 'react';
import { useEffect } from 'react';
import "./Comments.css";
import { Avatar, colors } from "@mui/material";
import MoreVertIcon from "@mui/icons-material/MoreVert";

import {Popover} from "@mui/material";



function Comments(props){
  const [apiData, setApiData] = useState([]);  //for comment api
  const [authorData, setAuthorData] = useState([]);   //for comment author detail
  // ....................................................
  // const [showOptions, setShowOptions] = useState(Array(apiData.length).fill(false));

  // const handleMoreVertClick = (index) => {
  //   setShowOptions(prevOptions => {
  //     const newOptions = [...prevOptions];
  //     newOptions[index] = !newOptions[index];
  //     return newOptions;
  //   });
  // }
  // ....................................................
  const [anchorEl, setAnchorEl] = useState(null);

  const handleMoreVertClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

// .......................................................
      let myUrl = `https://academics.newtonschool.co/api/v1/linkedin/post/${props.parameter}/comments`;

    
      const fetchApiData = async (url) => {
        try {
          const res = await fetch(url, {
            headers: new Headers({
              projectId: 'erx42hn050bm',
            }),
          });
          const commentData = await res.json();
          // console.log(data);
          const oneData = commentData.data;
          console.log(oneData);
    
          // Store the data in the state variable
          setApiData(oneData);
          // console.log("Abhishek bhaiya: "+ oneData);

        } catch (error) {
          console.log(error);
        }
      };
      useEffect(() => {
        fetchApiData(myUrl);
      }, []);
//......................................................................
// let aurthorUrl = `https://academics.newtonschool.co/api/v1/linkedin/user/{dataObj.author}`;
// const fetchApiData = async (url) => {
//   try {
//     const res = await fetch(url, {
//       headers: new Headers({
//         projectId: 'erx42hn050bm',
//       }),
//     });
//     const commentData = await res.json();
//     // console.log(data);
//     const oneData = commentData.data;
//     console.log(oneData);

//     // Store the data in the state variable
//     setApiData(oneData);
//     // console.log("Abhishek bhaiya: "+ oneData);

//   } catch (error) {
//     console.log(error);
//   }
// };
// useEffect(() => {
//   fetchApiData(myUrl);
// }, []);
//...........................................................
  return (
    <>
    <center>
        {apiData.map((dataObj, index) => {
          return (
            // <div key={index} style={{backgroundColor:"yellow"}}>
            <div key={index} className='comment__main'>
              {console.log(index._id)}
              <Avatar>A</Avatar>
              <div className='comment_figur'>
                  <div className='comment_header'>
                      <div className="comment_headerLeft">
                          <h3>Abhishek Banjare</h3>
                          <p>Software Engineer</p>
                      </div>

                      <div className='comment_headerRight'>
                        {/* ...................................... */}
                          {/* <MoreVertIcon onClick={handleMoreVertClick} /> */}
                          {/* <MoreVertIcon onClick={() => handleMoreVertClick(index)} />
                              {showOptions[index] && (
                                <div className="options-container">
                                  <div>update comm..</div>
                                  <div>delete comm..</div>
                                </div>
                              )}
                         */}
                        {/* ...................................... */}

                        <MoreVertIcon onClick={handleMoreVertClick} />
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
                                  boxShadow: '0 2px 6px rgba(0, 0, 0, 0.1)',
                                },
                              }}
                            >
                              <div className="options-container">
                                <div className='updateComment'>edit comment</div>
                                <div className='deleteComment'>delete comment</div>
                              </div>
                            </Popover>
                      </div>

                  </div>
                  <div className="comment_body">
                          <p>Tendulkar was born at Nirmal Nursing Home in Dadar, Bombay on 24 April 1973 to a Maharastrian family. His father, Ramesh Tendulkar..</p>
                          <p>{dataObj.content}</p>
                  </div>
              </div>
              {/* .... */}
              {/* <h4>Abhishek</h4>
              <h4>Abhishek</h4>
              <p>{dataObj.content}</p> */}
              {/* {console.log(dataObj.createdAt)} */}
              {/* .......................... */}
              {
                
              }

            </div>
          );

        })}
      </center>


    </>

  )
}

export default Comments