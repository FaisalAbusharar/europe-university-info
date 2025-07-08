"use client"
import '../../../styles/countrypage.css'
import '../../../styles/gradientButtonStyles.css'
import '../../../styles/support.css';
import Support from "../../../components/support"

const titlesupport = (<>HAS AI BEEN INVOLVED WITH THE INFORMATION PROVIDED?</>)
const descriptionsupport = (<>Some of the content was edited or assisted by AI, but all information was personally reviewed for accuracy. The AI was instructed to rely only on official, government-endorsed sources and to list all relevant references whenever possible. If you find any outdated or incorrect information, please feel free to contact <a id="hyperlink" href="mailto:f_anas@icloud.com">f_anas@icloud.com</a>.</>)
const infofooter = (<>The EUI Support page to answer all your questions.</>)

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
