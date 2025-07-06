"use client"
import CountryBeyond from '../../../../components/countrybeyond';
import '../../../../styles/countrypage.css'
// import Wipscreen from '../../../../components/wipscreen'
import "../../../../styles/support.css"
import { Poppins } from 'next/font/google';


const backgroundColorStyle = 'linear-gradient(to bottom, rgb(1, 1, 41),  rgb(0, 31, 117))'
const backgroundColorObjectStyle: number[] = [255, 255, 255]

/* Information Area */
const AdmissionInformationText = (
  <>
    <strong>Bachelor & Master Degrees:</strong>  
    To study a Bachelor’s degree in Australia, you’ll need a secondary school qualification equivalent to the Australian Year 12. This includes A-Levels, IB, or other recognized certificates, along with translated and certified transcripts. Some universities may require prerequisite subjects or a foundation year depending on your background.

    Postgraduate programs (Master’s or PhD) require a relevant Bachelor’s degree. Additional requirements may include a CV, letters of recommendation, a personal statement, and possibly work experience. GRE or GMAT scores are rarely required but can be needed for business programs.

    You’ll also need to demonstrate English proficiency through a recognized test unless exempt. Applications are submitted directly to the university or through centralized platforms like <a href="https://www.uac.edu.au/" id="hyperlink">UAC (NSW)</a> , <a href="https://vtac.edu.au/" id="hyperlink">VTAC (Victoria)</a>, or <a href="https://www.qtac.edu.au/" id="hyperlink">QTAC (Queensland)</a>, depending on the institution and program. Intakes are usually in February and July.
    
    Once accepted, you'll receive a Confirmation of Enrolment (CoE), required for your student visa application.
  </>
);

const UniversityInformationText = (
  <>
    Australia offers globally ranked universities with strong reputations in research, innovation, and practical learning. Universities provide Bachelor’s, Master’s, and Doctorate degrees, while vocational providers like <a href="https://www.tafensw.edu.au/" id='hyperlink'>TAFE</a> (Technical and Further Education) offer diplomas and associate-level training, similar to universities of applied sciences.

    Community colleges as known in the U.S. do not exist, but TAFEs fulfill a similar role for students seeking job-ready skills or pathways to university. All institutions must be CRICOS-registered to accept international students.

    Australian universities offer diverse, multicultural campuses with dedicated support services for international students, including orientation, academic help, and visa guidance.
  </>
);

const TuitionFees = (
  <>
    Specific university fee details will be available for download here soon. Page should redirect.

    <br /><br />
    On average, tuition fees for international students in Australia are:
    <ul className="list-disc list-inside mt-2 mb-2">
      <li><span className="font-semibold">Bachelor’s programs:</span> AUD 20,000–45,000 per year</li>
      <li><span className="font-semibold">Master’s programs:</span> AUD 22,000–50,000+ per year</li>
      <li><span className="font-semibold">Doctoral programs:</span> Up to AUD 42,000 per year</li>
    </ul>
    Living expenses are estimated at AUD 21,000 per year by the government. Overseas Student Health Cover (OSHC) is mandatory and typically costs a few hundred to a few thousand AUD per year depending on coverage.
  </>
);

const permitInformation = (
  <>
    International students must apply for the <strong>Student visa (subclass 500)</strong>. You can apply after receiving a Confirmation of Enrolment (CoE) from a CRICOS-registered institution. The visa allows you to stay for the duration of your course and includes limited work rights.
  </>
);

const visaGeneralRequirements = (
  <>
    After receiving your CoE, apply for a Student visa (subclass 500) through the <a href="https://immi.homeaffairs.gov.au" target="_blank" rel="noopener noreferrer" id="hyperlink">ImmiAccount</a> system. You must provide:
    <ul className="list-disc list-inside mt-2 mb-2">
      <li>Your CoE and valid passport</li>
      <li>Evidence of financial capacity (tuition + living + travel)</li>
      <li>English proficiency test scores or exemption proof</li>
      <li>Proof of Overseas Student Health Cover (OSHC)</li>
      <li>A declaration of Genuine Temporary Entrant (GTE) intent</li>
    </ul>
    Visa fees start from AUD 2,000 and processing may take several weeks.
  </>
);

