import iaImage from '../assets/img/IAPhoto.webp'
import { useTranslation } from "react-i18next";
import pdf from "../assets/utilities/Daniel-RamonCV.pdf"

function Home() {
    const {t} = useTranslation()
  return (
<main id="home" className="text-xl w-screen flex justify-center items-center pt-44 maxmd:pt-10 maxsm:pt-6 z-20">
  <div className="flex justify-center items-center gap-20 maxmd:gap-6 maxlg:flex-col">
    <div className="flex flex-wrap maxlg:order-2">
      <div className="w-full flex flex-wrap flex-col maxlg:justify-center maxlg:items-center">
        <p className="myName text-7xl mx-6 text-left maxlg:text-center font-medium text-transparent bg-clip-text">Daniel Ramon</p>
        <p className="text-5xl mx-6 text-left maxlg:text-center mb-2 mt-3 font-medium">{t('home.developer')}</p>

        <p className="mb-4 mx-6 max-w-[50ch] mt-8">{t('about.description1')}</p>
        
        <div className='flex gap-8 mt-6 mx-6 items-center text-center'>
          <a className='bg-blue-500 text-white w-36 h-12 text-lg text-center font-medium decoration-0 p-2 rounded-3xl hover:opacity-90' target="_blank" rel='noreferrer' href={pdf}>{t("about.CV")}</a>
          <a className='bg-blue-500 text-white w-36 h-12 text-lg text-center font-medium decoration-0 p-2 rounded-3xl hover:opacity-90' target="_blank" rel='noreferrer' href="mailto:drc89.sxm@gmail.com">{t("about.contactMe")}</a>
        </div>
        </div>
      </div>

        <img className='w-72 rounded-full h-72 object-cover object-center maxlg:order-1' src={iaImage} alt='iaPhoto'></img>

    </div>
</main>
  )
}

export default Home