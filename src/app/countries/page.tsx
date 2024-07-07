import { Poppins } from 'next/font/google';
import Link from 'next/link';
import './country.css'


const poppins = Poppins({ subsets: ['latin'], weight: ['400', '700'] });

const Countries = () => {
  return (
    <main className={`${poppins.className} flex flex-col min-h-screen`}>
      <div className="flex-grow flex flex-col items-center justify-center bg-gradient-to-r from-black to-gray-900">
        <h1 id="Title">COUNTRIES</h1>
        <h2 id="Subtitle">Find your <p id="gradient-sub">European Country</p></h2>
          <div id="country-container" className="flex space-x-4 mb-8">
            <Link href="/countries/germany">
            <button className="country-button" data-gradient="germany">Germany</button>
            </Link>
            <Link href="/countries/finland">
            <button className="country-button" data-gradient="finland">Finland</button>
            </Link>
            <button className="country-button" data-gradient="sweden">Sweden</button>
            <button className="country-button" data-gradient="uk">United Kingdom</button>
            <button className="country-button" data-gradient="norway">Norway</button>
          </div>
      </div>
      <div className="footer-container">
        <p id="footer">Figuring out where you want to study is pretty simple, see the costs, culture, enviorment, careers and decide!
          <br />Studying in Europe is always a good idea! But you have to know if you are able to do it!</p>
        <div className="credit-container">
          <p id="left-credit">Developed by Faisal Abusharar</p>
          <Link href="/">
              <button id="footer-return-button" className="bg-custom-gradient text-white font-bold py-2 px-4 rounded">Return Home</button>
            </Link>
        </div>
      </div>
    </main>
  );
}

export default Countries;
