"use client"
import Country from '../../../components/country';
import '../../../styles/countrypage.css'
import ScrollTo from '../../../components/scrollFunction'



const backgroundColorStyle = 'linear-gradient(to bottom, rgb(0, 0, 0), rgb(0, 26, 51))'
const backgroundColorObjectStyle: number[] = [0, 50, 150]

/* Information Area */
const admissionRequirements = (
  <>
    UK universities require qualifications equivalent to UK A-levels for bachelor’s programs. This typically means a high-school diploma or international A-levels (like Cambridge International A-levels) or the IB diploma. Applications for undergraduate courses are made via <a href="https://www.ucas.com" target="_blank" rel="noopener noreferrer">UCAS</a>, where you can choose up to five courses (four for medicine, veterinary, or Oxford/Cambridge). Deadlines are usually mid-January for entry the following autumn. Universities issue conditional or unconditional offers based on grades, interviews, personal statements, and references. Some courses require additional tests (e.g., LNAT for law, BMAT for medicine). Check your program’s specific requirements on <a href="https://www.ucas.com" target="_blank" rel="noopener noreferrer">UCAS</a> or university websites.
  </>
);

const internationalAdmissionInformationText = (
  <>
    For Bachelor’s degrees, you need a high-school diploma qualifying for higher education in your country; for Master’s degrees, a Bachelor’s degree is required. Some programs may require entrance exams, interviews, or standardized tests like SAT. Non-native English speakers must demonstrate proficiency through exams such as <a href="https://ielts.org/" target="_blank" rel="noopener noreferrer" id="hyperlink">IELTS</a>, <a href="https://www.pearsonpte.com/" target="_blank" rel="noopener noreferrer" id="hyperlink">PTE</a>, <a href="https://www.ets.org/toefl.html" target="_blank" rel="noopener noreferrer" id="hyperlink">TOEFL</a>, or <a href="https://www.cambridgeenglish.org/test-your-english/" target="_blank" rel="noopener noreferrer" id="hyperlink">Cambridge English</a>. Applications for undergraduate study go through UCAS in January for September entry. Postgraduate applications are made directly to universities. Check program-specific admission criteria on official sites.
  </>
);

const europeanAdmissionInformation = (
  <>
    European students applying to UK universities generally follow the same admission rules as international students but may have additional considerations regarding tuition fees and visas due to Brexit. Bachelor’s programs require a high school diploma or equivalent; Master’s programs require a Bachelor’s degree. English proficiency proof through tests like <a href="https://ielts.org/" target="_blank" rel="noopener noreferrer" id="hyperlink">IELTS</a>, <a href="https://www.pearsonpte.com/" target="_blank" rel="noopener noreferrer" id="hyperlink">PTE</a>, <a href="https://www.ets.org/toefl.html" target="_blank" rel="noopener noreferrer" id="hyperlink">TOEFL</a>, or <a href="https://www.cambridgeenglish.org/test-your-english/" target="_blank" rel="noopener noreferrer" id="hyperlink">Cambridge English</a> is usually required. Apply via UCAS for undergraduate programs or directly for postgraduate study. Visit <a href="https://www.ucas.com" target="_blank" rel="noopener noreferrer" id="hyperlink">UCAS</a> or university websites for details.
  </>
);

const internationalUniversityInformationText = (
  <>
    The UK has many world-class universities including <a href="https://www.ox.ac.uk" target="_blank" rel="noopener noreferrer" id="hyperlink">University of Oxford</a>, <a href="https://www.cam.ac.uk" target="_blank" rel="noopener noreferrer" id="hyperlink">University of Cambridge</a>, <a href="https://www.imperial.ac.uk" target="_blank" rel="noopener noreferrer" id="hyperlink">Imperial College London</a>, <a href="https://www.ucl.ac.uk" target="_blank" rel="noopener noreferrer" id="hyperlink">University College London</a>, <a href="https://www.lse.ac.uk" target="_blank" rel="noopener noreferrer" id="hyperlink">London School of Economics</a>, <a href="https://www.ed.ac.uk" target="_blank" rel="noopener noreferrer" id="hyperlink">University of Edinburgh</a>, and <a href="https://www.manchester.ac.uk" target="_blank" rel="noopener noreferrer" id="hyperlink">University of Manchester</a>. To choose your university, consider course content, location, living costs, climate, and student services. Official resources like <a href="https://www.ucas.com" target="_blank" rel="noopener noreferrer" id="hyperlink">UCAS</a> and the <a href="https://study-uk.britishcouncil.org" target="_blank" rel="noopener noreferrer" id="hyperlink">British Council Study UK</a> site can help.
  </>
);

const whyChooseUK = (
  <>
    The UK offers world-class, research-led education with innovative, student-centered teaching methods. It has a large multicultural student community, with over 600,000 international students yearly. Many programs include internships and work placements, and students can work part-time (up to 20 hours/week) on a student visa. Graduates can apply for the Graduate Route visa, allowing them to stay and work in the UK for at least 2 years after completing a bachelor’s or master’s degree (3 years for PhDs). The UK also offers numerous scholarships for international students and a vibrant student life with modern facilities and cultural experiences.
  </>
);

const permitInformation = (
  <>
    <span id="warning">Always verify visa information on the <a href="https://www.gov.uk/student-visa" target="_blank" rel="noopener noreferrer">official UK government site</a>.</span> Students planning to study in the UK for more than 6 months need a Student visa (the replacement for the Tier 4 visa). You must be at least 16 years old, have an unconditional offer from a licensed UK university, and receive a Confirmation of Acceptance for Studies (CAS) number from them. Applications are made online up to 6 months before your course starts.
  </>
);

