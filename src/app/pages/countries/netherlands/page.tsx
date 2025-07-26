"use client"
import Country from '../../../components/country';
import '../../../styles/countrypage.css'



const backgroundColorStyle = 'linear-gradient(to bottom, rgb(0, 0, 0), rgb(103, 57, 0))'
const backgroundColorObjectStyle: number[] = [255, 57, 40]

/* Information Area */
const admissionRequirements = (
    <>
        Admission requirements are set by each Dutch institution and vary by program. Generally, Bachelor’s applicants need a secondary school diploma equivalent to the Dutch pre-university (VWO) or preparatory college (HBO) level. Master’s applicants need a relevant Bachelor’s degree. Dutch universities do not use SATs or mandatory entrance exams for most programs, but some competitive programs (e.g. Medicine, Dentistry) have strict numerus fixus admissions. Applicants must meet English-language requirements, typically proven by tests like IELTS or TOEFL (often IELTS ≥6.0, TOEFL ≥550 or 213 iBT). Prospective students should use the <a id="hyperlink" href="https://www.studyinnl.org" target="_blank" rel="noopener noreferrer">Study in NL</a> portal or university websites to check specific criteria for their chosen program.
    </>
);

const internationalAdmissionInformationText = (
    <>
        For international (non-EU/EEA) students: Bachelor’s programs require a foreign high-school diploma qualifying for higher education. Master’s programs require a Bachelor’s degree in a related field; Dutch HBO (UAS) Master’s programs often also ask for relevant work experience. Some programs include selection procedures (tests, interviews) for admission. Non-native English speakers must show proficiency (IELTS, TOEFL, etc). Applications are usually submitted via the national Studielink portal (<a id="hyperlink" href="https://www.studielink.nl" target="_blank" rel="noopener noreferrer">Studielink</a>). Note deadlines (e.g. Jan 15 for limited‑capacity programs, May 1 for others). After admission, universities will guide non‑EU students through the visa/permit application with the Dutch Immigration Service (IND).
    </>
);

const europeanAdmissionInformation = (
    <>
        EU/EEA students pay the statutory tuition fee (~€2,530 for 2024/2025) and have access to the same programs as Dutch students. Admission requires a foreign secondary diploma (for Bachelor’s) or a recognized Bachelor’s degree (for Master’s); HBO Master’s may require work experience. English-taught programs still require IELTS/TOEFL or equivalent. EU/EEA nationals do not need a student visa/residence permit. Use Studielink for applications and check official deadlines (Jan 15 or May 1). For detailed requirements, see <a id="hyperlink" href="https://www.studyinnl.org" target="_blank" rel="noopener noreferrer">Study in NL</a> or university sites.
    </>
);

const internationalUniversityInformationText = (
    <>
        The Netherlands has many top-ranked universities for international students, including <a id="hyperlink" href="https://www.tudelft.nl/en/" target="_blank" rel="noopener noreferrer">Delft University of Technology</a>, <a id="hyperlink" href="https://www.uva.nl/en" target="_blank" rel="noopener noreferrer">University of Amsterdam</a>, <a id="hyperlink" href="https://www.wur.nl/en" target="_blank" rel="noopener noreferrer">Wageningen University</a>, <a id="hyperlink" href="https://www.leiden.edu/" target="_blank" rel="noopener noreferrer">Leiden University</a>, <a id="hyperlink" href="https://www.rug.nl/" target="_blank" rel="noopener noreferrer">University of Groningen</a>, and <a id="hyperlink" href="https://www.eur.nl/en" target="_blank" rel="noopener noreferrer">Erasmus University Rotterdam</a>. Use the official Study in NL portal (<a id="hyperlink" href="https://www.studyinnl.org" target="_blank" rel="noopener noreferrer">Study in NL</a>) to explore programs. Consider location: living costs, climate, and student services vary by city. Research these factors before choosing a university.
    </>
);

const whyChooseNetherlands = (
    <>
        The Netherlands is renowned for its high-quality education and many internationally ranked universities. EU/EEA students benefit from low statutory tuition fees, and there are numerous scholarships for international students. Dutch universities offer a wide range of English-taught programs and emphasize innovative, student-centered learning. International students may work part-time (up to 16 hours/week with a student visa) and have 1 year after graduation (the “orientation year”) to find a job or start a business. The country’s high standard of living, strong support for students, and focus on research and technology make it an attractive study destination.
    </>
);

const permitInformation = (
    <>
        <span id="warning">Check the <a id="hyperlink" href="https://ind.nl/en" target="_blank">official IND site</a> for detailed visa/permit procedures.</span> For non-EU/EEA students, a student visa (MVV) and residence permit (VVR) are required. Dutch universities (recognized sponsors) submit the permit application on your behalf. The permit duration counts toward the five-year requirement for permanent residence. Graduates can apply for a 1-year “orientation year” permit to seek employment. You may bring dependents (spouse/children), but they must apply separately and you must act as their sponsor.
    </>
);

const visaGeneralRequirements = (
    <>
    <p id="warning"><strong>Always verify visa information on official sites (IND).</strong></p> For a stay over 90 days, non-EEA students need a Dutch student visa/residence permit. You must have a passport valid for at least 6 months beyond arrival. Required documents typically include the official university letter of acceptance, proof of sufficient funds (see below), and private health insurance (see next section). The university will advise you on submitting these documents to the Dutch embassy or the IND.
    </>
);

