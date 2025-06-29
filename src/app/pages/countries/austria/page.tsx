"use client"
import Country from '../../../components/country';
import '../../../styles/countrypage.css'
import ScrollTo from '../../../components/scrollFunction'



const backgroundColorStyle = 'linear-gradient(to bottom, rgb(0, 0, 0), rgb(117, 0, 0))'
const backgroundColorObjectStyle: number[] = [118, 50, 0]

/* Information Area */

const permitInformation = (
    <>
        <span id="warning"></span> 
    </>
);


const admissionRequirements = (
    <>
      
    </>
);



const internationalAdmissionInformationText = (
  <>
    Bachelor & Master Degrees: For Bachelor programs, you’ll need a high-school diploma that qualifies you for higher education in your home country. For Master programs, a relevant Bachelor’s degree is required. Some universities of applied sciences (UAS) may also require relevant work experience for Master’s programs. Admission procedures often include entrance exams, interviews, or portfolio submissions depending on the program. 

    Non-native English speakers applying to English-taught programs usually need to demonstrate language proficiency through exams like 
    <a href="https://ielts.org/" target="_blank" rel="noopener noreferrer" id="hyperlink">IELTS</a>,  <a href="https://www.pearsonpte.com/" target="_blank" rel="noopener noreferrer" id="hyperlink">PTE</a>,  <a href="https://www.ets.org/toefl.html" target="_blank" rel="noopener noreferrer" id="hyperlink">TOEFL</a>, or  <a href="https://www.cambridgeenglish.org/test-your-english/" target="_blank" rel="noopener noreferrer" id="hyperlink">Cambridge</a> tests.

    Applications are usually submitted directly to each university, as Austria does not have a joint application system. Deadlines and requirements vary by institution, so it’s recommended to search for your program and check details through official university websites or  <a href="https://studyinaustria.at" target="_blank" rel="noopener noreferrer" id="hyperlink">studyinaustria.at</a>.
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
        {/* European students applying to Finnish universities benefit from no tuition fees for bachelor's and master's programs conducted in Finnish or Swedish, similar to Finnish students. Bachelor's programs require a high school diploma qualifying for higher education in their home country. Master's programs require a Bachelor’s degree, and UAS Master’s programs may require two years of relevant work experience. Some programs may include entrance exams, SAT tests, or interviews. Non-native English speakers typically demonstrate proficiency through exams like <a href="https://ielts.org/" target="_blank" rel="noopener noreferrer" id="hyperlink">IELTS</a>, <a href="https://www.pearsonpte.com/" target="_blank" rel="noopener noreferrer" id="hyperlink">PTE</a>, <a href="https://www.ets.org/toefl.html" target="_blank" rel="noopener noreferrer" id="hyperlink">TOEFL</a>, or <a href="https://www.cambridgeenglish.org/test-your-english/" target="_blank" rel="noopener noreferrer" id="hyperlink">Cambridge</a> tests. Apply through the Joint Application system for up to six programs in January for autumn (September) studies. Some programs have different application periods; details vary, so check <a href="https://studyinfo.fi" target="_blank" rel="noopener noreferrer" id="hyperlink">Studyinfo.fi</a> or university websites for specific requirements. */}
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
        {/* European students applying to Finnish universities should explore programs offered through <a href="https://studyinfo.fi" target="_blank" rel="noopener noreferrer" id="hyperlink">Studyinfo.fi</a>. Each university in Austria sets its own admission criteria, including requirements for high school diplomas, bachelor's degrees, and relevant work experience for master's programs. Some programs may require entrance exams, SAT tests, or interviews. Non-native English speakers often need to demonstrate proficiency through exams like <a href="https://ielts.org/" target="_blank" rel="noopener noreferrer" id="hyperlink">IELTS</a>, <a href="https://www.pearsonpte.com/" target="_blank" rel="noopener noreferrer" id="hyperlink">PTE</a>, <a href="https://www.ets.org/toefl.html" target="_blank" rel="noopener noreferrer" id="hyperlink">TOEFL</a>, or <a href="https://www.cambridgeenglish.org/test-your-english/" target="_blank" rel="noopener noreferrer" id="hyperlink">Cambridge</a> tests. Utilize the Joint Application system to apply for up to six programs in January for autumn (September) studies. For specific details on application periods and requirements, visit <a href="https://studyinfo.fi" target="_blank" rel="noopener noreferrer" id="hyperlink">Studyinfo.fi</a> or the official websites of Finnish universities. */}
    </>
);

const whyChooseAustria = (
    <>
    {/* Austria is known for it’s World-Class education, and it’s universities are consistently ranked among the top in the global university rankings, with free tuition fees for EU/EEA Students who can massively benefit from the zero tuition fees, and Austria is affordable for International students compared to other countries in Europe with many scholarships and financial aid to help cover costs. Austria has a wide range of degree programs that are available in English, especially in IT. International students are allowed to work part-time during their studies. Austria is known for it’s innovative and student-centered teaching methods, encouraging critical thinking, creativity, and independence. After graduation, students have opportunities to stay and work in Austria. */}
    </>
)

const RegularVSUasUni = (
    <>
      {/* Universities of Applied Sciences (UAS) focus on practical and professional skills, offering programs designed in collaboration with industries. These institutions emphasize hands-on training and internships, typically providing Bachelor's and Master's degrees with shorter programs, often three to four years for a Bachelor's degree. UAS have strong connections with local businesses and industries, ensuring graduates are well-prepared for the job market. */}
  
      {/* Regular universities, on the other hand, focus on theoretical and academic education, offering a broader range of programs including Bachelor's, Master's, and Doctoral degrees. These institutions emphasize research and academic knowledge, often requiring a longer period of study for degrees. Regular universities are research-intensive and offer opportunities for students to engage in cutting-edge research projects. Graduates from regular universities are well-equipped for both professional careers and further academic pursuits. */}
    </>
  )
  

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
            {title: <><span id="gradientSub">Important Admission Information</span></>, description: admissionRequirements},
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