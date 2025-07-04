
import CountryBeyond from '../../../../components/countrybeyond';
import '../../../../styles/countrypage.css'
import { Poppins } from 'next/font/google';
import ScrollTo from '../../../../components/scrollFunction'
// import Wipscreen from '../../../../components/wipscreen'
import "../../../../styles/support.css"


const backgroundColorStyle = 'linear-gradient(to bottom, rgb(0, 0, 0), rgb(78, 2, 2),  rgb(0, 31, 117))'
const backgroundColorObjectStyle: number[] = [255, 255, 255]

/* Information Area */
const AdmissionInformationText = (
  <>
    
      For undergraduate (Bachelor’s) programs in the U.S., you’ll need a secondary or high school diploma that qualifies you for university in your home country. This should be officially translated and certified. Most universities also require full academic transcripts, SAT or ACT scores, recommendation letters, personal essays, and proof of financial ability to support your studies and living costs. Applications are submitted through platforms like the Common App, Coalition App, or directly on the university’s own portal. Early Decision and Early Action deadlines are usually in November or December, while Regular Decision is often due by January for fall (September) intake.
      <br></br>

   
      For Master’s and PhD programs, you must hold a relevant Bachelor’s or Master’s degree depending on the level. You’ll be asked for your academic transcripts (translated and evaluated), test scores like the GRE or GMAT if required, letters of recommendation, a statement of purpose, and sometimes a CV or writing sample.
      <br></br>
    

    
      English proficiency is required for non-native speakers and can be proven through exams such as the <a href="https://www.ets.org/toefl.html" target="_blank" rel="noopener noreferrer" id="hyperlink">TOEFL</a>, <a href="https://ielts.org/" target="_blank" rel="noopener noreferrer" id="hyperlink">IELTS</a>, <a href="https://www.pearsonpte.com/" target="_blank" rel="noopener noreferrer" id="hyperlink">PTE</a>, or the Duolingo English Test. These scores must be sent directly from the testing organization. Minimum score requirements differ across institutions. For example, Clemson University suggests a TOEFL iBT score of 80 or above, IELTS of 6.5, and Duolingo of 110 or higher, while the University of Maryland may require additional English-language coursework if writing scores are weak.
      <br></br>
    

    
      Some universities grant waivers from English tests if your previous degree was earned in English or from an approved English-speaking institution.
      <br></br>
    

   
      The application process for both undergraduate and graduate programs is direct—either through centralized platforms or individual university websites. The U.S. does not have a unified national application system.
      <br></br>
    

   
      Once admitted, international students receive a Form I-20 from the university. With that, they must pay the SEVIS I‑901 fee, complete the DS‑160 visa application, attend a consular interview for an F‑1 or M‑1 visa, and prepare for their arrival by securing housing, insurance, and travel.
      <br></br>
   

   
      Each university sets its own deadlines and may have additional or higher requirements, so always check the official admissions page of your chosen school or refer to trusted sources like <a href="https://educationusa.state.gov/" target="_blank" rel="noopener noreferrer" id="hyperlink">EducationUSA</a> and <a href="https://www.usa.gov/international-student" target="_blank" rel="noopener noreferrer" id="hyperlink">USA.gov</a>.
    
  </>
);


const UniversityInformationText = (
  <>
    U.S. universities are globally recognized for their academic quality, research opportunities, and flexibility in course selection. Students can often tailor their degrees, explore different fields, and access cutting-edge facilities.

    Many universities are known for welcoming international and immigrant students, offering visa support, orientation programs, and multicultural communities. Schools like New York University, UC Berkeley, and the University of Arizona are especially inclusive and diverse.

    While studying in the U.S. offers valuable experience and global prestige, it’s important to be aware of high tuition costs, mandatory health insurance, and visa limitations on work. Planning ahead and applying for scholarships can help ease financial pressure.

    Overall, the U.S. is a strong destination for students seeking academic freedom, innovation, and future career opportunities.
  </>
);



