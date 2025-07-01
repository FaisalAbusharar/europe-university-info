import React from 'react';
import { Poppins } from 'next/font/google';
import '../styles/countrypage.css';
import '../styles/support.css';
import Footer from "./footer"

const poppins = Poppins({ subsets: ['latin'], weight: ['400', '700'] });

const WipScreen = ({ footerInformation, returnPage }) => {
  return (
    <main className={`${poppins.className} flex flex-col min-h-screen`}>
      <div className="flex-grow flex flex-col items-center justify-center bg-gradient-to-r from-black to-gray-900">
        <div id="container">
          <h1 id="title">WORK IN PROGRESS...</h1>
        </div>
      </div>
      <Footer showAIwarning={false} returnPage={returnPage} footerInformation={footerInformation}></Footer>
    </main>
  );
};

export default WipScreen;
