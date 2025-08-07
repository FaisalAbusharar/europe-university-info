
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


const internationalAdmissionInformationText = (
  <>
    Studying in Norway is free at public universities for all students, including non-EU/EEA citizens, but some student union fees and living costs still apply.
    <br/>
    <span id="subSubtitle">
      <span className='text-[24px] sm:text-[24px] lg:text-[40px]' id="gradientSubSub">
        Universities & University Colleges
      </span>
    </span><br/>

    <span id='warning'>Information is accurate for the 2025–2026 academic year.</span><br/><br/>

    <a style={gradientStyleSpring} id='gradientSubSub'>
      <span id='subsubSubtitle'>Application Timeline</span>
    </a><br/>
    The application period is from October 1, 2025 to December 1, 2025. The final deadline to upload documents is December 10, 2025. Results are published in April 2026, and the semester begins in August 2026.<br/><br/>

    <a style={gradientStyleSpring} id='gradientSubSub'>
      <span id='subsubSubtitle'>Tuition Fees</span>
    </a><br/>
    Tuition is free at all public universities for both EU and non-EU students. However, you are required to pay a semester fee which typically ranges from NOK 500 to 1,000 (approximately €45 to €90).<br/><br/>

    <a style={gradientStyleSpring} id='gradientSubSub'>
      <span id='subsubSubtitle'>Cost of Living</span>
    </a><br/>
    The Norwegian Directorate of Immigration (UDI) requires proof that you have sufficient funds to cover your living expenses during your studies. For the 2025–2026 academic year, the required amount is NOK 137,907 (approximately €11,900). This amount is meant to cover housing, food, transport, books, and personal expenses.<br/><br/>

    <a style={gradientStyleSpring} id='gradientSubSub'>
      <span id='subsubSubtitle'>How to Apply</span>
    </a><br/>
    You can apply through the central application portal at <a href="https://www.samordnaopptak.no/info/" target="_blank">samordnaopptak.no</a> if the university participates in the national system. Alternatively, some universities handle applications directly through their own websites.

    The documents you will typically need include your passport, high school diploma (such as A-levels or an equivalent qualification), a transcript of records, and proof of English proficiency, such as IELTS or TOEFL.<br/>
  </>
);



const backgroundColorStyle = 'linear-gradient(to bottom, rgb(0, 0, 0), rgba(51, 0, 0, 1))'
const backgroundColorObjectStyle: number[] = [150, 50, 0]

const optionalInformationImportantInfo = <>
  Applicants who apply before obtaining their final diploma, such as A-level students applying with predicted grades, must <strong>provide the final diploma</strong> by the university's specified deadline, often before enrollment or the start of the semester.  
  Many Norwegian universities accept <strong>official transcripts or certificates of completion</strong> issued and stamped by the school as provisional proof that studies are completed, but the final certified diploma is required later.  
  Specific deadlines and requirements vary between universities, so it is recommended to contact the admissions office directly for clarification.  
  This is a common practice at institutions such as the University of Oslo, Norwegian University of Life Sciences (NMBU), and Norwegian School of Economics (NHH).
</>;


const Norway = () => {
    const CountryInformation = {
        countryName: "NORWAY",
        countryNameOptional: "NORWEGIAN",
        internationalAdmissionInformation: internationalAdmissionInformationText,
        footerInformation: "We always recommend verifying this information on official Goverment or University Websites, Don't rely on this information.",
        titleColor1: "#800000ff",
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

export default Norway;