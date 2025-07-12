"use client"
import { Poppins } from 'next/font/google';
import Link from 'next/link';
import '../../../styles/countrypage.css'
import '../../../styles/gradientButtonStyles.css'
import Footer from '../../../components/footer';
import { ArrowLeft } from 'lucide-react';
import "../../../styles/beyondAltStyles.css"


const poppins = Poppins({ subsets: ['latin'], weight: ['400', '700'] });
const footerInformation = 'Originally focused on European universities, EUI is expanding to include other popular study destinations like the USA and Australia for broader comparison and support'

const CountriesBeyond = () => {
  return (
    <main className={`${poppins.className} flex flex-col min-h-screen`}>
      <div className="flex-grow flex flex-col items-center justify-center bg-gradient-to-l from-black to-gray-900">
      
      <button id="returnButtonHeader" onClick={() => window.history.back()} aria-label="Go back"><ArrowLeft size={20} /></button>
        <h1 id="titlePageCountryALT">COUNTRIES BEYOND</h1>
        <h2 id="Subtitle">Find your <p id="gradientSub">Country</p></h2>
          <div id="countryContainer" className="flex space-x-4 mb-8">
            <Link href="/pages/beyond/countries/USA">
            <button className='button' id="gradientButtonTextUSA">UNITED STATES OF AMERICA</button>
            </Link>
            <Link href="/pages/beyond/countries/Australia">
            <button className='button' id="gradientButtonTextAUSTRALIA">AUSTRALIA</button>
            </Link>
          </div>
      </div>
      <Footer footerTheme='linear-gradient(to right,rgb(255, 0, 0),rgb(109, 0, 0))' returnPage='' footerInformation={footerInformation}></Footer>
    </main>
  );
}



export default CountriesBeyond;
