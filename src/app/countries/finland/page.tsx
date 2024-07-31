"use client"
import Country from '../../components/country';
import '../../styles/countrypage.css'
import ScrollTo from '../../components/scrollFunction'




/* Information Area */

const aiceInformation = (
    <>
        If you are studying the British Education System, then you are in luck! Finland recognizes qualifications from the British Education System, such as boards like CIE & AQA. However, grades will need to be converted to a local grading system. It's important to note that not all Finnish universities accept these qualifications; many require UAS entrance exams or SAT scores for admission.

        If you’ve studied “English as a Second Language” in your O Levels, some Finnish universities may exempt you from providing an IELTS exam for English proficiency. However, this varies by institution, so it's essential to check the specific requirements of each university. You will need to provide your O Level results along with your A Level results; while O Level results are important, A Level results carry more weight in the admission process. Strong performance in subjects related to your intended degree is highly recommended.

        Having additional ways to prove your skills can also be beneficial for your admission. These include having a GitHub portfolio, professional certificates, and letters of endorsement. Typically, there is no requirement for proficiency in your mother tongue for admission in Finland.

        For UK grade equivalency, please check <a href="https://www.grb.uk.com/recruiter-research/a-level-equivalents" target="_blank" rel="noopener noreferrer" id="hyperlink">this website</a>.
    </>
);


const admissionRequirements = (
    <>
        Many Finnish universities of applied sciences (UAS) require UAS entrance exams or SAT scores for admission. It's essential to check the specific requirements for your intended degree by visiting <a href="https://www.studyinfo.fi" target="_blank" rel="noopener noreferrer">studyinfo.fi</a>. This will help ensure you meet all necessary criteria for your application. Most universities with English-taught programs require a SAT test and typically have minimum score requirements, so it's advisable to prepare for these exams in advance. Additionally, universities often recommend taking the UAS test, which is generally easier. Proof of English proficiency is also required, usually through IELTS or other recognized tests. Be sure to review the admission criteria for your specific program.
    </>
);



const internationalAdmissionInformationText = (
    <>
        Bachelor & Master Degrees, for Bachelor Programs you’ll require a high-school diploma that qualifies you for higher education in your home country, for Master Programs you’ll require a Bachelor’s degree, and for UAS master’s programs, two years of relevant work experience. additionally some admissions may include entrance exams, SAT tests, or interviews. Non-native English speakers typically must demonstrate their proficiency through exams like 
        ‎<a href="https://ielts.org/" target="_blank" rel="noopener noreferrer" id="hyperlink">ILETS</a>, <a href="https://www.pearsonpte.com/" target="_blank" rel="noopener noreferrer" id="hyperlink">PTE</a>, <a href="https://www.ets.org/toefl.html" target="_blank" rel="noopener noreferrer" id="hyperlink">TOEFL</a> or <a href="https://www.cambridgeenglish.org/test-your-english/" target="_blank" rel="noopener noreferrer" id="hyperlink">Cambridge</a> tests.
        You can apply with a Joint Application, which means you’ll be able to apply up to six programs with one application in January for autumn (September) studies. However some programs are outside the joint application periods, details vary, so check the program search at <a href="https://studyinfo.fi" target="_blank" rel="noopener noreferrer" id="hyperlink">Studyinfo.fi</a> or  connect with institutions directly. Most Universities have their own requirements, It's recommended to find the degree you want to study at <a href="https://studyinfo.fi" target="_blank" rel="noopener noreferrer" id="hyperlink">Studyinfo.fi</a> and check the admission criteria there.
    </>
)

const internationalUniversityInformationText = (
    <>
        There are many reputable Finnish universities available for international students, with the most notable being <a href="https://www.tuni.fi/en" target="_blank" id="hyperlink" rel="noopener noreferrer">Tampere University</a>, <a href="https://www.aalto.fi/en" target="_blank" id="hyperlink" rel="noopener noreferrer">Aalto University</a>, <a href="https://www.lut.fi/web/en/" target="_blank" id="hyperlink" rel="noopener noreferrer">LUT University</a>, <a href="https://www.helsinki.fi/en" id="hyperlink" target="_blank" rel="noopener noreferrer">the University of Helsinki</a>, and <a href="https://www.uef.fi/en" id="hyperlink" target="_blank" rel="noopener noreferrer">the University of Eastern Finland</a>. To pick your university, it’s recommended to use the <a href="https://www.studyinfinland.fi/universities" id="hyperlink" target="_blank" rel="noopener noreferrer">Official Finnish University Website</a>, check out the universities and their locations! Knowing the location is very important; you will need to understand the living costs, environment, climate, and available student services. Consider all of these factors before choosing your university.
    </>
)

