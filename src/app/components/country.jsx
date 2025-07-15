import { Poppins, Exo } from 'next/font/google';
import React, { useState, useEffect } from 'react';
import BackgroundAnim from '../animation/backgroundAnimationFirst';
import '../styles/animations.css';
import { ArrowLeft } from "lucide-react";
import Footer from './footer'
import '../styles/transitions.css';
import Cookies from 'js-cookie';
import {jwtDecode} from 'jwt-decode';
import useIsMobile from '../utils/useIsMobile';

const JwtPayload = ({location }) => (<></>);


const poppins = Poppins({ subsets: ['latin'], weight: ['400', '700'] });
const exo = Exo({ subsets: ['latin'], weight: ['400', '700'] });

const Country = ({
  countryName, countryNameOptional,
  admissionInformation, internationalAdmissionInformation,
  universityInformation, internationalUniversityInformation,
  internationalUniversityFees = <>Information Will be available to download here about specific universities soon, page should redirect.</>,
  visaRequirementsRequirements, visaRequirementsFinancials, visaRequirementsInsurance,
  whyChooseCountry = [{}], advantages = ["PlaceHolder for Information here", "PlaceHolder 2"],
  disadvantages = ["PlaceHolder for Information here", "PlaceHolder 2"],
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
  const isMobile = useIsMobile();

  //& const [userLocation, setUserLocation] = useState(null); Might use this later

  const handleToggle = () => {
    setInternational(!isInternational);      
    setAnimation(false); // Set fade to true
    
    // Reset fade after the animation duration
    setTimeout(() => setAnimation(true), 600);  
  }

  useEffect(() => {
    setLoaded(true);

    // Decode the token stored in the cookies
    const token = Cookies.get('token');
    if (token) {
      try {
        const decodedToken = jwtDecode(token);
        // setUserLocation(decodedToken.location) Might use this later
        if (decodedToken.location == "International") {
          setInternational(true)
        } else if (decodedToken.location == "European") {
          setInternational(false)
        }
      } catch (error) {
        console.error('Failed to decode token', error);
      }
    }
  }, []);

  
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
            <button id="toggleButton" onClick={handleToggle} className="text-xs bg-yellow-400 px-2 py-1 rounded-md flex-shrink-0 whitespace-nowrap lg:-translate-y-8">{isInternational ? "Switch to European" : "Switch to International"}</button>
          </div>
        <hr id="line" />
        <h2 className={`${poppins.className}`} id="subtitleLeft">{countryNameOptional} <span id="gradientSub">ADMISSION</span></h2>

        <p className={`${exo.className}`} id="infoBody">{isInternational ? internationalAdmissionInformation : admissionInformation}</p>
        <h2 className={`${poppins.className}`} id="subtitleLeft">{countryNameOptional} <span id="gradientSub">UNIVERSITIES</span></h2>
        <p className={`${exo.className}`} id="infoBody">{isInternational ? internationalUniversityInformation : universityInformation}</p>
        <h2 className={`${poppins.className}`} id="subtitleLeft">{isInternational ? <>{countryNameOptional} <span id="gradientGold">TUITIONS FEES</span></> : ""}</h2>
        <p className={`${exo.className}`} id="infoBody">{isInternational ? internationalUniversityFees : ""}</p>
        <h2 className={`${exo.className}`} id="subtitleLeft">{isInternational ? (<>{countryNameOptional} {<span id="gradientSubSub">STUDENT PERMIT</span>}</>) : ""}</h2>
        <ul className={`${exo.className}`} id="infoBody">{isInternational ? (visaRequirements.map((item, index) => (
          <li key={index}>
            <span className={`${exo.className}`} id="subSubTitleLeft">PERMIT <span id="gradientSubSub"><strong>{item.title}</strong></span></span>
            <small className={`${exo.className}`} id="infoBody">{item.description}</small>
          </li>
        ))) : ""}</ul>
        <h2 className={`${poppins.className}`} id="subtitleLeft">{whyChooseCountry[0].title}</h2>
        <h2 className={`${exo.className}`} id="infoBody">{whyChooseCountry[0].description}</h2>

        {/* Advantage & Disadvantage Section */}
       
        {/* This only shows when on PC for now.  */}
        {!isMobile && (
          <div className="flex justify-around w-full">
            <div className="w-1/2 bg-opacity-60">
              <h3 className={`${poppins.className}`} style={{ color: 'lightgreen' }} id="subtitleCenter">ADVANTAGES</h3>
              <ul id="infoCenter">
                {advantages.map((advantage, index) => (
                  <li className={`${exo.className}`} key={index}>{advantage}</li>
                ))}
              </ul>
            </div>

            {/* Vertical Line */}
            <div className="vertical-line-container">
              <hr className="vertical-line" />
            </div>

            <div className="w-1/2 bg-opacity-60">
              <h3 className={`${poppins.className}`} style={{ color: 'red' }} id="subtitleCenter">DISADVANTAGES</h3>
              <ul id="infoCenter">
                {disadvantages.map((disadvantage, index) => (
                  <li className={`${exo.className}`} key={index}>{disadvantage}</li>
                ))}
              </ul>
            </div>
          </div>
        )}


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
      <Footer showAIwarning={true}  footerInformation={footerInformation}></Footer>
    </main>
  );
}

export default Country;
