import { Oswald } from 'next/font/google';

const oswald = Oswald({ subsets: ['latin'], weight: ['400', '700'] });

const Countries = () => {
  return (
    <main className={`{oswald.className} flex flex-col min-h-screen`}>
      <div className="flex-grow flex flex-col items-center justify-center bg-gradient-to-r from-black to-gray-900">
        <h1 id="Title">COUNTRIES</h1>
        <h2 id="Subtitle">Find your European Country</h2>
          <div id="country-container" className="flex space-x-4 mb-8">
            <button className="country-button" data-gradient="germany">Germany</button>
            <button className="country-button" data-gradient="finland">Finland</button>
            <button className="country-button" data-gradient="sweden">Sweden</button>
            <button className="country-button" data-gradient="uk">United Kingdom</button>
            <button className="country-button" data-gradient="norway">Norway</button>
          </div>
      </div>
    </main>
  );
}

export default Countries;
