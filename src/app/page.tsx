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
import useIsMobile from './utils/useIsMobile';

const poppins = Poppins({ subsets: ['latin'], weight: ['400', '700'] });
const returnTextCredit = <>❤️Github <a id="Hyperlink" href="https://github.com/FaisalAbusharar/europe-uni-info">Open Source</a></>

const Home = () => {
  const [loaded, setLoaded] = useState(false);
  const isMobile = useIsMobile();

 

  useEffect(() => {
    setLoaded(true);
  }, []);

  const hoverButtonColor = 'linear-gradient(to right, rgb(3, 217, 255), rgb(0, 20, 255))'
  const hoverButtonColorBeyond = 'linear-gradient(to right, rgb(255, 3, 3), rgb(134, 0, 0))'
  const hoverButtonColorSupport = 'linear-gradient(to right, rgb(255, 196, 3), rgb(134, 76, 0))'
  const footerInformation = isMobile
  ? 'All the key info to study in Europe'
  : 'The website provides information you need to be able to study in Europe, from costs to admissions and scholarships';


  return (
    <main id='mainContainer' className={`${poppins.className} flex flex-col min-h-screen overflow-x-hidden ${loaded ? 'fade-in' : ''}`}>
      <BackgroundAnim objectColor={[0, 225, 250]} className="absolute inset-0 z-0">
        <div className="flex-grow flex flex-col items-center justify-center px-4 sm:px-8">
          <div className="text-center mb-auto mt-8 w-full max-w-[95vw] mx-auto">
            <div id="title-container">
              <Link href='/user'>
                <button id={isMobile ? 'profile-button-mobile' :'profile-button'}>
                  <Image 
                    src="/profile.svg" 
                    alt="Profile" 
                    width={40} 
                    height={40}
                    className="profile-image" 
                  />
                </button>
              </Link>

            <h1 id="Title" 
            className="text-custom-gradient text-4xl sm:text-5xl lg:text-[75px] text-center px-4 leading-tight translate-x-[-60px] sm:translate-x-[-50px] lg:translate-x-[-70px]"
            >EUROPEAN UNIVERSITIES
            </h1>

            </div>
            <h2 id="Subtitle" 
            className="text-[14px] sm:text-[12px] lg:text-[40px] text-center font-extrabold px-4 lg:mr-[70px]">
              Find Your <p id="gradientSubSub">Dream European University</p></h2>

          </div>

          <div className="flex-grow flex flex-col w-full items-center" id="buttonContainer">
            <div className="flex flex-wrap justify-center gap-4 w-full px-2 mb-8">
              <Link href="/pages/countries">
                <StyledButton isDisabled={false} backgroundHoverButtonColor={hoverButtonColor}><p id="gradientButtonText">Countries</p></StyledButton>
              </Link>
              {/* <Link href="/pages/visapath"> */}
              <StyledButton isDisabled={true} backgroundHoverButtonColor={hoverButtonColor}><p id="gradientButtonText">Permit Path</p></StyledButton>
              {/* </Link> */}

              <Link href="/pages/finance">
              <StyledButton isDisabled={false} backgroundHoverButtonColor={hoverButtonColor}><p id="gradientButtonText">Finanicals</p></StyledButton>
              </Link>

              <Link href="/pages/admission">
                <StyledButton isDisabled={false} backgroundHoverButtonColor={hoverButtonColor}><p id="gradientButtonText">Admissions</p></StyledButton>
              </Link>

              {/* <Link href="/pages/scholarship"> */}
              <StyledButton isDisabled={true} backgroundHoverButtonColor={hoverButtonColor}><p id="gradientButtonText">Scholarships</p></StyledButton>
              {/* </Link> */}

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