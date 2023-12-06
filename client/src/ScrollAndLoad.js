import React, { useState } from 'react';
// import './ScrollAndLoad.css'; // Import your CSS file for styling

const ScrollAndLoad = () => {
  const [isLoading, setIsLoading] = useState(false);

  const handleScrollAndLoad = () => {
    // Show loading icon
    setIsLoading(true);

    // Scroll to the bottom
    window.scrollTo({
      top: document.body.scrollHeight,
      behavior: 'smooth',
    });

    // Simulate loading delay (replace this with your actual loading logic)
    setTimeout(() => {
      // Hide loading icon after the loading is done
      setIsLoading(false);
    }, 2000); // Adjust the time as needed
  };

  return (
    <div>
      <button className="scroll-button" >
        Scroll to Bottom
      </button>
      {isLoading && (
        <div className="loading-icon">
          {/* Loading icon, you can replace this with your preferred loading indicator */}
          <div className="loader"></div>
          <p>Loading...</p>
        </div>
      )}
    </div>
  );
};

export default ScrollAndLoad;
