import Country from '../../components/country';
import './finland.css'

/* Information Area */

const AICEINFO = (
    <>
        If you are studying the British Education System, then you are in luck! Finland recognizes qualifications from the British Education System, such as boards like CIE & AQA. However, grades will need to be converted to a local grading system. If you’ve studied “English as a second language” in your O levels, you likely do not need to provide an IELTS Exam For English proficiency. You will need to also provide your O level results along with your A level results, they do not have as significant an impact as A Level results, however they are an important part of your admission. A Levels are crucial. Strong performance in subjects related to your degree is highly recommended. Having other ways to prove your skills, can also be helpful in your admission, these ways include having GitHub, Professional Certificates, and letters of endorsement. In Finland, there is typically no requirement for proficiency in your Mother Tongue for admission. For UK Grade equivalency please check <a href="https://www.grb.uk.com/recruiter-research/a-level-equivalents" target="_blank" rel="noopener noreferrer" id="hyperlink">This Website</a>.
    </>
);

const IAI = (
    <>
        Bachelor & Master Degrees, for Bachelor Programs you’ll require a high-school diploma that qualifies you for higher education in your home country, for Master Programs you’ll require a Bachelor’s degree, and for UAS master’s programs, two years of relevant work experience. additionally some admissions may include entrance exams, SAT tests, or interviews. Non-native English speakers typically must demonstrate their proficiency through exams like 
        ‎<a href="https://ielts.org/" target="_blank" rel="noopener noreferrer" id="hyperlink">ILETS</a>, <a href="https://www.pearsonpte.com/" target="_blank" rel="noopener noreferrer" id="hyperlink">PTE</a>, <a href="https://www.ets.org/toefl.html" target="_blank" rel="noopener noreferrer" id="hyperlink">TOEFL</a> or <a href="https://www.cambridgeenglish.org/test-your-english/" target="_blank" rel="noopener noreferrer" id="hyperlink">Cambridge</a> tests.
        You can apply with a Joint Application, which means you’ll be able to apply up to six programs with one application in January for autumn (September) studies. However some programs are outside the joint application periods, details vary, so check the program search at <a href="https://studyinfo.fi" target="_blank" rel="noopener noreferrer" id="hyperlink">Studyinfo.fi</a> or  connect with institutions directly. Most Universities have their own requirements, It's recommended to find the degree you want to study at <a href="https://studyinfo.fi" target="_blank" rel="noopener noreferrer" id="hyperlink">Studyinfo.fi</a> and check the admission criteria there.
    </>
)

const IUI = (
    <>
        There are many reputable Finnish universities available for international students, with the most notable being <a href="https://www.tuni.fi/en" target="_blank" id="hyperlink" rel="noopener noreferrer">Tampere University</a>, <a href="https://www.aalto.fi/en" target="_blank" id="hyperlink" rel="noopener noreferrer">Aalto University</a>, <a href="https://www.lut.fi/web/en/" target="_blank" id="hyperlink" rel="noopener noreferrer">LUT University</a>, <a href="https://www.helsinki.fi/en" id="hyperlink" target="_blank" rel="noopener noreferrer">the University of Helsinki</a>, and <a href="https://www.uef.fi/en" id="hyperlink" target="_blank" rel="noopener noreferrer">the University of Eastern Finland</a>. To pick your university, it’s recommended to use the <a href="https://www.studyinfinland.fi/universities" id="hyperlink" target="_blank" rel="noopener noreferrer">Official Finnish University Website</a>, check out the universities and their locations! Knowing the location is very important; you will need to understand the living costs, environment, climate, and available student services. Consider all of these factors before choosing your university.
    </>
)


const Finland = () => {
    const CountryInformation = {
        countryName: "FINLAND",
        countryNameOptional: "FINNISH",
        admissionInformation: "Admission Info Here.",
        internationalAdmissionInformation: IAI,
        universityInformation: "University Info Here.",
        internationalUniversityInformation: IUI,
        visaRequirementsRequirements: "General Visa Requirements Here.",
        visaRequirementsFinancials: "Details about Financial Requirements Here.",
        visaRequirementsInsurance: "Health and Travel Insurance Information Here.",
        footerInformation: "I always recommend verifying this information on official Goverment or University Websites, Don't rely on this information.",
        titleColor1: "#018cfe",
        titleColor2: "#eff2f3",
        OptionalInformationTitle: <>Studying under <p id="gradient-sub">AICE</p></>,
        OptionalInformation: AICEINFO

    }
    return (
        <div>
            <Country countryName={CountryInformation.countryName} countryNameOptional={CountryInformation.countryNameOptional}
            admissionInformation={CountryInformation.admissionInformation} internationalAdmissionInformation={CountryInformation.internationalAdmissionInformation}
            universityInformation={CountryInformation.universityInformation} internationalUniversityInformation={CountryInformation.internationalUniversityInformation}
            footerInformation={CountryInformation.footerInformation} titleColor1={CountryInformation.titleColor1} titleColor2={CountryInformation.titleColor2}
            OptionalInformation={CountryInformation.OptionalInformation} OptionalInformationTitle={CountryInformation.OptionalInformationTitle}
            visaRequirementsRequirements={CountryInformation.visaRequirementsRequirements} visaRequirementsFinancials={CountryInformation.visaRequirementsFinancials}
            visaRequirementsInsurance={CountryInformation.visaRequirementsInsurance}
            ></Country>
        </div>
    )
}

export default Finland;