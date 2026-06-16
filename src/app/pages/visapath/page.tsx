"use client";

import { useState } from "react";
import { ArrowLeft } from "lucide-react";
import { Poppins } from "next/font/google";

import Footer from "../../components/footer";


import "../../styles/countrypage.css";
import "../../styles/gradientButtonStyles.css";
import "../../styles/visaPath.css";
import "../../styles/globals.css";
import { CountryDropdown } from "react-country-region-selector";



const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "700"],
});



const footerInformation =
  "Helping you navigate EU student permits, stay paths, and post-study options";

export default function VisaPath() {
  const [loading, setLoading] = useState(false);
  const [permitData, setPermitData] = useState("");

  const [citizenship, setCitizenship] = useState("");
  const [destination, setDestination] = useState("");

  async function generatePermitPath() {
    try {
      setLoading(true);

      const res = await fetch("/api/permit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          citizenship,
          destination,
        }),
      });

      const data = await res.json();

      setPermitData(data.data.guidancePath || "Failed to generate permit path.");
      console.log(data.data)
    } catch (err) {
      console.error(err);
      setPermitData("Failed to display permit path.");
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

        <CountryDropdown
        value={citizenship}
        onChange={setCitizenship}
        aria-label="Select Citizenship"
        className="w-[540px] text-center bg-transparent text-white"
        defaultOptionLabel="Select Citizenship Country"
        id="dropDownSelect"
        />

        <CountryDropdown
        value={destination}
        onChange={setDestination}
        aria-label="Select Destination"
        className="w-[540px] text-center bg-transparent text-white"
        defaultOptionLabel="Select Destination Country"
        whitelist={[
    "DE", // Germany
    "FI", // Finland
    "SE", // Sweden
    "NL", // Netherlands
    "GB", // United Kingdom
    "AT", // Austria
    "NO", // Norway
    "US", // United States
    "AU", // Australia
  ]}
        id="dropDownSelect"
        />

         <button
          onClick={generatePermitPath}
          className="mt-8 px-6 py-3 rounded-xl bg-white text-black font-semibold"
        >
          {loading ? "Generating..." : "Generate Permit Path"}
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