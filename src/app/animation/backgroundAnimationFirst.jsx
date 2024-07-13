import React, { ReactNode } from 'react';
import './animationBackground.css';


const BackgroundAnim = ({ children, className }) => {
  return (
    <main className={className}>
      <div className="area">
        <ul className="circles">
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
        </ul>
      </div>
      {children}
    </main>
  );
}

export default BackgroundAnim;
