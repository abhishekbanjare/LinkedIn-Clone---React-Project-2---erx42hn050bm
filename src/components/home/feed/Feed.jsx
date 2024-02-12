import React from 'react';
import "./Feed.css";
import { Avatar } from '@mui/material';
import InsertPhotoIcon from '@mui/icons-material/InsertPhoto';
import OndemandVideoIcon from '@mui/icons-material/OndemandVideo';
import TodayIcon from '@mui/icons-material/Today';
import AssignmentIcon from '@mui/icons-material/Assignment';
import Post from './Post';
import { useState } from 'react';
import { useEffect } from 'react';
import PostCard from '../postcard/PostCard';
// .................................

function Feed() {
   
      const [apiData, setApiData] = useState([]);

      const [isFullScreen, setIsFullScreen] = useState(false);
      // const [isProfileOption, setIsProfileOption] = useState(true);
    
      let ApiUrl = "https://academics.newtonschool.co/api/v1/linkedin/post";
    
      const fetchApiData = async (url) => {
        try {
          const res = await fetch(url, {
            headers: new Headers({
              projectId: 'erx42hn050bm',
            }),
          });
          const data = await res.json();
          const oneData = data.data;
    
          // Store the data in the state variable
          setApiData(oneData);
        } catch (error) {
          console.log(error);
        }
      };
      useEffect(() => {
        fetchApiData(ApiUrl);
      }, []);
    // ...................
    const openPostCard = () => {
      if(!isFullScreen){
        setIsFullScreen(!isFullScreen);
      }
      
    // Add logic for other options if needed
    }
    // const handleCreatePost = () => {
    //   setShowDropdown(false);
    // };

  return (
    <div className='feed'>
      {isFullScreen && (
        <div className='dropdown'>
          <PostCard setIsFullScreen={setIsFullScreen}/>
        </div>
      )}
      <div className='feed__input'>
         <div className='feed__form'> 
            <Avatar src='https://www.hindustantimes.com/static-content/1y/cricket-logos/players/virat-kohli.png' />
            <form onClick={openPostCard}>
               
               <input type="text" placeholder='Start a post'/>
               <input type="submit" />
               
            </form>
            
         </div>
        

         <div className='feed__options'>
             <div className='option'>
                <InsertPhotoIcon id='option_1'/>
                <span>Photo</span>
             </div>
             <div className='option'>
                <OndemandVideoIcon id='option_2'/>
                <span>Video</span>
             </div>
             <div className='option'>
                <TodayIcon id='option_3'/>
                <span>Event</span>
             </div>
             <div className='option'>
                <AssignmentIcon id='option_4'/>
                <span>Write Article</span>
             </div>
         </div>
         
      </div>
       {apiData.length > 0 && <Post data={apiData} />}

       
       
      
   </div>
    
    
  )
}

export default Feed