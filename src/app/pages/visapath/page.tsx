"use client";

import { useState } from "react";
import { ArrowLeft } from "lucide-react";
import { Poppins } from "next/font/google";

import Footer from "../../components/footer";
import Permit from "../../components/permit";

import "../../styles/countrypage.css";
import "../../styles/gradientButtonStyles.css";
import "../../styles/visaPath.css";
import "../../styles/globals.css";

import { CountryDropdown } from "react-country-region-selector";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "700"],
});

type PermitData = {
   generalRequirements: string;

  financialRequirements: string;

  insuranceRequirements: string;

  documents: string;

  processingTime: string;

  workRights: string;

  stayRules: string;

  postStudyOptions: string;

  guidanceSite: string;

  notes: string;
};

const footerInformation =
  "Helping you navigate EU student permits, stay paths, and post-study options.";

export default function VisaPath() {
  const [loading, setLoading] = useState(false);

  const [permitData, setPermitData] =
  useState<PermitData | null>(null);

  const [citizenship, setCitizenship] = useState("");
  const [destination, setDestination] = useState("");

  async function generatePermitPath() {
    if (!citizenship || !destination) return;

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

      if (!data.success) {
        throw new Error(data.error);
      }

      setPermitData(data.data);

    // console.log("========== PERMIT DATA ==========");
    // console.log(JSON.stringify(data.data, null, 2));
    // console.log("=================================");

    } catch (err) {
      console.error(err);

      setPermitData(null);

    } finally {
      setLoading(false);
    }
  }

  // Show generated permit page
  if (permitData) {
    console.log("Rendering Permit Component with Data:", permitData);
    return (
      <Permit
        countryName={destination}
        countryNameOptional={destination}

        visaRequirementsRequirements={
          permitData.generalRequirements
        }

        visaRequirementsFinancials={
          permitData.financialRequirements
        }

        visaRequirementsInsurance={
          permitData.insuranceRequirements
        }

        permitDocumments={
          permitData.documents
        }

        permitProcessingTime={
          permitData.processingTime
        }

        permitWorkRights={
          permitData.workRights
        }

        permitStayRules={
          permitData.stayRules
        }

        permitPostStudy={
          permitData.postStudyOptions
        }

        permitGuidanceSite={
          permitData.guidanceSite
        }

        permitNotes={
          permitData.notes
        }

        footerInformation={
          footerInformation
        }

        titleColor1="#ffffff"
        titleColor2="#A3A3A3"

        backgroundColor="
          linear-gradient(
            to top,
            black,
            #353535
          )
        "

        backgroundColorObject={[255, 255, 255]}

        optionalInformation={[]}
        internationalOptionalInformation={[]}
      />
    );
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

               <h1 className='text-custom-gradient text-5xl sm:text-5xl lg:text-[75px] text-center px-4 leading-tight' id="titlePageCountry">PERMITS</h1>
        <h2 className='text-[18px] sm:text-[12px] lg:text-[40px] text-center font-extrabold px-4' id="Subtitle">All the information you need for <p id="gradientSub">European Permits</p></h2>
        <br></br><br></br>
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
            "DE",
            "FI",
            "SE",
            "NL",
            "GB",
            "AT",
            "NO",
            "US",
            "AU",
            "BE"
          ]}

          id="dropDownSelect"
        />

        <button
          onClick={generatePermitPath}
          disabled={
            loading ||
            !citizenship ||
            !destination
          }
          className="
            mt-8
            px-6
            py-3
            rounded-xl
            bg-white
            text-black
            font-semibold
            disabled:opacity-50
          "
        >
          {loading
            ? "Generating..."
            : "Generate Permit Path"}
        </button>

      </div>

      <Footer
        footerInformation={
          footerInformation
        }
      />
    </main>
  );
}