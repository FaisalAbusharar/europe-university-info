"use client"
import Country from '../../../components/country';
import '../../../styles/countrypage.css'
import ScrollTo from '../../../components/scrollFunction'



const backgroundColorStyle = 'linear-gradient(to bottom, rgb(0, 0, 0), rgba(51, 0, 0, 1))'
const backgroundColorObjectStyle: number[] = [150, 50, 0]

const admissionRequirements = (
    <>
        Many Norwegian universities require specific qualifications for admission. For bachelor’s programs, you generally need a recognized upper secondary education (the Norwegian Higher Education Entrance Qualification, GSU). Master’s programs typically require a relevant bachelor’s degree. Applications to most bachelor’s programs taught in Norwegian are submitted through the central admission service (Samordna Opptak). Many programs (especially those taught in English) also require proof of language proficiency, typically via exams like <a href="https://ielts.org" target="_blank" rel="noopener noreferrer" id="hyperlink">IELTS</a>, <a href="https://www.ets.org/toefl.html" target="_blank" rel="noopener noreferrer" id="hyperlink">TOEFL</a>, <a href="https://www.pearsonpte.com" target="_blank" rel="noopener noreferrer" id="hyperlink">PTE</a>, or <a href="https://www.cambridgeenglish.org/test-your-english" target="_blank" rel="noopener noreferrer" id="hyperlink">Cambridge English</a>. Check the specific admission criteria for your chosen program on official university websites or the Study in Norway portal.
    </>
);

const internationalAdmissionInformationText = (
    <>
        Bachelor’s degree applicants must have a high-school diploma that qualifies for higher education in their country (equivalent to Norway’s GSU). Master’s degree applicants must hold a relevant bachelor’s degree. Some programs (particularly in arts or technology) may have additional requirements or entrance exams. Non-native English speakers usually must demonstrate English proficiency with tests such as <a href="https://ielts.org" target="_blank" rel="noopener noreferrer" id="hyperlink">IELTS</a>, <a href="https://www.ets.org/toefl.html" target="_blank" rel="noopener noreferrer" id="hyperlink">TOEFL</a>, <a href="https://www.pearsonpte.com" target="_blank" rel="noopener noreferrer" id="hyperlink">PTE</a>, or <a href="https://www.cambridgeenglish.org/test-your-english" target="_blank" rel="noopener noreferrer" id="hyperlink">Cambridge English</a>. Applications for bachelor’s programs (Norwegian-language instruction) are usually submitted via the national Samordna Opptak system (with options to select multiple programs), with deadlines typically in January for September intake. English-taught or postgraduate programs may have separate application systems and deadlines; check the university or Study in Norway site for details.
    </>
);

const europeanAdmissionInformation = (
    <>
        EU/EEA students enjoy the same admission processes as other applicants. Public universities in Norway <strong>do not charge tuition fees</strong> for EU/EEA/Swiss citizens. The academic requirements remain the same: a qualifying secondary diploma for bachelor’s studies or a recognized bachelor’s degree for master’s studies. Many bachelor’s programs use the Samordna Opptak system (allowing multiple program choices). Non-native English speakers often need to provide proof of English proficiency (e.g. IELTS, TOEFL, PTE) for English-taught programs. EU/EEA students do not need a study visa but must register with local authorities after arrival; they are allowed to work while studying. For specific program requirements and application dates, visit the Study in Norway portal or individual university websites.
    </>
);

const internationalUniversityInformationText = (
    <>
        Norway has many reputable universities for international students. Top institutions include <a href="https://www.uio.no/english/" target="_blank" rel="noopener noreferrer" id="hyperlink">University of Oslo (UiO)</a>, <a href="https://www.ntnu.edu/" target="_blank" rel="noopener noreferrer" id="hyperlink">Norwegian University of Science and Technology (NTNU)</a>, <a href="https://www.uib.no/en" target="_blank" rel="noopener noreferrer" id="hyperlink">University of Bergen (UiB)</a>, <a href="https://en.uit.no/" target="_blank" rel="noopener noreferrer" id="hyperlink">UiT The Arctic University of Norway (UiT)</a>, and specialized schools like <a href="https://www.nhh.no/en/" target="_blank" rel="noopener noreferrer" id="hyperlink">NHH Norwegian School of Economics</a> and <a href="https://www.bi.edu/" target="_blank" rel="noopener noreferrer" id="hyperlink">BI Norwegian Business School</a>. To explore all options, use the official <a href="https://studyinnorway.no/higher-education-institutions-norway" target="_blank" rel="noopener noreferrer" id="hyperlink">Study in Norway</a> site, which lists universities and their programs. Consider each location carefully – factors like living costs, climate, and available student services vary across Norway – before choosing where to apply.
    </>
);