const visaGeneralRequirements = (
    <>
    <p id="warning"><strong>It's recommended to check official government websites for this information and do not rely on the information here.</strong></p> Assuming you are intending to stay for over 90 days in Finland for the duration of your studies, you will have to apply for a Residence Permit, and must fulfill some basic requirements to apply. You must have a passport that exceeds the duration of the residence permit you are applying for by at least 3 months. You must provide the official letter of acceptance issued by your hosting Finnish University. You must have a copy of your completed and signed application form. You must provide proof of your financial ability to support yourself ( 
    <ScrollTo yOffset={-260} elementId="financial-requirements">
            <a href="#financial-requirements" id="hyperlink-insite">more information in the next section</a>
        </ScrollTo>
     ) You must provide proof of having obtained valid health and medical insurance that covers your entire duration of stay in Finland.
    </>
)

const visaFinancialRequirements = (
    <>
    <p id="warning"><strong>It's recommended to check official government websites for this information and do not rely on the information here.</strong></p> At present, a student must have a minimum of EUR 560 per month for staying in Finland. This means the student must have a minimum of EUR 6,720 per year for their expenses in Finland. You must provide a recent statement of your financial situation from your bank that shows you have at least EUR 6,720 in your bank account. Note that students undertaking degree courses in Finland must have funds for one year at a time, and that the bank statements of an applicant’s parents or a shared or joint account will not be accepted for Finland student visa or residence permit.
    </>
)

const visaInsuranceRequirements = (
    <>
        <p id="warning"><strong>It's recommended to check official government websites for this information and do not rely on the information here.</strong></p> To obtain a residence permit for studying in Finland, international students must have health insurance covering medical expenses, hospitalization, and treatment with a minimum coverage of EUR 30,000. Private insurance meeting Finnish standards typically costs EUR 500 to EUR 1,500 annually. Documentation proving coverage is required for the application process; initial visa requires private insurance, and public health insurance through <a href="https://www.kela.fi/web/en" id="hyperlink" target="_blank" rel="noopener noreferrer">Kela</a> may be accessible post-registration. Access health insurance through international student insurance providers like <a href="https://www.axa.com/" target="_blank" rel="noopener noreferrer" id="hyperlink">AXA</a>, <a href="https://www.allianzcare.com/" target="_blank" rel="noopener noreferrer" id="hyperlink">Allianz Care</a>, and <a href="https://www.cignaglobal.com/" target="_blank" rel="noopener noreferrer" id="hyperlink">Cigna Global</a>, university recommendations and student services, online insurance brokers such as <a href="https://www.insuremytrip.com/" target="_blank" rel="noopener noreferrer" id="hyperlink">InsureMyTrip</a> and <a href="https://www.squaremouth.com/" target="_blank" rel="noopener noreferrer" id="hyperlink">Squaremouth</a>, Finnish insurance companies, government resources like the Finnish Immigration Service (<a href="https://migri.fi/en/frontpage" target="_blank" rel="noopener noreferrer" id="hyperlink">Migri</a>), and student union services for additional guidance.
    </>
);

