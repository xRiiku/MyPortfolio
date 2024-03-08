
import { useTranslation } from 'react-i18next';


export default function Projects(){
    const { t } = useTranslation()

    return (
        <section id='contact' className='text-xl w-screen items-center flex pt-44 z-20 px-10'>
        <div className='flex flex-col justify-between mt-10 max-w-[1280px] w-screen mx-auto items-center maxsm:flex-col maxsm:gap-10'>
            <div className='flex flex-col font-medium gap-2 justify-center items-center'>
                <span className='text-5xl text-blue-500 text-center italic'>{t('contact.mainTitle')}</span>
            </div>

            <div className='flex flex-wrap justify-between items-center mx-auto w-full mt-10 gap-10 maxlg:justify-center'>

            <div className="flex flex-col justify-center items-center gap-2 w-[400px] maxls:w-[300px] maxxs:w-[260px]">
                <span className='maxls:text-center text-3xl maxxs:text-2xl'>{t('contact.getInTouch')}</span>
                <div className="flex pt-10 maxxs:pt-2 flex-wrap justify-center items-center gap-24 maxls:gap-12 maxxs:gap-4">
                    <a className='hover:opacity-70' href="https://github.com/xRiiku" target='_blank' rel='noopener noreferrer'>
                        <svg fill="#3B82F6" width="56" height="56" viewBox="0 -0.5 48 48" xmlns="http://www.w3.org/2000/svg"><path d="M23.999 0C10.746 0 0 10.787 0 24.097 0 34.74 6.876 43.772 16.414 46.958c1.2.222 1.639-.522 1.639-1.16 0-.573-.021-2.088-.034-4.098-6.676 1.456-8.085-3.23-8.085-3.23-1.09-2.784-2.664-3.525-2.664-3.525-2.179-1.495.166-1.465.166-1.465 2.407.17 3.675 2.483 3.675 2.483 2.142 3.683 5.617 2.62 6.985 2.002.217-1.557.838-2.619 1.524-3.221-5.33-.609-10.932-2.675-10.932-11.908 0-2.63.934-4.781 2.47-6.466-.247-.61-1.07-3.059.235-6.377 0 0 2.016-.647 6.6 2.47 1.915-.534 3.967-.801 6.008-.811 2.039.01 4.092.277 6.01.811 4.58-3.117 6.592-2.47 6.592-2.47 1.31 3.318.486 5.767.238 6.377 1.54 1.685 2.468 3.835 2.468 6.466 0 9.256-5.612 11.293-10.958 11.89.861.744 1.63 2.213 1.63 4.462 0 3.22-.03 5.819-.03 6.61 0 .644.432 1.394 1.65 1.157C41.13 43.763 48 34.738 48 24.097 48 10.787 37.254 0 23.999 0"/></svg>
                    </a>
                    <a className='hover:opacity-70' href="https://www.linkedin.com/in/danielramoncampos" target='_blank' rel='noopener noreferrer'>
                        <svg fill="#3B82F6" width="56" height="56" xmlns="http://www.w3.org/2000/svg" viewBox="-143 145 512 512"><path d="M113 145c-141.4 0-256 114.6-256 256s114.6 256 256 256 256-114.6 256-256-114.6-256-256-256zm159.8 415.7c-20.8 20.8-44.9 37.1-71.8 48.4-27.8 11.8-57.4 17.7-88 17.7-30.5 0-60.1-6-88-17.7-26.9-11.4-51.1-27.7-71.8-48.4-20.8-20.8-37.1-44.9-48.4-71.8C-107 461.1-113 431.5-113 401s6-60.1 17.7-88c11.4-26.9 27.7-51.1 48.4-71.8 20.9-20.8 45-37.1 71.9-48.5C52.9 181 82.5 175 113 175s60.1 6 88 17.7c26.9 11.4 51.1 27.7 71.8 48.4 20.8 20.8 37.1 44.9 48.4 71.8 11.8 27.8 17.7 57.4 17.7 88 0 30.5-6 60.1-17.7 88-11.4 26.9-27.7 51.1-48.4 71.8z"/><path d="M-8.5 348.4h49.9v159.7H-8.5zM15.4 273c-18.4 0-30.5 11.9-30.5 27.7 0 15.5 11.7 27.7 29.8 27.7h.4c18.8 0 30.5-12.3 30.4-27.7-.4-15.8-11.7-27.7-30.1-27.7zM177.7 346.9c-28.6 0-46.5 15.6-49.8 26.6v-25.1H71.8c.7 13.3 0 159.7 0 159.7h56.1v-86.3c0-4.9-.2-9.7 1.2-13.1 3.8-9.6 12.1-19.6 27-19.6 19.5 0 28.3 14.8 28.3 36.4v82.6H241v-88.8c0-49.4-27.8-72.4-63.3-72.4z"/></svg>                    </a>
                    <a className='hover:opacity-70' href="https://twitter.com/xRikuDev" target='_blank' rel='noopener noreferrer'>
                        <svg fill="#3B82F6" width="56" height="56" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg"><path d="M13.567 5.144c.008.123.008.247.008.371 0 3.796-2.889 8.173-8.172 8.173v-.002A8.131 8.131 0 0 1 1 12.398a5.768 5.768 0 0 0 4.25-1.19 2.876 2.876 0 0 1-2.683-1.995c.431.083.875.066 1.297-.05A2.873 2.873 0 0 1 1.56 6.348v-.036c.4.222.847.345 1.304.36a2.876 2.876 0 0 1-.89-3.836 8.152 8.152 0 0 0 5.92 3 2.874 2.874 0 0 1 4.895-2.619 5.763 5.763 0 0 0 1.824-.697 2.883 2.883 0 0 1-1.262 1.588A5.712 5.712 0 0 0 15 3.656a5.834 5.834 0 0 1-1.433 1.488z"/></svg>
                    </a>
                </div>
            </div>

            <div className='relative border border-zinc-600 rounded-xl w-[400px] maxls:w-[300px] maxxs:w-[270px]'>
            <form action="mailto:danielRC@rikudev.com" method="post" className="flex flex-col gap-5 p-10">
                <input className=" w-full h-14 border border-zinc-600 rounded-md text-center" type="text" name="name" required placeholder={t('contact.nameLabel')}/>
                
                <input className="w-full h-14 border border-zinc-600 rounded-md text-center mt-5" type="email" name="email" required placeholder={t('contact.mailLabel')}/>

                <textarea className="w-full h-32 border border-zinc-600 rounded-md mt-5 text-center" name="message" required placeholder={t('contact.messageLabel')}/>

                <button className='w-full h-14 border border-zinc-600 bg-[#3B82F6] text-white rounded-md text-center mt-5 uppercase' type="submit">{t('contact.send')}</button>
            </form>
        </div>

                
            </div>

            
        </div>
        </section>
    );
}