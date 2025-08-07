"use client";
import React from 'react';
import { Poppins } from 'next/font/google';
import '../styles/countrypage.css';
import '../styles/gradientButtonStyles.css';
import Footer from '../components/footer';
import '../styles/support.css';
import { ArrowLeft } from "lucide-react";
import useIsMobile from '../utils/useIsMobile';

const poppins = Poppins({ subsets: ['latin'], weight: ['400', '700'] });

const Support = ({ 
  footerInformation = string, 
  supportTitle = string, 
  supportDescription = string
}) => {

  const isMobile = useIsMobile();

  return (
    <main className={`${poppins.className} flex flex-col min-h-screen`}>
      <div className="flex-grow flex flex-col items-center justify-center bg-gradient-to-r from-black to-gray-900">
        <button id="returnButtonHeader" onClick={() => window.history.back()} aria-label="Go back">
          <ArrowLeft size={20} />
        </button>
        <div id="container">
          <h1 className='text-[20px] sm:text-[20px] lg:text-[40px]' id="title">{supportTitle}</h1>
          <p id="infoBodySS">{supportDescription}</p>
        </div>
      </div>
      <Footer footerInformation={isMobile ? "EUI Support to answer your questions" : footerInformation} />
    </main>
  );
};

export default Support;
