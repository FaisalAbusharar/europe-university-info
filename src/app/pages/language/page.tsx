import '../../styles/languagePage.css'
import { Poppins, Exo } from 'next/font/google';
import Footer from '../../components/footer'



const poppins = Poppins({ subsets: ['latin'], weight: ['400', '700'] });
const exo = Exo({subsets: ['latin'], weight: ['400', '800']})

const Language = () => {
    return (
        <main id='langaugeContainer' className={`${exo.className} flex flex-col min-h-screen`}>
            <div className="flex-grow flex flex-col items-center justify-center">
                <div id='titleContainer' className="text-center mb-auto mt-8">
                    <h1 id="Title">LANGUAGE</h1>
                  
                    <h2 id="Subtitle"> <span id='gradientSubSub'>Language Information about European Countries</span></h2>
                </div>    
            </div>
            <Footer footerInformation={'Europe is very diverse with many langauges, and you\'ll need to learn some!'}></Footer>
        </main>
    )
}

export default Language