const whyChooseNorway = (
    <>
        Norway is known for its high-quality, research-driven education and innovative learning methods. Public universities are tuition-free for EU/EEA students and offer many programs in English, especially in fields like engineering, computer science, and environmental studies. The country consistently ranks high in quality of life, with excellent public services, a strong focus on sustainability, and one of the safest environments in the world. International students benefit from substantial support systems (e.g. student welfare organizations that provide housing and health services) and are allowed to work part-time (up to 20 hours/week) during studies. After graduation, non-EU graduates may apply for a one-year job-seeker permit to find work. The Norwegian lifestyle (outdoor activities, cultural experiences, etc.) and the chance to experience the natural beauty of fjords and northern lights are also major draws.
    </>
);

const permitInformation = (
    <>
        <span id="warning">Please check the <a id="hyperlink" href="https://www.udi.no/en/want-to-apply/studies/studietillatelse" target="_blank" rel="noopener noreferrer">official UDI site</a> for detailed information.</span> If you plan to study in Norway for more than 3 months and are a non-EU/EEA/Swiss national, you must apply for a student residence permit. If granted, this permit allows you to work part-time (up to 20 hours per week) and to bring family members to live with you in Norway. Note that time spent on a study permit does <strong>not</strong> count towards the residence period for permanent residency. EU/EEA/Swiss students do not need a residence permit but must register locally after arrival.
    </>
);

const visaGeneralRequirements = (
  <>
    <p id="warning">
      <strong>It's recommended not to rely solely on this site. Always verify with official government sources.</strong>
    </p> To obtain a Norwegian study permit, you generally need: a valid passport, an official acceptance letter from your Norwegian institution, and proof of full-time enrollment. You must also demonstrate sufficient financial means (about NOK 166,859 per year ≈ €14,300, or ~NOK 15,169/month ≈ €1,290/month) and secure accommodation. Additionally, proof of paid tuition or exemption (if applicable) and health insurance covering your stay are required. Applicants usually submit an online application to UDI (or at a Norwegian embassy/consulate) along with these documents.
  </>
);

const visaFinancialRequirements = (
  <>
    <p id="warning">
      <strong>It's recommended not to rely solely on this site. Always verify with official government sources.</strong>
    </p> You must show you have enough funds to cover living expenses in Norway. The required amount is currently set at NOK 15,169 per month (NOK 166,859 per year), which is approximately €1,290/month or €14,300/year. Typically, you prove this by having the funds in your own Norwegian bank account or in a blocked (deposit) account at the educational institution. Student loans and official grants can also count. (Note: parental or third-party bank statements are usually not accepted unless deposited in Norway.) Provide a recent bank statement or financial guarantee covering at least one year of study.
  </>
);

const visaInsuranceRequirements = (
  <>
    <p id="warning">
      <strong>It's recommended not to rely solely on this site. Always verify with official government sources.</strong>
    </p> Health insurance is required for your permit application. EU/EEA students can use their European Health Insurance Card (EHIC) for medical coverage. Non-EU/EEA students must purchase comprehensive travel/health insurance covering medical expenses for their stay. Providers like{" "}
    <a href="https://www.axa.no/" target="_blank" rel="noopener noreferrer" id="hyperlink">AXA Norway</a> or{" "}
    <a href="https://www.allianz.no/" target="_blank" rel="noopener noreferrer" id="hyperlink">Allianz</a> offer plans for international students. After arrival, EU/EEA students may join the Norwegian National Insurance Scheme (Folketrygden) by registering in the National Registry.
  </>
);

