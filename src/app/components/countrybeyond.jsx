"use client";

import { Poppins, Exo } from 'next/font/google';
import React, { useEffect, useState } from 'react';
import BackgroundAnim from '../animation/backgroundAnimationFirst';
import '../styles/animations.css';
import { ArrowLeft } from "lucide-react";
import Footer from './footer';
import '../styles/transitions.css';
import Link from "next/link";

const poppins = Poppins({ subsets: ['latin'], weight: ['400', '700'] });
const exo = Exo({ subsets: ['latin'], weight: ['400', '700'] });

const CountryBeyond = ({
  countryName, countryNameOptional,
  admissionInformation, universityInformation,
  universityFees = <>Information will be available to download here about specific universities soon. Page should redirect.</>,
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
        <Link href={'/pages/countries'}>
          <button id="returnButtonHeader">
            <ArrowLeft size={20} className="transition-transform duration-200 hover:scale-125" />
          </button>
        </Link>
        <h1 className={`${poppins.className}`} id="titleCountry" style={titleStyle}>{countryName}</h1>

        <hr id="line" />
        <h2 className={`${poppins.className}`} id="subtitleLeft">{countryNameOptional} <p id="gradientSub">ADMISSION</p></h2>
        <p className={`${exo.className}`} id="infoBody">{admissionInformation}</p>

        <h2 className={`${poppins.className}`} id="subtitleLeft">{countryNameOptional} <p id="gradientSub">UNIVERSITIES</p></h2>
        <p className={`${exo.className}`} id="infoBody">{universityInformation}</p>

        <h2 className={`${poppins.className}`} id="subtitleLeft">{countryNameOptional} <p id="gradientGold">TUITION FEES</p></h2>
        <p className={`${exo.className}`} id="infoBody">{universityFees}</p>

        <h2 className={`${exo.className}`} id="subtitleLeft">{countryNameOptional} <p id="gradientSubSub">STUDENT PERMIT</p></h2>
        <ul className={`${exo.className}`} id="infoBody">
          {visaRequirements.map((item, index) => (
            <li key={index}>
              <p className={`${exo.className}`} id="subSubTitleLeft">
                PERMIT <span id="gradientSubSub"><strong>{item.title}</strong></span>
              </p>
              <small className={`${exo.className}`} id="infoBody">{item.description}</small>
            </li>
          ))}
        </ul>

        <h2 className={`${poppins.className}`} id="subtitleLeft">{whyChooseCountry[0].title}</h2>
        <h2 className={`${exo.className}`} id="infoBody">{whyChooseCountry[0].description}</h2>

        <div className="flex justify-around w-full">
          <div className="w-1/2 bg-opacity-60">
            <h3 className={`${poppins.className}`} style={{ color: 'lightgreen' }} id="subtitleCenter">ADVANTAGES</h3>
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
            <h3 className={`${poppins.className}`} style={{ color: 'red' }} id="subtitleCenter">DISADVANTAGES</h3>
            <ul id="infoCenter">
              {disadvantages.map((disadvantage, index) => (
                <li className={`${exo.className}`} key={index}>{disadvantage}</li>
              ))}
            </ul>
          </div>
        </div>

        <ul className={`${exo.className}`} id="infoBody">
          {optionalInformation.map((item, index) => (
            <li key={index}>
              <p className={`${exo.className}`} id="subSubTitleLeft"><span><strong>{item.title}</strong></span></p>
              <small className={`${exo.className}`} id="infoBody">{item.description}</small>
            </li>
          ))}
        </ul>
      </div>

      <div id="buffer"></div>
      <Footer showAIwarning={true} returnPage="./pages/countries" footerInformation={footerInformation} />
    </main>
  );
};

export default CountryBeyond;
