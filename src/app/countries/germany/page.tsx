import Country from '../../components/country';
import '../../styles/countrypage.css'

const europeanAdmissionInformation = (
    <>
        European students applying to German universities benefit from no tuition fees for bachelor’s and master’s programs, with courses primarily conducted in German. Bachelor’s programs require a high school diploma qualifying for higher education in their home country (e.g., Abitur or equivalent). Master’s programs typically require a bachelor’s degree in a related field, and some may require work experience. Some programs may include entrance exams, interviews, or a portfolio review. Non-native German speakers generally need to demonstrate language proficiency through exams like <a href="https://www.testdaf.de/de/" target="_blank" rel="noopener noreferrer" id="hyperlink">TestDaF</a>, <a href="https://en.dsh-germany.com/" target="_blank" rel="noopener noreferrer" id="hyperlink">DSH</a>, or <a href="https://www.goethe.de/en/index.html" target="_blank" rel="noopener noreferrer" id="hyperlink">Goethe-Zertifikat</a>. For English-taught programs, proficiency in English is often required, with exams like <a href="https://ielts.org/" target="_blank" rel="noopener noreferrer" id="hyperlink">IELTS</a>, <a href="https://www.ets.org/toefl.html" target="_blank" rel="noopener noreferrer" id="hyperlink">TOEFL</a>, or <a href="https://www.cambridgeenglish.org/test-your-english/" target="_blank" rel="noopener noreferrer" id="hyperlink">Cambridge</a> being accepted. Applications are often submitted through <a href="https://www.uni-assist.de/en/" target="_blank" rel="noopener noreferrer" id="hyperlink">Uni-assist</a> or directly to the universities. Some programs have different application periods, so check<a href="https://www.daad.de/de/" target="_blank" rel="noopener noreferrer" id="hyperlink">DAAD.de</a> or the university websites for specific requirements.
    </>
);


const internationalAdmissionInformationText = (
    <>
        European students applying to German universities should explore programs offered through <a href="https://www.daad.de/de/" target="_blank" rel="noopener noreferrer" id="hyperlink">DAAD.de</a>. Each university in Germany sets its own admission criteria, which may include requirements for high school diplomas, bachelor’s degrees, and relevant work experience for master’s programs. Some programs may require entrance exams, interviews, or a portfolio review, especially for fields like arts and design. Non-native German speakers often need to demonstrate proficiency through exams like <a href="https://www.testdaf.de/de/" target="_blank" rel="noopener noreferrer" id="hyperlink">TestDaF</a>, <a href="https://en.dsh-germany.com/" target="_blank" rel="noopener noreferrer" id="hyperlink">DSH</a>, or <a href="https://www.goethe.de/en/index.html" target="_blank" rel="noopener noreferrer" id="hyperlink">Goethe-Zertifikat</a>. For English-taught programs, proficiency in English is often required. Utilize <a href="https://www.uni-assist.de/en/" target="_blank" rel="noopener noreferrer" id="hyperlink">Uni-assist</a> to apply to multiple programs at once or apply directly to the universities. For specific details on application periods and requirements, visit <a href="https://www.daad.de/de/" target="_blank" rel="noopener noreferrer" id="hyperlink">DAAD.de</a> or the official websites of German universities.
    </>
);


const whyChooseGermany = (
    <>
        Germany is renowned for its world-class education and universities, which are consistently ranked among the top globally. Public universities in Germany typically offer free tuition for EU/EEA students, making it an affordable option for European students. Germany is a hub for research and innovation, particularly in fields like engineering, technology, and the sciences. Many degree programs are available in English, especially at the master’s level. Germany also provides numerous opportunities for European students to engage in internships, research projects, and collaborative studies, enhancing their academic experience. After graduation, European students benefit from the ease of movement within the EU, allowing them to pursue career opportunities both within Germany and across Europe.

    </>
);


