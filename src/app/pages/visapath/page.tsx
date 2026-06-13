"use client";

import { useState } from "react";
import { ArrowLeft } from "lucide-react";
import { Poppins } from "next/font/google";

import Footer from "../../components/footer";

import "../../styles/countrypage.css";
import "../../styles/gradientButtonStyles.css";
import "../../styles/visaPath.css";
import "../../styles/globals.css";


const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "700"],
});

const footerInformation =
  "Helping you navigate EU student permits, stay paths, and post-study options";

export default function VisaPath() {
  const [loading, setLoading] = useState(false);
  const [permitData, setPermitData] = useState("");

  async function generatePermitPath() {
    try {
      setLoading(true);

      const res = await fetch("/api/permit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          citizenship: "Jordan",
          destination: "Sweden",
        }),
      });

      const data = await res.json();

      setPermitData(data.text);
    } catch (err) {
      console.error(err);
      setPermitData("Failed to generate permit path.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <main className={`${poppins.className} flex flex-col min-h-screen`}>
      <div className="flex-grow flex flex-col items-center justify-center bg-gradient-to-r from-black to-gray-900">

        <button
          id="returnButtonHeader"
          onClick={() => window.history.back()}
          aria-label="Go back"
        >
          <ArrowLeft size={20} />
        </button>

        <h1
          id="title"
          className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold text-center bg-gradient-to-r from-white to-neutral-400 bg-clip-text text-transparent"
        >
          Permit Paths
        </h1>

        <button
          onClick={generatePermitPath}
          className="mt-8 px-6 py-3 rounded-xl bg-white text-black font-semibold"
        >
          {loading ? "Generating..." : "Generate Example"}
        </button>

        {permitData && (
          <div className="mt-8 max-w-3xl text-white whitespace-pre-wrap px-6">
            {permitData}
          </div>
        )}
      </div>

      <Footer footerInformation={footerInformation} />
    </main>
  );
}