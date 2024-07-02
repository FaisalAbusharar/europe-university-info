import { Oswald } from 'next/font/google';

const oswald = Oswald({ subsets: ['latin'], weight: ['400', '700'] });

const Countries = () => {
  return (
    <main className={`{oswald.className} flex flex-col min-h-screen`}>
      <div className="flex-grow flex flex-col items-center justify-center bg-gradient-to-r from-black to-gray-900">
        <h1 id="Title">COUNTRIES</h1>
        <h2 id="Subtitle">Find your European Country</h2>

        <div id="country-container" className="flex space-x-4 mb-8">
        <button id="GermanButton" className="bg-custom-gradient text-white font-bold py-2 px-4 rounded">Germany</button>
        <button id="Button" className="bg-custom-gradient text-white font-bold py-2 px-4 rounded">Finland</button>
        <button id="Button" className="bg-custom-gradient text-white font-bold py-2 px-4 rounded">Sweden</button>
        <button id="Button" className="bg-custom-gradient text-white font-bold py-2 px-4 rounded">United Kingdom</button>
        <button id="Button" className="bg-custom-gradient text-white font-bold py-2 px-4 rounded">Norway</button>

        </div>
      </div>
    </main>
  );
}

export default Countries;
