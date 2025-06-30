"use client"
import Country from '../../../components/country';
import '../../../styles/countrypage.css'
import ScrollTo from '../../../components/scrollFunction'



const backgroundColorStyle = 'linear-gradient(to bottom, rgb(0, 0, 0), rgb(117, 0, 0))'
const backgroundColorObjectStyle: number[] = [118, 50, 0]

/* Information Area */

const permitInformation = (
  <>
    <span id="warning">
      Please check the official Austrian government portal for detailed information.
    </span>
    To study in Austria, non‑EU/EEA students must apply for a “Student” residence permit before arrival, typically valid for 12 months and renewable annually. You’ll need to show proof of admission, sufficient funds (currently €703.58/month if under 24, and €1,273.99/month if older), accommodation, and comprehensive health insurance

    During studies, you can work up to 20 hours/week with an employment permit from the Public Employment Service (AMS); work must not interfere with your studies.

    After graduation, you can extend your permit for up to 12 months to look for a job or start a business. If you secure a job offer, you may apply for the Red‑White‑Red Card for Graduates, allowing you to work for up to two years with your qualifying employer.

    Family members (spouse and minor children) can join you under the “family unity” residence permit, provided financial support, accommodation, and basic German (A1) for adults are demonstrated.
  </>
);



const admissionRequirements = (
    <>
      
    </>
);




const internationalAdmissionInformationText = (
  <>
    Bachelor & Master Degrees: For Bachelor programs, you’ll need a high-school diploma that qualifies you for higher education in your home country. Commonly accepted diplomas include:
    <ul className="list-disc list-inside mt-2 mb-2">
      <li>International A Levels (Cambridge or Edexcel)</li>
      <li>International Baccalaureate (IB)</li>
      <li>High School Diploma (with SAT/ACT or APs, depending on the country)</li>
      <li>European Baccalaureate</li>
      <li>French Baccalauréat</li>
      <li>Abitur (Germany)</li>
      <li>Diploma di Maturità (Italy)</li>
      <li>Ylioppilastutkinto / Studentexamen (Finland)</li>
    </ul>
    For Master programs, a relevant Bachelor’s degree is required. Some universities of applied sciences (UAS) may also require relevant work experience for Master’s programs. Admission procedures often include entrance exams, interviews, or portfolio submissions depending on the program.

    Non-native English speakers applying to English-taught programs usually need to demonstrate language proficiency through exams like  
    <a href="https://ielts.org/" target="_blank" rel="noopener noreferrer" id="hyperlink">IELTS</a>,  
    <a href="https://www.pearsonpte.com/" target="_blank" rel="noopener noreferrer" id="hyperlink">PTE</a>,  
    <a href="https://www.ets.org/toefl.html" target="_blank" rel="noopener noreferrer" id="hyperlink">TOEFL</a>, or  
    <a href="https://www.cambridgeenglish.org/test-your-english/" target="_blank" rel="noopener noreferrer" id="hyperlink">Cambridge</a> tests.

    Applications are usually submitted directly to each university, as Austria does not have a joint application system. Deadlines and requirements vary by institution, so it’s recommended to search for your program and check details through official university websites or  
    <a href="https://studyinaustria.at" target="_blank" rel="noopener noreferrer" id="hyperlink">studyinaustria.at</a>.
  </>
);


const internationalUniversityInformationText = (
  <>
    There are many reputable Austrian universities available for international students, with notable ones including <a href="https://www.tuwien.at/en/" target="_blank" id="hyperlink" rel="noopener noreferrer">TU Wien (Vienna University of Technology)</a>, <a href="https://www.uni-graz.at/en/" target="_blank" id="hyperlink" rel="noopener noreferrer">University of Graz</a>, <a href="https://www.jku.at/en/" target="_blank" id="hyperlink" rel="noopener noreferrer">Johannes Kepler University Linz</a>, <a href="https://www.uni-salzburg.at/index.php?id=41797&L=1" id="hyperlink" target="_blank" rel="noopener noreferrer">University of Salzburg</a>, and <a href="https://www.uibk.ac.at/en/" id="hyperlink" target="_blank" rel="noopener noreferrer">University of Innsbruck</a>. To pick your university, it’s recommended to use the <a href="https://studyinaustria.at/en/" id="hyperlink" target="_blank" rel="noopener noreferrer">Official Austrian University Portal</a> to explore universities and their locations. Knowing the location is important—you should consider living costs, environment, climate, and available student services before making your choice.
  </>
);


