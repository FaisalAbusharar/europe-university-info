import '../../../styles/countrypage.css'
import '../../../styles/gradientButtonStyles.css'
import '../../../styles/support.css';
import Support from "../../../components/support"



const titlesupport = (<>HOW CAN I TRUST THE INFORMATION PROVIDED TO ME?</>)
const descriptionsupport = (<>While every effort has been made to ensure the information on this site is accurate and helpful, you should never rely solely on it. Always double-check the official sources linked or mentioned throughout the site for the most up-to-date and reliable information. All content has been personally reviewed to ensure it reflects trustworthy and verifiable facts. However, this does not guarantee it is completely free from mistakes or outdated details. If you find anything incorrect or missing, please feel free to contact <a id="hyperlink" href="mailto:f_anas@icloud.com">f_anas@icloud.com</a> so it can be corrected. Use this site as a general guide, not as a final authority. It's meant to give you a helpful overview, not replace official advice</>)
const infofooter = (<>The EUI Support page to answer all your questions.</>)

export const metadata = {
  title: "HOW CAN I TRUST THE INFORMATION PROVIDED TO ME?"
}

const AI = () => {

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



export default AI;
