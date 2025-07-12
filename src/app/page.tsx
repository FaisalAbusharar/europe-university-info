"use client";
import { Poppins } from 'next/font/google';
import Link from 'next/link';
import './styles/animations.css';
import "./styles/support.css"
import "./styles/beyondAltStyles.css"
import { useState, useEffect } from 'react';
import Footer from './components/footer';
import StyledButton from './components/buttonStyles';
import BackgroundAnim from './animation/backgroundAnimationFirst';
import Image from 'next/image'

const poppins = Poppins({ subsets: ['latin'], weight: ['400', '700'] });
const footerInformation = 'The website provides information you need to be able to study in Europe, from costs to admissions and scholarships'
const returnTextCredit = <>❤️Github <a id="Hyperlink" href="https://github.com/FaisalAbusharar/europe-uni-info">Open Source</a></>

const Home = () => {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    setLoaded(true);
  }, []);

  const hoverButtonColor = 'linear-gradient(to right, rgb(3, 217, 255), rgb(0, 20, 255))'
  const hoverButtonColorBeyond = 'linear-gradient(to right, rgb(255, 3, 3), rgb(134, 0, 0))'
  const hoverButtonColorSupport = 'linear-gradient(to right, rgb(255, 196, 3), rgb(134, 76, 0))'

  return (
    <main id='mainContainer' className={`${poppins.className} flex flex-col min-h-screen ${loaded ? 'fade-in' : ''}`}>
      <BackgroundAnim objectColor={[0, 225, 250]} className="absolute inset-0 z-0">
        <div className="flex-grow flex flex-col items-center justify-center px-4 sm:px-8">
          <div className="text-center mb-auto mt-8">
            <div id="title-container">
              <Link href='/user'>
                <button id='profile-button'>
                  <Image 
                    src="/profile.svg" 
                    alt="Profile" 
                    width={40} 
                    height={40} 
                    className="profile-image" 
                  />
                </button>
              </Link>
              <h1 id="Title" className="text-custom-gradient text-3xl sm:text-6xl break-words text-center px-2">EUROPEAN UNIVERSITIES</h1>
            </div>
            <h2 id="Subtitle" className="text-lg sm:text-2xl">
              Find Your <p id="gradientSubSub">Dream European University</p>
            </h2>
          </div>

          <div className="flex-grow flex flex-col w-full items-center" id="buttonContainer">
            <div className="flex flex-wrap justify-center gap-4 mb-8 flex flex-wrap justify-center gap-4 w-full px-2">
              <Link href="/pages/countries">
                <StyledButton isDisabled={false} backgroundHoverButtonColor={hoverButtonColor}><p id="gradientButtonText">Countries</p></StyledButton>
              </Link>
              <Link href="/pages/visapath">
                <StyledButton isDisabled={false} backgroundHoverButtonColor={hoverButtonColor}><p id="gradientButtonText">Permit Path</p></StyledButton>
              </Link>
              <StyledButton isDisabled={true} backgroundHoverButtonColor={hoverButtonColor}><p id="gradientButtonText">Finanicals</p></StyledButton>
              <Link href="/pages/admission">
                <StyledButton isDisabled={false} backgroundHoverButtonColor={hoverButtonColor}><p id="gradientButtonText">Admissions</p></StyledButton>
              </Link>
              <StyledButton isDisabled={true} backgroundHoverButtonColor={hoverButtonColor}><p id="gradientButtonText">Scholarships</p></StyledButton>
              <Link href='/pages/beyond/countries'>
                <StyledButton isDisabled={false} backgroundHoverButtonColor={hoverButtonColorBeyond}><p id="gradientButtonTextALT">Beyond Europe</p></StyledButton>
              </Link>
              <Link href='/pages/support'>
                <StyledButton isDisabled={false} backgroundHoverButtonColor={hoverButtonColorSupport}><p id="gradientButtonTextSUPPORT">Support</p></StyledButton>
              </Link>
            </div>
          </div>
        </div>
        <Footer returnText={returnTextCredit} returnButton={false} footerInformation={footerInformation}></Footer>
      </BackgroundAnim>
    </main>
  );
};

export default Home;
