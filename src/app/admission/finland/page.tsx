
import Admission from '../../components/admission';
import '../../styles/countrypage.css'
import ScrollTo from '../../components/scrollFunction'


const gradientStyleSpring = {
    background: 'linear-gradient(to right, rgb(51, 204, 51), rgb(0, 204, 0), rgb(0, 153, 51))', WebkitBackgroundClip: 'text', backgroundClip: 'text', WebkitTextFillColor: 'transparent',color: 'transparent', display: 'inline-block',
};

const gradientStyleAutumn = {
    background: 'linear-gradient(to right, rgb(255, 133, 51), rgb(230, 92, 0))', WebkitBackgroundClip: 'text', backgroundClip: 'text', WebkitTextFillColor: 'transparent',color: 'transparent', display: 'inline-block',
};

const gradientStyleRed = {
    background: 'linear-gradient(to right, rgb(255, 0, 0), rgb(200, 0, 0))',WebkitBackgroundClip: 'text',backgroundClip: 'text',WebkitTextFillColor: 'transparent',color: 'transparent',display: 'inline-block',
};



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
     
     <br/><br/><a style={gradientStyleRed} id='gradientSubSub'><span id='subsubSubtitle'>SAT Test</span></a><br/>
     The SAT test contains following sections:

    <br/><strong>Evidence-Based Reading:</strong> 
    <strong> Writing
    Reading Test, </strong>
     <strong> Writing</strong> and <strong>Language Test </strong>
    | <strong>Math</strong>
    <br></br>
    In their application instructions, universities of applied sciences announce the SAT sections they will use as an admission criterion in the study programme available for application, and the lowest score <strong>limit the applicant must reach in order to be qualified</strong> for the selection process. Only the new version of SAT test (completed after March 2016) is accepted. The SAT test selection only takes into account the sections performed during a single session.
    <strong> An official SAT score report must be ordered directly from the test organiser</strong>. To collect SAT test scores, universities of applied sciences can also use an electronic service from which the score data is available. The applicants who have already completed an SAT test must request a test result from the test organiser to be delivered to universities of applied sciences. Applicants must submit the SAT test results to all universities of applied sciences that use said selection procedure and to which they are applying within the provided timetable. <strong>Reports printed or submitted by the applicants themselves cannot be taken into account</strong>.

    <br/><br/><a id='gradientSubSub'><span id='subsubSubtitle'>Certificate-based Selection</span></a><br/>
    Universities of applied sciences may admit students by means of certificate-based selection based on matriculation examination and vocational upper secondary qualification (completed after 1 August 2015). Those applying with a matriculation examination (Finnish or EB, IB and RP/DIA diploma) or vocational upper secondary qualification have a specific study place quota which varies between study programmes available for application.
    All universities of applied sciences comply with the scoring models and principles of certificate-based selection. In certificate-based selection, the university of applied sciences may independently determine the lowest score limit or the threshold criteria.<br></br>
    Get all detailed information <a href='https://www.uasinfo.fi/certificate-based-selection/' id='hyperlink' >here</a>.


</>


const backgroundColorStyle = 'linear-gradient(to bottom, rgb(0, 0, 0), rgb(0, 26, 51))'
const backgroundColorObjectStyle = [0, 50, 150]

const optionalInformationImportantInfo = <>
  Applicants who apply before obtaining their final diploma, such as A-level students applying with predicted grades, must <strong>provide the final diploma</strong> by <strong>July 10th</strong> (<em>For Spring Joint Application</em>). However, some students, like A-level students, may not receive their final diploma until August 13th. For such cases, Finnish universities offer a solution: you must provide a <strong>provisional certificate of graduation</strong> issued and stamped by your school, confirming that you have completed the required materials.
  You will most likely not find information about this online, this information was from the <strong>admission services</strong> for multiple UAS universities (<em>Tampere UAS, Oulu UAS, Jamk UAS</em>), you can contact them directly for further questions.
</>;



const Finland = () => {
    const CountryInformation = {
        countryName: "FINLAND",
        countryNameOptional: "FINNISH",
        internationalAdmissionInformation: internationalAdmissionInformationText,
        footerInformation: "We always recommend verifying this information on official Goverment or University Websites, Don't rely on this information.",
        titleColor1: "#003580",
        titleColor2: "#ffffff",
        backgroundColor: backgroundColorStyle,
        backgroundColorObject: backgroundColorObjectStyle,
        optionalInformation: [
            {title: <><span id="gradientSub">Deadline Information</span></>, description: optionalInformationImportantInfo},
            //{title:  <><span id="gradientSub"></span> OR <span id="gradientSubSub">U</span></>, description: },
        ],
        internationalOptionalInformation: [
            //{title: <><span id="gradientSubSub"></span></>, description: },
        ],

    }
    return (
        <div>
            <Admission countryName={CountryInformation.countryName} countryNameOptional={CountryInformation.countryNameOptional}
            internationalAdmissionInformation={CountryInformation.internationalAdmissionInformation}
            footerInformation={CountryInformation.footerInformation} titleColor1={CountryInformation.titleColor1} titleColor2={CountryInformation.titleColor2}
            optionalInformation={CountryInformation.optionalInformation} internationalOptionalInformation={CountryInformation.internationalOptionalInformation}
            backgroundColor={CountryInformation.backgroundColor} backgroundColorObject={CountryInformation.backgroundColorObject}
            ></Admission>
        </div>
    )
}

export default Finland;