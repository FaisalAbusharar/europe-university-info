import '../../../styles/countrypage.css'
import '../../../styles/gradientButtonStyles.css'
import '../../../styles/support.css';
import Support from "../../../components/support"

const titlesupport = (<>PERMIT GENERATION PROCESS</>)
const descriptionsupport = (<>We dynamically generate permit information based on the latest official guidelines using Aritificial Intelligence. Please do not rely solely on this information for decision-making purposes. EUI and its partners are not responsible for any inaccuracies in the information provided. Thank you for your understanding.</>)
const infofooter = (<>The EUI Support page to answer all your questions.</>)

export const metadata = {
  title: "LEARN MORE ABOUT THE PERMIT GENERATION PROCESS"
}


const permitPathGeneration = () => {

  const Info = {
    title: titlesupport,
    footer: infofooter,
    description: descriptionsupport,
  }

  return (
  <div>
  <Support 
    supportTitle={Info.title} 
    supportDescription={Info.description}
    footerInformation={Info.footer}></Support>
  </div>
  );
}



export default permitPathGeneration;
