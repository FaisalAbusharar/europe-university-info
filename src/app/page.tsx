import { Oswald } from 'next/font/google';

const oswald = Oswald({ subsets: ['latin'], weight: ['400', '700'] });

export default function Home() {
  return (
    <main className='{oswald.className'>
        <h1 id="Title">
            EUROPEAN UNIVERSITIES
        </h1>
    </main>
      );
}