const visaGeneralRequirements = (
  <>
    <p id="warning"><strong>Always check official sources for the most accurate and updated visa requirements.</strong></p> To apply for a UK Student visa, you must have a valid passport, CAS reference number, proof of finances (see below), and meet English language requirements. Some programs may require additional documents such as an ATAS certificate. The visa application fee is currently £524, plus an Immigration Health Surcharge (IHS) of £776 per year, giving access to the NHS healthcare system. Decisions usually take about 3 weeks.
  </>
);

const visaFinancialRequirements = (
  <>
    <p id="warning"><strong>Check official sources for the latest financial requirements.</strong></p> You must show proof of funds to cover tuition and living costs. Living costs are £1,483 per month in London or £1,136 per month elsewhere for up to 9 months. This means around £13,347 in London or £10,224 outside London in addition to tuition fees. Funds must be held for 28 consecutive days before applying. Bank statements or scholarship letters are accepted.
  </>
);

const visaInsuranceRequirements = (
  <>
    <p id="warning"><strong>Refer to official guidance for insurance requirements.</strong></p> Paying the Immigration Health Surcharge gives you access to the UK National Health Service (NHS) during your studies. Private insurance is not mandatory but can cover travel delays or repatriation. Once your visa is approved, you can access doctors and hospitals at no extra cost.
  </>
);

const internationalTuitionFees = (
  <>
    Tuition fees vary widely. International undergraduate fees typically range from £10,000 to £38,000 per year depending on the course and university, with professional degrees (medicine, veterinary) costing more. Master’s fees range between £10,000 and £30,000 annually. UK/EU students with settled or pre-settled status pay home fees capped around £9,250 per year in England (2024/25). Many scholarships are available for international students.
  </>
);

const europeanStudentsUniversities = (
  <>
    The UK has many world-class universities including <a href="https://www.ox.ac.uk" target="_blank" rel="noopener noreferrer" id="hyperlink">University of Oxford</a>, <a href="https://www.cam.ac.uk" target="_blank" rel="noopener noreferrer" id="hyperlink">University of Cambridge</a>, <a href="https://www.imperial.ac.uk" target="_blank" rel="noopener noreferrer" id="hyperlink">Imperial College London</a>, <a href="https://www.ucl.ac.uk" target="_blank" rel="noopener noreferrer" id="hyperlink">University College London</a>, <a href="https://www.lse.ac.uk" target="_blank" rel="noopener noreferrer" id="hyperlink">London School of Economics</a>, <a href="https://www.ed.ac.uk" target="_blank" rel="noopener noreferrer" id="hyperlink">University of Edinburgh</a>, and <a href="https://www.manchester.ac.uk" target="_blank" rel="noopener noreferrer" id="hyperlink">University of Manchester</a>. To choose your university, consider course content, location, living costs, climate, and student services. Official resources like <a href="https://www.ucas.com" target="_blank" rel="noopener noreferrer" id="hyperlink">UCAS</a> and the <a href="https://study-uk.britishcouncil.org" target="_blank" rel="noopener noreferrer" id="hyperlink">British Council Study UK</a> site can help.
  </>
);

const RegularVSUasUni = (
  <>
    The UK primarily distinguishes between research-intensive universities and specialized institutions. Research universities offer bachelor’s, master’s, and doctoral programs with a strong focus on academic study and research. Some institutions also offer professional or vocational courses, but the system is not divided exactly like Finland’s Universities of Applied Sciences (UAS) vs regular universities. Instead, many universities have partnerships with colleges offering more practical courses.
  </>
);

const UKAdvantages = [
  "World-class universities regularly ranked among the top globally.",
  "Large multicultural student community with diverse international networks.",
  "Student-centered teaching fostering critical thinking and creativity.",
  "Part-time work allowed up to 20 hours/week during term.",
  "Graduate Route visa allows staying in the UK for 2 years post-study.",
  "Numerous scholarships and financial aid options for international students.",
  "Access to modern libraries, labs, and rich cultural life.",
  "Strong focus on employability and internships."
];

const UKDisadvantages = [
  "High living costs, especially in London and major cities.",
  "International tuition fees can be expensive.",
  "UK weather can be colder and rainier than some students expect.",
  "Visa application fees and paperwork can be costly and time-consuming.",
  "High competition for popular courses with selective entry.",
  "Adjusting to a new academic system and culture may be challenging.",
  "Brexit-related changes have made fee and visa processes more complex for EU students."
];



const UnitedKingdom = () => {
    const CountryInformation = {
        countryName: "THE UNITED KINGDOM",
        countryNameOptional: "BRITISH",
        admissionInformation: europeanAdmissionInformation,
        internationalAdmissionInformation: internationalAdmissionInformationText,
        universityInformation: europeanStudentsUniversities,
        internationalUniversityInformation: internationalUniversityInformationText,
        internationalTuitionFeesInformation: internationalTuitionFees,
        visaRequirementsRequirements: visaGeneralRequirements,
        visaRequirementsFinancials: <div id="financial-requirements">{visaFinancialRequirements}</div>,
        visaRequirementsInsurance: visaInsuranceRequirements,
        footerInformation: "We always recommend verifying this information on official Goverment or University Websites, Don't rely on this information.",
        whyChooseCountry: [{title: <>WHY <p id="gradientSub">THE UNITED KINGDOM?</p></>, description: whyChooseUK}],
        advantages: UKAdvantages,
        disadvantages: UKDisadvantages,
        titleColor1: "#800000ff",
        titleColor2: "#1100ffff",
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

export default UnitedKingdom;