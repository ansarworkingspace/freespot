
import React, { useEffect } from 'react';
import Typed from 'typed.js';
import './user.css';

const MainCom = () => {
  useEffect(() => {
    // Initialize the Typed instance
    const typed = new Typed('.typed-text', {
      strings: ["Hi👋 I'm freespot🎨", "Welcome to our website!"],
      typeSpeed: 80, // Adjust typing speed (milliseconds per character)
      backSpeed: 50,
      backDelay: 1000, // Delay before starting to backspace
      startDelay: 500, // Delay before starting to type
      showCursor: false, // Display blinking cursor
    //   cursorChar: '|', // Custom cursor character
      loop: false, // Loop the animation indefinitely
    });

    // Cleanup the Typed instance on component unmount
    return () => {
      typed.destroy();
    };
  }, []);

  return (
    
    <div className='welcomeText'>
      <h2 className='typed-text'></h2>
      <p>You can access 👀 any services. It's completely free 🚀</p>
      
    </div>
  );
};

export default MainCom;
