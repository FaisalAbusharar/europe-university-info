import {Poppins } from 'next/font/google';
import Link from 'next/link';

const poppins = Poppins({ subsets: ['latin'], weight: ['400', '700'] })

const Country = ({countryName, countryNameOptional, admissionInformation, universityInformation, footerInformation})=> {
    return (
        <main className={`${poppins.className} flex flex-col min-h-screen`}>
            <div className="flex-grow flex-col items-center justify-center bg-gradient-to-r from-black to-gray-900">
                <h1 id="Title-Fin">{countryName}</h1>
                <hr id="line"></hr>
                <h2 id="Subtitle-Left">{countryNameOptional} <p id="gradient-sub">ADMISSION</p></h2>
                <p id="InfoBody">{admissionInformation}</p>
                <h2 id="Subtitle-Left">{countryNameOptional} <p id="gradient-sub">UNIVERSITIES</p>    </h2>
                <p id="InfoBody">{universityInformation}</p>
            </div>

            <div className="footer-container">
                <p id="footer">{footerInformation}
                <br />Studying in Europe is always a good idea! But you have to know if you are able to do it!</p>
            <div className="credit-container">
                <p id="left-credit">Developed by Faisal Abusharar</p>
            <Link href="/countries">
              <button id="footer-return-button" className="bg-custom-gradient text-white font-bold py-2 px-4 rounded">Go back</button>
            </Link>
        </div>
      </div>
        </main>
    )
}

export default Country;