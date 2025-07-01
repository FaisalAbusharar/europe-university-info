
import Country from '../../../../components/country';
import '../../../../styles/countrypage.css'
import { Poppins } from 'next/font/google';
import ScrollTo from '../../../../components/scrollFunction'
import Wipscreen from '../../../../components/wipscreen'
import "../../../../styles/support.css"


const USA = () => {
    const CountryInformation = { footerInformation: "Coming soon!",returnPage: "./pages/beyond/countries"}
    return (<div> <Wipscreen footerInformation={CountryInformation.footerInformation} returnPage={CountryInformation.returnPage}></Wipscreen></div>)


}

export default USA