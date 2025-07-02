"use client"
import { Poppins } from 'next/font/google';
import Link from 'next/link';
import '../../styles/countrypage.css'
import '../../styles/gradientButtonStyles.css'
import Footer from '../../components/footer';
import { ArrowLeft } from 'lucide-react';

const poppins = Poppins({ subsets: ['latin'], weight: ['400', '700'] });
const footerInformation = 'Applying to Universities aboard can be a hassle, but we\'re here to help.'

const Admission = () => {
  return (
    <main className={`${poppins.className} flex flex-col min-h-screen`}>
      <div className="flex-grow flex flex-col items-center justify-center bg-gradient-to-r from-black to-gray-900">
        
         {<Link href={'/'}><button id="returnButtonHeader"><ArrowLeft className="transition-transform duration-200 hover:scale-125" size={20}/></button></Link>}
        <h1 id="titlePageCountry">ADMISSION</h1>
        <h2 id="Subtitle">How to apply to your <p id="gradientSub">European Country</p></h2>
          <div id="countryContainer" className="flex space-x-4 mb-8">
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
          <h1> <span id='fadedText'>This section is for students outside of said country.</span></h1>
      </div>
      <Footer returnPage='' footerInformation={footerInformation}></Footer>
    </main>
  );
}



export default Admission;
