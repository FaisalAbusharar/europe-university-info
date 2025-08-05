
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
    The admission process for international students in the United Kingdom is centralized, especially for undergraduate degrees. All applications are submitted through <strong>UCAS (Universities and Colleges Admissions Service)</strong>. Both universities and university colleges follow the same route.
    <br/> <span id="subSubtitle"> <span className='text-[24px] sm:text-[24px] lg:text-[40px]' id="gradientSubSub">UK Universities & Colleges</span></span><br/>
    <span id='warning'>This information is valid for the 2026 intake. Always double-check official university sources for updates.</span>  
    <br/><br/>You can apply to most UK bachelor's degree programmes through the national portal <a href="https://www.ucas.com" id="hyperlink">UCAS</a>. Here's how the process works:

    <br/><br/><a style={gradientStyleSpring} id='gradientSubSub'><span id='subsubSubtitle'>Application Timeline</span></a><br/>
    - <strong>Applications open</strong> in September 2025 for autumn 2026 intake.<br/>
    - <strong>Deadline</strong> for most courses is January 29, 2026 (for equal consideration).<br/>
    - Medicine, dentistry, and Oxbridge have an earlier deadline of October 15, 2025.<br/>
    - You must submit predicted grades if your final grades are not ready yet.<br/>
    - Final results (e.g., A-levels or equivalent) are expected by mid-August 2025.<br/>

    <br/><a style={gradientStyleAutumn} id='gradientSubSub'><span id='subsubSubtitle'>Entry Requirements</span></a><br/>
    <strong>1. Academic Qualifications:</strong> A-levels, IB, or other high school qualifications are accepted. Each program has specific grade requirements (e.g., ABB, BBC, etc.).<br/>
    <strong>2. English Language Proficiency:</strong> IELTS (typically 6.0–6.5 overall), TOEFL iBT (around 80–90), or equivalent is required if English is not your first language. Some universities accept IGCSE English if followed by A-levels. More info <a href="https://www.ucas.com/undergraduate/applying-university/entry-requirements" id="hyperlink">here</a>.<br/>
    <strong>3. Program-Specific Requirements:</strong> Certain subjects are required for specific degrees (e.g., Math for Engineering/CS). Always check the university's course page.

    <br/><br/><a style={gradientStyleRed} id='gradientSubSub'><span id='subsubSubtitle'>How to Apply</span></a><br/>
    1. Create an account at <a href='https://www.ucas.com' id='hyperlink'>ucas.com</a><br/>
    2. Choose up to 5 course choices (or 4 if applying to medicine/dentistry/vet science).<br/>
    3. Fill in personal info, academic background, and predicted grades.<br/>
    4. Write a <strong>personal statement</strong> (max 4000 characters).<br/>
    5. Provide a <strong>reference</strong> (usually a teacher or counselor).<br/>
    6. Pay the application fee (£28.50 ≈ €33.30 for multiple courses).<br/>
    7. Track your application and respond to offers via the <strong>UCAS Hub</strong>.<br/>

    <br/><a id='gradientSubSub'><span id='subsubSubtitle'>Tuition Fees & Visa Requirements</span></a><br/>
    - Tuition fees for international (non-EU/EEA) students typically range from <strong>£11,000–£26,000/year</strong> depending on program and university (roughly <strong>€12,900–€30,400/year</strong>).<br/>
    - Medicine or top-tier courses can exceed <strong>£38,000/year</strong> (~<strong>€44,500</strong>).<br/>
    - To apply for a <strong>Student visa</strong>, you must first receive a <strong>CAS (Confirmation of Acceptance for Studies)</strong> from your chosen university.<br/>
    - You’ll need to prove sufficient funds to cover:  
        - 1 year of tuition fees (paid in advance or shown in bank)  
        - <strong>£1,334/month for living costs</strong> if studying in London or <strong>£1,023/month</strong> elsewhere (for up to 9 months).  
          ≈ <strong>€1,560/month</strong> (London) or <strong>€1,200/month</strong> (outside).<br/>
    - You can apply for a visa up to 6 months before your course starts.<br/>
    - Visa info: <a href="https://www.gov.uk/student-visa" id="hyperlink">UK Government – Student Visa</a>

    <br/><br/><a id='gradientSubSub'><span id='subsubSubtitle'>Additional Notes</span></a><br/>
    - Offers can be <strong>unconditional</strong> (you already meet requirements) or <strong>conditional</strong> (pending final grades).<br/>
    - Clearing is available in July/August if you didn’t get an offer or changed your mind.<br/>
    - You may be eligible for scholarships, but competition is high and often merit-based.<br/>
    - Proof of English and funds are crucial for both the <strong>university</strong> and the <strong>visa</strong>.<br/>
</>


const backgroundColorStyle = 'linear-gradient(to bottom, rgba(27, 0, 0, 1), rgb(0, 26, 51))'
const backgroundColorObjectStyle: number[] = [0, 50, 150]

const optionalInformationImportantInfo = <>
  If you're applying with predicted A-level grades, your school must upload or send them by the UCAS deadline. Final grades must be sent once released (usually August).  
  For visa purposes, you must prove you completed your studies, so request a school-issued certificate of graduation or final transcript as early as possible.  
  Contact your university's international admissions team if you're worried about timing.
</>



const UnitedKingdom = () => {
    const CountryInformation = {
        countryName: "UNITED KINGDOM",
        countryNameOptional: "BRITISH",
        internationalAdmissionInformation: internationalAdmissionInformationText,
        footerInformation: "We always recommend verifying this information on official Goverment or University Websites, Don't rely on this information.",
         titleColor1: "#800000ff",
        titleColor2: "#1100ffff",
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

export default UnitedKingdom;