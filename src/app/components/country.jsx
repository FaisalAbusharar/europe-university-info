"use client";

import {Poppins } from 'next/font/google';
import Link from 'next/link';
import React, { useState, useEffect } from 'react';
import BackgroundAnim from '../animation/backgroundAnimationFirst';

const poppins = Poppins({ subsets: ['latin'], weight: ['400', '700'] })

const Country = ({countryName, countryNameOptional,
    admissionInformation,
    internationalAdmissionInformation,
    universityInformation,
    internationalUniversityInformation,
    internationalUniversityFees = ' Information Will be avaliable to download here about specific universities soon, page should redirect.',
    visaRequirementsRequirements,
    visaRequirementsFinancials,
    visaRequirementsInsurance,
    whyChooseCountry = [{}],
    advantages =[],
    disadvantages = [],
    footerInformation,
    titleColor1, titleColor2,
    optionalInformation= [{}],   })=> {
    const titleStyle = {    
        background: `linear-gradient(to bottom, ${titleColor1}, ${titleColor2})`,
        WebkitBackgroundClip: 'text',
        WebkitTextFillColor: 'transparent'
    };


    const [isInternational, setInternational] = useState(false);

    const handleToggle = () => {
        setInternational(!isInternational);
    }

    const [loaded, setLoaded] = useState(false);
    useEffect(() => {
        setLoaded(true);
    }, []);

    const visaRequirements = [
        { title: "General Requirements", description: visaRequirementsRequirements },
        { title: "Financial Requirements", description: visaRequirementsFinancials },
        { title: "Insurance Requirement", description: visaRequirementsInsurance }
      ];
      
      

      return (
        <main className={`${poppins.className} flex flex-col min-h-screen bg-gradient-to-r from-black to-gray-900 ${loaded ? 'slide-in' : ''}`}>
            <BackgroundAnim className="absolute inset-0 z-0" />
            <div className="relative z-10 flex-grow flex-col items-center justify-center">
                <h1 id="titleCountry" style={titleStyle}>{countryName}</h1>
                <button id="toggleButton" onClick={handleToggle}>
                    {isInternational ? "Switch to European" : "Switch to International"}
                </button>
                <hr id="line" />
                <h2 id="subtitleLeft">{countryNameOptional} <p id="gradientSub">ADMISSION</p></h2>
                <p id="infoBody">{isInternational ? internationalAdmissionInformation : admissionInformation}</p>
                <h2 id="subtitleLeft">{countryNameOptional} <p id="gradientSub">UNIVERSITIES</p></h2>
                <p id="infoBody">{isInternational ? internationalUniversityInformation : universityInformation}</p>
                <h2 id="subtitleLeft">{isInternational ? <>{countryNameOptional} <p id="gradientGold">TUITIONS FEES</p></> : ""}</h2>
                <p id="infoBody">{isInternational ? internationalUniversityFees : ""}</p>
                <h2 id="subtitleLeft">{isInternational ? (<>FINNISH {<p id="gradientSubSub">STUDENT VISA</p>}</>) : ""}</h2>
                <ul id="infoBody">{isInternational ? (visaRequirements.map((item, index) => (
                    <li key={index}>
                        <p id="subSubTitleLeft">VISA <span id="gradientSubSub"><strong>{item.title}</strong></span></p>
                        <small id="infoBody">{item.description}</small>
                    </li>
                ))) : ""}</ul>
                <h2 id="subtitleLeft">{whyChooseCountry[0].title}</h2>
                <h2 id="infoBody">{whyChooseCountry[0].description}</h2>

                {/* Advantage & Disadvantage Section */}
                <div className="flex justify-around w-full">
                    <div className="w-1/2 bg-opacity-60">
                        <h3 style={{ color: 'lightgreen' }} id="subtitleCenter">ADVANTAGES</h3>
                        <ul id="infoCenter">
                            {advantages.map((advantage, index) => (
                                <li key={index}>{advantage}</li>
                            ))}
                        </ul>
                    </div>
                    <div className="w-1/2 bg-opacity-60">
                        <h3 style={{ color: 'red' }} id="subtitleCenter">DISADVANTAGES</h3>
                        <ul id="infoCenter">
                            {disadvantages.map((disadvantage, index) => (
                                <li key={index}>{disadvantage}</li>
                            ))}
                        </ul>
                    </div>
                </div>

                
                    <h2 id="subtitleLeft">{isInternational ? (<>{optionalInformation[0].title}</>) : ""}</h2>
                    <p id="infoBody">{isInternational ? optionalInformation[0].description : ""}</p>
        
            </div>
            <div id="buffer"></div>
            <div className="footerContainer">
                <p id="footer">{footerInformation}
                    <br />Studying in Europe is always a good idea! But you have to know if you are able to do it!</p>
                <div className="credit-container">
                    <p id="leftCredit">Developed by Faisal Abusharar</p>
                    <Link href="/countries">
                        <button id="footerReturnButton" className="bg-custom-gradient text-white font-bold py-2 px-4 rounded">Go back</button>
                    </Link>
                </div>
            </div>
        </main>
    );
}

export default Country;