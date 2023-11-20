import React from 'react';
import "../css/Feed.css";
import { Avatar } from '@mui/material';
import InsertPhotoIcon from '@mui/icons-material/InsertPhoto';
import OndemandVideoIcon from '@mui/icons-material/OndemandVideo';
import TodayIcon from '@mui/icons-material/Today';
import AssignmentIcon from '@mui/icons-material/Assignment';
import Post from './Post';
// .................................
import { initializeApp } from "firebase/app";



function Feed() {
  return (
    <div className='feed'>
      <div className='feed__input'>
         <div className='feed__form'> 
            <Avatar src='https://www.hindustantimes.com/static-content/1y/cricket-logos/players/virat-kohli.png' />
            
            <form>
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
      
      <Post name="Virat Kohli" description="I'm Indian international cricketer " message="Virat Kohli, an Indian cricketer, is renowned for his aggressive batting style and has captained the Indian cricket team across formats." photoURL="https://www.hindustantimes.com/static-content/1y/cricket-logos/players/virat-kohli.png"/>


      {/* <Post name="Sachin Tendulkar" description="I'm Indian international cricketer " 
      message="Sachin Tendulkar, often hailed as the God of Cricket, is a retired Indian batting maestro and the highest run-scorer in international cricket."
      photoURL="https://i.cdn.newsbytesapp.com/sports/players/profile/sachin-tendulkar-1.jpg"/>

      <Post name="Cristiano Ronaldo" 
      description="I'm international Football palayer" 
      message="Cristiano Ronaldo, born on February 5, 1985, in Portugal, is a legendary footballer 
        known for his goal-scoring prowess and versatility" 
 photoURL="https://www.juventus.com/images/image/private/t_portrait_mobile/dev/t5mex3dyn30xi3ox6ii5.jpg"/>

      <Post name="Mahendra Singh Dhoni" 
      description="I'm Indian international cricketer " 
      message="Mahendra Singh Dhoni, a former Indian cricket captain, is celebrated for his exceptional leadership, finishing skills, and the captaincy during India's triumphs in major cricket tournaments." 
      photoURL="https://www.punekarnews.in/wp-content/uploads/2020/07/MS-Dhoni.jpg"/> */}

  {/* <Post />
      <Post />
      <Post />
      <Post />
      <Post /> */}

    </div>
  )
}

export default Feed