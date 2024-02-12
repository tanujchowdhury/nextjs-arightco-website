import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhone } from '@fortawesome/free-solid-svg-icons';
import React, { useState } from 'react';

const HelpButton = () => {
  const [isHovered, setIsHovered] = useState(false);
  const phoneNumber = "(408) 837-0029"; // Replace with your actual phone number

  return (
    <div
      className="fixed bottom-5 right-5 flex items-center justify-center bg-blue text-white rounded-full p-4 cursor-pointer transition-all duration-500 ease-linear"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      style={{ 
        width: isHovered ? 'auto' : '50px', 
        height: '50px',
        padding: isHovered ? '4px 20px' : '4px', // Adjust padding to maintain the oval shape
      }}
    >
      <FontAwesomeIcon icon={faPhone} style={{ width: '20px', height: '20px' }} />
      {isHovered && (
        <a
          href={`tel:${phoneNumber}`}
          className="ml-2"
          style={{ textDecoration: 'none', color: 'white', whiteSpace: 'nowrap' }}
        >
          Call us at {phoneNumber}
        </a>
      )}
    </div>
  );
};

export default HelpButton;
