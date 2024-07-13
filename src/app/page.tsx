"use client"
import {Poppins } from 'next/font/google';
import Link from 'next/link';
import './animation/animations.css'
import { useState,useEffect } from 'react';

const poppins = Poppins({ subsets: ['latin'], weight: ['400', '700'] });

const Home = () => {
  
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    setLoaded(true);
  }, []);
  
  return (
    <main className={`${poppins.className} flex flex-col min-h-screen ${loaded ? 'fade-in' : ''}`}>
      <div className="flex-grow flex flex-col items-center justify-center bg-gradient-to-r from-black to-gray-900 ">
        <div className="text-center mb-auto mt-8">
          <h1 id="Title" className='text-custom-gradient'>EUROPEAN UNIVERSITIES</h1>
          <h2 id="Subtitle">Find Your <p id="gradientSub">Dream European University</p></h2>
        </div>
        <div className="flex-grow flex flex-col" id="buttonContainer">
          <div className="flex space-x-4 mb-8">
            <Link href="/countries">
              <button id="Button" className="bg-custom-gradient text-white font-bold py-2 px-4 rounded">Countries</button>
            </Link>
            <button id="Button" className="bg-custom-gradient text-white font-bold py-2 px-4 rounded">Financials</button>
            <button id="Button" className="bg-custom-gradient text-white font-bold py-2 px-4 rounded">Admissions</button>
            <button id="Button" className="bg-custom-gradient text-white font-bold py-2 px-4 rounded">Scholarships</button>
          </div>
        </div>
      </div>
      <div className="footerContainer">
        <p id="footer">This website provides information you need to be able to study in Europe, from costs to admissions and scholarships!
          <br/>Studying in Europe is always a good idea! But you have to know if you are able to do it!</p>
        <div className="credit-container">
          <p id="leftCredit">Developed by Faisal Abusharar</p>
          <p id="rightCredit">❤️Github <a id="Hyperlink" href="https://github.com/FaisalAbusharar/europe-uni-info">Open Source</a></p>
        </div>
      </div>
    </main>
  );
}

export default Home;