import { Oswald } from 'next/font/google';

const oswald = Oswald({ subsets: ['latin'], weight: ['400', '700'] });

export default function Home() {
  return (
    <main className='{oswald.className}'>
      <div className="flex flex-col items-center justify-center min-h-screen">
        <div className="text-center mb-auto mt-8">
          <h1 id="Title" className='text-custom-gradient'>EUROPEAN UNIVERSITIES</h1>
          <h2 id="Subtitle">Find Your Suitable European University</h2>
        </div>
        <div className="flex-grow">
        <div className="flex space-x-4 mb-8">
        <button id="Button" className="bg-custom-gradient text-white font-bold py-2 px-4 rounded mb-8">Countries</button>
        <button id="Button" className="bg-custom-gradient text-white font-bold py-2 px-4 rounded mb-8">Financials</button>
        <button id="Button" className="bg-custom-gradient text-white font-bold py-2 px-4 rounded mb-8">Admissions</button>
        <button id="Button" className="bg-custom-gradient text-white font-bold py-2 px-4 rounded mb-8">Scholarships</button>
        </div>
        </div>
      </div>
    </main>
  );
}
