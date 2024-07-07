import Country from '../../components/country';
import './finland.css'


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
        titleColor2: "#eff2f3"
    }
    return (
        <div>
            <Country countryName={CountryInformation.countryName} countryNameOptional={CountryInformation.countryNameOptional}
            admissionInformation={CountryInformation.admissionInformation} internationalAdmissionInformation={CountryInformation.internationalAdmissionInformation}
             universityInformation={CountryInformation.universityInformation} internationalUniversityInformation={CountryInformation.internationalUniversityInformation}
            footerInformation={CountryInformation.footerInformation} titleColor1={CountryInformation.titleColor1} titleColor2={CountryInformation.titleColor2}
            ></Country>
        </div>
    )
}

export default Finland;