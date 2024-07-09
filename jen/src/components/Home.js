import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import '../views/Home.css';

function Home() {
  const [showText, setShowText] = useState(false);

  useEffect(() => {
    // Triggering the text to appear after the component mounts
    setShowText(true);
  }, []); // Empty dependency array ensures this effect runs only once

  return (
    <div className="home-container">
      <div className="home-image-container">
        <img src="/img/background.png" alt="profile" className="home-image" />
        <div className={`home-text ${showText ? 'show' : ''}`}>
          <h1 className="home-content"> Hi, I am </h1>
          <h2 className="home-title"> JENALYN MIRAFUENTES </h2>
        </div>
      </div>
      <div className='aboutme-section'>
          <h2 className="aboutme-title"><Link to="/profile"> About Me </Link><div className='underline'></div></h2>
            <div className="aboutme-text">
            <p>
              <span className="styled-text">I am a </span>
              <span className="styled-highlight">Computer Engineer </span>
              <span className="styled-text">with a passion for continuous learning in </span>
              <span className="styled-highlight">coding </span>
              <span className="styled-text">and </span>
              <span className="styled-highlight">design</span>
              <span className="styled-text">. </span>
              <span className="styled-text">I am dedicated to developing user-friendly and visually appealing software solutions, bringing creativity and technical expertise to every project, and striving to deliver impactful results.</span>
            </p>
          </div>
          </div>
    </div>
  );
}

export default Home;
