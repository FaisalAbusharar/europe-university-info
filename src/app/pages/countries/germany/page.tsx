"use client"
import Country from '../../../components/country';
import '../../../styles/countrypage.css'
import ScrollTo from '../../../components/scrollFunction'


const backgroundColorStyle = 'linear-gradient(to bottom, rgb(0, 0, 0), rgb(51, 26, 1))'
const backgroundColorObjectStyle: number[] = [150, 50, 0]

const europeanAdmissionInformation = (
    <>
        European students applying to German universities benefit from no tuition fees for bachelor’s and master’s programs, with courses primarily conducted in German. Bachelor’s programs require a high school diploma qualifying for higher education in their home country (e.g., Abitur or equivalent). Master’s programs typically require a bachelor’s degree in a related field, and some may require work experience. Some programs may include entrance exams, interviews, or a portfolio review. Non-native German speakers generally need to demonstrate language proficiency through exams like <a href="https://www.testdaf.de/de/" target="_blank" rel="noopener noreferrer" id="hyperlink">TestDaF</a>, <a href="https://en.dsh-germany.com/" target="_blank" rel="noopener noreferrer" id="hyperlink">DSH</a>, or <a href="https://www.goethe.de/en/index.html" target="_blank" rel="noopener noreferrer" id="hyperlink">Goethe-Zertifikat</a>. For English-taught programs, proficiency in English is often required, with exams like <a href="https://ielts.org/" target="_blank" rel="noopener noreferrer" id="hyperlink">IELTS</a>, <a href="https://www.ets.org/toefl.html" target="_blank" rel="noopener noreferrer" id="hyperlink">TOEFL</a>, or <a href="https://www.cambridgeenglish.org/test-your-english/" target="_blank" rel="noopener noreferrer" id="hyperlink">Cambridge</a> being accepted. Applications are often submitted through <a href="https://www.uni-assist.de/en/" target="_blank" rel="noopener noreferrer" id="hyperlink">Uni-assist</a> or directly to the universities. Some programs have different application periods, so check<a href="https://www.daad.de/de/" target="_blank" rel="noopener noreferrer" id="hyperlink">DAAD.de</a> or the university websites for specific requirements.
    </>
);


const europeanStudentsUniversities = (
    <>
        European students applying to German universities should explore programs offered through <a href="https://www.daad.de/de/" target="_blank" rel="noopener noreferrer" id="hyperlink">DAAD.de</a>. Each university in Germany sets its own admission criteria, which may include requirements for high school diplomas, bachelor’s degrees, and relevant work experience for master’s programs. Some programs may require entrance exams, interviews, or a portfolio review, especially for fields like arts and design. Non-native German speakers often need to demonstrate proficiency through exams like <a href="https://www.testdaf.de/de/" target="_blank" rel="noopener noreferrer" id="hyperlink">TestDaF</a>, <a href="https://en.dsh-germany.com/" target="_blank" rel="noopener noreferrer" id="hyperlink">DSH</a>, or <a href="https://www.goethe.de/en/index.html" target="_blank" rel="noopener noreferrer" id="hyperlink">Goethe-Zertifikat</a>. For English-taught programs, proficiency in English is often required. Utilize <a href="https://www.uni-assist.de/en/" target="_blank" rel="noopener noreferrer" id="hyperlink">Uni-assist</a> to apply to multiple programs at once or apply directly to the universities. For specific details on application periods and requirements, visit <a href="https://www.daad.de/de/" target="_blank" rel="noopener noreferrer" id="hyperlink">DAAD.de</a> or the official websites of German universities.
    </>
);


