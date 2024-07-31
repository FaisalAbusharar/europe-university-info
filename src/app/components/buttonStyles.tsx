import React, { useState } from 'react';

interface StyledButtonProps {
  children: React.ReactNode;
  backgroundHoverButtonColor: string;
}

const StyledButton: React.FC<StyledButtonProps> = ({ children , backgroundHoverButtonColor}) => {
  const [rotation, setRotation] = useState(0);
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => {
    const randomRotation = Math.random() * (6 - 3) + 3;
    const direction = Math.random() < 0.5 ? 1 : -1; 
    setRotation(randomRotation * direction);
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setRotation(0);
    setIsHovered(false);
  };

  const buttonStyles = {
    fontSize: '16px',
    borderRadius: '20px',
    border: 'solid rgb(255, 255, 255)',
    padding: '14px 28px',
    cursor: 'pointer',
    transition: 'transform 0.5s ease, border 0.5s ease, color 0.5s ease, background-color 0.5s ease, margin 0.5s ease, background-clip 0.5s ease',
    backgroundImage: isHovered 
    ? backgroundHoverButtonColor
    : 'transparent',
    color: isHovered ? 'white' : 'transparent',
    fontWeight: 900,
    transform: isHovered ? `rotate(${rotation}deg) scale(1.3)` : 'none',
    WebkitBackgroundClip: isHovered ? 'padding-box' : 'text',
    backgroundClip: isHovered ? 'padding-box' : 'text',
    marginLeft: isHovered ? '15px' : '5px',
    marginRight: isHovered ? '15px' : '5px',
    WebkitTextFillColor: isHovered ? 'white' : 'transparent',
    animation: isHovered ? 'gradientAnimation 6s linear infinite' : 'none',
  };

  return (
    <button
      style={buttonStyles}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {children}
    </button>
  );
};



export default StyledButton;
