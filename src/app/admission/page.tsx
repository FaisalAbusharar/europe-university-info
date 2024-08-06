"use client"
import { Poppins } from 'next/font/google';
import Link from 'next/link';
import '../styles/countrypage.css'
import '../styles/gradientButtonStyles.css'
import Footer from '../components/footer';

const poppins = Poppins({ subsets: ['latin'], weight: ['400', '700'] });
const footerInformation = 'Applying to Universities aboard can be a hassle, but we\'re here to help.'

const Admission = () => {
  return (
    <main className={`${poppins.className} flex flex-col min-h-screen`}>
      <div className="flex-grow flex flex-col items-center justify-center bg-gradient-to-r from-black to-gray-900">
        <h1 id="titlePageCountry">ADMISSION</h1>
        <h2 id="Subtitle">How to apply to your <p id="gradientSub">European Country</p></h2>
          <div id="countryContainer" className="flex space-x-4 mb-8">
            <Link href="/countries/germany">
            <button className='button' id="gradientButtonTextGermany">Germany</button>
            </Link>
            <Link href="/admission/finland">
            <button className='button' id="gradientButtonTextFinland">Finland</button>
            </Link>
            <Link href="/countries/sweden">
            <button className='button' id="gradientButtonTextSweden">Sweden</button>
            </Link>
            <Link href="/countries/unitedkingdom">
            <button className='button' id="gradientButtonTextUK">United Kingdom</button>
            </Link>
            <Link href="/countries/norway">
            <button className='button' id="gradientButtonTextNorway">Norway</button>
            </Link>
          </div>
      </div>
      <Footer returnPage='' footerInformation={footerInformation}></Footer>
    </main>
  );
}



export default Admission;
