"use client"
import { Poppins } from 'next/font/google';
import Link from 'next/link';
import '../../../styles/countrypage.css'
import '../../../styles/gradientButtonStyles.css'
import Footer from '../../../components/footer';
import { ArrowLeft } from 'lucide-react';
import "../../../styles/beyondAltStyles.css"
import useIsMobile from '@/app/utils/useIsMobile';


const poppins = Poppins({ subsets: ['latin'], weight: ['400', '700'] });

const CountriesBeyond = () => {


  const isMobile = useIsMobile();
  const footerInformation = isMobile ? 'EUI has expanded to include more regions!' : 'Originally focused on European universities, EUI is expanding to include other popular study destinations like the USA and Australia for broader comparison and support'


  return (
    <main className={`${poppins.className} flex flex-col min-h-screen`}>
      <div className="flex-grow flex flex-col items-center justify-center bg-gradient-to-l from-black to-gray-900">
      
      <button id="returnButtonHeader" onClick={() => window.history.back()} aria-label="Go back"><ArrowLeft size={20} /></button>
        <h1 className='text-custom-gradient text-3xl sm:text-5xl lg:text-[75px] text-center px-4 leading-tight' id="titlePageCountryALT">COUNTRIES BEYOND</h1>
        <h2 className='text-[18px] sm:text-[12px] lg:text-[40px] text-center font-extrabold px-4' id="Subtitle">Find your <p id="gradientSub">Country</p></h2>
          <div id="countryContainer" className="flex flex-wrap justify-center gap-4 w-full px-2 mb-8">
            <Link href="/pages/beyond/countries/USA">
            <button className='button' id="gradientButtonTextUSA">UNITED STATES OF AMERICA</button>
            </Link>
            <Link href="/pages/beyond/countries/Australia">
            <button className='button' id="gradientButtonTextAUSTRALIA">AUSTRALIA</button>
            </Link>
          </div>
      </div>
      <Footer footerTheme='linear-gradient(to right,rgb(255, 0, 0),rgb(109, 0, 0))' footerInformation={footerInformation}></Footer>
    </main>
  );
}



export default CountriesBeyond;