const germanyAdvantages = [
    "High Quality of Education: German universities are renowned for their high academic standards and innovative teaching methods.",
    "No Tuition Fees for EU/EEA Students: Public universities in Germany offer free education to European students.",
    "Wide Range of Programs: A vast selection of programs is available, covering various fields and disciplines.",
    "Excellent Quality of Life: Germany offers a high standard of living with efficient public services and infrastructure.",
    "Very Safe Country: Germany is considered one of the safest countries to live and study in Europe.",
    "Extensive Student Support: Numerous services and resources are available to support students throughout their studies.",
    "Rich Cultural Heritage: Germany boasts a vibrant cultural scene with a wide array of activities and events.",
    "Diverse Community: A welcoming environment for European students with a mix of cultures and backgrounds",
    "Part-Time Work Opportunities: Students can work part-time to support their living expenses while studying.",
    "High Environmental Quality: Germany is known for its clean environment, green spaces, and commitment to sustainability.",
    "Easy Travel within the EU: Convenient and accessible travel options within the European Union.",
    "Networking Opportunities: Germany offers excellent opportunities to build professional networks, particularly in technology and engineering fields.",
    "Strong Focus on R&D: Germany emphasizes research and development, especially in STEM (Science, Technology, Engineering, Mathematics) sectors.",
];


const germanyDisadvantages = [
    "Language Barrier: While many programs are offered in English, knowing German is essential for daily life and certain programs.",
    "Higher Cost of Living: Major cities like Munich and Frankfurt can be more expensive than other European cities.",
    "Cultural Adjustment: Adapting to the German way of life and academic culture may require time and effort.",
    "Long Application Process: The admission process can be lengthy due to the need for document verification and other bureaucratic procedures.",
    "Cold Winters: Harsh winter weather in some regions may be challenging for students unaccustomed to it.",
    "Limited Part-Time Job Availability: Depending on the region and field of study, part-time job opportunities may be limited.",
    "Competition for Popular Programs: High demand for certain programs can lead to increased competition for admission.",
    "Public Transport Costs: While efficient, public transport can be costly, particularly in major cities.",
    "Bureaucracy: Navigating the administrative processes in Germany can be complex, especially for newcomers.",
    "Integration into Social Circles: It may take time to fully integrate into German social life, especially in smaller towns.",

];










const Germany = () => {
    const CountryInformation = {
        countryName: "GERMANY -",
        countryNameOptional: "GERMAN",
        admissionInformation: europeanAdmissionInformation,
        internationalAdmissionInformation: "University Info here" ,
        universityInformation: internationalAdmissionInformationText,
        internationalUniversityInformation: "International University Info Here.",
        visaRequirementsRequirements: "General Visa Requirements Here.",
        visaRequirementsFinancials: "Details about Financial Requirements Here.",
        visaRequirementsInsurance: "Health and Travel Insurance Information Here.",
        footerInformation: "I always recommend verifying this information on official Goverment or University Websites, Don't rely on this information.",
        whyChooseCountry: [{title: <>WHY <p id="gradientSub">GERMANY?</p></>, description: whyChooseGermany}],
        advantages: germanyAdvantages,
        disadvantages: germanyDisadvantages,
        titleColor1: "#fe0101",
        titleColor2: "#ffe600",

    
    }
    return (
        <div>
            <Country countryName={CountryInformation.countryName} countryNameOptional={CountryInformation.countryNameOptional}
            admissionInformation={CountryInformation.admissionInformation} internationalAdmissionInformation={CountryInformation.internationalAdmissionInformation}
            universityInformation={CountryInformation.universityInformation} internationalUniversityInformation={CountryInformation.internationalUniversityInformation}
            footerInformation={CountryInformation.footerInformation} titleColor1={CountryInformation.titleColor1} titleColor2={CountryInformation.titleColor2}
            visaRequirementsRequirements={CountryInformation.visaRequirementsRequirements} visaRequirementsFinancials={CountryInformation.visaRequirementsFinancials}
            visaRequirementsInsurance={CountryInformation.visaRequirementsInsurance} whyChooseCountry={CountryInformation.whyChooseCountry}
            advantages={CountryInformation.advantages} disadvantages={CountryInformation.disadvantages}
            ></Country>
        </div>
    )
}

export default Germany;