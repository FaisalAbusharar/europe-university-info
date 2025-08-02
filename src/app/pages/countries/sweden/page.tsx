"use client"
import Country from '../../../components/country';
import '../../../styles/countrypage.css'
import ScrollTo from '../../../components/scrollFunction'



const backgroundColorStyle = 'linear-gradient(to bottom, rgba(3, 0, 46, 1), rgba(51, 29, 0, 1))'
const backgroundColorObjectStyle: number[] = [0, 50, 150]

const admissionRequirements = (
    <>
        Swedish universities require applicants to meet general and specific entry criteria. For bachelor’s programs you need a completed upper secondary education (or equivalent) and proof of English proficiency. For master’s programs you generally need a relevant bachelor’s degree. Each program may also have specific course prerequisites (e.g. prior subjects) set by the university. Always check the program details on the official UniversityAdmissions portal or university website before applying.
    </>
);

const internationalAdmissionInformationText = (
    <>
        For international students, a high-school diploma (or equivalent) is required for bachelor’s studies, and a bachelor’s degree is required for master’s studies. Applications are made through <a href="https://www.universityadmissions.se/intl/start" target="_blank" rel="noopener noreferrer" id="hyperlink">Universityadmissions.se</a>: bachelor’s applicants can apply to up to 8 programmes and master’s applicants up to 4 programmes per admission round. There are two main admission rounds for autumn intake (<a href="https://www.universityadmissions.se/intl/start" target="_blank" rel="noopener noreferrer" id="hyperlink">January</a> and a second round in <a href="https://www.universityadmissions.se/intl/start" target="_blank" rel="noopener noreferrer" id="hyperlink">April</a>); spring start programs are more limited. Non-native English speakers must document proficiency via recognized tests (such as <a href="https://ielts.org/" target="_blank" rel="noopener noreferrer" id="hyperlink">IELTS</a>, <a href="https://www.ets.org/toefl.html" target="_blank" rel="noopener noreferrer" id="hyperlink">TOEFL</a>, <a href="https://www.pearsonpte.com/" target="_blank" rel="noopener noreferrer" id="hyperlink">PTE</a> or <a href="https://www.cambridgeenglish.org/test-your-english/" target="_blank" rel="noopener noreferrer" id="hyperlink">Cambridge</a>) as specified for each program. Check <a href="https://www.universityadmissions.se/intl/start" target="_blank" rel="noopener noreferrer" id="hyperlink">Universityadmissions.se</a> or each university’s site for exact requirements and application deadlines.
    </>
);

const europeanAdmissionInformation = (
    <>
        EU/EEA (and Swiss) students pay no tuition fees, just like Swedish citizens. For bachelor’s entry, they need a valid upper-secondary diploma; for master’s, a relevant bachelor’s degree. Some programs may have specific entrance tests or interviews, depending on the university. All applicants to English-taught programs must demonstrate English proficiency (e.g. via IELTS/TOEFL). Use the coordinated admissions system at Universityadmissions.se (apply in January for autumn intake). Always refer to Universityadmissions.se or the university’s official site for program-specific rules and deadlines.
    </>
);

const internationalUniversityInformationText = (
    <>
        There are many reputable universities in Sweden for international students. Notable examples include <a href="https://www.lu.se/lund-university" target="_blank" rel="noopener noreferrer" id="hyperlink">Lund University</a>, <a href="https://www.uu.se/en" target="_blank" rel="noopener noreferrer" id="hyperlink">Uppsala University</a>, <a href="https://www.su.se/english" target="_blank" rel="noopener noreferrer" id="hyperlink">Stockholm University</a>, <a href="https://www.kth.se/en" target="_blank" rel="noopener noreferrer" id="hyperlink">KTH Royal Institute of Technology</a>, and <a href="https://www.chalmers.se/en/" target="_blank" rel="noopener noreferrer" id="hyperlink">Chalmers University of Technology</a>. A good starting point is the official <a href="https://studyinsweden.se/" target="_blank" rel="noopener noreferrer" id="hyperlink">Study in Sweden</a> website or <a href="https://www.universityadmissions.se/intl/start" target="_blank" rel="noopener noreferrer" id="hyperlink">Universityadmissions.se</a> to browse programs and locations. When choosing, consider each university’s location and environment (living costs, climate, student services, etc.) in your decision.
    </>
);