const visaFinancialRequirements = (
  <>
    To qualify for the student visa, you must show proof of funds to cover:
    <ul className="list-disc list-inside mt-2 mb-2">
      <li>First year of tuition fees (e.g. AUD 20,000–50,000)</li>
      <li>Living costs (approx. AUD 21,000 per year)</li>
      <li>Return airfare (estimated AUD 2,000)</li>
    </ul>
    Acceptable documents include bank statements, scholarship confirmation, sponsor letters, and approved student loans. Documents must be recent and verifiable.
  </>
);

const visaInsuranceRequirements = (
  <>
    All international students in Australia must purchase <strong>Overseas Student Health Cover (OSHC)</strong> for the entire duration of their studies. OSHC provides access to basic medical services, doctor visits, hospital care, and some prescriptions. It can be arranged through your university or bought directly from approved providers like Bupa, Allianz, or Medibank.
  </>
);

const whyChooseAustralia = (
  <>
    Australia offers a high-quality education system with strong global recognition. With over 1,100 institutions and 22,000 courses to choose from, students benefit from academic excellence, modern campuses, and a multicultural environment. Universities emphasize hands-on learning, research, and career-readiness.

    International students are supported through services like orientation, academic advising, and visa help. Australia is also known for safety, quality of life, and beautiful natural surroundings.

    Graduates may qualify for post-study work through the <strong>Temporary Graduate visa (subclass 485)</strong>, which allows 2–4 years of work depending on degree level and location.
  </>
);

const AustraliaAdvantages = [
  "Globally recognized degrees with strong emphasis on research and practical learning.",
  "Multicultural campuses with services for international students (orientation, academic, and visa support).",
  "Part-time work allowed during study: up to 40 hours every two weeks.",
  "Post-study work visa (subclass 485) for 2–4 years depending on degree and city.",
  "High quality of life, safety, and cultural diversity.",
  "Flexible pathway options including TAFE and foundation programs."
];

const AustraliaDisadvantages = [
  "High cost of study: total yearly costs often exceed AUD 40,000–60,000.",
  "Strict visa conditions and documentation requirements.",
  "Work limitations during study (40 hours/fortnight) can make self-funding difficult.",
  "Healthcare is expensive without OSHC, which is mandatory.",
  "Academic culture may be different from students’ home country and require adjustment.",
  "Not all institutions offer the same quality – CRICOS registration is a must."
];

const RegularVSUasUni = (
  <>
    Australia’s higher education system includes both traditional universities and vocational institutions like TAFE. Universities offer full academic degrees—Bachelor’s, Master’s, and PhDs—while TAFE providers focus on practical diplomas and certificates for work-ready skills.

    Many international students start with a diploma or certificate from a TAFE and later transfer to a university. This provides a more affordable and flexible entry point. All institutions must be registered on the <a href="https://cricos.education.gov.au/" target="_blank" rel="noopener noreferrer" id="hyperlink">CRICOS</a> register to legally host international students.

    The right choice depends on your goals: universities offer academic depth and research, while vocational education is career-focused and quicker to complete.
  </>
);


  
  




const Australia = () => {
   const CountryInformation = {
        countryName: "AUSTRALIA",
        countryNameOptional: "AUSTRALIAN",
        internationalAdmissionInformation: AdmissionInformationText,
        internationalUniversityInformation: UniversityInformationText,
        internationalTuitionFeesInformation: TuitionFees,
        visaRequirementsRequirements: visaGeneralRequirements,
        visaRequirementsFinancials: <div id="financial-requirements">{visaFinancialRequirements}</div>,
        visaRequirementsInsurance: visaInsuranceRequirements,
        footerInformation: "We always recommend verifying this information on official Goverment or University Websites, Don't rely on this information.",
        whyChooseCountry: [{title: <>WHY <p id="gradientSub">{"AUSTRALIA"}?</p></>, description: whyChooseAustralia}],
        advantages: AustraliaAdvantages,
        disadvantages: AustraliaDisadvantages,
        titleStyle: `linear-gradient(to bottom, rgb(255, 255, 255) ,rgb(0, 4, 255))`,
        backgroundColor: backgroundColorStyle,
        backgroundColorObject: backgroundColorObjectStyle,
        optionalInformation: [
            // {title: <><span id="gradientSub">Important Admission Information</span></>, description: admissionRequirements},
            {title:  <><span id="gradientSub">Higher Education University</span> OR <span id="gradientSubSub">Vocational Pathway [TAFE]</span></>, description: RegularVSUasUni},
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

export default Australia