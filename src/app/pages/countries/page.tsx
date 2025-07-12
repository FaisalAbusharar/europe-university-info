"use client"
import { Poppins } from 'next/font/google';
import Link from 'next/link';
import '../../styles/countrypage.css'
import '../../styles/gradientButtonStyles.css'
import Footer from '../../components/footer';
import { ArrowLeft } from 'lucide-react';


const poppins = Poppins({ subsets: ['latin'], weight: ['400', '700'] });
const footerInformation = 'Figuring out where you want to study is pretty simple, see the costs, culture, enviorment, careers and decide!'

const Countries = () => {
  return (
    <main className={`${poppins.className} flex flex-col min-h-screen`}>
      <div className="flex-grow flex flex-col items-center justify-center bg-gradient-to-r from-black to-gray-900">
      
      <button id="returnButtonHeader" onClick={() => window.history.back()} aria-label="Go back"><ArrowLeft size={20} /></button>
        <h1 id="titlePageCountry">COUNTRIES</h1>
        <h2 id="Subtitle">Find your <p id="gradientSub">European Country</p></h2>
          <div id="countryContainer" className="flex space-x-4 mb-8">
            <Link href="/pages/countries/germany">
            <button className='button' id="gradientButtonTextGermany">Germany</button>
            </Link>
            <Link href="/pages/countries/finland">
            <button className='button' id="gradientButtonTextFinland">Finland</button>
            </Link>
            <Link href="/pages/countries/sweden">
            <button className='button' id="gradientButtonTextSweden">Sweden</button>
            </Link>
            <Link href="/pages/countries/unitedkingdom">
            <button className='button' id="gradientButtonTextUK">United Kingdom</button>
            </Link>
            <Link href="/pages/countries/norway">
            <button className='button' id="gradientButtonTextNorway">Norway</button>
            </Link>
            <Link href="/pages/countries/austria">
            <button className='button' id="gradientButtonTextAustria">Austria</button>
            </Link>
          </div>
      </div>
      <Footer footerInformation={footerInformation}></Footer>
    </main>
  );
}



export default Countries;
