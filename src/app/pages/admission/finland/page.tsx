"use client";

import { Poppins, Exo } from 'next/font/google';
import React, { useState, useEffect } from 'react';
import BackgroundAnim from '../animation/backgroundAnimationFirst';
import '../styles/animations.css';
import Footer from './footer';
import '../styles/transitions.css';
import { ArrowLeft } from 'lucide-react';

const poppins = Poppins({ subsets: ['latin'], weight: ['400', '700'] });
const exo = Exo({ subsets: ['latin'], weight: ['400', '700'] });

const Finance = ({
  countryName, countryNameOptional,
  internationalFinanceInformation,
  footerInformation, titleColor1, titleColor2,
  backgroundColorObject = 0, backgroundColor = '',
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

  const backgroundStyle = { background: backgroundColor };

  // IT tuition + living costs breakdown
  const itCosts = [
    {
      title: "Tuition Fees (IT Programs)",
      description: `Bachelor’s: €5,000–€18,000/year  
Master’s: €9,000–€18,000/year  
Examples: Aalto University (BSc Science & Tech) €12,000/year, University of Helsinki (Data Science) €13,000/year, Tampere University (MSc IT) €12,000/year.`
    },
    {
      title: "Living Expenses",
      description: `€700–€1,200/month depending on city.  
Helsinki ~ €900–€1,300, Tampere ~ €700–€1,100, Oulu ~ €700–€900.  
Covers housing, transport, food, utilities.`
    },
    {
      title: "Estimated Annual Total",
      description: `Typical IT student budget: €16,400 – €28,600/year (tuition + living).`
    },
    {
      title: "Scholarship Opportunities",
      description: `Many universities offer 50–100% tuition waivers. Finland Scholarship covers full tuition + €5,000 relocation grant.`
    }
  ];

  return (
    <main style={backgroundStyle} id="backgroundCountry" className={`${exo.className} flex flex-col min-h-screen ${loaded ? 'slide-in-top' : ''}`}>
      <BackgroundAnim objectColor={backgroundColorObject} className="absolute inset-0 z-0" />
      <div className={`relative z-10 flex-grow flex-col items-center justify-center ${animation ? 'fade-enter-active' : 'fade-exit-active'}`}>
        <button id="returnButtonHeader" onClick={() => window.history.back()} aria-label="Go back">
          <ArrowLeft size={20} />
        </button>

        <h1 className={`text-custom-gradient text-[35px] lg:text-[75px] text-center font-extrabold grow ${poppins.className}`} id="titleCountry" style={titleStyle}>
          {countryName}
        </h1>
        <hr id="line" />

        <h2 className={`text-[30px] sm:text-[24px] lg:text-[40px] ${poppins.className}`} id="subtitleLeft">
          {countryNameOptional} <p id="gradientSub">ADMISSION</p>
        </h2>

        <p className={`${exo.className}`} id="infoBody">{internationalFinanceInformation}</p>

        {/* Original optional information */}
        <ul className={`${exo.className}`} id="infoBody">
          {(optionalInformation || []).map((item, index) => (
            <li key={index}>
              <p className={`${exo.className}`} id="subSubTitleLeft"><strong>{item.title}</strong></p>
              <small className={`${exo.className}`} id="infoBody">{item.description}</small>
            </li>
          ))}
        </ul>

        {/* Original international optional information */}
        <ul className={`${exo.className}`} id="infoBody">
          {(internationalOptionalInformation || []).map((item, index) => (
            <li key={index}>
              <p className={`${exo.className}`} id="subSubTitleLeft"><strong>{item.title}</strong></p>
              <small className={`${exo.className}`} id="infoBody">{item.description}</small>
            </li>
          ))}
        </ul>

        {/* New IT tuition + cost breakdown */}
        <h2 className={`${poppins.className} text-[28px] mt-6`} id="gradientSub">IT Tuition & Cost Details</h2>
        <ul className={`${exo.className}`} id="infoBody">
          {itCosts.map((item, index) => (
            <li key={index}>
              <p className={`${exo.className}`} id="subSubTitleLeft"><strong>{item.title}</strong></p>
              <small className={`${exo.className}`} id="infoBody">{item.description}</small>
            </li>
          ))}
        </ul>

      </div>
      <div id="buffer"></div>
      <Footer showAIwarning={true} footerInformation={footerInformation}></Footer>
    </main>
  );
}

export default Finance;
