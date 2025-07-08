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
        <div id="containerBox">
            <h1 id="subtitle">Frequently Asked Questions</h1>
              <ul>
                <li id="supportlist">
                  <a href="/pages/support/AI" id="infoBodySS">HAS AI BEEN INVOLVED IN THE INFORMATION PROVIDED?</a>
                </li>
                <li id="supportlist">
                   <a href="/pages/support/trust" id="infoBodySS">HOW CAN I TRUST THE INFORMATION PROVIDED TO ME?</a>
                </li>
              </ul>
        </div>
      </div>
      <Footer returnPage='' footerInformation={footerInformation}></Footer>
    </main>
  );
}



export default AI;
