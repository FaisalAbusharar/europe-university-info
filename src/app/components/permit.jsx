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

const Permit = ({
  countryName, countryNameOptional,
  visaRequirementsRequirements, visaRequirementsFinancials, visaRequirementsInsurance, permitProcessingTime, permitDocumments, permitWorkRights, permitStayRules, permitPostStudy, permitGuidanceSite, permitNotes,
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
  const isMobile = useIsMobile();

  const visaRequirements = [
    { title: "General Requirements", description: visaRequirementsRequirements },
    { title: "Financial Requirements", description: visaRequirementsFinancials },
    { title: "Insurance Requirement", description: visaRequirementsInsurance }
  ];


  const backgroundStyle = {background: backgroundColor}

  return (
    <main style= {backgroundStyle} id="backgroundCountry" className={`${exo.className} flex flex-col min-h-screen ${loaded ? 'slide-in-top' : ''}`}>
      <BackgroundAnim objectColor={backgroundColorObject} className="absolute inset-0 z-0" />
      <div className={`relative z-10 flex-grow flex-col items-center justify-center ${animation ? 'fade-enter-active' : 'fade-exit-active'}`}>
         <div className="w-full inline-flex items-center">
            <button id="returnButtonHeader" onClick={() => window.history.back()} aria-label="Go back" className="flex-shrink-0"><ArrowLeft size={20} /></button>
            <h1 className={`text-custom-gradient text-[35px] lg:text-[75px] text-center font-extrabold grow ${poppins.className}`} id="titleCountry" style={titleStyle}>{countryName}</h1>
          </div>
        <hr id="line" />

        <h2 id="infoBody"><span id="warning">This information is generated dynamically by AI, please review carefully.</span> <a href="/pages/support/permitPathGeneration" id="hyperlink">Learn More</a></h2>

        <h2 className={`text-[30px] sm:text-[24px] lg:text-[40px]  ${exo.className}`} id="subtitleLeft">{(<>{countryNameOptional} {<span id="gradientSubSub">STUDENT PERMIT</span>}</>) }</h2>
        <ul className={`${exo.className}`} id="infoBody">{(visaRequirements.map((item, index) => (
          <li key={index}>
            <span className={`text-[24px] sm:text-[24px] lg:text-[28px] ${exo.className}`} id="subSubTitleLeft">PERMIT <span id="gradientSubSub"><strong>{item.title}</strong></span></span>
            <small className={`mb-5 sm:mb-5 ${exo.className}`} id="infoBody">{item.description}</small>
          </li>
        )))}</ul>

        {/* Additional Permit Information */}


<>
  <h2
    className={`text-[30px] sm:text-[24px] lg:text-[40px] ${poppins.className}`}
    id="subtitleLeft"
  >
    Additional <span id="gradientSubSub">Permit Information</span>
  </h2>

  <ul className={`${exo.className}`} id="infoBody">

    {permitDocumments && (
      <li>
        <p
          className={`text-[22px] sm:text-[22px] lg:text-[33px] ${exo.className}`}
          id="subSubTitleLeft"
        >
          <strong>Required Documents</strong>
        </p>

        <small id="infoBody">
          {permitDocumments}
        </small>
      </li>
    )}

    {permitProcessingTime && (
      <li>
        <p
          className={`text-[22px] sm:text-[22px] lg:text-[33px] ${exo.className}`}
          id="subSubTitleLeft"
        >
          <strong>Processing Time</strong>
        </p>

        <small id="infoBody">
          {permitProcessingTime}
        </small>
      </li>
    )}

    {permitWorkRights && (
      <li>
        <p
          className={`text-[22px] sm:text-[22px] lg:text-[33px] ${exo.className}`}
          id="subSubTitleLeft"
        >
          <strong>Work Rights</strong>
        </p>

        <small id="infoBody">
          {permitWorkRights}
        </small>
      </li>
    )}

    {permitStayRules && (
      <li>
        <p
          className={`text-[22px] sm:text-[22px] lg:text-[33px] ${exo.className}`}
          id="subSubTitleLeft"
        >
          <strong>Residence & Stay Rules</strong>
        </p>

        <small id="infoBody">
          {permitStayRules}
        </small>
      </li>
    )}

    {permitPostStudy && (
      <li>
        <p
          className={`text-[22px] sm:text-[22px] lg:text-[33px] ${exo.className}`}
          id="subSubTitleLeft"
        >
          <strong>Post-Study Options</strong>
        </p>

        <small id="infoBody">
          {permitPostStudy}
        </small>
      </li>
    )}

    {permitGuidanceSite && (
      <li>
        <p
          className={`text-[22px] sm:text-[22px] lg:text-[33px] ${exo.className}`}
          id="subSubTitleLeft"
        >
          <strong>Where to Get Help</strong>
        </p>

        <small id="infoBody">
          {permitGuidanceSite}
        </small>
      </li>
    )}

    {permitNotes && (
      <li>
        <p
          className={`text-[22px] sm:text-[22px] lg:text-[33px] ${exo.className}`}
          id="subSubTitleLeft"
        >
          <strong>Important Notes</strong>
        </p>

        <small id="infoBody">
          {permitNotes}
        </small>
      </li>
    )}

  </ul>
</>
  
        

        <ul className={`${exo.className}`} id="infoBody">{optionalInformation.map((item, index) => (
          <li key={index}>
            <p className={`text-[22px] sm:text-[22px] lg:text-[33px] ${exo.className}`} id="subSubTitleLeft"><span><strong>{item.title}</strong></span></p>
            <small className={`${exo.className}`} id="infoBody">{item.description}</small>
          </li>
        ))}</ul>      

        <ul className={`${exo.className}`} id="infoBody">{(internationalOptionalInformation.map((item, index) => (
          <li key={index}>
            <p className={`text-[22px] sm:text-[22px] lg:text-[33px] ${exo.className}`} id="subSubTitleLeft"><span><strong>{item.title}</strong></span></p>
            <small className={`${exo.className}`} id="infoBody">{item.description}</small>
          </li>
        )))}</ul>   

      </div>
      <div id="buffer"></div>
      <Footer showAIwarning={true}  footerInformation={isMobile ? "It's reommended to verify the information on offcial government sites before taking action" : footerInformation}></Footer>
    </main>
  );
}

export default Permit;
