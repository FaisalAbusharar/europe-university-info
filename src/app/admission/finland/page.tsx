
import Admission from '../../components/admission';
import '../../styles/countrypage.css'
import ScrollTo from '../../components/scrollFunction'

const europeanAdmissionInformation = ''
const internationalAdmissionInformationText = 
<>
    The admission in Finland can be quite complicated in Finland, especially for international students, we will try to break it down. <br/> Universities and Universities of applied sciences both have different admission requirements.
    <br/> <span id="subSubtitle"> <span id="gradientSubSub">University of Applied Sciences</span></span> <br/>
    <span id='warning'>Information here might change from year to year, this information is up-to date for 2024</span>. UAS admission for International students is relatively straight-forward, you can apply in 4 main methods,
    The <a href='https://www.uasinfo.fi/international-uas-exam/' id='hyperlink'>International UAS Spring Exam</a> ‎  <a href='https://www.uasinfo.fi/international-uas-exam-autumn-2024/' id='hyperlink'>International UAS Autumn Exam</a>
    ‎ ‎ <a href='https://www.uasinfo.fi/sat-test/' id='hyperlink'>SAT Test</a> ‎ <a href='https://www.uasinfo.fi/certificate-based-selection/' id='hyperlink'>Certifcate Based Selection</a>.
    <br/><br/><a id='gradientSubSub'><span id='subsubSubtitle'>International UAS Spring Exam</span></a><br/>
    91 study programs use the International UAS Exam, you can view them <a href='https://www.uasinfo.fi/selection-methods-study-programmes-available-for-application/#table1spring' id='hyperlink'>here</a>
    , Regardless of how many study programs you’re applying for, you only need to participate in the International UAS Exam once
    . The International UAS Exam is organised on 21 March 2024 from 12:00 o’clock noon onwards (Finnish time, UTC/GMT+2). In the International UAS exam, the applicants’ readiness for UAS studies is assessed. The exam does not include any advance reading materials or pre-assignments.
</>
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
        footerInformation: "We always recommend verifying this information on official Goverment or University Websites, Don't rely on this information.",
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