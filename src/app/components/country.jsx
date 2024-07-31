"use client";

import { Poppins, Exo } from 'next/font/google';
import React, { useState, useEffect } from 'react';
import BackgroundAnim from '../animation/backgroundAnimationFirst';
import '../styles/animations.css';
import Footer from './footer';
import '../styles/transitions.css';

const poppins = Poppins({ subsets: ['latin'], weight: ['400', '700'] });
const exo = Exo({ subsets: ['latin'], weight: ['400', '700'] });

const Country = ({
  countryName, countryNameOptional,
  admissionInformation, internationalAdmissionInformation,
  universityInformation, internationalUniversityInformation,
  internationalUniversityFees = <></>,
  visaRequirementsRequirements, visaRequirementsFinancials, visaRequirementsInsurance,
  whyChooseCountry = [{}], advantages = ["PlaceHolder for Information here", "PlaceHolder 2"],
  disadvantages = ["PlaceHolder for Information here", "PlaceHolder 2"],
  footerInformation, titleColor1, titleColor2,
  optionalInformation = [{}], internationalOptionalInformation = [{}]
}) => {
  const [isInternational, setIsInternational] = useState(false);
  const [loaded, setLoaded] = useState(false);
  const [animation, setAnimation] = useState(true);

  const handleToggle = () => {
    setIsInternational(!isInternational);
    setAnimation(false);
    setTimeout(() => setAnimation(true), 600);
  };

  useEffect(() => {
    setLoaded(true);
  }, []);

  const titleStyle = {    
    background: `linear-gradient(to bottom, ${titleColor1}, ${titleColor2})`,
    WebkitBackgroundClip: 'text',
    WebkitTextFillColor: 'transparent'
  };

  const visaRequirements = [
    { title: "General Requirements", description: visaRequirementsRequirements },
    { title: "Financial Requirements", description: visaRequirementsFinancials },
    { title: "Insurance Requirement", description: visaRequirementsInsurance }
  ];

  return (
    <main id="backgroundCountry" className={`${exo.className} flex flex-col min-h-screen ${loaded ? 'slide-in-top' : ''}`}>
      <BackgroundAnim objectColor={[184, 5, 201]} className="absolute inset-0 z-0" />
      <div className={`relative z-10 flex-grow flex-col items-center justify-center ${animation ? 'fade-enter-active' : 'fade-exit-active'}`}>
        <h1 className={poppins.className} id="titleCountry" style={titleStyle}>{countryName}</h1>
        <button id="toggleButton" onClick={handleToggle}>
          {isInternational ? "Switch to European" : "Switch to International"}
        </button>
        <hr id="line" />
        <h2 className={poppins.className} id="subtitleLeft">{countryNameOptional} <span id="gradientSub">ADMISSION</span></h2>
        <div className={exo.className} id="infoBody">{isInternational ? internationalAdmissionInformation : admissionInformation}</div>
        <h2 className={poppins.className} id="subtitleLeft">{countryNameOptional} <span id="gradientSub">UNIVERSITIES</span></h2>
        <div className={exo.className} id="infoBody">{isInternational ? internationalUniversityInformation : universityInformation}</div>
        {isInternational && (
          <>
            <h2 className={poppins.className} id="subtitleLeft">
              {countryNameOptional} <span id="gradientGold">TUITION FEES</span>
            </h2>
            <div className={exo.className} id="infoBody">{internationalUniversityFees}</div>
            <h2 className={exo.className} id="subtitleLeft">
              {countryNameOptional} <span id="gradientSubSub">STUDENT VISA</span>
            </h2>
            <ul className={exo.className} id="infoBody">
              {visaRequirements.map((item, index) => (
                <li key={index}>
                  <div className={exo.className} id="subSubTitleLeft">
                    VISA <span id="gradientSubSub"><strong>{item.title}</strong></span>
                  </div>
                  <small className={exo.className} id="infoBody">{item.description}</small>
                </li>
              ))}
            </ul>
          </>
        )}
        <h2 className={poppins.className} id="subtitleLeft">{whyChooseCountry[0].title}</h2>
        <div className={exo.className} id="infoBody">{whyChooseCountry[0].description}</div>
        <div className="flex justify-around w-full">
          <div className="w-1/2 bg-opacity-60">
            <h3 className={poppins.className} style={{ color: 'lightgreen' }} id="subtitleCenter">ADVANTAGES</h3>
            <ul id="infoCenter">
              {advantages.map((advantage, index) => (
                <li className={exo.className} key={index}>{advantage}</li>
              ))}
            </ul>
          </div>
          <div className="vertical-line-container">
            <hr className="vertical-line" />
          </div>
          <div className="w-1/2 bg-opacity-60">
            <h3 className={poppins.className} style={{ color: 'red' }} id="subtitleCenter">DISADVANTAGES</h3>
            <ul id="infoCenter">
              {disadvantages.map((disadvantage, index) => (
                <li className={exo.className} key={index}>{disadvantage}</li>
              ))}
            </ul>
          </div>
        </div>
        <ul className={exo.className} id="infoBody">
          {optionalInformation.map((item, index) => (
            <li key={index}>
              <div className={exo.className} id="subSubTitleLeft"><span><strong>{item.title}</strong></span></div>
              <small className={exo.className} id="infoBody">{item.description}</small>
            </li>
          ))}
        </ul>
        {isInternational && (
          <ul className={exo.className} id="infoBody">
            {internationalOptionalInformation.map((item, index) => (
              <li key={index}>
                <div className={exo.className} id="subSubTitleLeft"><span><strong>{item.title}</strong></span></div>
                <small className={exo.className} id="infoBody">{item.description}</small>
              </li>
            ))}
          </ul>
        )}
      </div>
      <div id="buffer"></div>
      <Footer returnPage='countries' footerInformation={footerInformation} />
    </main>
  );
}

export default Country;
