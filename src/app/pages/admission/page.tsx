"use client"
import { Poppins } from 'next/font/google';
import Link from 'next/link';
import '../../styles/countrypage.css'
import '../../styles/gradientButtonStyles.css'
import Footer from '../../components/footer';
import { ArrowLeft } from 'lucide-react';
import useIsMobile from '@/app/utils/useIsMobile';

const poppins = Poppins({ subsets: ['latin'], weight: ['400', '700'] });

const Admission = () => {

  const isMobile = useIsMobile();
  const footerInformation = isMobile ? 'Figure out the admission processes here!' : 'Applying to Universities aboard can be a hassle, but we\'re here to help.'


  return (
    <main className={`${poppins.className} flex flex-col min-h-screen`}>
      <div className="flex-grow flex flex-col items-center justify-center bg-gradient-to-r from-black to-gray-900">
        
        <button id="returnButtonHeader" onClick={() => window.history.back()} aria-label="Go back"><ArrowLeft size={20} /></button>
        <h1 className='text-custom-gradient text-5xl sm:text-5xl lg:text-[75px] text-center px-4 leading-tight' id="titlePageCountry">ADMISSION</h1>
        <h2 className='text-[16px] sm:text-[10px] lg:text-[32px] text-center font-extrabold px-4' id="Subtitle">How to apply to your <p id="gradientSub">European Country</p></h2>
          <div id="countryContainer" className="flex flex-wrap justify-center gap-4 w-full px-2 mb-8">
            <Link href="/pages/admission/germany">
            <button className='button' id="gradientButtonTextGermany">Germany</button>
            </Link>
            <Link href="/pages/admission/finland">
            <button className='button' id="gradientButtonTextFinland">Finland</button>
            </Link>
            <Link href="/pages/admission/sweden">
            <button className='button' id="gradientButtonTextSweden">Sweden</button>
            </Link>
            <Link href="/pages/admission/unitedkingdom">
            <button className='button' id="gradientButtonTextUK">United Kingdom</button>
            </Link>
            <Link href="/pages/admission/norway">
            <button className='button' id="gradientButtonTextNorway">Norway</button>
            </Link>
             <Link href="/pages/admission/austria">
            <button className='button' id="gradientButtonTextAustria">Austria</button>
            </Link>
          </div>
          <h1> <span className='flex flex-wrap justify-center' id='fadedText'>This section is for students outside of said country.</span></h1>
      </div>
      <Footer footerInformation={footerInformation}></Footer>
    </main>
  );
}



export default Admission;
