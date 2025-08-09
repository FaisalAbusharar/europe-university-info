"use client"
import { Poppins } from 'next/font/google';
import Link from 'next/link';
import '../../styles/countrypage.css'
import '../../styles/gradientButtonStyles.css'
import Footer from '../../components/footer';
import { ArrowLeft } from 'lucide-react';
import useIsMobile from '@/app/utils/useIsMobile';

const poppins = Poppins({ subsets: ['latin'], weight: ['400', '700'] });

const Fiance = () => {

  const isMobile = useIsMobile();
  const footerInformation = isMobile ? 'The costs of studying aboard.' : 'Finances are a make it or break it for a lot of people, figure out all the information here!'


  return (
    <main className={`${poppins.className} flex flex-col min-h-screen`}>
      <div className="flex-grow flex flex-col items-center justify-center bg-gradient-to-r from-black to-gray-900">
        
        <button id="returnButtonHeader" onClick={() => window.history.back()} aria-label="Go back"><ArrowLeft size={20} /></button>
        <h1 className='text-custom-gradient text-5xl sm:text-5xl lg:text-[75px] text-center px-4 leading-tight' id="titlePageCountry">FINANCE</h1>
        <h2 className='text-[16px] sm:text-[10px] lg:text-[32px] text-center font-extrabold px-4' id="Subtitle">Figure out the costs for your <p id="gradientSub">European Country</p></h2>
          <div id="countryContainer" className="flex flex-wrap justify-center gap-4 w-full px-2 mb-8">
  <Link href="/pages/finance/germany">
    <button 
      className="button" 
      id="disabled-button"
      disabled
    >
      Germany
    </button>
  </Link>
  
  <Link href="/pages/finance/finland">
    <button className="button" id="gradientButtonTextFinland">Finland</button>
  </Link>
  
  <Link href="/pages/finance/sweden">
    <button 
      className="button" 
      id="disabled-button"
      disabled
    >
      Sweden
    </button>
  </Link>
  
  <Link href="/pages/finance/unitedkingdom">
    <button 
      className="button" 
      id="disabled-button" 
      disabled
    >
      United Kingdom
    </button>
  </Link>
  
  <Link href="/pages/finance/norway">
    <button 
      className="button" 
      id="disabled-button"
      disabled
    >
      Norway
    </button>
  </Link>
  
  <Link href="/pages/finance/austria">
    <button 
      className="button" 
      id="disabled-button"
      disabled
    >
      Austria
    </button>
  </Link>
</div>
      </div>
      <Footer footerInformation={footerInformation}></Footer>
    </main>
  );
}



export default Fiance;
