import Country from '../../components/country';
import './finland.css'

/* Information Area */


/* Information Area */

const AICEINFO = (
    <>
        If you are studying the British Education System, then you are in luck! Finland recognizes qualifications from the British Education System, such as boards like CIE & AQA. However, grades will need to be converted to a local grading system. If you’ve studied “English as a second language” in your O levels, you likely do not need to provide an IELTS Exam For English proficiency. You will need to also provide your O level results along with your A level results, they do not have as significant an impact as A Level results, however they are an important part of your admission. A Levels are crucial. Strong performance in subjects related to your degree is highly recommended. Having other ways to prove your skills, can also be helpful in your admission, these ways include having GitHub, Professional Certificates, and letters of endorsement. In Finland, there is typically no requirement for proficiency in your Mother Tongue for admission. For UK Grade equivalency please check <a href="https://voidy.xyz" target="_blank" rel="noopener noreferrer" id="hyperlink">This Website</a>.
    </>
);





const Finland = () => {
    const CountryInformation = {
        countryName: "FINLAND",
        countryNameOptional: "FINNISH",
        admissionInformation: "Admission Info Here.",
        internationalAdmissionInformation: "International Admission Info Here.",
        universityInformation: "University Info Here.",
        internationalUniversityInformation: "International University Info Here.",
        footerInformation: "I always recommend verifying this information on official Goverment or University Websites, Don't rely on this information.",
        titleColor1: "#018cfe",
        titleColor2: "#eff2f3",
        AICE: AICEINFO
    }
    return (
        <div>
            <Country countryName={CountryInformation.countryName} countryNameOptional={CountryInformation.countryNameOptional}
            admissionInformation={CountryInformation.admissionInformation} internationalAdmissionInformation={CountryInformation.internationalAdmissionInformation}
             universityInformation={CountryInformation.universityInformation} internationalUniversityInformation={CountryInformation.internationalUniversityInformation}
            footerInformation={CountryInformation.footerInformation} titleColor1={CountryInformation.titleColor1} titleColor2={CountryInformation.titleColor2} AICE={CountryInformation.AICE}
            ></Country>
        </div>
    )
}

export default Finland;