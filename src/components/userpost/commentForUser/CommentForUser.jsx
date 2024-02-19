import {React, useState} from 'react'
import './CommentForUser.css'
import { Avatar} from '@mui/material'
import MoreVertIcon from "@mui/icons-material/MoreVert";
import {Popover} from "@mui/material";

const CommentForUser = () => {
  const [anchorEl, setAnchorEl] = useState(null);

  const handleMoreVertClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleEdit = () => {
    // Handle edit action
    handleClose();
  };

  const handleDelete = () => {
    // Handle delete action
    handleClose();
  };
  return (
          <>
          <div className='main-wraper'>
              <Avatar>A</Avatar>
              <div className='user-comment-body'>
                  <div className='com-header'>
                      <div className="header-left">
                          <h3>Abhishek Banjare</h3>
                          <p>Software Engineer</p>
                      </div>

                      <div className='header-right'>         
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
                                <div className='updateComment' onClick={handleEdit}>edit comment</div>
                                <div className='deleteComment' onClick={handleDelete}>delete comment</div>
                              </div>
                            </Popover>
                        
                      </div>
                      

                  </div>
                  <div className="comment-body">
                    <p>Tendulkar was born at Nirmal Nursing Home in Dadar, Bombay on 24 April 1973 to a Maharastrian family. 
                      Tendulkar was born at Nirmal Nursing Home in Dadar, Bombay on 24 April 1973 to a Maharastrian family.
                    </p>
                  </div>
              </div>
          </div>
    </>
  )
}

export default CommentForUser