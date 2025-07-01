import Link from "next/link"
import '../styles/countrypage.css'

const Footer = ({
    footerInformation,
    footerInformationOptional = 'Studying in Europe is always a good idea! But you have to know if you are able to do it',
    returnPage = '/',
    returnText = <>Go Back</>,
    optionalCredit = <a href="https://faisoolia.com/">Developed by Faisal Abusharar</a>,
    returnButton = true,
    footerTheme = 'linear-gradient(to right, #3801fe, #6625fc)',
    showAIwarning = false

}) => {


return(
  
    <div style={{background: footerTheme}} className="footerContainer">
       {showAIwarning ? <p id="Aiwarning"><a id="warning">Some of this information may be AI generated</a>. <a id="hyperlink" href="../support/AI">Learn more</a></p> : ""} 
        <p id="footer">{footerInformation}
          <br />{footerInformationOptional}</p>
        <div className="credit-container">
          <p id="leftCredit">{optionalCredit}</p>
          {returnButton ? <Link href={`/${returnPage}`}><button id="footerReturnButton" className="bg-custom-gradient text-white font-bold py-2 px-4 rounded">{returnText}</button></Link> : <p id="rightCredit">{returnText}</p>} 
        </div>
      </div>
)
}


export default Footer