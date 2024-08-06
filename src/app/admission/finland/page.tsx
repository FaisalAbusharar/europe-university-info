
import Admission from '../../components/admission';
import '../../styles/countrypage.css'
import ScrollTo from '../../components/scrollFunction'

const europeanAdmissionInformation = ''
const internationalAdmissionInformationText = ''
const europeanStudentsUniversities = ''
const internationalUniversityInformationText = ''

const backgroundColorStyle = 'linear-gradient(to bottom, rgb(0, 0, 0), rgb(0, 26, 51))'
const backgroundColorObjectStyle = [0, 50, 150]


const Finland = () => {
    const CountryInformation = {
        countryName: "FINLAND",
        countryNameOptional: "FINNISH",
        admissionInformation: europeanAdmissionInformation,
        internationalAdmissionInformation: internationalAdmissionInformationText,
        universityInformation: europeanStudentsUniversities,
        internationalUniversityInformation: internationalUniversityInformationText,
        footerInformation: "I always recommend verifying this information on official Goverment or University Websites, Don't rely on this information.",
        titleColor1: "#003580",
        titleColor2: "#ffffff",
        backgroundColor: backgroundColorStyle,
        backgroundColorObject: backgroundColorObjectStyle,
        optionalInformation: [
            //{title: <><span id="gradientSub"></span></>, description: },
            //{title:  <><span id="gradientSub"></span> OR <span id="gradientSubSub">U</span></>, description: },
        ],
        internationalOptionalInformation: [
            //{title: <><span id="gradientSubSub"></span></>, description: },
        ],

    }
    return (
        <div>
            <Admission countryName={CountryInformation.countryName} countryNameOptional={CountryInformation.countryNameOptional}
            admissionInformation={CountryInformation.admissionInformation} internationalAdmissionInformation={CountryInformation.internationalAdmissionInformation}
            universityInformation={CountryInformation.universityInformation} internationalUniversityInformation={CountryInformation.internationalUniversityInformation}
            footerInformation={CountryInformation.footerInformation} titleColor1={CountryInformation.titleColor1} titleColor2={CountryInformation.titleColor2}
            optionalInformation={CountryInformation.optionalInformation} internationalOptionalInformation={CountryInformation.internationalOptionalInformation}
            backgroundColor={CountryInformation.backgroundColor} backgroundColorObject={CountryInformation.backgroundColorObject}
            ></Admission>
        </div>
    )
}

export default Finland;