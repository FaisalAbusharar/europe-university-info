"use client";
import { Poppins } from 'next/font/google';
import Link from 'next/link';
import './styles/animations.css';
import { useState, useEffect } from 'react';
import Footer from './components/footer';
import StyledButton from './components/buttonStyles';

const poppins = Poppins({ subsets: ['latin'], weight: ['400', '700'] });
const footerInformation = 'The website provides information you need to be able to study in Europe, from costs to admissions and scholarships'
const returnTextCredit = <>❤️Github <a id="Hyperlink" href="https://github.com/FaisalAbusharar/europe-uni-info">Open Source</a></>
const Home = () => {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    setLoaded(true);
  }, []);
  
  return (
    <main id="background" className={`${poppins.className} flex flex-col min-h-screen ${loaded ? 'fade-in' : ''}`}>
      <div className="flex-grow flex flex-col items-center justify-center">
        <div className="text-center mb-auto mt-8">
          <h1 id="Title" className="text-custom-gradient">EUROPEAN UNIVERSITIES</h1>
          <h2 id="Subtitle">
            Find Your <p id="gradientSub">Dream European University</p>
          </h2>
        </div>
        <div className="flex-grow flex flex-col" id="buttonContainer">
          <div className="flex space-x-4 mb-8">
            <Link href="/countries">
              <StyledButton><p id="gradientButtonText">Countries</p></StyledButton>
            </Link>
            <StyledButton><p id="gradientButtonText">Finanicals</p></StyledButton>
            <StyledButton><p id="gradientButtonText">Admissions</p></StyledButton>
            <StyledButton><p id="gradientButtonText">Scholarships</p></StyledButton>
          </div>
        </div>
      </div>
      <Footer returnText={returnTextCredit} returnButton={false} footerInformation={footerInformation}></Footer>
    </main>
  );
};



export default Home;
