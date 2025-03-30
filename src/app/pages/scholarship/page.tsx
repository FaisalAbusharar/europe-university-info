import '../../styles/scholarshipPage.css'
import { Poppins, Exo } from 'next/font/google';
import Footer from '../../components/footer'



const poppins = Poppins({ subsets: ['latin'], weight: ['400', '700'] });
const exo = Exo({subsets: ['latin'], weight: ['400', '800']})

const Scholarship = () => {
    return (
        <main id='scholarshipContainer' className={`${exo.className} flex flex-col min-h-screen`}>
            <div className="flex-grow flex flex-col items-center justify-center">
                <div id='titleContainer' className="text-center mb-auto mt-8">
                    <h1 id="Title"><a id="gradientRed">Scholarships</a></h1>
                  
                    <h2 id="Subtitle"> <span id='gradientRed'>Scholarship Information about European Countries</span></h2>
                </div>    
            </div>
            <Footer footerInformation={'Europe is filled with scholarships, they can be your key to Europe!'}></Footer>
        </main>
    )
}

export default Scholarship