const TuitionFees = (
  <>
    Information will be available to download here about specific universities soon. Page should redirect. <br /><br />
    On average, tuition fees in the U.S. vary by institution type:
    <ul className="list-disc list-inside mt-2 mb-2">
      <li><span className="font-semibold">Public universities (out-of-state/international students):</span> $20,000–$35,000 per year</li>
      <li><span className="font-semibold">Private universities:</span> $35,000–$60,000+ per year</li>
      <li><span className="font-semibold">Community colleges:</span> $8,000–$15,000 per year</li>
    </ul>
    Additional costs for living, books, health insurance, and personal expenses usually range from $10,000–$20,000 per year.
  </>
);



const permitInformation = (
  <>
    To study in the U.S., you’ll generally need an F‑1 (academic) or M‑1 (vocational) student permit. After being accepted by a SEVP-certified school, you’ll receive Form I‑20 (for F/M) or DS‑2019 (for J‑1). This document, along with your passport, is required to apply for a visa and enter the U.S.
  </>
);

const visaGeneralRequirements = (
  <>
    To apply for an F‑1 or M‑1 visa, you must first be accepted by a SEVP-certified U.S. institution and receive Form I‑20 or DS‑2019 from the school. You then complete the online DS‑160 application and pay the visa fee. Next, you schedule and attend a consular interview where you’ll present a valid passport, a compliant photo, your I‑20 or DS‑2019 form, proof of financial ability, and evidence of ties to your home country indicating your intent to return.

    You’ll also need to demonstrate English proficiency, usually during the interview. Before your appointment, the SEVIS I‑901 fee ($350 for F and M visas) must be paid.
  </>
);


const visaFinancialRequirements = (
  <>
    When applying for your I‑20, you must prove you have enough funds to cover tuition, mandatory fees, estimated living expenses like housing and meals, and the SEVIS I‑901 fee ($350). The total amount varies by university and location, but generally, you should show liquid funds equal to 100% to 150% of your I‑20’s annual cost—typically between $20,000 and $60,000 or more depending on the institution.

    Acceptable proof includes recent bank statements, official education loan letters, scholarship or assistantship awards, and sponsor letters with financial documents. Non-liquid assets such as property or stocks are not accepted. All documents must be recent, usually dated within the last 3 to 6 months, and submitted before your school issues the I‑20.
  </>
);

const visaInsuranceRequirements = (
  <>
    Many U.S. universities require international students to have health insurance, though this is not mandated by visa regulations. Insurance is typically purchased through the university or an approved provider and covers medical emergencies, routine care, and sometimes mental health services. For specific coverage requirements, it is best to consult your school’s international student office.
  </>
);




const whyChooseUSA = (
  <>
    The United States is one of the most popular study destinations in the world due to the quality, diversity, and flexibility of its higher education system. Students have access to over 4,000 accredited institutions, ranging from small liberal arts colleges to large research universities. The academic environment emphasizes independent thinking, problem-solving, leadership, and creativity—traits highly valued in the global job market.

    U.S. universities allow students to explore various subjects before choosing a major, and many programs encourage research, internships, and practical training. Furthermore, the U.S. is home to many of the top-ranked institutions globally, with faculty recognized for their expertise and contributions to innovation.

    International students are welcomed on campuses across the country, with support offices that help with academic advising, immigration guidance, and cultural integration. This combination of academic excellence and support services makes the U.S. an attractive destination for students aiming to build strong foundations for international careers.
  </>
);




const USAAdvantages = [
  "Academic flexibility: Students can choose their major after admission, take courses across disciplines, and even switch fields during their studies.",
  "Research and innovation: U.S. universities lead globally in research output and provide opportunities for students to participate in groundbreaking work.",
  "Support for international students: Most universities have dedicated international offices offering visa help, cultural orientation, English support, and academic advising.",
  "Optional Practical Training (OPT): F-1 students can work in their field of study for up to 12 months after graduation (or 36 months for STEM), gaining real-world experience.",
  "Diverse campus life: With students from all over the world, U.S. campuses offer exposure to different cultures, ideas, and perspectives, promoting global citizenship.",
  "Transfer opportunities: Community college students can often transfer into four-year degree programs after completing general education requirements, making U.S. education more accessible and affordable."
];


