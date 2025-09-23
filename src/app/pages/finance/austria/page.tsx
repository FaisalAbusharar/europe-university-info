import Finance from '../../../components/finance';
import '../../../styles/countrypage.css';

const gradientStyleGreen = {
  background: 'linear-gradient(to right, rgb(51, 204, 51), rgb(0, 204, 0), rgb(0, 153, 51))',
  WebkitBackgroundClip: 'text',
  backgroundClip: 'text',
  WebkitTextFillColor: 'transparent',
  color: 'transparent',
  display: 'inline-block',
};

const gradientStyleRed = {
  background: 'linear-gradient(to right, rgb(255, 0, 0), rgb(200, 0, 0))',
  WebkitBackgroundClip: 'text',
  backgroundClip: 'text',
  WebkitTextFillColor: 'transparent',
  color: 'transparent',
  display: 'inline-block',
};

const gradientStyleBlue = {
  background: 'linear-gradient(to right, rgb(0, 13, 255), rgb(0, 87, 200))',
  WebkitBackgroundClip: 'text',
  backgroundClip: 'text',
  WebkitTextFillColor: 'transparent',
  color: 'transparent',
  display: 'inline-block',
};

const gradientStyleBrownOrange = {
  background: 'linear-gradient(to right, rgb(255, 133, 51), rgb(230, 92, 0))',
  WebkitBackgroundClip: 'text',
  backgroundClip: 'text',
  WebkitTextFillColor: 'transparent',
  color: 'transparent',
  display: 'inline-block',
};

const gradientStyleYellow = {
  background: 'linear-gradient(to right, rgb(255, 247, 0), rgb(200, 123, 0))',
  WebkitBackgroundClip: 'text',
  backgroundClip: 'text',
  WebkitTextFillColor: 'transparent',
  color: 'transparent',
  display: 'inline-block',
};

const internationalFinanceInformationText = (
  <>
    <a style={gradientStyleGreen} id="gradientSubSub" className="text-2xl font-bold mt-6 mb-2">
      Tuition Fees & Living Costs in Austria (Non‑EU/EEA Students)
    </a>
    <br />
    Tuition at <strong>public universities</strong> for non‑EU/EEA students stands at approximately <strong>€726.72 per semester</strong>, plus a compulsory Austrian Students’ Union (ÖH) fee of <strong>€24.70 per semester</strong>. Private universities and universities of applied sciences may charge higher tuition depending on the program.
    <br /><br />
    <span style={gradientStyleRed} id="gradientSubSub" className="text-xl font-semibold mt-4 mb-1">
      Examples at Specific Institutions
    </span>
    <br />
    <a id="hyperlink" href="https://studieren.univie.ac.at/en/tuition-fee/amount-tuition-fee/">University of Vienna</a>: €751.92/semester, <a id="hyperlink" href="https://www.wu.ac.at/en/students/getting-organized/tuition-fees-students-union-oeh-dues/">WU Vienna (Economics and Business)</a>: €751.92/semester, 
    and <a id="hyperlink" href="https://www.imc.ac.at/en/study/application/study-fees/">IMC Krems UAS</a>: €6,900/semester (Business/Health Science)
    <br /><br />
    <span style={gradientStyleBlue} id="gradientSubSub" className="text-xl font-semibold mt-4 mb-1">
      Living Costs
    </span>
    <br />
    Monthly living expenses range between <strong>€950 and €1,100</strong>, covering rent, food, transport, and personal needs. In Vienna, this may go up to <strong>€1,500/month</strong> depending on lifestyle.  
    <br></br>Rent: €300–600  <br></br>
    Food: €400–500  <br></br>
    Other: €300–400 <br></br>
    <br /><br />
    <span style={gradientStyleBrownOrange} id="gradientSubSub" className="text-xl font-semibold mt-4 mb-1">
      Financial Proof for Residence Permit
    </span>
    <br />
    To get a student residence permit, proof of funds is required:  
    - Under 24 years: <strong>€703.58/month</strong>  
    - 24 or older: <strong>€1,273.99/month</strong>  
    - Couples: <strong>€2,009.85/month</strong>  
    - Plus <strong>€149.15/month</strong> per child
    <br /><br />
    <span style={gradientStyleYellow} id="gradientSubSub" className="text-xl font-semibold mt-4 mb-1">
  Summary (Annual Estimate)
</span>
<br />
For international students studying at public universities in Austria, the total estimated annual cost combines both academic and living expenses.

<br /><br />
<strong>Tuition Fees: </strong>  
Most public universities charge non-EU/EEA students approximately <strong>€727 per semester</strong>. Since there are two semesters in an academic year, this adds up to around <strong>€1,454 annually</strong>.

<br /><br />
<strong>Student Union Fees (ÖH): </strong>  
All students must also pay a small ÖH (Austrian Student Union) fee, which is about <strong>€25 per semester</strong>. Over one year, this totals approximately <strong>€50</strong>.

<br /><br />
<strong>Living Costs: </strong>  
Monthly living costs for students are typically in the range of <strong>€950 to €1,100</strong>. This includes housing, food, transport, health insurance, and leisure. On average, students spend about <strong>€13,000 per year</strong> to cover their living expenses in Austria.

<br /><br />
<strong>Total Estimated Cost Per Year: </strong>  
Adding together tuition, union fees, and living expenses, the average total cost for a full academic year at a public university is roughly <strong>€14,500 to €14,800</strong>.

<br /><br />
<strong>Private Universities: </strong>  
Private universities and Universities of Applied Sciences (UAS) often charge significantly more. For example, at IMC Krems UAS, some programs cost around <strong>€6,900 per semester</strong>, bringing the total tuition alone to over <strong>€13,800 annually</strong> — excluding living costs.

  </>
);

const backgroundColorStyle = 'linear-gradient(to bottom, rgb(0, 0, 0), rgb(117, 0, 0))'
const backgroundColorObjectStyle: number[] = [118, 50, 0]

const Austria = () => {
  const CountryInformation = {
    countryName: 'AUSTRIA',
    countryNameOptional: 'AUSTRIAN',
    internationalFinanceInformation: internationalFinanceInformationText,
    footerInformation:
      "We always recommend verifying this information on official Government or University Websites. Don't rely solely on this information.",
    titleColor1: "#ff1100",
    titleColor2: "#ffffff",
    backgroundColor: backgroundColorStyle,
    backgroundColorObject: backgroundColorObjectStyle,
    optionalInformation: [],
    internationalOptionalInformation: [],
  };

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
  );
};

export default Austria;
