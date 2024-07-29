import React, { ReactNode } from 'react';
import '../styles/animationBackground.css'


const BackgroundAnim = ({ children, className, objectColor }) => {
  
  // 184, 225, 201
  // 184, 5, 201


  const circleColor = {
    background: `rgba(${objectColor}, 0.2)`,
  }

  return (
    <main className={className}>
      <div className="area">
        <ul className="circles">
          {[...Array(15)].map((_, index) => (
            <li key={index} style={circleColor}></li>
          ))}
        </ul>
      </div>
      <div className="areaTop">
        <ul className="circles">
          {[...Array(15)].map((_, index) => (
            <li key={index} style={circleColor}></li>
          ))}
        </ul>
      </div>
      {children}
    </main>
  );
}

export default BackgroundAnim;