const whyChooseGermany = (
    <>
        Germany is renowned for its world-class education and universities, which are consistently ranked among the top globally. Public universities in Germany typically offer free tuition for EU/EEA students, making it an affordable option for European students. Germany is a hub for research and innovation, particularly in fields like engineering, technology, and the sciences. Many degree programs are available in English, especially at the master’s level. Germany also provides numerous opportunities for European students to engage in internships, research projects, and collaborative studies, enhancing their academic experience. After graduation, European students benefit from the ease of movement within the EU, allowing them to pursue career opportunities both within Germany and across Europe.

    </>
);


const  TypesOfUnis = (
    <>
    Regular universities focus on theoretical and academic education, offering a broad range of programs, including Bachelor's, Master's, and Doctoral degrees. Universities emphasize research and academic knowledge, often requiring a longer period of study. They are ideal for students interested in pursuing careers in research or academia, as well as those seeking to engage in cutting-edge research projects.
    
    Universities of Applied Sciences (UAS) emphasize practical and professional skills, offering programs designed in close collaboration with industries. Programs typically include internships and are shorter in duration, often three to four years for a Bachelor's degree. Universities of Applied Sciences have strong connections with local businesses and industries, ensuring that graduates are well-prepared for the job market. They are particularly suited for students aiming for direct entry into the workforce after graduation.

    Colleges of Art and Music focus on creative fields, offering degrees in areas such as music, fine arts, design, and performing arts. The education here is highly specialized and tailored to nurturing artistic talent. Admission often requires the submission of a portfolio or an audition, depending on the field of study.
    </>
);


          
const admissionRequirements = (
    <>
    Many German universities and universities of applied sciences (UAS) require specific entrance exams, such as the <a href="https://www.testas.de/en/index_en.htm" target="_blank" rel="noopener noreferrer" id="hyperlink">TestAS</a> or <a href="https://satsuite.collegeboard.org/sat" target="_blank" rel="noopener noreferrer" id="hyperlink">SAT</a>, for admission. It's essential to check the specific requirements for your intended degree by visiting <a href="https://www.daad.de/de/" target="_blank" rel="noopener noreferrer" id="hyperlink">DAAD.de</a> or the respective university's website. Most universities with English-taught programs require a recognized English proficiency test, like <a href="https://ielts.org/" target="_blank" rel="noopener noreferrer" id="hyperlink">IELTS</a> or <a href="https://www.ets.org/toefl.html" target="_blank" rel="noopener noreferrer" id="hyperlink">TOEFL</a>, and often have minimum score requirements. Additionally, for programs taught in German, proficiency in German is mandatory, with exams like <a href="https://www.testdaf.de/de/" target="_blank" rel="noopener noreferrer" id="hyperlink">TestDaF</a> or <a href="https://en.dsh-germany.com/" target="_blank" rel="noopener noreferrer" id="hyperlink">DSH</a> being necessary. Be sure to review the admission criteria for your specific program well in advance to ensure you meet all necessary requirements.
    </>
);


const internationalAdmissionInformationText = (
    <>
    International students applying to German universities will need to meet specific admission criteria. For Bachelor’s programs, a high school diploma that qualifies for higher education in your home country is required. For Master’s programs, a relevant Bachelor’s degree is necessary, with some requiring work experience or additional exams. Non-native speakers must often prove their proficiency in German through <a href="https://www.testdaf.de/de/" target="_blank" rel="noopener noreferrer" id="hyperlink">TestDaF</a> or <a href="https://en.dsh-germany.com/" target="_blank" rel="noopener noreferrer" id="hyperlink">DSH</a>. For English-taught programs, proficiency exams like <a href="https://ielts.org/" target="_blank" rel="noopener noreferrer" id="hyperlink">IELTS</a>, <a href="https://www.ets.org/toefl.html" target="_blank" rel="noopener noreferrer" id="hyperlink">TOEFL</a>, or <a href="https://www.cambridgeenglish.org/test-your-english/" target="_blank" rel="noopener noreferrer" id="hyperlink">Cambridge</a> are usually required. Applications can be submitted directly to universities or through <a href="https://www.uni-assist.de/en/" target="_blank" rel="noopener noreferrer" id="hyperlink">Uni-assist</a>. Always check <a href="https://www.daad.de/de/" target="_blank" rel="noopener noreferrer" id="hyperlink">DAAD.de</a> or university websites for specific requirements and deadlines.
    </>
);


