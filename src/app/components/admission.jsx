"use client";

import { Poppins, Exo } from 'next/font/google';
import React, { useState, useEffect } from 'react';
import BackgroundAnim from '../animation/backgroundAnimationFirst';
import '../styles/animations.css';
import Footer from './footer'
import Link from "next/link"
import '../styles/transitions.css';
import { ArrowLeft } from 'lucide-react';

const poppins = Poppins({ subsets: ['latin'], weight: ['400', '700'] });
const exo = Exo({ subsets: ['latin'], weight: ['400', '700'] });

const Admission = ({
  countryName, countryNameOptional,
  internationalAdmissionInformation,
  footerInformation, titleColor1, titleColor2, backgroundColorObject = Number[0], backgroundColor = '',
  optionalInformation = [{}], internationalOptionalInformation = [{}]
}) => {
  const titleStyle = {    
    background: `linear-gradient(to bottom, ${titleColor1}, ${titleColor2})`,
    WebkitBackgroundClip: 'text',
    WebkitTextFillColor: 'transparent'
  };

  const [isInternational, setInternational] = useState(false);
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
      {<Link href={'/pages/admission'}><button id="returnButtonHeader"><ArrowLeft size={20}/></button></Link>} 
        <h1 className={`${poppins.className}`} id="titleCountry" style={titleStyle}>{countryName}</h1>
        <hr id="line" />
        <h2 className={`${poppins.className}`} id="subtitleLeft">{countryNameOptional} <p id="gradientSub">ADMISSION</p></h2>
        <p className={`${exo.className}`} id="infoBody">{internationalAdmissionInformation}</p>
       
       
        <ul className={`${exo.className}`} id="infoBody">{optionalInformation.map((item, index) => (
          <li key={index}>
            <p className={`${exo.className}`} id="subSubTitleLeft"><span><strong>{item.title}</strong></span></p>
            <small className={`${exo.className}`} id="infoBody">{item.description}</small>
          </li>
        ))}</ul>      

        <ul className={`${exo.className}`} id="infoBody">{isInternational ? (internationalOptionalInformation.map((item, index) => (
          <li key={index}>
            <p className={`${exo.className}`} id="subSubTitleLeft"><span><strong>{item.title}</strong></span></p>
            <small className={`${exo.className}`} id="infoBody">{item.description}</small>
          </li>
        ))) : ""}</ul>   

      </div>
      <div id="buffer"></div>
      <Footer returnPage='./pages/admission' footerInformation={footerInformation}></Footer>
    </main>
  );
}
// comment

export default Admission;
