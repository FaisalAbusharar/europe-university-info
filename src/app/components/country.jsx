"use client";

import {Poppins } from 'next/font/google';
import Link from 'next/link';
import React, { useState } from 'react';

const poppins = Poppins({ subsets: ['latin'], weight: ['400', '700'] })

const Country = ({countryName, countryNameOptional,
    admissionInformation,
    internationalAdmissionInformation,
    universityInformation,
    internationalUniversityInformation,
    visaRequirementsRequirements,
    visaRequirementsFinancials,
    visaRequirementsInsurance,
    footerInformation,
    titleColor1, titleColor2,
    optionalInformationTitle=<></>,
    optionalInformation= <></>,   })=> {
    const titleStyle = {    
        background: `linear-gradient(to bottom, ${titleColor1}, ${titleColor2})`,
        WebkitBackgroundClip: 'text',
        WebkitTextFillColor: 'transparent'
    };


    const [isInternational, setInternational] = useState(false);

    const handleToggle = () => {
        setInternational(!isInternational);
    }

    const visaRequirements = [
        { title: "General Requirements", description: visaRequirementsRequirements },
        { title: "Financial Requirements", description: visaRequirementsFinancials },
        { title: "Insurance Requirement", description: visaRequirementsInsurance }
      ];
      
   
    return (
        
        <main className={`${poppins.className} flex flex-col min-h-screen bg-gradient-to-r from-black to-gray-900`}>
            <div  className="flex-grow flex-col items-center justify-center">
                <h1 id="titleCountry" style={titleStyle}>{countryName}</h1>
                <button id="toggleButton" onClick={handleToggle}>
                    {isInternational ? "European" : "International"}
                </button>
                <hr id="line"></hr>
                <h2 id="subtitleLeft">{countryNameOptional} <p id="gradientSub">ADMISSION</p></h2>
                <p id="infoBody">{isInternational ? internationalAdmissionInformation : admissionInformation}</p>
                <h2 id="subtitleLeft">{countryNameOptional} <p id="gradientSub">UNIVERSITIES</p>    </h2>
                <p id="infoBody">{isInternational ? internationalUniversityInformation : universityInformation}</p>
                <h2 id="subtitleLeft">{isInternational ? (<>FINNISH {<p id="gradientSubSub">STUDENT VISA</p>}</>) : ("")}</h2>
                <ul id="infoBody">{isInternational ? (visaRequirements.map((item, index) => (<><li key={index}><p id="subSubTitleLeft">VISA <span id="gradientSubSub"><strong>{item.title}</strong></span></p><small id="infoBody">{item.description}</small></li></>))) : ("")}</ul>
                <h2 id="subtitleLeft">{isInternational ? (<>{optionalInformationTitle}</>) : ("")}</h2>
                <p id="infoBody">{isInternational ? optionalInformation : ""}</p>
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
    )
}

export default Country;