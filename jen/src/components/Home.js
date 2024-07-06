import React, { useEffect, useState } from 'react';
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
    </div>
  );
}

export default Home;
