"use client"
import { Poppins } from 'next/font/google';
import '../../styles/countrypage.css'
import '../../styles/gradientButtonStyles.css'
import Footer from '../../components/footer';
import '../../styles/support.css';
import { ArrowLeft } from "lucide-react";


const poppins = Poppins({ subsets: ['latin'], weight: ['400', '700'] });
const footerInformation = 'The EUI Support page to answer all your questions.'

const AI = () => {
  return (
    <main className={`${poppins.className} flex flex-col min-h-screen`}>
      <div className="flex-grow flex flex-col items-center justify-center bg-gradient-to-r from-black to-gray-900">
      <button id="returnButtonHeader" onClick={() => window.history.back()} aria-label="Go back"><ArrowLeft size={20} /></button>
        <div id="container">
            <h1 id="title">SUPPORT PAGE</h1>
            <p id="infoBodySS">Links & embeds to support pages will be created soon. <a href="/pages/support/AI" id="hyperlink">AI SUPPORT</a></p>
        </div>
      </div>
      <Footer returnPage='' footerInformation={footerInformation}></Footer>
    </main>
  );
}



export default AI;
