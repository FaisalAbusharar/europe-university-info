import '../../styles/financePage.css'
import { Poppins, Exo } from 'next/font/google';
import Footer from '../../components/footer'



const poppins = Poppins({ subsets: ['latin'], weight: ['400', '700'] });
const exo = Exo({subsets: ['latin'], weight: ['400', '800']})

const Language = () => {
    return (
        <main id='financeContainer' className={`${exo.className} flex flex-col min-h-screen`}>
            <div className="flex-grow flex flex-col items-center justify-center">
                <div id='titleContainer' className="text-center mb-auto mt-8">
                    <h1 id="Title"><a id="gradientGold">Finances</a></h1>
                  
                    <h2 id="Subtitle"> <span id='gradientGold'>Finance Information about European Countries</span></h2>
                </div>    
            </div>
            <Footer footerInformation={'Studying in Europe can be expensive, but maybe this information can help!'}></Footer>
        </main>
    )
}

export default Language