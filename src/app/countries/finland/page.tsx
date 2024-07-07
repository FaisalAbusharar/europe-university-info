import {Poppins } from 'next/font/google';
import Country from '../../components/country';
import './finland.css'

const poppins = Poppins({subsets: ['latin'], weight: ['400', '700'] });

const Finland = () => {
    const CountryInformation = {
        countryName: "FINLAND",
        countryNameOptional: "FINNISH",
        admissionInformation: "Admission Info Here.",
        universityInformation: "University Info Here.",
        footerInformation: "I always recommend verifying this information on official Goverment or University Websites, Don't rely on this information.",
        titleColor1: "#018cfe",
        titleColor2: "#eff2f3"
    }
    return (
        <div>
            <Country countryName={CountryInformation.countryName} countryNameOptional={CountryInformation.countryNameOptional}
            admissionInformation={CountryInformation.admissionInformation} universityInformation={CountryInformation.universityInformation}
            footerInformation={CountryInformation.footerInformation} titleColor1={CountryInformation.titleColor1} titleColor2={CountryInformation.titleColor2}
            ></Country>
        </div>
    )
}

export default Finland;