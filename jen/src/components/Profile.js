import React from 'react';
import { Link } from 'react-router-dom';

function Profile() {
  return (
    <div classname="aboutme-containr">
      <h2>Welcome to My Website!</h2>
      <p>This is the profile of my website.</p>
      <p><Link to="/profile"> Go to Profile </Link></p>
    </div>
    
  );
}

export default Profile;
