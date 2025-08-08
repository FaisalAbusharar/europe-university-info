"use client";

import { Poppins, Exo } from 'next/font/google';
import React, { useState, useEffect } from 'react';
import BackgroundAnim from '../animation/backgroundAnimationFirst';
import '../styles/animations.css';
import Footer from './footer'
import '../styles/transitions.css';
import { ArrowLeft } from 'lucide-react';

const poppins = Poppins({ subsets: ['latin'], weight: ['400', '700'] });
const exo = Exo({ subsets: ['latin'], weight: ['400', '700'] });

const Finance = ({
  countryName, countryNameOptional,
  internationalFinanceInformation,
  footerInformation, titleColor1, titleColor2, backgroundColorObject = Number[0], backgroundColor = '',
  optionalInformation = [{}], internationalOptionalInformation = [{}]
}) => {
  const titleStyle = {    
    background: `linear-gradient(to bottom, ${titleColor1}, ${titleColor2})`,
    WebkitBackgroundClip: 'text',
    WebkitTextFillColor: 'transparent'
  };


  const [loaded, setLoaded] = useState(false);
  const [animation, setAnimation] = useState(true);


  useEffect(() => {
    setLoaded(true);
  }, []);

  const backgroundStyle = {background: backgroundColor}

  return (
    <main style={backgroundStyle} id="backgroundCountry" className={`${exo.className} flex flex-col min-h-screen ${loaded ? 'slide-in-top' : ''}`}>
      <BackgroundAnim objectColor={backgroundColorObject} className="absolute inset-0 z-0" />
      <div className={`relative z-10 flex-grow flex-col items-center justify-center ${animation ? 'fade-enter-active' : 'fade-exit-active'}`}>
     <button id="returnButtonHeader" onClick={() => window.history.back()} aria-label="Go back"><ArrowLeft size={20} /></button>
        <h1 className={`text-custom-gradient text-[35px] lg:text-[75px] text-center font-extrabold grow ${poppins.className}`} id="titleCountry" style={titleStyle}>{countryName}</h1>
        <hr id="line" />
        <h2 className={`text-[30px] sm:text-[24px] lg:text-[40px] ${poppins.className}`} id="subtitleLeft">COSTS OF STUDYING IN  <p id="gradientSub">{countryName}</p></h2>
        <p className={`${exo.className}`} id="infoBody">{internationalFinanceInformation}</p>
       
       
        <ul className={`${exo.className}`} id="infoBody">{optionalInformation.map((item, index) => (
          <li key={index}>
            <p className={`${exo.className}`} id="subSubTitleLeft"><span><strong>{item.title}</strong></span></p>
            <small className={`${exo.className}`} id="infoBody">{item.description}</small>
          </li>
        ))}</ul>      

        <ul className={`${exo.className}`} id="infoBody">{(internationalOptionalInformation.map((item, index) => (
          <li key={index}>
            <p className={`${exo.className}`} id="subSubTitleLeft"><span><strong>{item.title}</strong></span></p>
            <small className={`${exo.className}`} id="infoBody">{item.description}</small>
          </li>
        )))}</ul>   

      </div>
      <div id="buffer"></div>
      <Footer showAIwarning={true}  footerInformation={footerInformation}></Footer>
    </main>
  );
}


export default Finance;
