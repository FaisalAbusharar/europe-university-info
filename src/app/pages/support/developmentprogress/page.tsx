import '../../../styles/countrypage.css'
import '../../../styles/gradientButtonStyles.css'
import '../../../styles/support.css';
import Support from "../../../components/support"

const titlesupport = (<>WHEN WILL THE WEBSITE BE FULLY DEVELOPED?</>)
const descriptionsupport = (<>Websites like this take a really long time to develop and actually may never be fully developed, the website will continue to be updated with new information and new useful content for students, but planning a deadline for a finished build is near impossible.</>)
const infofooter = (<>The EUI Support page to answer all your questions.</>)

export const metadata = {
  title: "WHEN WILL THE WEBSITE BE FULLY DEVELOPED?"
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
