
import { useTranslation } from "react-i18next";
import github from '../assets/img/github.svg'
import linkedin from '../assets/img/linkedin.svg'
import twitter from '../assets/img/twitter.svg'

export default function About(){

    const {t} = useTranslation()
    return (
        <section id="about" className="text-xl w-screen items-center flex pt-52 z-20 px-10">
        <div className="flex flex-col justify-between mt-10 max-w-[1280px] w-screen mx-auto items-center maxsm:flex-col maxsm:gap-10">
            <div className="flex flex-col font-medium gap-2 justify-center items-center">
                <span className="text-2xl text-center">{t('about.title')}</span>
                <span className="text-gray-500 text-center">{t('about.subtitle')}</span>
            </div>

            <div className='flex flex-wrap justify-between items-center mx-auto w-full mt-10 gap-10'>
                <span className="maxls:text-center">{t('about.description')}</span>
            </div>

            <div className="flex pt-10 flex-wrap justify-center items-center gap-24">
                <a href="https://github.com/xRiiku" target='_blank' rel='noopener noreferrer'><img className="w-14 h-14 hover:opacity-70" src={github} alt="github"></img></a>
                <a href="https://www.linkedin.com/in/danielramoncampos" target='_blank' rel='noopener noreferrer'><img className="w-14 h-14 hover:opacity-70" src={linkedin} alt="linkedin"></img></a>
                <a href="https://twitter.com/xRikuDev" target='_blank' rel='noopener noreferrer'><img className="w-14 h-14 hover:opacity-70" src={twitter} alt="twitter"></img></a>
            </div>

            
        </div>
        </section>
    )
}

// flex justify-between items-center max-w-[1280px] w-screen  mx-auto