const europeanAdmissionInformation = (
    <>
        European students applying to Finnish universities benefit from no tuition fees for bachelor's and master's programs conducted in Finnish or Swedish, similar to Finnish students. Bachelor's programs require a high school diploma qualifying for higher education in their home country. Master's programs require a Bachelor’s degree, and UAS Master’s programs may require two years of relevant work experience. Some programs may include entrance exams, SAT tests, or interviews. Non-native English speakers typically demonstrate proficiency through exams like <a href="https://ielts.org/" target="_blank" rel="noopener noreferrer" id="hyperlink">IELTS</a>, <a href="https://www.pearsonpte.com/" target="_blank" rel="noopener noreferrer" id="hyperlink">PTE</a>, <a href="https://www.ets.org/toefl.html" target="_blank" rel="noopener noreferrer" id="hyperlink">TOEFL</a>, or <a href="https://www.cambridgeenglish.org/test-your-english/" target="_blank" rel="noopener noreferrer" id="hyperlink">Cambridge</a> tests. Apply through the Joint Application system for up to six programs in January for autumn (September) studies. Some programs have different application periods; details vary, so check <a href="https://studyinfo.fi" target="_blank" rel="noopener noreferrer" id="hyperlink">Studyinfo.fi</a> or university websites for specific requirements.
    </>
);

const internationalTuitionFees = (
    <>
    Information Will be avaliable to download here about specific universities soon, page should redirect. The average Tuition fees for a Bachelor's program in Finland for Non-EU/EEA Students is around <p id="warning">€10,000 per year</p>, and for Master's it's roughly <p id="warning">€12,000 per year</p>.
    </>
)

const europeanStudentsUniversities = (
    <>
        European students applying to Finnish universities should explore programs offered through <a href="https://studyinfo.fi" target="_blank" rel="noopener noreferrer" id="hyperlink">Studyinfo.fi</a>. Each university in Finland sets its own admission criteria, including requirements for high school diplomas, bachelor's degrees, and relevant work experience for master's programs. Some programs may require entrance exams, SAT tests, or interviews. Non-native English speakers often need to demonstrate proficiency through exams like <a href="https://ielts.org/" target="_blank" rel="noopener noreferrer" id="hyperlink">IELTS</a>, <a href="https://www.pearsonpte.com/" target="_blank" rel="noopener noreferrer" id="hyperlink">PTE</a>, <a href="https://www.ets.org/toefl.html" target="_blank" rel="noopener noreferrer" id="hyperlink">TOEFL</a>, or <a href="https://www.cambridgeenglish.org/test-your-english/" target="_blank" rel="noopener noreferrer" id="hyperlink">Cambridge</a> tests. Utilize the Joint Application system to apply for up to six programs in January for autumn (September) studies. For specific details on application periods and requirements, visit <a href="https://studyinfo.fi" target="_blank" rel="noopener noreferrer" id="hyperlink">Studyinfo.fi</a> or the official websites of Finnish universities.
    </>
);

const whyChooseFinland = (
    <>
    Finland is known for it’s World-Class education, and it’s universities are consistently ranked among the top in the global university rankings, with free tuition fees for EU/EEA Students who can massively benefit from the zero tuition fees, and Finland is affordable for International students compared to other countries in Europe with many scholarships and financial aid to help cover costs. Finland has a wide range of degree programs that are available in English, especially in IT. International students are allowed to work part-time during their studies. Finland is known for it’s innovative and student-centered teaching methods, encouraging critical thinking, creativity, and independence. After graduation, students have opportunities to stay and work in Finland.
    </>
)

const RegularVSUasUni = (
    <>
      Universities of Applied Sciences (UAS) focus on practical and professional skills, offering programs designed in collaboration with industries. These institutions emphasize hands-on training and internships, typically providing Bachelor's and Master's degrees with shorter programs, often three to four years for a Bachelor's degree. UAS have strong connections with local businesses and industries, ensuring graduates are well-prepared for the job market.
  
      Regular universities, on the other hand, focus on theoretical and academic education, offering a broader range of programs including Bachelor's, Master's, and Doctoral degrees. These institutions emphasize research and academic knowledge, often requiring a longer period of study for degrees. Regular universities are research-intensive and offer opportunities for students to engage in cutting-edge research projects. Graduates from regular universities are well-equipped for both professional careers and further academic pursuits.
    </>
  )
  

