import { Poppins, Exo } from 'next/font/google';
import React, { useState, useEffect } from 'react';
import BackgroundAnim from '../animation/backgroundAnimationFirst';
import '../styles/animations.css';
import { ArrowLeft } from "lucide-react";
import Footer from './footer'
import '../styles/transitions.css';
import useIsMobile from '../utils/useIsMobile';

const poppins = Poppins({ subsets: ['latin'], weight: ['400', '700'] });
const exo = Exo({ subsets: ['latin'], weight: ['400', '700'] });

const CountryBeyond = ({
  countryName, countryNameOptional,
  admissionInformation, universityInformation,
  universityFees = <>Information will be available to drhtru666u   eeh5y ownload here about specific universities soon. Page should redirect.</>,
  visaRequirementsRequirements, visaRequirementsFinancials, visaRequirementsInsurance,
  whyChooseCountry = [{}], advantages = ["PlaceHolder for Information here", "PlaceHolder 2"],
  disadvantages = ["PlaceHolder for Information here", "PlaceHolder 2"],
  footerInformation, backgroundColorObject = Number[0], backgroundColor = '',
  optionalInformation = [{}],
  titleStyleBackground,
}) => {

  const titleStyle = {    
    background: titleStyleBackground,
    WebkitBackgroundClip: 'text',
    WebkitTextFillColor: 'transparent'
  };
 
  const [loaded, setLoaded] = useState(false);
  const isMobile = useIsMobile();

  useEffect(() => {
    setLoaded(true);
  }, []);

  const visaRequirements = [ 
    { title: "General Requirements", description: visaRequirementsRequirements },
    { title: "Financial Requirements", description: visaRequirementsFinancials },
    { title: "Insurance Requirement", description: visaRequirementsInsurance }
  ];

  const backgroundStyle = { background: backgroundColor };

  return (
    <main style={backgroundStyle} id="backgroundCountry" className={`${exo.className} flex flex-col min-h-screen ${loaded ? 'slide-in-top' : ''}`}>
      <BackgroundAnim objectColor={backgroundColorObject} className="absolute inset-0 z-0" />
      <div className="relative z-10 flex-grow flex-col items-center justify-center">
        <div className="w-full inline-flex items-center">
          <button id="returnButtonHeader" onClick={() => window.history.back()} aria-label="Go back" className="flex-shrink-0"><ArrowLeft size={20} /></button>
          <h1 className={`text-custom-gradient text-[35px] lg:text-[75px] text-center font-extrabold grow ${poppins.className}`} id="titleCountry" style={titleStyle}>{countryName}</h1>
        </div>
        <hr id="line" />

        <h2 className={`text-[30px] sm:text-[24px] lg:text-[40px] ${poppins.className}`} id="subtitleLeft">{countryNameOptional} <span id="gradientSub">ADMISSION</span></h2>
        <span className={`${exo.className}`} id="infoBody">{admissionInformation}</span>

        <h2 className={`text-[30px] sm:text-[24px] lg:text-[40px] ${poppins.className}`} id="subtitleLeft">{countryNameOptional} <span id="gradientSub">UNIVERSITIES</span></h2>
        <span className={`${exo.className}`} id="infoBody">{universityInformation}</span>

        <h2 className={`text-[30px] sm:text-[24px] lg:text-[40px] ${poppins.className}`} id="subtitleLeft">{countryNameOptional} <span id="gradientGold">TUITION FEES</span></h2>
        <span className={`${exo.className}`} id="infoBody">{universityFees}</span>

        <h2 className={`text-[30px] sm:text-[24px] lg:text-[40px] ${exo.className}`} id="subtitleLeft">{countryNameOptional} <span id="gradientSubSub">STUDENT PERMIT</span></h2>
        <ul className={`${exo.className}`} id="infoBody">
          {visaRequirements.map((item, index) => (
            <li key={index}>
              <p className={`text-[24px] sm:text-[24px] lg:text-[28px] ${exo.className}`} id="subSubTitleLeft">
                PERMIT <span id="gradientSubSub"><strong>{item.title}</strong></span>
              </p>
              <small className={`mb-5 sm:mb-5 ${exo.className}`} id="infoBody">{item.description}</small>
            </li>
          ))}
        </ul>

        <h2 className={`text-[30px] sm:text-[24px] lg:text-[40px] ${poppins.className}`} id="subtitleLeft">{whyChooseCountry[0].title}</h2>
        <h2 className={`${exo.className}`} id="infoBody">{whyChooseCountry[0].description}</h2>

        {loaded && !isMobile && (
          <div className="flex justify-around w-full">
            <div className="w-1/2 bg-opacity-60">
              <h3 className={`text-[26px] sm:text-[24px] lg:text-[32px] ${poppins.className}`} style={{ color: 'lightgreen' }} id="subtitleCenter">ADVANTAGES</h3>
              <ul id="infoCenter">
                {advantages.map((advantage, index) => (
                  <li className={`${exo.className}`} key={index}>{advantage}</li>
                ))}
              </ul>
            </div>

            <div className="vertical-line-container">
              <hr className="vertical-line" />
            </div>

            <div className="w-1/2 bg-opacity-60">
              <h3 className={`text-[26px] sm:text-[24px] lg:text-[32px] ${poppins.className}`} style={{ color: 'red' }} id="subtitleCenter">DISADVANTAGES</h3>
              <ul id="infoCenter">
                {disadvantages.map((disadvantage, index) => (
                  <li className={`${exo.className}`} key={index}>{disadvantage}</li>
                ))}
              </ul>
            </div>
          </div>
        )}

        <ul className={`${exo.className}`} id="infoBody">
          {optionalInformation.map((item, index) => (
            <li key={index}>
              <p className={`text-[22px] sm:text-[22px] lg:text-[33px] ${exo.className}`} id="subSubTitleLeft"><span><strong>{item.title}</strong></span></p>
              <small className={`${exo.className}`} id="infoBody">{item.description}</small>
            </li>
          ))}
        </ul>
      </div>

      <div id="buffer"></div>
      <Footer showAIwarning={true} footerInformation={isMobile ? "It's reommended to verify the information on offcial government sites before taking action" : footerInformation} />
    </main>
  );
};

export default CountryBeyond;
