
import CountryBeyond from '../../../../components/countrybeyond';
import '../../../../styles/countrypage.css'
import { Poppins } from 'next/font/google';
import ScrollTo from '../../../../components/scrollFunction'
// import Wipscreen from '../../../../components/wipscreen'
import "../../../../styles/support.css"


const backgroundColorStyle = 'linear-gradient(to bottom, rgb(0, 0, 0), rgb(78, 2, 2),  rgb(0, 31, 117))'
const backgroundColorObjectStyle: number[] = [255, 255, 255]

/* Information Area */
const AdmissionInformationText = (
  <>
   
  </>
);



const UniversityInformationText = (
  <>
   
  </>
);



const TuitionFees = (
<>

</>
);


const permitInformation = (
  <>
    
  </>
);

const visaGeneralRequirements = (
  <>
    
  </>
);



const visaFinancialRequirements = (
  <>
   
  </>
);


const visaInsuranceRequirements = (
  <>
   
  </>
);


const whyChooseUSA = (
  <>
   
  </>
);



const USAAdvantages = [""];

const USADisadvantages = [""]










const RegularVSUasUni = (
  <>
  
  </>
);

  
  




const USA = () => {
   const CountryInformation = {
        countryName: "UNITED STATES OF AMERICA",
        countryNameOptional: "AMERICAN",
        internationalAdmissionInformation: AdmissionInformationText,
        internationalUniversityInformation: UniversityInformationText,
        internationalTuitionFeesInformation: TuitionFees,
        visaRequirementsRequirements: visaGeneralRequirements,
        visaRequirementsFinancials: <div id="financial-requirements">{visaFinancialRequirements}</div>,
        visaRequirementsInsurance: visaInsuranceRequirements,
        footerInformation: "We always recommend verifying this information on official Goverment or University Websites, Don't rely on this information.",
        whyChooseCountry: [{title: <>WHY <p id="gradientSub">{"THE USA"}?</p></>, description: whyChooseUSA}],
        advantages: USAAdvantages,
        disadvantages: USADisadvantages,
        titleStyle: `linear-gradient(to left, rgb(255, 255, 255), rgb(197, 0, 0) ,rgb(2, 77, 189))`,
        backgroundColor: backgroundColorStyle,
        backgroundColorObject: backgroundColorObjectStyle,
        optionalInformation: [
            // {title: <><span id="gradientSub">Important Admission Information</span></>, description: admissionRequirements},
            {title:  <><span id="gradientSub">Regular University</span> OR <span id="gradientSubSub">University of Applied Sciences</span></>, description: RegularVSUasUni},
        ],
        internationalOptionalInformation: [
            {title: <><span id="gradientSubSub">Student Permit Information</span></>, description: permitInformation},
        ],

    }

    return (
        <div>
            <CountryBeyond countryName={CountryInformation.countryName} countryNameOptional={CountryInformation.countryNameOptional}
            // admissionInformation={CountryInformation.admissionInformation} 
            admissionInformation={CountryInformation.internationalAdmissionInformation}
            // universityInformation={CountryInformation.universityInformation} 
            universityInformation={CountryInformation.internationalUniversityInformation}
            universityFees={CountryInformation.internationalTuitionFeesInformation}
            footerInformation={CountryInformation.footerInformation} 
            titleStyleBackground={CountryInformation.titleStyle}
            backgroundColor={CountryInformation.backgroundColor} backgroundColorObject={CountryInformation.backgroundColorObject}
            whyChooseCountry={CountryInformation.whyChooseCountry}
            advantages={CountryInformation.advantages} disadvantages={CountryInformation.disadvantages}
            optionalInformation={CountryInformation.optionalInformation}
            visaRequirementsRequirements={CountryInformation.visaRequirementsRequirements} visaRequirementsFinancials={CountryInformation.visaRequirementsFinancials}
            visaRequirementsInsurance={CountryInformation.visaRequirementsInsurance}
            ></CountryBeyond>
        </div>
    )


    

}

export default USA