const internationalTuitionFees = (
    <a>
        Public universities in Norway do not charge tuition fees for students from the EU/EEA/Switzerland. Non-EU/EEA students normally pay tuition fees, which vary by program and institution. For example, some English-taught master’s programs may charge roughly NOK 80,000–140,000 per year (about €7,000–13,000). Always check the exact tuition on the university’s official website.
    </a>
);

const europeanStudentsUniversities = (
    <>
        European (EU/EEA) students have access to Norwegian higher education with no tuition fees at public institutions. Admission requirements are the same as for other applicants – e.g. a qualifying high school diploma for bachelor’s or a relevant bachelor’s degree for master’s – and English proficiency tests if needed. Many bachelor’s programs are applied to via the Samordna Opptak service, which allows multiple program choices. After arrival, EU/EEA students must register with local authorities; they can work while studying and can immediately seek employment after graduation (no permit needed). For detailed application deadlines and requirements, consult Study in Norway or university sites.
    </>
);

const RegularVSUasUni = (
    <>
        Universities in Norway (e.g. University of Oslo, NTNU) focus on theoretical and research-oriented education, offering full bachelor’s, master’s, and doctoral programs. These institutions emphasize academic knowledge and research projects. In contrast, University Colleges (høgskoler) and Universities of Applied Sciences (e.g. Kristiania University College, OsloMet) emphasize practical, professionally oriented training and often collaborate closely with industry. They typically offer shorter bachelor’s and master’s programs focused on hands-on skills and immediate employability.
    </>
);

const norwayAdvantages = [
    "High Quality Education: Renowned universities with innovative, research-driven programs.",
    "Tuition Free for EU/EEA: Public universities do not charge tuition for EU/EEA/Swiss students.",
    "Many English Programs: Numerous bachelor’s and master’s programs are offered in English across various fields.",
    "Excellent Quality of Life: Norway offers high living standards, comprehensive public services, and a safe, welcoming environment.",
    "Strong Student Support: Universities and student welfare organizations (Samskipnad) provide housing, health, and academic services.",
    "Work Opportunities: Students can work part-time (20h/week) during studies, and graduates (non-EU) can apply for a 1-year job-seeker permit after finishing their degree.",
    "Beautiful Environment: Access to pristine nature, with opportunities for outdoor activities (fjords, mountains, northern lights).",
    "English Proficiency: High English skills among Norwegians make daily life and studies easier for international students."
];

const norwayDisadvantages = [
    "Cold Climate and Long Winters: Extended cold, dark winter months can be challenging to adapt to.",
    "High Cost of Living: Major cities (especially Oslo) have high prices for housing, food, and transport.",
    "Language Barrier: While English is widely spoken, learning Norwegian is often necessary for daily life and many jobs.",
    "Limited Scholarships: Norway offers few general scholarships for international students; funding largely relies on personal means or specific grants.",
    "Competitive Job Market: The overall job market is relatively small; fluency in Norwegian greatly enhances employment prospects after graduation.",
    "Administrative Processes: Visa and registration procedures can be slow and require detailed documentation.",
    "Reduced Social Activity in Winter: Outdoor and social activities may be limited during the cold winter season.",
    "Short Post-Study Stay: Non-EU graduates have only one year to secure work before needing a skilled-worker visa."
];



const Norway = () => {
    const CountryInformation = {
        countryName: "NORWAY",
        countryNameOptional: "NORWEGIAN",
        admissionInformation: europeanAdmissionInformation,
        internationalAdmissionInformation: internationalAdmissionInformationText,
        universityInformation: europeanStudentsUniversities,
        internationalUniversityInformation: internationalUniversityInformationText,
        internationalTuitionFeesInformation: internationalTuitionFees,
        visaRequirementsRequirements: visaGeneralRequirements,
        visaRequirementsFinancials: <div id="financial-requirements">{visaFinancialRequirements}</div>,
        visaRequirementsInsurance: visaInsuranceRequirements,
        footerInformation: "We always recommend verifying this information on official Goverment or University Websites, Don't rely on this information.",
        whyChooseCountry: [{title: <>WHY <p id="gradientSub">NORWAY?</p></>, description: whyChooseNorway}],
        advantages: norwayAdvantages,
        disadvantages: norwayDisadvantages,
        titleColor1: "#800000ff",
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

export default Norway;