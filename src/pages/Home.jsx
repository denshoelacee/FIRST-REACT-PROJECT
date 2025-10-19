

import PrimaryButton from '../components/buttons/primarybutton'
import SecondaryButton from '../components/buttons/SecondaryButton'
import Header from '../components/Header'
import SocialLinks from '../components/SocialLinks';
import imageme from './../assets/images/imageme.png'
import image2 from './../assets/images/image2.png'



function Home() {
    return (
        <>
            <div className="flex flex-col md:flex-row h-full text-white overflow-hidden align-center justify-center py-15">
                {/* Image */}
                <div data-aos="zoom-in" className="w-full md:w-1/2 flex justify-center items-center p-7">
                    <div className="relative h-64 w-64 md:h-92 md:w-92 flex justify-center items-center">
                        
                        <div className="absolute inset-0 fire-bg rounded-full"></div>
                        
                        {/*  Image container */}
                        <div className="h-64 w-64 md:h-92 md:w-92 rounded-full overflow-hidden group relative">
                        <img
                            src={imageme}
                            alt="Deniel Ybañez"
                            className="w-full h-full object-cover transition-opacity duration-500 group-hover:opacity-0"
                        />
                        <img
                            src={image2}
                            alt="Deniel Ybañez Hover"
                            className="w-full h-full object-cover absolute top-0 left-0 transition-opacity duration-500 opacity-0 group-hover:opacity-100"
                        />
                        </div>

                    </div>
                    </div>

                {/* Personal Information*/}
                <div data-aos="fade-left" className="w-full md:w-1/2 flex items-center p-7 ">
                    <div className="space-y-6 text-center md:text-left">
                        <p className="text-3xl md:text-4xl font-semibold">HI THERE!</p>
                        <p className="text-4xl md:text-6xl font-bold">
                        I AM <span className="text-emerald-500">DENIEL YBAÑEZ</span>
                        </p>
                        <p className="text-xl md:text-3xl text-gray-400 font-semibold">
                        FRONTEND DEVELOPER | UI/UX DESIGNER
                        </p>
                        <section className="text-base md:text-lg font-medium text-gray-200">
                        I’m a passionate and aspiring web developer based in Consolacion, Cebu, Philippines. 
                        Currently, I'm focusing on building dynamic and interactive websites with a strong 
                        emphasis on front-end development. While my primary expertise lies in front-end 
                        technologies, I’m dedicated to continuous learning and growth, and I always keep 
                        navigating the web to learn more and stay up-to-date with the latest trends and 
                        technologies.
                        </section>
                        <SocialLinks/>
                        <div className='flex gap-3 flex justify-center md:justify-normal'>
                            <PrimaryButton>
                                Download CV
                            </PrimaryButton>
                            <SecondaryButton link={'contacts'}>
                                Let's Talk
                            </SecondaryButton>
                        </div>
                    </div>
                </div>
            </div>
            <Header/>
        </>
    )
}

export default Home