const whyChooseSweden = (
    <>
        Sweden is known for its world-class education and high academic standards. Swedish universities often rank among the best globally, and the country offers over 1,000 programmes in English, especially in fields like technology and engineering. EU/EEA/Swiss students enjoy tuition-free study; many scholarships are also available to help cover costs. Students are allowed to work part-time (there is no hourly limit) during their studies. The Swedish teaching style emphasizes independent learning and critical thinking. After graduation, students may apply for a residence permit to seek employment in Sweden. Sweden also offers a high quality of life, excellent social services, and a safe, clean environment.
    </>
);

const permitInformation = (
    <>
        <span id="warning">
            Please check the <a id="hyperlink" href="https://www.migrationsverket.se/en/you-want-to-apply/study.html" target="_blank">official Swedish Migration Agency</a> site for detailed information.
        </span>{" "}
        Non-EU/EEA students must obtain a Swedish student residence permit before arriving. The permit is typically granted for the duration of your studies (often 1–2 years, depending on the institution) and can be extended as needed. The application fee for a student residence permit is usually around <strong>SEK 1,500 (approx. €130)</strong>. For each accompanying family member (spouse or child), the fee is also around <strong>SEK 1,500 (approx. €130)</strong>. 

        After graduating, you may apply for a residence permit to look for work or start a business in Sweden. You may bring your spouse/partner and children (under 18) if you can support them; they should apply at the same time as you. For full details, consult the Migration Agency.
    </>
);

const visaGeneralRequirements = (
    <>
        <p id="warning">
            <strong>It's recommended to not rely on this site for final guidance; always verify on the official government website.</strong>
        </p> To apply for a Swedish study permit you need: a passport valid beyond your planned stay; proof of final admission to full-time studies (including confirmation of paid tuition); the completed and signed permit application form; proof of sufficient financial means (see next section); and proof of comprehensive health/medical insurance. The application fee is usually <strong>SEK 1,500 (approx. €130)</strong>.
    </>
);

const visaFinancialRequirements = (
    <>
        <p id="warning">
            <strong>It's recommended to not rely on this site for final guidance; always verify on the official government website.</strong>
        </p> You must demonstrate you have enough funds to cover living costs. As of 2025, the maintenance requirement is at least <strong>SEK 10,584 per month (approx. €910)</strong>, or about <strong>SEK 126,000 per year (approx. €10,800)</strong> for a single student. Provide a recent bank statement showing at least this amount in your own account. (If you receive free housing and/or meals from the university, the required amount can be reduced.) If you have a spouse or partner, add about <strong>SEK 4,410/month (approx. €380)</strong>; add <strong>SEK 2,646/month (approx. €230)</strong> per child. Only your own or jointly accessible funds count; your parents’ accounts or blocked accounts are not accepted as sole proof.
    </>
);

const visaInsuranceRequirements = (
    <>
        <p id="warning">
            <strong>It's recommended to not rely on this site for final guidance; always verify on the official government website.</strong>
        </p> International students must have health insurance covering medical emergencies and hospitalization. If your study program is shorter than one year, you need private insurance valid for all medical costs and repatriation. Such policies typically cost <strong>SEK 1,000–3,000 (approx. €85–260)</strong> per year. If your studies are one year or longer, you should register in Sweden’s population register to gain access to the national health care system. Be prepared to submit proof of valid coverage with your application.
    </>
);


const internationalTuitionFees = (
    <>
        Tuition fees for non-EU/EEA students vary by program. On average, bachelor’s degree programs cost about SEK 129,000 per year (roughly €11,000). Humanities and social sciences programs tend to be in the range SEK 80,000–110,000 (about €6,800–9,400); technical and natural science programs range around SEK 120,000–145,000 (approx. €10,300–12,400); specialized fields like architecture can be up to SEK 295,000 per year (around €25,200). Check each program page on <a id="hyperlink" href="https://www.universityadmissions.se/" target="_blank" rel="noopener noreferrer">University Admissions</a> for exact figures. Many scholarships exist to help cover these costs.
    </>
);


