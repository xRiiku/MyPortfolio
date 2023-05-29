
import { useTranslation } from "react-i18next";

export default function About(){

    const {t} = useTranslation()
    return (
        <section id="about" className="text-xl w-screen items-center flex pt-52 z-20 px-10">
        <div className="flex flex-col justify-between mt-10 max-w-[1280px] w-screen mx-auto items-center maxsm:flex-col maxsm:gap-10">
            <div className="flex flex-col font-medium gap-2 justify-center items-center">
                <span className="text-2xl text-center">{t('about.title')}</span>
            </div>

            <div className='flex flex-wrap justify-between items-center mx-auto w-full mt-10 gap-10'>
                <span className="maxls:text-center">{t('about.description')}</span>
                
            </div>

            
        </div>
        </section>
    )
}

// flex justify-between items-center max-w-[1280px] w-screen  mx-auto