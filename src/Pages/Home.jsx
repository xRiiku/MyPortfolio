import iaImage from '../assets/img/IAPhoto.webp'
import { useTranslation } from "react-i18next";

export default function Home(){

    const {t} = useTranslation()
    return (
        <main id="home" className="text-xl w-screen items-center flex pt-52 z-20 px-10">
        <div className="flex mt-10 justify-between items-center max-w-[1280px] w-screen mx-auto maxmd:flex-col maxmd:gap-10">
            <div className="text-4xl flex flex-col font-medium gap-2">
                <p className='text-xl opacity-80 max400:text-lg'>{t('home.hi')}</p>                
                <p className="text-8xl max501:text-6xl maxxs:text-5xl bg-gradient-to-r from-sky-500 via-purple-500 to-pink-600 text-transparent bg-clip-text">Daniel RC</p>
                <p className='maxls: text-3xl max400:text-xl'>{t('home.developer')}</p>
            </div>

            <div className='border-4 bg-gradient-to-b from-sky-500 via-purple-500 to-pink-600 bg-clip-border border-transparent rounded-full'>
                <img className='w-52 h-52 rounded-full' src={iaImage} alt='iaPhoto'></img>
            </div>

            
        </div>
        </main>
    );
}