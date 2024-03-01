import { useTranslation } from "react-i18next";
import html from '../assets/img/html.svg'
import css from '../assets/img/css.svg'
import javascript from '../assets/img/javascript.svg'
import react from '../assets/img/react.svg'
import nodejs from '../assets/img/nodejs.svg'
import express from '../assets/img/express.svg'
import mongodb from '../assets/img/mongodb.svg'
import firebase from '../assets/img/firebase.svg'
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
        <section id="skills" className="w-screen items-center flex flex-col pt-44 z-20 px-10 gap-x-10">
        <div className="flex flex-col mt-10 w-full max-w-7xl m-auto items-center maxsm:flex-col maxsm:gap-10">
            <div className="flex flex-col font-medium gap-2 justify-center items-center">
                <span className="text-5xl text-center text-blue-500 italic">{t('skills.title')}</span>
            </div>
    
            <div className="grid grid-cols-5 place-content-center w-full gap-10 mt-10 maxmd:grid-cols-3 maxls:grid-cols-2 maxxxs:grid-cols-1">
                <img className='w-20 h-20 ml-[4vw] maxmd:ml-[7vw]' src={html} alt='html'></img>
                <img className='w-20 h-20 ml-[4vw] maxmd:ml-[7vw] maxls:ml-[9vw]' src={css} alt='css'></img>
                <img className='w-20 h-20 ml-[4vw] maxmd:ml-[7vw] maxls:ml-[9vw]' src={javascript} alt='javascript'></img>
                <img className='w-20 h-20 ml-[4vw] maxmd:ml-[7vw] maxls:ml-[9vw]' src={react} alt='react'></img>
                <img className='w-20 h-20 ml-[4vw] maxmd:ml-[7vw] maxls:ml-[9vw]' src={tailwind} alt='tailwind'></img>
                <img className='w-20 h-20 ml-[4vw] maxmd:ml-[7vw] maxls:ml-[9vw]' src={nodejs} alt='nodejs'></img>
                <img className='w-20 h-20 ml-[4vw] maxmd:ml-[7vw] maxls:ml-[9vw]' src={express} alt='express'></img>
                <img className='w-20 h-20 ml-[4vw] maxmd:ml-[7vw] maxls:ml-[9vw]' src={mongodb} alt='mongodb'></img>
                <img className='w-20 h-20 ml-[4vw] maxmd:ml-[7vw] maxls:ml-[9vw]' src={bootstrap} alt='bootstrap'></img>
                <img className='w-20 h-20 ml-[4vw] maxmd:ml-[7vw] maxls:ml-[9vw]' src={sass} alt='sass'></img>
                <img className='w-20 h-20 ml-[4vw] maxmd:ml-[7vw] maxls:ml-[9vw]' src={firebase} alt='firebase'></img>
                <img className='w-20 h-20 ml-[4vw] maxmd:ml-[7vw] maxls:ml-[9vw]' src={vscode} alt='vscode'></img>
                <img className='w-20 h-20 ml-[4vw] maxmd:ml-[7vw] maxls:ml-[9vw]' src={vite} alt='vite'></img>
                <img className='w-20 h-20 ml-[4vw] maxmd:ml-[7vw] maxls:ml-[9vw]' src={git} alt='git'></img>
                <img className='w-20 h-20 ml-[4vw] maxmd:ml-[7vw] maxls:ml-[9vw]' src={github} alt='github'></img>
            </div>
        </div>
    </section>
    
    );
}