const finlandAdvantages = [
    "High Quality of Education: Innovative teaching methods and strong academic standards.",
    "No Tuition Fees for EU/EEA Students: Relatively low fees for international students.",
    "Wide Range of Programs: Many courses offered in English across various fields.",
    "Excellent Quality of Life: Comprehensive public services and infrastructure.",
    "Very Safe Country: One of the safest places to live and study.",
    "Extensive Student Support: Various services available to assist students.",
    "Rich Cultural Heritage: A vibrant student life with numerous cultural events.",
    "Diverse Community: A welcoming environment for international students.",
    "Part-Time Work Opportunities: Ability to work while studying to support living costs.",
    "High Environmental Quality: Access to clean nature and beautiful landscapes.",
    "Easy Travel within the EU: Convenient travel options for European students.",
    "Networking Opportunities: Build valuable international connections.",
    "Strong Focus on R&D: Emphasis on research, particularly in technology sectors."
];

const finlandDisadvantages = [
    "Cold Climate: Harsh winters can be challenging for some students to adapt to.",
    "Higher Cost of Living: Cities like Helsinki can be more expensive than other European cities.",
    "Limited Part-Time Job Availability: Fewer job options in specific fields or during low seasons.",
    "Small Job Market: Potential difficulty in finding employment after graduation.",
    "Language Barrier: While English is widely spoken, knowing Finnish or Swedish is helpful.",
    "Long Application Process: Bureaucratic procedures can be lengthy for international students.",
    "Cultural Adjustment: Adapting to a new lifestyle and educational norms can be challenging.",
    "Fewer Social Activities in Winter: Less social engagement during long, cold months.",
    "Limited Public Transport in Rural Areas: Reliance on personal transportation in less urban regions.",
    "Higher Competition for Popular Programs: Increased competition for limited spots in sought-after courses."
];


const Finland = () => {
    const CountryInformation = {
        countryName: "FINLAND",
        countryNameOptional: "FINNISH",
        admissionInformation: europeanAdmissionInformation,
        internationalAdmissionInformation: internationalAdmissionInformationText,
        universityInformation: europeanStudentsUniversities,
        internationalUniversityInformation: internationalUniversityInformationText,
        internationalTuitionFeesInformation: internationalTuitionFees,
        visaRequirementsRequirements: visaGeneralRequirements,
        visaRequirementsFinancials: <div id="financial-requirements">{visaFinancialRequirements}</div>,
        visaRequirementsInsurance: visaInsuranceRequirements,
        footerInformation: "I always recommend verifying this information on official Goverment or University Websites, Don't rely on this information.",
        whyChooseCountry: [{title: <>WHY <p id="gradientSub">FINLAND?</p></>, description: whyChooseFinland}],
        advantages: finlandAdvantages,
        disadvantages: finlandDisadvantages,
        titleColor1: "#003580",
        titleColor2: "#ffffff",
        optionalInformation: [
            {title: <><span id="gradientSub">Important Admission Information</span></>, description: admissionRequirements},
            {title:  <><span id="gradientSub">Regular University</span> OR <span id="gradientSubSub">University of Applied Sciences</span></>, description: RegularVSUasUni},
        ],
        internationalOptionalInformation: [
            {title: <>Studying under <span id="gradientSub">AICE</span></>, description: aiceInformation},
        ],

    }
    return (
        <div>
            <Country countryName={CountryInformation.countryName} countryNameOptional={CountryInformation.countryNameOptional}
            admissionInformation={CountryInformation.admissionInformation} internationalAdmissionInformation={CountryInformation.internationalAdmissionInformation}
            universityInformation={CountryInformation.universityInformation} internationalUniversityInformation={CountryInformation.internationalUniversityInformation}
            internationalUniversityFees={CountryInformation.internationalTuitionFeesInformation}
            footerInformation={CountryInformation.footerInformation} titleColor1={CountryInformation.titleColor1} titleColor2={CountryInformation.titleColor2}
            whyChooseCountry={CountryInformation.whyChooseCountry}
            advantages={CountryInformation.advantages} disadvantages={CountryInformation.disadvantages}
            optionalInformation={CountryInformation.optionalInformation} internationalOptionalInformation={CountryInformation.internationalOptionalInformation}
            visaRequirementsRequirements={CountryInformation.visaRequirementsRequirements} visaRequirementsFinancials={CountryInformation.visaRequirementsFinancials}
            visaRequirementsInsurance={CountryInformation.visaRequirementsInsurance}
            ></Country>
        </div>
    )
}

export default Finland;