const europeanStudentsUniversities = (
    <>
        European (EU/EEA/Swiss) applicants should explore programs at Universityadmissions.se, the national admissions portal. Each Swedish university sets its own entry criteria: generally a completed secondary diploma for bachelor's entry and a recognized bachelor's degree for master's entry. Some programs may include additional requirements (e.g. aptitude tests or interviews). Non-native English speakers must demonstrate proficiency via exams like IELTS, TOEFL, PTE or Cambridge. The UniversityAdmissions system lets you apply to multiple programs (up to 8 at bachelor level or 4 at master’s level) per round. For exact application periods and requirements, refer to Universityadmissions.se or the official university websites.
    </>
);

const RegularVSUasUni = (
    <>
        Swedish higher education institutions include “universities” (universitet) and “university colleges” (högskolor). University colleges tend to focus on practical, profession-oriented training in collaboration with industry and generally offer bachelor’s (3–4 year) and some master’s programs. They can only award doctoral degrees in specific fields if approved. Regular universities emphasize theoretical education and research, offering bachelor’s, master’s, and doctoral degrees. Both types require a similar duration for undergraduate degrees, but universities often provide a wider range of graduate and research opportunities, while university colleges are often more applied and local-industry oriented.
    </>
);

const swedenAdvantages = [
    "High-quality education: Swedish universities consistently rank among the best globally.",
    "No tuition for EU/EEA/Swiss students: EU/EEA and Swiss nationals study for free.",
    "Many English programs: Sweden offers over 1,000 degree programs in English.",
    "Work while studying: International students can work part-time without hourly restrictions.",
    "Strong research and innovation focus: Education emphasizes critical thinking and cutting-edge research.",
    "Extensive student support: Universities provide services (career centers, counseling, etc.) for students.",
    "High quality of life: Sweden has excellent public services, infrastructure, and safety.",
    "Environmental quality: Abundant nature and a commitment to sustainability.",
    "Easy travel: As an EU country, travel across Europe is convenient.",
    "Networking opportunities: Diverse, international student communities and global industry ties.",
    "Good post-study prospects: Graduates can seek employment in Sweden with a job-seeker permit."
];

const swedenDisadvantages = [
    "Cold climate: Long, dark winters can be difficult for some students.",
    "High cost of living: Living expenses are high (around SEK 10,584 per month).",
    "Housing shortage: Finding affordable accommodation, especially in big cities, can be challenging.",
    "Language considerations: Swedish is widely spoken; knowing some Swedish helps in daily life and job-hunting.",
    "Competitive admissions: Popular programs often have more applicants than available spots.",
    "Administrative procedures: Permit and enrolment processes can be complex and time-consuming.",
    "Cultural adjustment: Educational style (independent, group work) and social norms may require adaptation.",
    "Limited rural services: Public transport and job opportunities outside major urban areas are limited."
];



const Sweden = () => {
    const CountryInformation = {
        countryName: "SWEDEN",
        countryNameOptional: "SWEDISH",
        admissionInformation: europeanAdmissionInformation,
        internationalAdmissionInformation: internationalAdmissionInformationText,
        universityInformation: europeanStudentsUniversities,
        internationalUniversityInformation: internationalUniversityInformationText,
        internationalTuitionFeesInformation: internationalTuitionFees,
        visaRequirementsRequirements: visaGeneralRequirements,
        visaRequirementsFinancials: <div id="financial-requirements">{visaFinancialRequirements}</div>,
        visaRequirementsInsurance: visaInsuranceRequirements,
        footerInformation: "We always recommend verifying this information on official Goverment or University Websites, Don't rely on this information.",
        whyChooseCountry: [{title: <>WHY <p id="gradientSub">SWEDEN?</p></>, description: whyChooseSweden}],
        advantages: swedenAdvantages,
        disadvantages: swedenDisadvantages,
        titleColor1: "#003580",
        titleColor2: "#ffe600ff",
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

export default Sweden;