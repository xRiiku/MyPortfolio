import { useTranslation } from "react-i18next";
import html from '../assets/img/html.svg'
import css from '../assets/img/css.svg'
import javascript from '../assets/img/javascript.svg'
import react from '../assets/img/react.svg'
import sass from '../assets/img/sass.svg'
import tailwind from '../assets/img/tailwind.svg'
import bootstrap from '../assets/img/bootstrap.svg'
import vscode from '../assets/img/vscode.svg'
import vite from '../assets/img/vite.svg'
import git from '../assets/img/git.svg'
import github from '../assets/img/github.svg'


export default function Skills(){

    const {t} = useTranslation()

    
    return (
        <section id="skills" className="text-xl w-screen items-center flex pt-52 z-20 px-10">
        <div className="flex flex-col justify-between mt-10 max-w-[1280px] w-screen mx-auto items-center maxsm:flex-col maxsm:gap-10">
            <div className="flex flex-col font-medium gap-2 justify-center items-center">
                <span className="text-5xl text-center text-[#dc72b5] italic">{t('skills.title')}</span>
            </div>

            <div className="flex flex-wrap justify-between items-center mx-auto w-full mt-10 gap-10 maxxxs:justify-center">
                <img className='w-20 h-20' src={html} alt='html'></img>
                <img className='w-20 h-20' src={css} alt='css'></img>
                <img className='w-20 h-20' src={javascript} alt='javascript'></img>
                <img className='w-20 h-20' src={react} alt='react'></img>
                <img className='w-20 h-20' src={tailwind} alt='tailwind'></img>
                <img className='w-20 h-20' src={bootstrap} alt='bootstrap'></img>
                <img className='w-20 h-20' src={sass} alt='sass'></img>
                <img className='w-20 h-20' src={vscode} alt='vscode'></img>
                <img className='w-20 h-20' src={vite} alt='vite'></img>
                <img className='w-20 h-20' src={git} alt='git'></img>
                <img className='w-20 h-20' src={github} alt='github'></img>
                
            </div>

            
        </div>
        </section>
    );
}