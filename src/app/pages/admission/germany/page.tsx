import Admission from '../../../components/admission';
import '../../../styles/countrypage.css'
import ScrollTo from '../../../components/scrollFunction'


const gradientStyleSpring = {
    background: 'linear-gradient(to right, rgb(51, 204, 51), rgb(0, 204, 0), rgb(0, 153, 51))', WebkitBackgroundClip: 'text', backgroundClip: 'text', WebkitTextFillColor: 'transparent', color: 'transparent', display: 'inline-block',
};

const gradientStyleAutumn = {
    background: 'linear-gradient(to right, rgb(255, 133, 51), rgb(230, 92, 0))', WebkitBackgroundClip: 'text', backgroundClip: 'text', WebkitTextFillColor: 'transparent', color: 'transparent', display: 'inline-block',
};

const gradientStyleRed = {
    background: 'linear-gradient(to right, rgb(255, 0, 0), rgb(200, 0, 0))', WebkitBackgroundClip: 'text', backgroundClip: 'text', WebkitTextFillColor: 'transparent', color: 'transparent', display: 'inline-block',
};


const internationalAdmissionInformationText = 
<>
    <span id='warning'>This information is not complete.</span><br></br>

    Admission in Germany is straightforward, but international students must navigate some specific requirements. Universities and Universities of Applied Sciences (UAS) have different admission processes.
    <br/> <span id="subSubtitle"> <span id="gradientSubSub">University of Applied Sciences (UAS)</span></span> <br/>
    <span id='warning'>Information here might change from year to year, this information is up-to-date for 2025.</span> UAS admission for international students is relatively straightforward, with several application methods:
    The <a href='https://www.uni-assist.de/en/' id='hyperlink'>Uni-Assist Portal</a>, <a href='https://www.daad.de/en/' id='hyperlink'>DAAD (German Academic Exchange Service)</a>, or through <a href='https://www.study-in-germany.de/en/' id='hyperlink'>direct university applications</a>.
    <br/><br/><a style={gradientStyleSpring} id='gradientSubSub'><span id='subsubSubtitle'>Uni-Assist Portal</span></a><br/>
    <strong>Many universities and UAS use Uni-Assist</strong> to process applications from international students. You can check which universities accept applications through Uni-Assist <a href='https://www.uni-assist.de/en/what-we-do/uni-assist-online/' id='hyperlink'>here</a>.
    Applicants must submit all required documents, including proof of English proficiency, university entrance qualification (such as your high school diploma), and a valid passport. Uni-Assist will evaluate these documents and forward them to the universities for further consideration. 
    <br/> <span id='warning'>Important details may not be listed here, please check the official sites for all relevant information.</span>
    <br/><br/><a style={gradientStyleAutumn} id='gradientSubSub'><span id='subsubSubtitle'>DAAD (German Academic Exchange Service)</span></a><br/>
    The DAAD offers several scholarship and admission programs for international students. Some universities may require students to apply through the DAAD portal. You can find more information and specific requirements <a href='https://www.daad.de/en/' id='hyperlink'>here</a>.
    <br/><br/><a style={gradientStyleRed} id='gradientSubSub'><span id='subsubSubtitle'>Direct University Application</span></a><br/>
    Some universities allow students to apply directly. Each university has specific requirements, but generally, international students must submit:
    - High school diploma or equivalent (translated into German or English)
    - Proof of language proficiency (usually German or English, depending on the program)
    - A valid passport or ID
    - A motivation letter and CV
    <br/> Be sure to check each university's specific website for exact instructions.

    <br/><br/><a id='gradientSubSub'><span id='subsubSubtitle'>Certificate-based Selection</span></a><br/>
    Universities of Applied Sciences may admit students based on certificate-based selection, which considers your matriculation examination and vocational upper secondary qualification. Make sure to check the selection criteria on each program’s page.
    <br/> Get more detailed information about this process <a href='https://www.study-in-germany.de/en/' id='hyperlink'>here</a>.
</>


const backgroundColorStyle = 'linear-gradient(to bottom, rgb(0, 0, 0), rgb(51, 26, 1))'
const backgroundColorObjectStyle: number[] = [150, 50, 0]



const Germany = () => {
    const CountryInformation = {
        countryName: "GERMANY",
        countryNameOptional: "DEUTSCH",
        internationalAdmissionInformation: internationalAdmissionInformationText,
        footerInformation: "We always recommend verifying this information on official Government or University Websites. Don't rely on this information.",
        titleColor1: "#fe0101",
        titleColor2: "#ffe600",
        backgroundColor: backgroundColorStyle,
        backgroundColorObject: backgroundColorObjectStyle,
        // optionalInformation: [
        //     {title: <><span id="gradientSub">Deadline Information</span></>, description: optionalInformationImportantInfo},
        // ],
        internationalOptionalInformation: [],
    }
    return (
        <div>
            <Admission countryName={CountryInformation.countryName} countryNameOptional={CountryInformation.countryNameOptional}
            internationalAdmissionInformation={CountryInformation.internationalAdmissionInformation}
            footerInformation={CountryInformation.footerInformation} titleColor1={CountryInformation.titleColor1} titleColor2={CountryInformation.titleColor2}
            // optionalInformation={CountryInformation.optionalInformation} 
            internationalOptionalInformation={CountryInformation.internationalOptionalInformation}
            backgroundColor={CountryInformation.backgroundColor} backgroundColorObject={CountryInformation.backgroundColorObject}
            ></Admission>
        </div>
    )
}

export default Germany;
