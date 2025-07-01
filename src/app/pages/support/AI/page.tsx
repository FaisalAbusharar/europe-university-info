"use client"
import { Poppins } from 'next/font/google';
import Link from 'next/link';
import '../../../styles/countrypage.css'
import '../../../styles/gradientButtonStyles.css'
import Footer from '../../../components/footer';
import '../../../styles/support.css';
import { ArrowLeft } from "lucide-react";


const poppins = Poppins({ subsets: ['latin'], weight: ['400', '700'] });
const footerInformation = 'Figuring out where you want to study is pretty simple, see the costs, culture, enviorment, careers and decide!'

const AI = () => {
  return (
    <main className={`${poppins.className} flex flex-col min-h-screen`}>
      <div className="flex-grow flex flex-col items-center justify-center bg-gradient-to-r from-black to-gray-900">
      {<Link href={'/'}><button id="returnButtonHeader"><ArrowLeft size={20}/></button></Link>} 
        <div id="container">
            <h1 id="title">HAS AI BEEN INVOLVED WITH THE INFORMATION PROVIDED?</h1>
            <p id="infoBodySS">Some of the content was edited or assisted by AI, but all information was personally reviewed for accuracy. The AI was instructed to rely only on official, government-endorsed sources and to list all relevant references whenever possible. If you find any outdated or incorrect information, please feel free to contact <a id="hyperlink" href="mailto:f_anas@icloud.com">f_anas@icloud.com</a>.</p>
        </div>
      </div>
      <Footer returnPage='' footerInformation={footerInformation}></Footer>
    </main>
  );
}



export default AI;
