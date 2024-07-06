import {Poppins } from 'next/font/google';
import Link from 'next/link';
import './finland.css'

const poppins = Poppins({subsets: ['latin'], weight: ['400', '700'] });

const Finland = () => {
    return (
        <main className={`${poppins.className} flex flex-col min-h-screen`}>
            <div className="flex-grow flex-col items-center justify-center bg-gradient-to-r from-black to-gray-900">
                <h1 id="Title-Fin">FINLAND</h1>
                <hr id="line"></hr>
                <h2 id="Subtitle-Left">FINNISH <p id="gradient-sub">ADMISSION</p></h2>
                <p id="InfoBody">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam pellentesque a lorem ac rutrum. Sed venenatis ornare elit nec tincidunt. Proin vel pellentesque odio, ut iaculis nunc. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Mauris et mi lacinia ligula gravida semper. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut interdum dolor nisi, at dictum mi consectetur sit amet. Etiam vitae ornare est. Maecenas mattis euismod ipsum in condimentum. Suspendisse pellentesque enim ut tellus ultrices, at molestie nulla pharetra. Pellentesque sagittis tellus nec accumsan tempor. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum eu augue quis sem mollis pretium. Nunc sagittis commodo efficitur. Maecenas lacus massa, suscipit ut elit id, dictum ornare massa. Vivamus non diam eleifend, imperdiet ante finibus, posuere massa.</p>
                <h2 id="Subtitle-Left">FINNISH <p id="gradient-sub">UNIVERSITIES</p>    </h2>
                <p id="InfoBody">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam pellentesque a lorem ac rutrum. Sed venenatis ornare elit nec tincidunt. Proin vel pellentesque odio, ut iaculis nunc. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Mauris et mi lacinia ligula gravida semper. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut interdum dolor nisi, at dictum mi consectetur sit amet. Etiam vitae ornare est. Pellentesque sagittis tellus nec accumsan tempor. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum eu augue quis sem mollis pretium. Nunc sagittis commodo efficitur. Maecenas lacus massa, suscipit ut elit id.</p>
            </div>
        </main>
    )
}

export default Finland;