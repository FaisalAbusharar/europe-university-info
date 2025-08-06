
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
  Studying in Austria is regulated by each institution, but overall admission requirements are harmonized at the national level.  
  <br/> <span id="subSubtitle"> <span className='text-[24px] sm:text-[24px] lg:text-[40px]' id="gradientSubSub">Universities & Fachhochschulen (Applied Sciences)</span></span><br/>
  <span id='warning'>Information is accurate for academic year 2025/26; policies may change.</span>  

  <br/><br/>Admission is managed by each university—you must apply directly at your chosen institution. You typically need to submit these as part of your complete application packet.

  <br/><br/><a style={gradientStyleSpring} id='gradientSubSub'><span id='subsubSubtitle'>Application Timeline</span></a><br/>
  Austria offers two main intakes for higher education:<br/><br/>
  
  <strong>Winter Semester (starts in October)</strong><br></br>
  For EU, EEA, and Swiss students the application period is from July 7 to September 5, 2025. Admission runs until October 31, 2025. The semester begins on October 1, 2025.
  For Non-EU/EEA students, applications are accepted from July 7 to August 1, 2025. Admission period is the same, ending October 31, 2025. Semester starts October 1, 2025.
  Some universities may extend deadlines in exceptional cases; always check the official university website.<br/><br/>

  <strong>Summer Semester (starts in March)</strong><br/>
  EU, EEA, and Swiss students can apply between January 8 and February 5, 2026. Admission continues until March 31, 2026. Semester starts March 1, 2026.<br/>
  Non-EU/EEA students have the application window from January 8 to February 7, 2026. Admission lasts until March 31, 2026. Semester begins March 1, 2026.<br/>
  Deadlines may be extended by some universities in special cases; confirm on official sites.<br/>


  <br/><a style={gradientStyleAutumn} id='gradientSubSub'><span id='subsubSubtitle'>Entry Requirements</span></a><br/>
  International students must hold a <strong>secondary school leaving certificate</strong> equivalent to Austria’s <strong>Matura</strong>, or complete at least 3 years of recognized tertiary education (≥ 180 ECTS), recognized by the university.  
  You must demonstrate <strong>German language proficiency</strong>, unless your programme is fully offered in English. Typically a certificate of ≥ 4 years German study or a recognized German language diploma is required.  
  For English-language programmes, proof of <strong>English proficiency</strong> (e.g. B2 or higher) may be required at certain universities.

  <br/><a style={gradientStyleRed} id='gradientSubSub'><span id='subsubSubtitle'>Required Documents</span></a><br/>
  A complete application generally includes:  
  Valid passport or ID  
  Secondary school leaving certificate (original + official/legal translation if necessary)  
  Transcript or list of subjects (with translation if needed)  
  Completed application and registration forms required by the university  
  Proof of language proficiency (German and/or English) as required by your programme  
  For third-country nationals: proof of sufficient funds, accommodation, and health insurance (if applying for residence permit)

  <br/><span id='warning'>For programmes such as medicine, psychology, arts, or technology, <strong>entrance exams or aptitude tests</strong> may be required—check specific university admission pages.</span>

  <br/><br/><a id='gradientSubSub'><span id='subsubSubtitle'>Tuition & Residence Permit (Non‑EU/EEA)</span></a><br/>
  Public universities generally charge only the <strong>ÖH student union fee</strong> (≈ €21 per semester) for EU/EEA students. For non‑EU/EEA students, tuition can be around <strong>€726.72 per semester</strong> (~ €1,450/year) after the exemption period.    <strong>Residence permit</strong> (“Student”) required before arrival; apply at your local <strong>Austrian diplomatic mission</strong>. Processing may take up to 90 days.  
  You must provide:
    Letter of admission  
    Proof of living cost funds (~€7,300/year for ≤ 23 years old; ~€13,200 if older)  
    Proof of accommodation  
    Health insurance covering minimum €30,000 medical coverage

    <br></br>
    <br/><a id='gradientSubSub'><span id='subsubSubtitle'>Steps to Applying</span></a><br/>
    Choose a degree program and university from <a href="https://www.ucas.com/" id="hyperlink" target="_blank" rel="noopener noreferrer">UCAS</a>.<br/>
    Register and complete your application on UCAS. You can apply to up to five programs.<br/>
    Submit predicted or final school results (and other relevant documents).<br/>
    Await offers (conditional or unconditional) from universities.<br/>
    Accept your offer through UCAS and pay any tuition deposit if required.<br/>
    Apply for a student visa (Tier 4) after receiving a Confirmation of Acceptance for Studies (CAS).<br/>
    Prepare for travel and arrange accommodation before the course start date.


  <br/><br/><a id='gradientSubSub'><span id='subsubSubtitle'>Additional Notes</span></a><br/>
  <strong>Translation and official legalization</strong>: if documents are not in German or English, they must be <em>sworn translated</em> and legalised per country requirements (embassy apostille, etc.).  
    Admission for some programmes includes <strong>online pre-admission chat</strong> or scheduling at the university, such as at University of Vienna.  
  Always refer to the <strong>official admission or international student page</strong> of your chosen Austrian university to confirm any specific requirements or deadlines.
</>




const backgroundColorStyle = 'linear-gradient(to bottom, rgb(0, 0, 0), rgb(117, 0, 0))'
const backgroundColorObjectStyle: number[] = [118, 50, 0]





const Austria = () => {
    const CountryInformation = {
        countryName: "AUSTRIA",
        countryNameOptional: "AUSTRIAN",
        internationalAdmissionInformation: internationalAdmissionInformationText,
        footerInformation: "We always recommend verifying this information on official Goverment or University Websites, Don't rely on this information.",
        titleColor1: "#ff1100",
        titleColor2: "#ffffff",
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

export default Austria;