const visaGeneralRequirements = (
  <>
    <p id="warning">
      <strong>It's recommended not to rely solely on the information in this website. Government official websites are always more accurate.</strong>
    </p>
    Assuming you intend to stay in Austria for over 90 days for your studies, you will need to apply for a <strong>Residence Permit – Student</strong>, and must fulfill several basic requirements. 
    You must have a passport that is valid for at least three months beyond the duration of the residence permit. 
    You must provide the official letter of acceptance issued by your Austrian university. 
    You must include a completed and signed application form. 
    You must show proof of sufficient financial means to support yourself (
    <ScrollTo yOffset={-260} elementId="financial-requirements">
      <a href="#financial-requirements" id="hyperlink-insite">more information in the next section</a>
    </ScrollTo>
    ). 
    You must also provide proof of valid health and medical insurance covering your entire stay in Austria.
  </>
);

const visaFinancialRequirements = (
  <>
    <p id="warning">
      <strong>It's recommended not to rely solely on the information in this website. Government official websites are always more accurate.</strong>
    </p>
    As of now, students applying for a residence permit in Austria must demonstrate sufficient financial means. If you are under 24 years old, you must have at least <strong>€633.06 per month</strong> (approximately <strong>€7,596.72 per year</strong>). You must provide a recent bank statement showing this amount available in your personal bank account. 
    Please note: funds must be in your own account—bank statements from parents or joint/shared accounts are <strong>not accepted</strong> for the Austrian residence permit.
  </>
);


const visaInsuranceRequirements = (
  <>
    <p id="warning">
      <strong>It's recommended not to rely solely on the information in this website. Government official websites are always more accurate.</strong>
    </p>
    To obtain a residence permit for studying in Austria, international students must have valid health insurance covering medical expenses, hospitalization, and treatment. Coverage must meet Austrian standards, typically requiring a minimum of <strong>€30,000</strong>. 
    Private insurance that meets these criteria generally costs between <strong>€500 and €1,500 per year</strong>. Proof of insurance is required during the application process. 
    You can obtain coverage through international providers such as <a href="https://www.axa.com/" target="_blank" rel="noopener noreferrer" id="hyperlink">AXA</a>, <a href="https://www.allianzcare.com/" target="_blank" rel="noopener noreferrer" id="hyperlink">Allianz Care</a>, or <a href="https://www.cignaglobal.com/" target="_blank" rel="noopener noreferrer" id="hyperlink">Cigna Global</a>. 
    After registering in Austria, students may be eligible to switch to the Austrian public health insurance system (ÖGK).
  </>
);

const europeanAdmissionInformation = (
  <>
    To apply for a Bachelor's program at an Austrian university, EU students need to submit proof of nationality (e.g., passport copy), a secondary school leaving certificate that qualifies them for university studies in their home country, and German language proficiency—typically demonstrated by a secondary school certificate confirming at least four years of German lessons or a recognized German language diploma. For Master's programs, a relevant Bachelor's degree (minimum 180 ECTS) is required. Some programs may have additional requirements, such as entrance examinations or specific language proficiency levels. It is essential to check the specific requirements of the program you are interested in on the university's website.
  </>
);


const internationalTuitionFees = (
  <>
    <p id="warning">
      <strong>Note:</strong> It’s recommended to always verify tuition fees directly with the university.
    </p>
     <br></br>The average tuition fees for a Bachelor's program in Austria for <strong>non-EU/EEA students</strong> at public universities are approximately <p id="warning">€726.72 per semester</p> (about <strong>€1,453 per year</strong>), plus a small student union fee (~€20 per semester). For Master's programs, the fees are usually the same. However, private universities and some UAS programs may charge higher tuition, ranging from <strong>€5,000 to €15,000 per year</strong>.
    <br /><br />
    Downloadable university-specific fee details will be available here soon. This page will redirect once that feature is ready.
  </>
);


const europeanStudentsUniversities = (
  <>
    European students applying to Austrian universities should check each university’s specific admission criteria, which typically require a recognized secondary school leaving certificate, proof of language proficiency in German or English depending on the program, and sometimes entrance exams or interviews; applications are usually submitted directly to universities, with deadlines varying by institution—visit the official university websites or <a href="https://studyinaustria.at" target="_blank" rel="noopener noreferrer" id="hyperlink">studyinaustria.at</a> for detailed information.
  </>
);


const whyChooseAustria = (
  <>
    Austria offers high-quality education at top-ranked universities with low or no tuition fees for EU/EEA students and affordable costs for international students. Many degree programs, especially in fields like IT and business, are available in English. International students are allowed to work part-time during their studies, and living costs are moderate, typically ranging from €900 to €1,300 per month. Scholarships from OeAD, Erasmus+, and individual universities help ease financial pressure. After graduation, students can apply for a Red-White-Red Card to stay in Austria and seek employment. The country is known for its safety, central location in Europe, and excellent quality of life.
  </>
);


