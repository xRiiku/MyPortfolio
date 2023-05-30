
import { useTranslation } from 'react-i18next';
import github from '../assets/img/github.svg'
import linkedin from '../assets/img/linkedin.svg'
import twitter from '../assets/img/twitter.svg'


export default function Projects(){
    const { t } = useTranslation()

    return (
        <section id='contact' className='text-xl w-screen items-center flex pt-52 z-20 px-10'>
        <div className='flex flex-col justify-between mt-10 max-w-[1280px] w-screen mx-auto items-center maxsm:flex-col maxsm:gap-10'>
            <div className='flex flex-col font-medium gap-2 justify-center items-center'>
                <span className='text-2xl text-center'>{t('contact.mainTitle')}</span>
                <span className='text-gray-500 text-center'> {t('contact.description')}</span>
            </div>

            <div className='flex flex-wrap justify-between items-center mx-auto w-full mt-10 gap-10 maxlg:justify-center'>

            <div className="flex flex-col justify-center gap-2 w-[400px] maxls:w-[300px] maxxs:w-[200px]">
                <span className='maxls:text-center text-3xl'>{t('contact.getInTouch')}</span>
                <div className="flex pt-10 flex-wrap justify-center items-center gap-24">
                    <a href="https://github.com/xRiiku" target='_blank' rel='noopener noreferrer'><img className="w-14 h-14 hover:opacity-70" src={github} alt="github"></img></a>
                    <a href="https://www.linkedin.com/in/danielramoncampos" target='_blank' rel='noopener noreferrer'><img className="w-14 h-14 hover:opacity-70" src={linkedin} alt="linkedin"></img></a>
                    <a href="https://twitter.com/xRikuDev" target='_blank' rel='noopener noreferrer'><img className="w-14 h-14 hover:opacity-70" src={twitter} alt="twitter"></img></a>
                </div>
            </div>

            <div className='relative border border-zinc-600 rounded-xl w-[400px] maxls:w-[300px] maxxs:w-[200px]'>
            <form action="mailto:riku@rikudev.com" method="post" className="flex flex-col gap-5 p-10">
                <label className="absolute top-9 left-16 px-1 -translate-y-3 text-zinc-600">{t('contact.nameLabel')}</label>
                <input className=" w-full h-14 border border-zinc-600 rounded-md text-center" type="text" name="name" required/>
                
                <label className="absolute top-[133px] left-16 px-1 -translate-y-3 text-zinc-600">{t('contact.mailLabel')}</label>
                <input className="w-full h-14 border border-zinc-600 rounded-md text-center mt-5" type="email" name="email" required/>

                <label className="absolute top-[229px] left-16 px-1 -translate-y-3 text-zinc-600">{t('contact.messageLabel')}</label>
                <textarea className="w-full h-32 border border-zinc-600 rounded-md mt-5 text-center" name="message" required/>

                <button className='w-full h-14 border border-zinc-600 bg-[#3E75C3] text-white rounded-md text-center mt-5 uppercase' type="submit">Send</button>
            </form>
        </div>

                
            </div>

            
        </div>
        </section>
    );
}