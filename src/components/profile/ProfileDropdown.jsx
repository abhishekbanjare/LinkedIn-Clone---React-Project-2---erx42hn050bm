import React from 'react';
import './ProfileDropdown.css';

const ProfileDropdown = () => {
    const handleSignOut = () => {
        // Add logic for signing out
        console.log('Signing out...');
      };
    
      return (
        <div className="profileDropdown">
          <p onClick={handleSignOut}>Sign Out</p>
          {/* Add other profile options as needed */}
        </div>
      );
}

export default ProfileDropdown