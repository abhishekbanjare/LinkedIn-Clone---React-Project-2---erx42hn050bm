import React from 'react';
import "../profile/ProfileDropdown.css";
import Avatar from '@mui/material/Avatar';
import Headeroptions from '../../header/Headeroptions';
import { useContext } from 'react';
import { LoginContext } from '../../../context/Login';

const ProfileDropdown = () => {
    const loginObj = useContext(LoginContext)  // login context api

    const handleSignOut = () => {
        // Add logic for signing out
        console.log('Signing out...');
        alert("Sign Out");
        loginObj.setUser(false);
      };
    // console.log("Hello aabhishek: "+user.data.name)
      return (
        <div className="profileDropdown">
          {/* <Headeroptions avatar={Avatar} title="Abhishek Banjare" /> */}
          <Headeroptions avatar={Avatar} title={loginObj.user.data.name} />
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