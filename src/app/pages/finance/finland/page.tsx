import Finance from '../../../components/finance';
import '../../../styles/countrypage.css'

const internationalFinanceInformationText = 
<>
  <p><strong>University Tuition Fees in Finland (for Non-EU/EEA Students)</strong></p>
  <p>
    Tuition fees in Finland vary by university, degree level, and field of study.  
    The figures below are typical for English-taught Bachelor’s and Master’s programs.
  </p>

  <ul>
    <li>
      <strong>Information Technology / Engineering / Computer Science:</strong><br/>
      Bachelor’s: €5,000 – €18,000/year  
      Master’s: €9,000 – €18,000/year  
      Examples: Aalto University MSc Computer Science ~ €15,000/year, University of Oulu BSc IT ~ €10,000/year.
    </li>

    <li>
      <strong>Business, Economics, Management:</strong><br/>
      Bachelor’s: €6,000 – €15,000/year  
      Master’s: €10,000 – €18,000/year  
      Example: Hanken School of Economics MSc Economics ~ €12,500/year.
    </li>

    <li>
      <strong>Arts, Design, Architecture:</strong><br/>
      Bachelor’s: €6,000 – €15,000/year  
      Master’s: €10,000 – €18,000/year  
      Example: Aalto University MA in Design ~ €15,000/year.
    </li>

    <li>
      <strong>Natural Sciences & Mathematics:</strong><br/>
      Bachelor’s: €5,000 – €13,000/year  
      Master’s: €9,000 – €16,000/year  
      Example: University of Helsinki MSc Data Science ~ €13,000/year.
    </li>

    <li>
      <strong>Medicine & Health Sciences:</strong><br/>
      Medicine: €12,000 – €25,000/year (very limited spots for non-EU students)  
      Nursing & Allied Health: €6,000 – €12,000/year.
    </li>
  </ul>

  <p><strong>Living Expenses:</strong>  
    €700 – €1,200/month depending on city.  
    Covers housing (€350–€700), food (€200–€350), transport (€50–€70), and personal expenses.
  </p>

  <p><strong>Annual Budget Estimate (Tuition + Living):</strong><br/>
    Bachelor’s: €14,000 – €32,000/year  
    Master’s: €18,000 – €34,000/year  
    Medicine: €25,000 – €40,000/year
  </p>

  <p><strong>Scholarships:</strong>  
    - Finland Scholarship: full tuition + €5,000 relocation grant (Master’s level).<br/>
    - University-specific merit scholarships (25%–100% tuition waiver).
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