const visaFinancialRequirements = (
    <>
    <p id="warning"><strong>Check the <a id="hyperlink" href="https://ind.nl/en/income-requirements-study" target="_blank">IND site</a> for updates. </strong></p> You must show the Dutch “study norm” in your bank account for each year of study. For 2025, this is €1,094.12 per month, roughly €13,130 per year. This money should be on an account in your name, fully accessible by you. Bank statements (max 3 months old) proving this balance are required. Some students deposit the amount in a blocked account or at their institution as proof.
    </>
);

const visaInsuranceRequirements = (
    <>
        <p id="warning"><strong>Check official guidelines (e.g. IND, SVB) for health insurance.</strong></p> International students in the Netherlands are legally required to have health insurance. Students studying only (no paid work) cannot enroll in Dutch public insurance; they must use either an EU Health Insurance Card (EHIC) or a private international insurance that meets EU standards. If you work (even part-time), you must take out Dutch public health insurance. Proof of continuous coverage is needed for the residence permit application.
    </>
);

const internationalTuitionFees = (
    <a>
    For EU/EEA students, the government-set statutory tuition fee is about €2,530 per year (2024/25). For non-EU/EEA students, tuition varies by program: on average Bachelor’s fees range roughly €9,000–20,000 per year, and Master’s fees €12,000–30,000. Always check the specific program page for exact fees.
    </a>
);

const europeanStudentsUniversities = (
    <>
        EU/EEA students should explore programs via <a id="hyperlink" href="https://www.studyinnl.org" target="_blank" rel="noopener noreferrer" >Study in NL</a>. Each university sets its own criteria: high school diplomas for Bachelor’s, Bachelor’s degrees for Master’s (HBO Master’s may require work experience). Some programs have entrance exams or limited places. English-taught programs still require IELTS/TOEFL or equivalent. Apply through Studielink before general deadlines (e.g. Jan 15 or May 1). Visit Study in NL or university websites for details on application periods and requirements.
    </>
);

const RegularVSUasUni = (
    <>
      In the Netherlands, “HBO” institutions (universities of applied sciences) focus on practical, profession-oriented training. HBO Bachelor’s programs typically take 4 years and include applied projects and internships. Research universities (“WO”) emphasize theoretical academic education; Bachelor’s programs are usually 3 years, and universities offer Bachelor’s, Master’s, and Doctoral degrees. Research universities involve more independent study and research projects, preparing graduates for both professional careers and further academic studies. Both types maintain high standards, but they differ in teaching style and program length.
    </>
);

const netherlandsAdvantages = [
    "High academic reputation: Dutch universities rank highly worldwide, especially in engineering, agriculture, and social sciences.",
    "Affordable tuition for EU/EEA students: Statutory fees (~€2,530) are much lower than in many countries, and moderate fees for others with many scholarships available.",
    "Many English programs: A wide array of Bachelor’s and Master’s courses are taught in English across disciplines.",
    "Excellent quality of life: The Netherlands has strong public services, infrastructure, and student support networks.",
    "Safe and stable: It is considered one of the safer countries in Europe with low violent crime rates.",
    "Part-time work allowed: International students can work (up to 16 h/week, full-time in summer) under their student permit.",
    "International community: Welcoming multicultural environment with students from around the world.",
    "Great location: Centrally located in Europe with easy travel to other EU countries.",
    "Innovation and research: Strong focus on R&D and technology transfer (e.g. in tech hubs like Delft and Eindhoven)."
];

const netherlandsDisadvantages = [
    "Weather: The climate can be rainy, cloudy and windy; winters are milder than Scandinavia but can feel damp.",
    "Cost of living: Cities like Amsterdam or Utrecht have high housing and living costs compared to some EU areas.",
    "Language barrier for locals: Outside university, Dutch is widely spoken; knowledge of Dutch is important for part-time jobs and social integration.",
    "Housing shortage: Student accommodation in popular cities is limited, requiring early planning.",
    "Visa bureaucracy: Non-EU applicants must navigate detailed permit procedures with the IND.",
    "Competition for top programs: Popular programs (e.g. Medicine) are highly competitive with limited spots.",
    "Cultural adjustment: Dutch direct communication style and social norms may require adaptation.",
    "Public transport outside cities: Rural areas rely on less frequent buses; many students use bicycles or cars in smaller towns.",
    "Application deadlines: Unlike Finland's joint system, applications are individual and deadlines vary by institution."
];



const Netherlands = () => {
    const CountryInformation = {
        countryName: "NETHERLANDS",
        countryNameOptional: "DUTCH",
        admissionInformation: europeanAdmissionInformation,
        internationalAdmissionInformation: internationalAdmissionInformationText,
        universityInformation: europeanStudentsUniversities,
        internationalUniversityInformation: internationalUniversityInformationText,
        internationalTuitionFeesInformation: internationalTuitionFees,
        visaRequirementsRequirements: visaGeneralRequirements,
        visaRequirementsFinancials: <div id="financial-requirements">{visaFinancialRequirements}</div>,
        visaRequirementsInsurance: visaInsuranceRequirements,
        footerInformation: "We always recommend verifying this information on official Goverment or University Websites, Don't rely on this information.",
        whyChooseCountry: [{title: <>WHY <p id="gradientSub">THE NETHERLANDS?</p></>, description: whyChooseNetherlands}],
        advantages: netherlandsAdvantages,
        disadvantages: netherlandsDisadvantages,
        titleColor1: "#ad1610",
        titleColor2: "#101aad",
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

export default Netherlands;