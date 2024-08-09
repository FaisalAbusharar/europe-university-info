
import Admission from '../../components/admission';
import '../../styles/countrypage.css'
import ScrollTo from '../../components/scrollFunction'


const gradientStyleSpring = {
    background: 'linear-gradient(to right, rgb(51, 204, 51), rgb(0, 204, 0), rgb(0, 153, 51))', WebkitBackgroundClip: 'text', backgroundClip: 'text', WebkitTextFillColor: 'transparent',color: 'transparent', display: 'inline-block',
};

const gradientStyleAutumn = {
    background: 'linear-gradient(to right, rgb(255, 133, 51), rgb(230, 92, 0))', WebkitBackgroundClip: 'text', backgroundClip: 'text', WebkitTextFillColor: 'transparent',color: 'transparent', display: 'inline-block',
};



const europeanAdmissionInformation = ''
const internationalAdmissionInformationText = 
<>
    The admission in Finland can be quite complicated in Finland, especially for international students, we will try to break it down. <br/> Universities and Universities of applied sciences both have different admission requirements.
    <br/> <span id="subSubtitle"> <span id="gradientSubSub">University of Applied Sciences</span></span> <br/>
    <span id='warning'>Information here might change from year to year, this information is up-to date for 2024</span>. UAS admission for International students is relatively straight-forward, you can apply in 4 main methods,
    The <a href='https://www.uasinfo.fi/international-uas-exam/' id='hyperlink'>International UAS Spring Exam</a> ‎  <a href='https://www.uasinfo.fi/international-uas-exam-autumn-2024/' id='hyperlink'>International UAS Autumn Exam</a>
    ‎ ‎ <a href='https://www.uasinfo.fi/sat-test/' id='hyperlink'>SAT Test</a> ‎ <a href='https://www.uasinfo.fi/certificate-based-selection/' id='hyperlink'>Certifcate Based Selection</a>.
    <br/><br/><a style={gradientStyleSpring} id='gradientSubSub'><span id='subsubSubtitle'>International UAS Spring Exam</span></a><br/>
    <strong>91 study programs</strong> use the International UAS Exam, you can view them <a href='https://www.uasinfo.fi/selection-methods-study-programmes-available-for-application/#table1spring' id='hyperlink'>here</a>
    , Regardless of how many study programs you’re applying for, you only need to participate in the International UAS Exam <strong>once</strong>
    . The International UAS Exam is organised on <strong>21 March 2024</strong> from 12:00 o’clock noon onwards (Finnish time, UTC/GMT+2). In the International UAS exam, the applicants’ readiness for UAS studies is assessed. The exam does not include any advance reading materials or pre-assignments.
     In order to be invited to the International UAS Exam and to be selected based on the International UAS Exam selection method, the applicants have to <strong>prove their English language skills</strong> either by an internationally recognized language test or previous studies.
     For more specifics, check the <a id='hyperlink' href='https://www.uasinfo.fi/international-uas-exam/#languagerequirementsspring'>official site</a>. A valid passport must be present, can be biometric or non-biometric, however EU/EEA passports <strong>must be biometric. </strong>
     The international UAS exam has different exam sections depending on your area of study, however all areas of study will include <strong>Reasoning Skill section and English Language Skills</strong> section.
     <br/> <span id='warning'>Some important details are not listed here, please check the official site for ALL relevant important information.</span>
     <br/> <a id='hyperlink' href='https://www.uasinfo.fi/international-uas-exam/#identificationspring'>Identification</a> <a id='hyperlink' href='https://www.uasinfo.fi/international-uas-exam/#monitoringspring'>Monitoring</a>‎
     ‎<a id='hyperlink' href='https://www.uasinfo.fi/international-uas-exam/#privacypolicyspring'>Privacy Policy</a> <a id='hyperlink' href='https://www.uasinfo.fi/international-uas-exam/#hardwareandnetwork'>Hardware/Network Requirement</a>‎
     ‎<a id='hyperlink' href='https://www.uasinfo.fi/international-uas-exam/#participatingspring'>Participating</a> <a id='hyperlink' href='https://www.uasinfo.fi/international-uas-exam/#results'>Final Student Selection</a>  

     <br/><br/><a style={gradientStyleAutumn} id='gradientSubSub'><span id='subsubSubtitle'>International UAS Autumn Exam</span></a><br/>
    <strong>In the autumn joint application, 8 study programs</strong> use the International UAS Exam, you can view them <a href='https://www.uasinfo.fi/selection-methods-study-programmes-available-for-application/#table1autumn' id='hyperlink'>here</a>
    , Regardless of how many study programs you’re applying for, you only need to participate in the International UAS Exam <strong>once</strong>
    . The International UAS Exam is organised on <strong>7 Novemeber 2024</strong> from 12:00 o’clock noon onwards (Finnish time, UTC/GMT+2). In the International UAS exam, the applicants’ readiness for UAS studies is assessed. The exam does not include any advance reading materials or pre-assignments.
     In order to be invited to the International UAS Exam and to be selected based on the International UAS Exam selection method, the applicants have to <strong>prove their English language skills</strong> either by an internationally recognized language test or previous studies.
     For more specifics, check the <a id='hyperlink' href='https://www.uasinfo.fi/international-uas-exam-autumn-2024/#languagerequirements'>official site</a>. A valid passport must be present, can be biometric or non-biometric, however EU/EEA passports <strong>must be biometric. </strong>
     The international UAS exam has different exam sections depending on your area of study, however all areas of study will include <strong>Reasoning Skill section and English Language Skills</strong> section.
     <br/> <span id='warning'>Some important details are not listed here, please check the official site for ALL relevant important information.</span>
     <br/> <a id='hyperlink' href='https://www.uasinfo.fi/international-uas-exam-autumn-2024/#identificationautumn'>Identification</a> <a id='hyperlink' href='https://www.uasinfo.fi/international-uas-exam-autumn-2024/#monitoringautumn'>Monitoring</a>‎
     ‎<a id='hyperlink' href='https://www.uasinfo.fi/international-uas-exam-autumn-2024/#privacypolicy'>Privacy Policy</a> <a id='hyperlink' href='https://www.uasinfo.fi/international-uas-exam-autumn-2024/#hardwarerequirements'>Hardware/Network Requirement</a>‎
     ‎<a id='hyperlink' href='https://www.uasinfo.fi/international-uas-exam-autumn-2024/#participatingautumn'>Participating</a> <a id='hyperlink' href='https://www.uasinfo.fi/international-uas-exam-autumn-2024/#resultsautumn'>Final Student Selection</a>  
     
     
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