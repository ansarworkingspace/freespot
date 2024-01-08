import React from 'react'
import { FaLinkedin, FaGithub, FaEnvelope } from 'react-icons/fa';

const Footer = () => {

    const email = 'muhammedansaren@gmail.com';

    const handleEmailClick = () => {
      window.location.href = `mailto:${email}`;
    };

    
  return (
    <div className='FooterArea'>
      <h3>Connect With Me On</h3>
      <div className='socialIcons'>
        <a href='https://www.linkedin.com/' target='_blank' rel='noopener noreferrer'>
          <FaLinkedin />
        </a>
        <a href='https://github.com/' target='_blank' rel='noopener noreferrer'>
          <FaGithub />
        </a>
        <button className='emailButton' onClick={handleEmailClick}>
          <FaEnvelope />
        </button>
      </div>
    </div>
  )
}

export default Footer
