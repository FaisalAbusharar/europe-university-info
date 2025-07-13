import Link from "next/link";
import '../styles/countrypage.css';
import useIsMobile from "../utils/useIsMobile";

const Footer = ({
  footerInformation,
  footerInformationOptional = 'Studying in Europe is always a good idea! But you have to know if you are able to do it',
  returnPage = '', // will check if it's empty in logic
  returnText = <>Go Back</>,
  optionalCredit = <a href="https://faisoolia.com/">Developed by Faisal Abusharar</a>,
  returnButton = true,
  footerTheme = 'linear-gradient(to right, #3801fe, #6625fc)',
  showAIwarning = false
}) => {

  const handleGoBack = () => {
    if (!returnPage || returnPage.trim() === '') {
      window.history.back();
    }
  };

  const isMobile = useIsMobile();
  console.log(isMobile)
  let defaultFooterInformationOptional = footerInformationOptional
   
   footerInformationOptional = isMobile ? 'The right place for knowledge about studying in Europe!' : defaultFooterInformationOptional
  

  return (
    <div style={{ background: footerTheme }} className="footerContainer">
      {showAIwarning ? (
        <p id="Aiwarning">
          <a id="warning">Some of this information may be AI generated</a>.{" "}
          <a id="hyperlink" href="/pages/support/AI">Learn more</a>
        </p>
      ) : null}
      
      <p id="footer">
        {footerInformation}
        <br />
        {footerInformationOptional}
      </p>

      <div className="credit-container">
        <p id="leftCredit">{optionalCredit}</p>

        {returnButton ? (
          returnPage && returnPage.trim() !== '' ? (
            <Link href={returnPage}>
              <button id="footerReturnButton" className="bg-custom-gradient text-white font-bold py-2 px-4 rounded">
                {returnText}
              </button>
            </Link>
          ) : (
            <button id="footerReturnButton" className="bg-custom-gradient text-white font-bold py-2 px-4 rounded" onClick={handleGoBack}>
              {returnText}
            </button>
          )
        ) : (
          <p id="rightCredit">{returnText}</p>
        )}
      </div>
    </div>
  );
};

export default Footer;
