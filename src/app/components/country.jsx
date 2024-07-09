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
    internationalVisaInformation,
    footerInformation,
    titleColor1, titleColor2,
    OptionalInformationTitle=<></>,
    OptionalInformation= <></>,   })=> {
    const titleStyle = {    
        background: `linear-gradient(to bottom, ${titleColor1}, ${titleColor2})`,
        WebkitBackgroundClip: 'text',
        WebkitTextFillColor: 'transparent'
    };

    const marginStyle = {
        marginbottom: '10px'
    }

    const [isInternational, setInternational] = useState(false);

    const handleToggle = () => {
        setInternational(!isInternational);
    }

   
    return (
        
        <main className={`${poppins.className} flex flex-col min-h-screen bg-gradient-to-r from-black to-gray-900`}>
            <div  className="flex-grow flex-col items-center justify-center">
                <h1 id="titleCountry" style={titleStyle}>{countryName}</h1>
                <button id="toggle-button" onClick={handleToggle}>
                    {isInternational ? "European" : "International"}
                </button>
                <hr id="line"></hr>
                <h2 id="Subtitle-Left">{countryNameOptional} <p id="gradient-sub">ADMISSION</p></h2>
                <p id="InfoBody">{isInternational ? internationalAdmissionInformation : admissionInformation}</p>
                <h2 id="Subtitle-Left">{countryNameOptional} <p id="gradient-sub">UNIVERSITIES</p>    </h2>
                <p id="InfoBody">{isInternational ? internationalUniversityInformation : universityInformation}</p>
                <h2 id="Subtitle-Left">{isInternational ? (<>FINNISH {<p id="gradient-sub">STUDENT VISA</p>}</>) : ("")}</h2>
                <p id="InfoBody">{isInternational ? internationalVisaInformation : ("")}</p>
                <h2 id="Subtitle-Left">{isInternational ? (<>{OptionalInformationTitle}</>) : ("")}</h2>
                <p id="InfoBody">{isInternational ? OptionalInformation : ""}</p>
            </div>
            <div id="buffer"></div>
            <div className="footer-container">
                <p id="footer">{footerInformation}
                <br />Studying in Europe is always a good idea! But you have to know if you are able to do it!</p>
            <div className="credit-container">
                <p id="left-credit">Developed by Faisal Abusharar</p>
            <Link href="/countries">
              <button id="footer-return-button" className="bg-custom-gradient text-white font-bold py-2 px-4 rounded">Go back</button>
            </Link>
        </div>
      </div>
        </main>
    )
}

export default Country;