// this is a rite side bar
import React from 'react'
// import '../css/Widget.css';
import './Widget.css';
import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined';
function Widget() {
  return (
    <div className='widget'>
       <div className='widget_top'>
          <div className='widget_header'>
             <h4>LinkedIn News</h4>
             <InfoOutlinedIcon/>
          </div>
          <div className='widget_body'>
            <ul className='widget_options'>
                <li>
                    <h4>The top MBA in the US for career growth</h4>
                    <p>Top news * 940 readers</p>
                </li>
                <li>
                    <h4>Firms hire more women in tech</h4>
                    <p>21hours ago</p>
                </li>
                <li>
                    <h4>Trends shaping tech hiring</h4>
                    <p>4d ago * 357 readers</p>
                </li>
                <li>
                    <h4>Future of smart wearables</h4>
                    <p>3d ago * 146 readers</p>
                </li>
                <li>
                    <h4>Saying Job Search Fees</h4>
                    <p>6d ago * 4,55 readers</p>
                </li>

            </ul>
          </div>
       </div>

       <div className='widget_bottom'>
          <div className='widget_header'>
             <h4>Today's top courses</h4>
             <InfoOutlinedIcon/>
          </div>
          <div className='widget_body'>
            <ul className='widget_options'>
               <li>
                   <h4>Leading with a Heavy Heat</h4>
                   <p>Key Coly</p>
               </li>
               <li>
                   <h4>Building Resillience</h4>
                   <p>Tatianan Kolovau</p>
               </li>
               <li>
                   <h4>Critical Thinking for better judgement</h4>
                   <p>3d ago * 4,45 readers</p>
               </li>
               <li>
                   <h4>Flexi leave is the new flexi</h4>
                   <p>4d ago * 3,55 readers</p>
               </li>
               <li>
                   <h4>Shorter hour boost productivity</h4>
                   <p>1d ago * 4,55 readers</p>
               </li>
            </ul>

          </div>
       </div>

    </div>
  )
}

export default Widget