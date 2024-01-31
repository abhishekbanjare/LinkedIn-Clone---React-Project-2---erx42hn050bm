import React from 'react';
import "./ProfileDropdown.css";
import Avatar from '@mui/material/Avatar';
import Headeroptions from '../header/Headeroptions';

const ProfileDropdown = ({setUser}) => {
    const handleSignOut = () => {
        // Add logic for signing out
        console.log('Signing out...');
        alert("Sign Out");
        setUser(false);
      };
    
      return (
        <div className="profileDropdown">
          <Headeroptions avatar={Avatar} title="Abhishek Banjare" />
          <div className='prof_acount'>
            <h4>Acount</h4> 
              <p>Setting & Privacy</p>
              <p>Help</p>
              <p>Language</p>
          </div>

          <div className='prof_manage'>
            <h4>Manage</h4> 
              <p>Posts & Activity</p>
              <p>Job Posting Account</p>
          </div>

          <div className='prof_sinout'>
             <h4 onClick={handleSignOut}>Sign Out</h4>
          </div>
          {/* Add other profile options as needed */}
             
             
        </div>
      );
}

export default ProfileDropdown;