const internationalUniversityInformationText = (
    <>
    Germany is home to many prestigious institutions, including <a href="https://www.lmu.de/en/" target="_blank" rel="noopener noreferrer" id="hyperlink">LMU Munich</a>, <a href="https://www.tum.de/en/" target="_blank" rel="noopener noreferrer" id="hyperlink">TUM</a>, <a href="https://www.uni-heidelberg.de/en" target="_blank" rel="noopener noreferrer" id="hyperlink">Heidelberg University</a>, <a href="https://www.hu-berlin.de/en?set_language=en" target="_blank" rel="noopener noreferrer" id="hyperlink">Humboldt University of Berlin</a>, and <a href="https://www.fu-berlin.de/en/index.html" target="_blank" rel="noopener noreferrer" id="hyperlink">Free University of Berlin</a>. When choosing a university, consider factors like location, cost of living, and student services. The <a href="https://www.daad.de/de/" target="_blank" rel="noopener noreferrer" id="hyperlink">DAAD.de</a> website is a valuable resource for researching universities and understanding these aspects to ensure the best fit for your academic and personal needs.
    </>
);


const internationalTuitionFees = (
    <>
    Information about specific universities' tuition fees will be available to download here soon. The page should redirect. For international students, most public universities in Germany do not charge tuition fees for Bachelor’s and Master’s programs. However, a semester contribution fee of approximately<p id="warning">€150 to €350 per year</p> is required. Which covers administrative costs and student services. Some states may charge tuition fees for non-EU/EEA students, and private universities typically have tuition fees ranging from  <p id="warning">€10,000 to €20,000 per year</p> for both Bachelor’s and Master’s programs.
    </>
)

const visaGeneralRequirements = (
    <>
    <p id="warning"><strong>It's recommended to not rely on the information in this website. Government official websites are always more accurate.</strong></p> Assuming you are intending to stay for over 90 days in Germany for the duration of your studies, you will have to apply for a Residence Permit, and must fulfill some basic requirements to apply. You must have a passport that exceeds the duration of the residence permit you are applying for by at least 3 months. You must provide the official letter of acceptance issued by your hosting German University. You must have a copy of your completed and signed application form. You must provide proof of your financial ability to support yourself (
        <ScrollTo yOffset={-260} elementId="financial-requirements">
            <a href="#financial-requirements" id="hyperlink-insite">more information in the next section</a>
        </ScrollTo>
     ) You must provide proof of having obtained valid health and medical insurance that covers your entire duration of stay in Germany.
    </>
)

const visaFinancialRequirements = (
    <>
    <p id="warning"><strong>It's recommended to not rely on the information in this website. Government official websites are always more accurate.</strong></p> At present, a student must have a minimum of €934 per month for staying in Germany. This means the student must have a minimum of €11,208 per year for their expenses in Germany. You must provide a recent statement of your financial situation from your bank that shows you have at least €11,208 in your bank account. Note that students undertaking degree courses in Germany must have funds for one year at a time, and that the bank statements of an applicant’s parents or a shared or joint account will not be accepted for Germany student visa or residence permit.
    </>
)

