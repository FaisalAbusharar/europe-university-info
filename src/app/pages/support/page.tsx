"use client";
import { useEffect, useState } from 'react';
import Link from 'next/link';
import { ArrowLeft } from "lucide-react";
import { Poppins } from 'next/font/google';
import Footer from '../../components/footer';
import '../../styles/countrypage.css';
import '../../styles/gradientButtonStyles.css';
import '../../styles/support.css';
import useIsMobile from '@/app/utils/useIsMobile';

const poppins = Poppins({ subsets: ['latin'], weight: ['400', '700'] });
const footerInformation = 'The EUI Support page to answer all your questions.';

export default function Support() {
  const [faqs, setFaqs] = useState<{ title: string; href: string }[]>([]);

  useEffect(() => {
    fetch('/faqList.json')
      .then((res) => res.json())
      .then((data) => setFaqs(data));
  }, []);

  const isMobile = useIsMobile();

  return (
    <main className={`${poppins.className} flex flex-col min-h-screen`}>
      <div className="flex-grow flex flex-col items-center justify-center bg-gradient-to-r from-black to-gray-900">
        <button id="returnButtonHeader" onClick={() => window.history.back()} aria-label="Go back">
          <ArrowLeft size={20} />
        </button>
        <div id={isMobile ? "containerBoxMobile" :"containerBox"}>
          <h1 id="subtitle">{isMobile ? "Frequently Asked" : "Frequently Asked Questions"}</h1>
          <ul>
            {/* This section should only show on PC, since adapting it to mobile is hard */}
            {!isMobile && faqs.map((item) => (
              <li id="supportlist" key={item.href}>
                <Link href={item.href} id="infoBodySS">
                  {item.title}
                </Link>
              </li>
            ))}

            {isMobile && faqs.map((item) => (
              <li id="supportlistMobile" key={item.href}>
                <Link href={item.href} id="infoBodySS">
                  {item.title}
                </Link>
              </li>
            ))}

          </ul>
        </div>
      </div>
      <Footer footerTheme='linear-gradient(to right,rgb(224, 172, 0),rgb(255, 115, 0))' footerInformation={isMobile ? "EUI Support to answer your questions" : footerInformation} />
    </main>
  );
}
