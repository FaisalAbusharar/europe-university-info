import Country from '../../components/country';
import '../countrypage.css'

/* Information Area */

const aiceInformation = (
    <>
        If you are studying the British Education System, then you are in luck! Finland recognizes qualifications from the British Education System, such as boards like CIE & AQA. However, grades will need to be converted to a local grading system. If you’ve studied “English as a second language” in your O levels, you likely do not need to provide an IELTS Exam For English proficiency. You will need to also provide your O level results along with your A level results, they do not have as significant an impact as A Level results, however they are an important part of your admission. A Levels are crucial. Strong performance in subjects related to your degree is highly recommended. Having other ways to prove your skills, can also be helpful in your admission, these ways include having GitHub, Professional Certificates, and letters of endorsement. In Finland, there is typically no requirement for proficiency in your Mother Tongue for admission. For UK Grade equivalency please check <a href="https://www.grb.uk.com/recruiter-research/a-level-equivalents" target="_blank" rel="noopener noreferrer" id="hyperlink">This Website</a>.
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
    <p id="warning"><strong>It's recommended to check official government websites for this information and do not rely on the information here.</strong></p> Assuming you are intending to stay for over 90 days in Finland for the duration of your studies, you will have to apply for a Residence Permit, and must fulfill some basic requirements to apply. You must have a passport that exceeds the duration of the residence permit you are applying for by at least 3 months. You must provide the official letter of acceptance issued by your hosting Finnish University. You must have a copy of your completed and signed application form. You must provide proof of your financial ability to support yourself<br></br> (<a href="#financial-requirements" id="hyperlink-insite">more information in the next section</a>). You must provide proof of having obtained valid health and medical insurance that covers your entire duration of stay in Finland.
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



const Finland = () => {
    const CountryInformation = {
        countryName: "FINLAND",
        countryNameOptional: "FINNISH",
        admissionInformation: europeanAdmissionInformation,
        internationalAdmissionInformation: internationalAdmissionInformationText,
        universityInformation: europeanStudentsUniversities,
        internationalUniversityInformation: internationalUniversityInformationText,
        visaRequirementsRequirements: visaGeneralRequirements,
        visaRequirementsFinancials: <div id="financial-requirements">{visaFinancialRequirements}</div>,
        visaRequirementsInsurance: visaInsuranceRequirements,
        footerInformation: "I always recommend verifying this information on official Goverment or University Websites, Don't rely on this information.",
        whyChooseCountry: [{title: <>WHY <p id="gradientSub">FINLAND?</p></>, description: whyChooseFinland}],
        titleColor1: "#003580",
        titleColor2: "#ffffff",
        optionalInformation: [{title: <>Studying under <p id="gradientSub">AICE</p></>, description: aiceInformation}]

    }
    return (
        <div>
            <Country countryName={CountryInformation.countryName} countryNameOptional={CountryInformation.countryNameOptional}
            admissionInformation={CountryInformation.admissionInformation} internationalAdmissionInformation={CountryInformation.internationalAdmissionInformation}
            universityInformation={CountryInformation.universityInformation} internationalUniversityInformation={CountryInformation.internationalUniversityInformation}
            footerInformation={CountryInformation.footerInformation} titleColor1={CountryInformation.titleColor1} titleColor2={CountryInformation.titleColor2}
            whyChooseCountry={CountryInformation.whyChooseCountry}
            optionalInformation={CountryInformation.optionalInformation}
            visaRequirementsRequirements={CountryInformation.visaRequirementsRequirements} visaRequirementsFinancials={CountryInformation.visaRequirementsFinancials}
            visaRequirementsInsurance={CountryInformation.visaRequirementsInsurance}
            ></Country>
        </div>
    )
}

export default Finland;