const visaInsuranceRequirements = (
    <>
        <p id="warning"><strong>It's recommended to not rely on the information in this website. Government official websites are always more accurate.</strong></p> To obtain a residence permit for studying in Germany, international students must have health insurance covering medical expenses, hospitalization, and treatment with a minimum coverage of €30,000. Private insurance meeting German standards typically costs €500 to €1,200 annually. Documentation proving coverage is required for the application process; initial visa requires private insurance, and public health insurance through <a href="https://www.tk.de/en" id="hyperlink" target="_blank" rel="noopener noreferrer">Techniker Krankenkasse (TK)</a> or other providers may be accessible post-registration. Access health insurance through international student insurance providers like <a href="https://www.axa.com/" target="_blank" rel="noopener noreferrer" id="hyperlink">AXA</a>, <a href="https://www.allianzcare.com/" target="_blank" rel="noopener noreferrer" id="hyperlink">Allianz Care</a>, and <a href="https://www.cignaglobal.com/" target="_blank" rel="noopener noreferrer" id="hyperlink">Cigna Global</a>, university recommendations and student services, online insurance brokers such as <a href="https://www.insuremytrip.com/" target="_blank" rel="noopener noreferrer" id="hyperlink">InsureMyTrip</a> and <a href="https://www.squaremouth.com/" target="_blank" rel="noopener noreferrer" id="hyperlink">Squaremouth</a>, German insurance companies, government resources like the German Federal Foreign Office (<a href="https://www.auswaertiges-amt.de/en" target="_blank" rel="noopener noreferrer" id="hyperlink">Auswärtiges Amt</a>), and student union services for additional guidance.
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
        countryName: "GERMANY",
        countryNameOptional: "GERMAN",
        admissionInformation: europeanAdmissionInformation,
        internationalAdmissionInformation: internationalAdmissionInformationText ,
        universityInformation: europeanStudentsUniversities,
        internationalUniversityInformation: internationalUniversityInformationText,
        internationalTuitionFeesInformation: internationalTuitionFees,
        visaRequirementsRequirements: visaGeneralRequirements,
        visaRequirementsFinancials: <div id="financial-requirements">{visaFinancialRequirements}</div>,
        visaRequirementsInsurance: visaInsuranceRequirements,
        footerInformation: "I always recommend verifying this information on official Goverment or University Websites, Don't rely on this information.",
        whyChooseCountry: [{title: <>WHY <p id="gradientSub">GERMANY?</p></>, description: whyChooseGermany}],
        advantages: germanyAdvantages,
        disadvantages: germanyDisadvantages,
        titleColor1: "#fe0101",
        titleColor2: "#ffe600",
        backgroundColor: backgroundColorStyle,
        backgroundColorObject: backgroundColorObjectStyle,
        optionalInformation: [
            {title: <><span id="gradientSub">Important Admission Information</span></>, description: admissionRequirements},
            {title:  <><span id="gradientSub">Regular University</span>,  <span id="gradientSubSub">University of Applied Sciences</span> OR <span id="gradientSubSub">Colleges of Art and Music </span></>, description: TypesOfUnis},
        ],

        

    
    }
    return (
        <div>
            <Country countryName={CountryInformation.countryName} countryNameOptional={CountryInformation.countryNameOptional}
            admissionInformation={CountryInformation.admissionInformation} internationalAdmissionInformation={CountryInformation.internationalAdmissionInformation}
            internationalUniversityFees={CountryInformation.internationalTuitionFeesInformation}
            universityInformation={CountryInformation.universityInformation} internationalUniversityInformation={CountryInformation.internationalUniversityInformation}
            footerInformation={CountryInformation.footerInformation} titleColor1={CountryInformation.titleColor1} titleColor2={CountryInformation.titleColor2}
            visaRequirementsRequirements={CountryInformation.visaRequirementsRequirements} visaRequirementsFinancials={CountryInformation.visaRequirementsFinancials}
            visaRequirementsInsurance={CountryInformation.visaRequirementsInsurance} whyChooseCountry={CountryInformation.whyChooseCountry}
            advantages={CountryInformation.advantages} disadvantages={CountryInformation.disadvantages}
            optionalInformation={CountryInformation.optionalInformation} backgroundColor={CountryInformation.backgroundColor} backgroundColorObject={CountryInformation.backgroundColorObject}
            
            ></Country>
        </div>
    )
}

export default Germany;