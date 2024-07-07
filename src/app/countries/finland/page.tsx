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
        footerInformation: "I always recommend verifying this information on official Goverment or University Websites, Don't rely on this information."
    }
    return (
        <div>
            <Country countryName={CountryInformation.countryName} countryNameOptional={CountryInformation.countryNameOptional}
            admissionInformation={CountryInformation.admissionInformation} universityInformation={CountryInformation.universityInformation}
            footerInformation={CountryInformation.footerInformation}
            ></Country>
        </div>
    )
}

export default Finland;