const RegularVSUasUni = (
  <>
    In Austria, Universities of Applied Sciences (Fachhochschulen or UAS) provide professionally oriented degree programs in areas like engineering, business, health, media, and design. These institutions feature structured schedules, smaller classes, mandatory internship placements, and entrance procedures such as tests or interviews. Bachelor’s programs typically span six semesters, followed by four-semester Master’s programs, both of which are recognized as equivalent to university degrees.

    Regular universities (Universitäten), on the other hand, emphasize theoretical and research-based education across a broad range of academic disciplines, including doctoral studies. Their schedules are more flexible, lectures larger, and some programs—especially in oversubscribed fields like medicine and law—require entrance exams. University Bachelor’s programs generally take six to eight semesters, with Master’s programs lasting around four semesters.
  </>
);

  
  

const AustriaAdvantages = [
    "High Quality of Education: Austrian universities offer strong academic standards and modern teaching methods.",
    "Affordable Tuition Fees: Public universities have low tuition fees, even for non-EU/EEA students.",
    "Wide Range of English-Taught Programs: Many Bachelor’s and Master’s programs are available in English.",
    "Excellent Quality of Life: Austria ranks high in healthcare, infrastructure, and public services.",
    "Safe and Peaceful Country: Austria is known for its safety and political stability.",
    "Rich Cultural Heritage: A vibrant arts scene, music, and history enrich the student experience.",
    "Student-Friendly Cities: Cities like Vienna, Graz, and Innsbruck are welcoming and well-equipped for students.",
    "Work While Studying: International students can work part-time (up to 20 hours/week).",
    "Beautiful Nature and Outdoor Activities: Access to the Alps, lakes, and clean natural environments.",
    "Strong Research Opportunities: Austria invests heavily in R&D, especially in technology and science.",
    "Easy Travel in Europe: Central location with access to Schengen countries for travel."
];

const AustriaDisadvantages = [
    "German Language Requirement: Many programs require German, and everyday life is easier with it.",
    "Long Bureaucratic Processes: Residence permit and university paperwork can be time-consuming.",
    "High Cost of Living in Cities: Vienna and other urban centers can be relatively expensive.",
    "Limited English in Daily Life: Outside universities, not everyone speaks fluent English.",
    "Cold Winters: The climate may be harsh for students from warmer regions.",
    "Part-Time Job Competition: Student jobs may be limited depending on location and language skills.",
    "Small Job Market for Non-German Speakers: Post-graduation job options may be restricted without German proficiency.",
    "Cultural Adjustment: Different academic expectations and social norms can take time to adapt to.",
    "Limited Public Transport in Rural Areas: Less convenient travel in smaller towns.",
    "Limited Social Life in Small Towns: Fewer events or international communities compared to bigger cities.",
    "Strict Documentation Requirements: Visa and residence applications require precise paperwork, translations, and legalizations."
];




const Austria = () => {
    const CountryInformation = {
        countryName: "AUSTRIA",
        countryNameOptional: "AUSTRIAN",
        admissionInformation: europeanAdmissionInformation,
        internationalAdmissionInformation: internationalAdmissionInformationText,
        universityInformation: europeanStudentsUniversities,
        internationalUniversityInformation: internationalUniversityInformationText,
        internationalTuitionFeesInformation: internationalTuitionFees,
        visaRequirementsRequirements: visaGeneralRequirements,
        visaRequirementsFinancials: <div id="financial-requirements">{visaFinancialRequirements}</div>,
        visaRequirementsInsurance: visaInsuranceRequirements,
        footerInformation: "We always recommend verifying this information on official Goverment or University Websites, Don't rely on this information.",
        whyChooseCountry: [{title: <>WHY <p id="gradientSub">Austria?</p></>, description: whyChooseAustria}],
        advantages: AustriaAdvantages,
        disadvantages: AustriaDisadvantages,
        titleColor1: "#ff1100",
        titleColor2: "#ffffff",
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
            <Country countryName={CountryInformation.countryName} countryNameOptional={CountryInformation.countryNameOptional}
            admissionInformation={CountryInformation.admissionInformation} internationalAdmissionInformation={CountryInformation.internationalAdmissionInformation}
            universityInformation={CountryInformation.universityInformation} internationalUniversityInformation={CountryInformation.internationalUniversityInformation}
            internationalUniversityFees={CountryInformation.internationalTuitionFeesInformation}
            footerInformation={CountryInformation.footerInformation} 
            titleColor1={CountryInformation.titleColor1} titleColor2={CountryInformation.titleColor2}
            backgroundColor={CountryInformation.backgroundColor} backgroundColorObject={CountryInformation.backgroundColorObject}
            whyChooseCountry={CountryInformation.whyChooseCountry}
            advantages={CountryInformation.advantages} disadvantages={CountryInformation.disadvantages}
            optionalInformation={CountryInformation.optionalInformation} internationalOptionalInformation={CountryInformation.internationalOptionalInformation}
            visaRequirementsRequirements={CountryInformation.visaRequirementsRequirements} visaRequirementsFinancials={CountryInformation.visaRequirementsFinancials}
            visaRequirementsInsurance={CountryInformation.visaRequirementsInsurance}
            ></Country>
        </div>
    )
}

export default Austria;