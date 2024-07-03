import { Oswald } from 'next/font/google';
import Link from 'next/link';
import './finland.css'

const oswald = Oswald({subsets: ['latin'], weight: ['400', '700'] });

const Finland = () => {
    return (
        <main className='{oswald.className} flex flex-col min-h-screen'>
            <div className="flex-grow flex-col items-center justify-center bg-gradient-to-r from-black to-gray-900">
                <h1 id="Title">FINLAND</h1>
            </div>
        </main>
    )
}

export default Finland;