const USADisadvantages = [
  "High cost of education: Tuition for international students can range from $20,000 to $60,000 per year, not including living expenses and health insurance.",
  "Complex visa regulations: Students must strictly follow F‑1 visa rules, including full-time enrollment, limited work authorization, and SEVIS compliance.",
  "Healthcare costs: The U.S. does not have universal healthcare. International students are usually required to purchase expensive health insurance plans through their university.",
  "Variable quality of institutions: Not all U.S. colleges have the same academic standards. Without careful research, students may end up at less reputable schools that offer poor return on investment.",
  "Limited work opportunities during study: F‑1 students are generally only allowed to work on-campus up to 20 hours per week during semesters unless approved for CPT or OPT.",
  "Cultural adjustment: Differences in teaching style, academic expectations, and lifestyle may take time to adjust to, and international students may face isolation if support is lacking."
];











const RegularVSUasUni = (
  <>
    The U.S. does not have a centralized higher education system like some European countries. Instead, it offers a mix of institution types to suit different academic and financial needs. Four-year universities—both public and private—offer bachelor's degrees and often graduate programs. These institutions may focus on academic research, professional preparation, or liberal arts education.

    Community colleges, which are similar to universities of applied sciences in Europe, offer two-year associate degrees and short-term certificates. They are typically more affordable and flexible, and many students transfer from a community college to a four-year university after completing foundational coursework. These colleges often have open admission policies, small class sizes, and strong ties to local industries.

    Both types of institutions must be accredited and certified to host international students. The best choice depends on your goals—community colleges are ideal for affordable entry into U.S. education, while universities may offer a more direct path to advanced degrees and research.
  </>
);

  
  




const USA = () => {
   const CountryInformation = {
        countryName: "UNITED STATES OF AMERICA",
        countryNameOptional: "AMERICAN",
        internationalAdmissionInformation: AdmissionInformationText,
        internationalUniversityInformation: UniversityInformationText,
        internationalTuitionFeesInformation: TuitionFees,
        visaRequirementsRequirements: visaGeneralRequirements,
        visaRequirementsFinancials: <div id="financial-requirements">{visaFinancialRequirements}</div>,
        visaRequirementsInsurance: visaInsuranceRequirements,
        footerInformation: "We always recommend verifying this information on official Goverment or University Websites, Don't rely on this information.",
        whyChooseCountry: [{title: <>WHY <p id="gradientSub">{"THE USA"}?</p></>, description: whyChooseUSA}],
        advantages: USAAdvantages,
        disadvantages: USADisadvantages,
        titleStyle: `linear-gradient(to left, rgb(255, 255, 255), rgb(197, 0, 0) ,rgb(2, 77, 189))`,
        backgroundColor: backgroundColorStyle,
        backgroundColorObject: backgroundColorObjectStyle,
        optionalInformation: [
            // {title: <><span id="gradientSub">Important Admission Information</span></>, description: admissionRequirements},
            {title:  <><span id="gradientSub">U.S. UNIVERSITIES</span> OR <span id="gradientSubSub">COMMUNITY COLLEGES</span></>, description: RegularVSUasUni},
        ],
        internationalOptionalInformation: [
            {title: <><span id="gradientSubSub">Student Permit Information</span></>, description: permitInformation},
        ],

    }

    return (
        <div>
            <CountryBeyond countryName={CountryInformation.countryName} countryNameOptional={CountryInformation.countryNameOptional}
            // admissionInformation={CountryInformation.admissionInformation} 
            admissionInformation={CountryInformation.internationalAdmissionInformation}
            // universityInformation={CountryInformation.universityInformation} 
            universityInformation={CountryInformation.internationalUniversityInformation}
            universityFees={CountryInformation.internationalTuitionFeesInformation}
            footerInformation={CountryInformation.footerInformation} 
            titleStyleBackground={CountryInformation.titleStyle}
            backgroundColor={CountryInformation.backgroundColor} backgroundColorObject={CountryInformation.backgroundColorObject}
            whyChooseCountry={CountryInformation.whyChooseCountry}
            advantages={CountryInformation.advantages} disadvantages={CountryInformation.disadvantages}
            optionalInformation={CountryInformation.optionalInformation}
            visaRequirementsRequirements={CountryInformation.visaRequirementsRequirements} visaRequirementsFinancials={CountryInformation.visaRequirementsFinancials}
            visaRequirementsInsurance={CountryInformation.visaRequirementsInsurance}
            ></CountryBeyond>
        </div>
    )


    

}

export default USA