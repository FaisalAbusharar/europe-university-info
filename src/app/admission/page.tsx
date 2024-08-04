"use client"
import '../styles/admissionPage.css'
import { Poppins, Exo } from 'next/font/google';
import Footer from '../components/footer'
import Link from 'next/link';
import '../styles/countrypage.css'
import React, { useState, useEffect } from 'react';
import '../styles/gradientButtonStyles.css'
import BackgroundAnim from '../animation/backgroundAnimationFirst';


const poppins = Poppins({ subsets: ['latin'], weight: ['400', '700'] });
const exo = Exo({subsets: ['latin'], weight: ['400', '800']})



const Admission = () => {

    const [loaded, setLoaded] = useState(false);

    useEffect(() => {
        setLoaded(true);
    }, []);


    return (
    <main id="admissionBackground" className={`${exo.className} flex flex-col min-h-screen ${loaded ? 'slide-in-top' : ''}`}>
      <BackgroundAnim objectColor={[0, 225, 250]} className="absolute inset-0 z-0" >
      <div className={`relative z-10 flex-grow flex-col items-center justify-center`}>
                <div id='titleContainer' className="mb-auto mt-8">
                    <h1 id="Title">ADMISSION</h1>
                  
                    <h2 id="Subtitle">Applying? Well, let's help you.</h2>
                </div>    
                <div id='informationContainer' className='mb-auto mt-8'>
                    <h2 id="infoBody">You've done your research, and now you're ready to apply, but oh wait... how do you apply?</h2>
                    <h2 id="infoBody">Well, we're ready to help, Let's start... Choose a country you'd like to apply to</h2>
                </div>

            <div id="countryContainer" className="flex space-x-4 mb-8 justify-center">
                <div id='minCountryContainer'>
                <Link href="/countries/germany">
                    <button className='button' id="gradientButtonTextGermany">Germany</button>
                </Link>
                <Link href="/countries/finland">
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
            </div>
            <Footer footerInformation={'Applying can be complicated, but we are here to provide you the information!'}></Footer>
        </BackgroundAnim>
        </main>
    )
}

export default Admission