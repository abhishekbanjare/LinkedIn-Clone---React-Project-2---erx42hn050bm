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
    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');
    const [selectedFile, setSelectedFile] = useState(null);

    const loginObj = useContext(LoginContext)

      const closePostCard=()=>{
        setIsFullScreen(false)
      }

      const handleFileChange = (event) =>{
            const file = event.target.files[0];
            // console.log(file);
            setSelectedFile(file);
      }
      const handlePostClick = () =>{
        console.log("title: ", title);
        console.log("content: ", content);
        console.log('fileName: ', selectedFile);

        setTitle('');
        setContent('');
        setSelectedFile('');

        closePostCard();
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
              <input type="text" placeholder='Title' onChange={(e)=>setTitle(e.target.value)} />
              {/* <input type="text" placeholder='What do you want to talk about?' /> */}
              <textarea
                    id="myTextArea"
                    // value={}
                    rows={5} // Specify the number of visible text lines
                    cols={50} // Specify the number of visible text columns
                    placeholder='What do you want to talk about?'
                    onChange={(e)=> setContent(e.target.value)}
              />
          </div>

          <div className='sec-3'>
            <div className='Aa'>
                <label htmlFor="fileInput"><PermMediaIcon /></label> 
                <input type="file" id="fileInput" style={{display: 'none'}} onChange={handleFileChange} />
               { selectedFile ? <p style={{fontSize:'small'}}>{selectedFile.name}</p>:""}
            </div>
            <EventAvailableIcon />
            <CelebrationIcon />
            <MoreHorizIcon />
          </div>

          <div className='sec-4'>
            <button onClick={closePostCard}>Cancel</button>
            <button onClick={handlePostClick}>Post</button>
            
          </div>
          
        </div>
      );
}

export default PostCard