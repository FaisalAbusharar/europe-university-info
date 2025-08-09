import Finance from '../../../components/finance';
import '../../../styles/countrypage.css'


const gradientStyleGreen = {
    background: 'linear-gradient(to right, rgb(51, 204, 51), rgb(0, 204, 0), rgb(0, 153, 51))', WebkitBackgroundClip: 'text', backgroundClip: 'text', WebkitTextFillColor: 'transparent',color: 'transparent', display: 'inline-block',
};

const gradientStyleBrownOrange = {
    background: 'linear-gradient(to right, rgb(255, 133, 51), rgb(230, 92, 0))', WebkitBackgroundClip: 'text', backgroundClip: 'text', WebkitTextFillColor: 'transparent',color: 'transparent', display: 'inline-block',
};

const gradientStyleRed = {
    background: 'linear-gradient(to right, rgb(255, 0, 0), rgb(200, 0, 0))',WebkitBackgroundClip: 'text',backgroundClip: 'text',WebkitTextFillColor: 'transparent',color: 'transparent',display: 'inline-block',
};

const gradientStyleBlue = {
    background: 'linear-gradient(to right, rgb(0, 13, 255), rgb(0, 87, 200))',WebkitBackgroundClip: 'text',backgroundClip: 'text',WebkitTextFillColor: 'transparent',color: 'transparent',display: 'inline-block',
};

const gradientStyleYellow = {
    background: 'linear-gradient(to right, rgb(255, 247, 0), rgb(200, 123, 0))',WebkitBackgroundClip: 'text',backgroundClip: 'text',WebkitTextFillColor: 'transparent',color: 'transparent',display: 'inline-block',
};


const internationalFinanceInformationText = 
<>
  <a style={gradientStyleGreen} id="gradientSubSub" className="text-2xl font-bold mt-6 mb-2">
    University Tuition Fees in Finland (Non-EU/EEA Students)
  </a>
  <p>
    Tuition fees for international students in Finland vary widely depending on the university, the degree level, and the chosen field of study. 
    For English-taught <strong>Bachelor’s programs</strong>, fees typically range between €5,000 and €18,000 per academic year, while 
    <strong> Master’s programs</strong> are usually priced between €9,000 and €18,000. Some highly specialized degrees, such as Medicine, 
    can exceed these ranges significantly.
  </p>
  <br></br>
  <h3 style={gradientStyleRed} id="gradientSubSub" className="text-xl font-semibold mt-4 mb-1">Field-Specific Trends</h3>
  <p>
    In <strong>Information Technology, Engineering, and Computer Science</strong>, Bachelor’s programs often cost between €5,000 and €18,000 annually, 
    while Master’s degrees average €12,000–€16,000 per year. For example, the University of Oulu charges around €10,000/year for a Bachelor’s in IT, 
    and Aalto University’s Master’s in Computer Science is approximately €15,000/year.
  </p>
  <br></br>
  <p>
    <strong>Business, Economics, and Management</strong> degrees tend to be slightly more expensive, with Bachelor’s programs ranging from €6,000 to €15,000, 
    and Master’s programs generally between €10,000 and €18,000. A well-known example is Hanken School of Economics, which charges about €12,500/year for its Master’s in Economics.
  </p>
  <br></br>
  <p>
    In <strong>Arts, Design, and Architecture</strong>, Bachelor’s and Master’s fees usually fall between €6,000 and €15,000, with prestigious programs, 
    such as Aalto University’s Master’s in Design, reaching €15,000/year.
  </p>
  <br></br>
  <p>
    For <strong>Natural Sciences and Mathematics</strong>, Bachelor’s tuition generally ranges from €5,000 to €13,000, and Master’s from €9,000 to €16,000. 
    A typical example is the University of Helsinki’s MSc in Data Science, which is priced at around €13,000/year.
  </p>
  <br></br>
  <p>
    <strong>Medicine and Health Sciences</strong> stand apart in terms of cost and selectivity. Medicine can cost anywhere from €12,000 to €25,000/year, 
    with very few spots available for non-EU students. Nursing and other allied health degrees are typically more affordable, usually between €6,000 and €12,000 annually.
  </p>
  <br></br>


  <h3 style={gradientStyleBlue} id="gradientSubSub" className="text-xl font-semibold mt-4 mb-1">Living Costs in Finland</h3>
  <p>
    In addition to tuition, students need to budget for living expenses, which typically range from €700 to €1,200 per month depending on the city. 
    This covers housing (approximately €350–€700), food (€200–€350), transportation (€50–€70), and personal expenses.
  </p>
  <br></br>
  <h3 style={gradientStyleBrownOrange} id="gradientSubSub" className="text-xl font-semibold mt-4 mb-1">Scholarship Opportunities</h3>
  <p>
    Many universities offer merit-based scholarships covering 25% to 100% of tuition fees. At the Master’s level, the <strong>Finland Scholarship</strong>  is available, which includes full tuition coverage and a €5,000 relocation grant. Each institution has its own criteria, so applicants should check 
    directly with their chosen university.
  </p>
  <br></br>
  <h3 id="gradientSubSub" style={gradientStyleYellow} className="text-xl font-semibold mt-4 mb-1">Average Annual Cost of Study</h3>
  <p>
    Taking averages across fields, a typical Bachelor’s program for a non-EU student in Finland costs about €10,000/year in tuition, while Master’s programs 
    average €13,000/year. Medicine is considerably higher, averaging around €18,000/year. When adding average living expenses of roughly €9,000 annually, 
    the total estimated yearly cost is about <strong>€19,000 for Bachelor’s</strong>, <strong>€22,000 for Master’s</strong>, and <strong>€27,000 for Medicine</strong>. 
    These figures can vary depending on lifestyle choices, university location, and available scholarships.
  </p>
</>


const backgroundColorStyle = 'linear-gradient(to bottom, rgb(0, 0, 0), rgb(0, 26, 51))'
const backgroundColorObjectStyle: number[] = [0, 50, 150]

const Finland = () => {
    const CountryInformation = {
        countryName: "FINLAND",
        countryNameOptional: "FINNISH",
        internationalFinanceInformation: internationalFinanceInformationText,
        footerInformation: "We always recommend verifying this information on official Government or University Websites. Don't rely solely on this information.",
        titleColor1: "#003580",
        titleColor2: "#ffffff",
        backgroundColor: backgroundColorStyle,
        backgroundColorObject: backgroundColorObjectStyle,
        optionalInformation: [],
        internationalOptionalInformation: []
    }

    return (
        <div>
            <Finance
                countryName={CountryInformation.countryName}
                countryNameOptional={CountryInformation.countryNameOptional}
                internationalFinanceInformation={CountryInformation.internationalFinanceInformation}
                footerInformation={CountryInformation.footerInformation}
                titleColor1={CountryInformation.titleColor1}
                titleColor2={CountryInformation.titleColor2}
                optionalInformation={CountryInformation.optionalInformation}
                internationalOptionalInformation={CountryInformation.internationalOptionalInformation}
                backgroundColor={CountryInformation.backgroundColor}
                backgroundColorObject={CountryInformation.backgroundColorObject}
            />
        </div>
    )
}

export default Finland;
