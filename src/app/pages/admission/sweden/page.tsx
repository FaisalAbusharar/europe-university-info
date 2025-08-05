
import Admission from '../../../components/admission';
import '../../../styles/countrypage.css'


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
    The admission process in Sweden for international students is centralized and relatively streamlined compared to some other countries. Both universities and university colleges follow the same application procedures through a national portal.  
    <br/> <span id="subSubtitle"> <span className='text-[24px] sm:text-[24px] lg:text-[40px]' id="gradientSubSub">University & University Colleges</span></span><br/>
    <span id='warning'>This information is valid for the 2025 intake. Please note that policies may change slightly from year to year.</span>  
    <br/><br/>In Sweden, the entire application process is managed via the national website <a href="https://www.universityadmissions.se/" id="hyperlink">universityadmissions.se</a>. Here’s how it works for bachelor’s level studies:

    <br/><br/><a style={gradientStyleSpring} id='gradientSubSub'><span id='subsubSubtitle'>Application Timeline</span></a><br/>
    - <strong>Application period</strong> for autumn semester 2025 typically opens in <strong>October 2024</strong> and ends by <strong>mid-January 2025</strong>.<br/>
    - Supporting documents (like transcripts, proof of English, passport) must be uploaded or received by <strong>early February 2025</strong>.<br/>
    - <strong>Notification of selection results</strong> is usually in <strong>April 2025</strong>.<br/>
    - Autumn semester starts in <strong>late August 2025</strong>.<br/>

    <br/><a style={gradientStyleAutumn} id='gradientSubSub'><span id='subsubSubtitle'>Entry Requirements</span></a><br/>
    <strong>1. General entry requirements:</strong> You must have completed upper secondary education that qualifies you for higher education in your home country. International A-levels are accepted.<br/>
    <strong>2. English language proficiency:</strong> Most bachelor’s programs require a minimum of IELTS 6.5 or TOEFL iBT 90, but some accept previous education in English (e.g., IGCSE English + A-levels). More on accepted proof of English is available <a href="https://www.universityadmissions.se/en/entry-requirements/english-language-requirements/" id="hyperlink">here</a>.<br/>
    <strong>3. Program-specific requirements:</strong> Some programs may require specific subjects (e.g. Mathematics for engineering/CS degrees). Always check the specific program page on <a href="https://www.universityadmissions.se/" id="hyperlink">universityadmissions.se</a>.

    <br/><br/><a style={gradientStyleRed} id='gradientSubSub'><span id='subsubSubtitle'>How to Apply</span></a><br/>
    1. Create an account at <a href='https://www.universityadmissions.se/' id='hyperlink'>universityadmissions.se</a><br/>
    2. Search for bachelor's programs in English.<br/>
    3. Rank up to 8 programs in order of preference (1 being your most preferred).<br/>
    4. Submit your application before the deadline.<br/>
    5. Upload required documents: passport, transcripts, proof of English, etc.<br/>
    6. Pay the application fee (SEK 900 ≈ €80) unless you're exempt.<br/>
    7. Wait for results and confirm your offer.<br/>

    <br/><a id='gradientSubSub'><span id='subsubSubtitle'>Tuition Fees & Residence Permit</span></a><br/>
    - <strong>Tuition fees</strong> range from <strong>SEK 80,000 to SEK 160,000/year</strong> (roughly <strong>€7,000 to €14,000/year</strong>) depending on the program.<br/>
    - Non-EU/EEA students must also prove financial means to support themselves during their studies — at least <strong>SEK 103,000/year</strong> (approx. <strong>€9,000/year</strong>).<br/>
    - Apply for a <strong>residence permit</strong> as soon as you accept an offer. You must have paid the <strong>first installment of tuition fees</strong> before applying.<br/>
    - For full details, see <a href="https://www.migrationsverket.se/English/Private-individuals/Studying-in-Sweden.html" id="hyperlink">Swedish Migration Agency</a>.


    <br/><br/><a id='gradientSubSub'><span id='subsubSubtitle'>Additional Tips</span></a><br/>
    - Admission is based solely on your academic qualifications — no entrance exams.<br/>
    - Your high school grades (e.g., A-levels or IB) are converted into a Swedish merit score.<br/>
    - You can apply with predicted grades but must submit final grades by mid-July.<br/>
    - Always double-check the program’s official page for additional criteria.<br/>
</>

const backgroundColorStyle = 'linear-gradient(to bottom, rgb(0, 0, 0), rgb(0, 26, 51))'
const backgroundColorObjectStyle: number[] = [0, 50, 150]

// const optionalInformationImportantInfo = <>
//   International A-level students can apply using predicted grades. However, they must provide their final certificate by <strong>mid-July 2025</strong>. If your results are released after the deadline, it is <strong>strongly recommended</strong> to upload a <strong>provisional certificate of graduation</strong> issued and stamped by your school.
//   This workaround is commonly accepted but <strong>must be approved by the universities you’re applying to</strong>. Contact the admission office of each university directly for confirmation.
// </>



const Sweden = () => {
    const CountryInformation = {
        countryName: "SWEDEN",
        countryNameOptional: "SWEDISH",
        internationalAdmissionInformation: internationalAdmissionInformationText,
        footerInformation: "We always recommend verifying this information on official Goverment or University Websites, Don't rely on this information.",
        titleColor1: "#003580",
        titleColor2: "#ffe600ff",
        backgroundColor: backgroundColorStyle,
        backgroundColorObject: backgroundColorObjectStyle,
        optionalInformation: [
            // {title: <><span id="gradientSub">Deadline Information</span></>, description: optionalInformationImportantInfo},
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

export default Sweden;