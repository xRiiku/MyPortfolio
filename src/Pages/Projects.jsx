
import { useTranslation } from 'react-i18next';
import html from '../assets/img/html.svg'
import css from '../assets/img/css.svg'
import javascript from '../assets/img/javascript.svg'
import sass from '../assets/img/sass.svg'
import bootstrap from '../assets/img/bootstrap.svg'
import tailwind from '../assets/img/tailwind.svg'
import vscode from '../assets/img/vscode.svg'
import vite from '../assets/img/vite.svg' 
import react from '../assets/img/react.svg'
import nodejs from '../assets/img/nodejs.svg'
import express from '../assets/img/express.svg'
import mongodb from '../assets/img/mongodb.svg'
import firebase from '../assets/img/firebase.svg'
import gympage from '../assets/img/projects/gym.webp'
import pokedex from '../assets/img/projects/Pokedex.webp'
import weather from '../assets/img/projects/weather.webp'
import tictactoe from '../assets/img/projects/tictactoe.webp'
import todolist from '../assets/img/projects/todolist.webp'
import coinbase from '../assets/img/projects/Coinbase.webp'
import githubFinder from '../assets/img/projects/githubProfileSearch.webp'
import tesla from '../assets/img/projects/tesla.webp'
import mernauth from '../assets/img/projects/mernauth.webp'
import buscaminas from '../assets/img/projects/buscaminas.webp'



export default function Projects(){

    const {t} = useTranslation() 

    
    return (
        <section id='projects' className='text-xl w-screen items-center flex flex-col pt-44 z-20 px-10 gap-x-10 max-w-7xl m-auto'>
        <div className='flex flex-col font-medium gap-2 justify-center items-center'>
                <span className='text-5xl text-blue-500 text-center italic'>{t('projects.mainTitle')}</span>
            </div>
        <div className='teamParent w-full'>
        {/* CARD PARENT (Controls all 6 cards) */}
        <div className='cardParent place-content-between gap-10 mt-16 grid grid-cols-2 maxlg:grid-cols-1'>
        {/*TESLA WEB CARD */}
        <div className='relative flex flex-col justify-center items-center cursor-pointer'>
            <div>
                <img className='rounded-2xl' src={tesla} alt='Tesla Clone'></img>
            <div className='absolute h-full flex flex-col justify-center items-center text-center bottom-0 left-0 right-0 bg-black bg-opacity-70 opacity-0 transition-opacity ease-in hover:opacity-100 hover:rounded-2xl'>
                <span className='text-white mt-8 text-2xl font-bold maxls:text-lg maxxs:text-sm'>{t('cardproject.tesla')}</span>
                <p className='text-white mt-5 pChoseWidthTeam maxls:text-sm maxxs:text-xs'>{t('projects.technologies')}</p>
                <div className='flex justify-center items-center gap-10 mt-5 w-full'>
                            <img className='w-10 h-10' src={react} alt='react'></img>
                            <img className='w-10 h-10' src={tailwind} alt='tailwind'></img>
                            <img className='w-10 h-10' src={vscode} alt='vscode'></img>
                            <img className='w-10 h-10' src={vite} alt='vite'></img>
                        </div>
                        <div className='flex justify-between items-center mt-6 gap-3 text-white'>
                        <a className='bg-blue-500 text-white w-24 h-8 text-xs text-center font-medium decoration-0 p-2 rounded-3xl hover:opacity-90' target="_blank" rel='noreferrer' href='https://tesla.rikudev.com/'>{t('cardproject.preview')}</a>
                        <a className='bg-blue-500 text-white w-24 h-8 text-xs text-center font-medium decoration-0 p-2 rounded-3xl hover:opacity-90' target="_blank" rel='noreferrer' href='https://github.com/xRiiku/Tesla-Clone'>{t('cardproject.code')}</a>
                        </div>
            </div>
            </div>
        </div>
        {/*MERN Auth WEB CARD */}
        <div className='relative flex flex-col justify-center items-center cursor-pointer'>
            <div>
                <img className='rounded-2xl' src={mernauth} alt='Mern Auth App'></img>
            <div className='absolute h-full flex flex-col justify-center items-center text-center bottom-0 left-0 right-0 bg-black bg-opacity-70 opacity-0 transition-opacity ease-in hover:opacity-100 hover:rounded-2xl'>
                <span className='text-white mt-8 text-2xl font-bold maxls:text-lg maxxs:text-sm'>{t('cardproject.mernauth')}</span>
                <p className='text-white mt-5 pChoseWidthTeam maxls:text-sm maxxs:text-xs'>{t('projects.technologies')}</p>
                <div className='flex justify-center items-center gap-10 mt-5 w-full'>
                            <img className='w-10 h-10' src={mongodb} alt='mongodb'></img>
                            <img className='w-10 h-10' src={express} alt='express'></img>
                            <img className='w-10 h-10' src={react} alt='react'></img>
                            <img className='w-10 h-10' src={nodejs} alt='nodejs'></img>
                            <img className='w-10 h-10' src={tailwind} alt='tailwind'></img>
                            <img className='w-10 h-10' src={firebase} alt='firebase'></img>
                        </div>
                        <div className='flex justify-between items-center mt-6 gap-3 text-white'>
                        <a className='bg-blue-500 text-white w-24 h-8 text-xs text-center font-medium decoration-0 p-2 rounded-3xl hover:opacity-90' target="_blank" rel='noreferrer' href='https://xriku-mern-auth-app.onrender.com/'>{t('cardproject.preview')}</a>
                        <a className='bg-blue-500 text-white w-24 h-8 text-xs text-center font-medium decoration-0 p-2 rounded-3xl hover:opacity-90' target="_blank" rel='noreferrer' href='https://github.com/xRiiku/MERN-Auth'>{t('cardproject.code')}</a>
                        </div>
            </div>
            </div>
        </div>
          {/*GYM WEB CARD */}
        <div className='relative flex flex-col justify-center items-center cursor-pointer'>
            <div>
                <img className='rounded-2xl' src={gympage} alt='Gym page'></img>
            <div className='absolute h-full flex flex-col justify-center items-center text-center bottom-0 left-0 right-0 bg-black bg-opacity-70 opacity-0 transition-opacity ease-in hover:opacity-100 hover:rounded-2xl'>
                <span className='text-white mt-8 text-2xl font-bold maxls:text-lg maxxs:text-sm'>{t('cardproject.gym')}</span>
                <p className='text-white mt-5 pChoseWidthTeam maxls:text-sm maxxs:text-xs'>{t('projects.technologies')}</p>
                <div className='flex justify-center items-center gap-10 mt-5 w-full'>
                            <img className='w-10 h-10' src={react} alt='react'></img>
                            <img className='w-10 h-10' src={tailwind} alt='tailwind'></img>
                            <img className='w-10 h-10' src={vscode} alt='vscode'></img>
                            <img className='w-10 h-10' src={vite} alt='vite'></img>
                        </div>
                        <div className='flex justify-between items-center mt-6 gap-3 text-white'>
                        <a className='bg-blue-500 text-white w-24 h-8 text-xs text-center font-medium decoration-0 p-2 rounded-3xl hover:opacity-90' target="_blank" rel='noreferrer' href='https://gym.rikudev.com/'>{t('cardproject.preview')}</a>
                        <a className='bg-blue-500 text-white w-24 h-8 text-xs text-center font-medium decoration-0 p-2 rounded-3xl hover:opacity-90' target="_blank" rel='noreferrer' href='https://github.com/xRiiku/GymPage'>{t('cardproject.code')}</a>
                        </div>
            </div>
            </div>
        </div>

            {/*POKEDEX WEB CARD */}
            <div className='relative flex flex-col justify-center items-center cursor-pointer'>
            <div>
                <img className='rounded-2xl' src={pokedex} alt='Pokedex'></img>
            <div className='absolute h-full flex flex-col justify-center items-center text-center bottom-0 left-0 right-0 bg-black bg-opacity-70 opacity-0 transition-opacity ease-in hover:opacity-100 hover:rounded-2xl'>
                <span className='text-white mt-8 text-2xl font-bold maxls:text-lg maxxs:text-sm'>{t('cardproject.pokedex')}</span>
                <p className='text-white mt-5 pChoseWidthTeam maxls:text-sm maxxs:text-xs'>{t('projects.technologies')}</p>
                <div className='flex justify-center items-center gap-10 mt-5 w-full'>
                            <img className='w-10 h-10' src={react} alt='react'></img>
                            <img className='w-10 h-10' src={css} alt='css'></img>
                            <img className='w-10 h-10' src={vscode} alt='vscode'></img>
                        </div>
                        <div className='flex justify-between items-center mt-6 gap-3 text-white'>
                        <a className='bg-blue-500 text-white w-24 h-8 text-xs text-center font-medium decoration-0 p-2 rounded-3xl hover:opacity-90' target="_blank" rel='noreferrer' href='https://pokedex.rikudev.com/'>{t('cardproject.preview')}</a>
                        <a className='bg-blue-500 text-white w-24 h-8 text-xs text-center font-medium decoration-0 p-2 rounded-3xl hover:opacity-90' target="_blank" rel='noreferrer' href='https://github.com/xRiiku/pokedex'>{t('cardproject.code')}</a>
                        </div>
            </div>
            </div>
        </div>
        {/*BUSCAMINAS WEB CARD */}
        <div className='relative flex flex-col justify-center items-center cursor-pointer'>
            <div>
                <img className='rounded-2xl' src={buscaminas} alt='buscaminas'></img>
            <div className='absolute h-full flex flex-col justify-center items-center text-center bottom-0 left-0 right-0 bg-black bg-opacity-70 opacity-0 transition-opacity ease-in hover:opacity-100 hover:rounded-2xl'>
                <span className='text-white mt-8 text-2xl font-bold maxls:text-lg maxxs:text-sm'>{t('cardproject.minesweeper')}</span>
                <p className='text-white mt-5 pChoseWidthTeam maxls:text-sm maxxs:text-xs'>{t('projects.technologies')}</p>
                <div className='flex justify-center items-center gap-10 mt-5 w-full'>
                            <img className='w-10 h-10' src={html} alt='html'></img>
                            <img className='w-10 h-10' src={css} alt='css'></img>
                            <img className='w-10 h-10' src={javascript} alt='javascript'></img>
                        </div>
                        <div className='flex justify-between items-center mt-6 gap-3 text-white'>
                        <a className='bg-blue-500 text-white w-24 h-8 text-xs text-center font-medium decoration-0 p-2 rounded-3xl hover:opacity-90' target="_blank" rel='noreferrer' href='https://buscaminas.rikudev.com/'>{t('cardproject.preview')}</a>
                        <a className='bg-blue-500 text-white w-24 h-8 text-xs text-center font-medium decoration-0 p-2 rounded-3xl hover:opacity-90' target="_blank" rel='noreferrer' href='https://github.com/xRiiku/Buscaminas-JS'>{t('cardproject.code')}</a>
                        </div>
            </div>
            </div>
        </div>
        {/*COINBASE WEB CARD */}
        <div className='relative flex flex-col justify-center items-center cursor-pointer'>
            <div>
                <img className='rounded-2xl' src={coinbase} alt='coinbase'></img>
            <div className='absolute h-full flex flex-col justify-center items-center text-center bottom-0 left-0 right-0 bg-black bg-opacity-70 opacity-0 transition-opacity ease-in hover:opacity-100 hover:rounded-2xl'>
                <span className='text-white mt-8 text-2xl font-bold maxls:text-lg maxxs:text-sm'>{t('cardproject.coinbase')}</span>
                <p className='text-white mt-5 pChoseWidthTeam maxls:text-sm maxxs:text-xs'>{t('projects.technologies')}</p>
                <div className='flex justify-center items-center gap-10 mt-5 w-full'>
                            <img className='w-10 h-10' src={html} alt='html'></img>
                            <img className='w-10 h-10' src={bootstrap} alt='bootstrap'></img>
                            <img className='w-10 h-10' src={sass} alt='sass'></img>
                        </div>
                        <div className='flex justify-between items-center mt-6 gap-3 text-white'>
                        <a className='bg-blue-500 text-white w-24 h-8 text-xs text-center font-medium decoration-0 p-2 rounded-3xl hover:opacity-90' target="_blank" rel='noreferrer' href='https://coinbase.rikudev.com/'>{t('cardproject.preview')}</a>
                        <a className='bg-blue-500 text-white w-24 h-8 text-xs text-center font-medium decoration-0 p-2 rounded-3xl hover:opacity-90' target="_blank" rel='noreferrer' href='https://github.com/xRiiku/CoinBase'>{t('cardproject.code')}</a>
                        </div>
            </div>
            </div>
        </div>
        {/*TODOLIST WEB CARD */}
        <div className='relative flex flex-col justify-center items-center cursor-pointer'>
            <div>
                <img className='rounded-2xl' src={todolist} alt='todolist'></img>
            <div className='absolute h-full flex flex-col justify-center items-center text-center bottom-0 left-0 right-0 bg-black bg-opacity-70 opacity-0 transition-opacity ease-in hover:opacity-100 hover:rounded-2xl'>
                <span className='text-white mt-8 text-2xl font-bold maxls:text-lg maxxs:text-sm'>{t('cardproject.todolist')}</span>
                <p className='text-white mt-5 pChoseWidthTeam maxls:text-sm maxxs:text-xs'>{t('projects.technologies')}</p>
                <div className='flex justify-center items-center gap-10 mt-5 w-full'>
                            <img className='w-10 h-10' src={react} alt='react'></img>
                            <img className='w-10 h-10' src={css} alt='css'></img>
                            <img className='w-10 h-10' src={vscode} alt='vscode'></img>
                        </div>
                        <div className='flex justify-between items-center mt-6 gap-3 text-white'>
                        <a className='bg-blue-500 text-white w-24 h-8 text-xs text-center font-medium decoration-0 p-2 rounded-3xl hover:opacity-90' target="_blank" rel='noreferrer' href='https://todolist.rikudev.com/'>{t('cardproject.preview')}</a>
                        <a className='bg-blue-500 text-white w-24 h-8 text-xs text-center font-medium decoration-0 p-2 rounded-3xl hover:opacity-90' target="_blank" rel='noreferrer' href='https://github.com/xRiiku/ToDo-List'>{t('cardproject.code')}</a>
                        </div>
            </div>
            </div>
        </div>
        {/*WEATHER WEB CARD */}
        <div className='relative flex flex-col justify-center items-center cursor-pointer'>
            <div>
                <img className='rounded-2xl' src={weather} alt='weather'></img>
            <div className='absolute h-full flex flex-col justify-center items-center text-center bottom-0 left-0 right-0 bg-black bg-opacity-70 opacity-0 transition-opacity ease-in hover:opacity-100 hover:rounded-2xl'>
                <span className='text-white mt-8 text-2xl font-bold maxls:text-lg maxxs:text-sm'>{t('cardproject.weather')}</span>
                <p className='text-white mt-5 pChoseWidthTeam maxls:text-sm maxxs:text-xs'>{t('projects.technologies')}</p>
                <div className='flex justify-center items-center gap-10 mt-5 w-full'>
                            <img className='w-10 h-10' src={react} alt='react'></img>
                            <img className='w-10 h-10' src={css} alt='css'></img>
                            <img className='w-10 h-10' src={vscode} alt='vscode'></img>
                            <img className='w-10 h-10' src={vite} alt='vite'></img>
                        </div>
                        <div className='flex justify-between items-center mt-6 gap-3 text-white'>
                        <a className='bg-blue-500 text-white w-24 h-8 text-xs text-center font-medium decoration-0 p-2 rounded-3xl hover:opacity-90' target="_blank" rel='noreferrer' href='https://weather.rikudev.com/'>{t('cardproject.preview')}</a>
                        <a className='bg-blue-500 text-white w-24 h-8 text-xs text-center font-medium decoration-0 p-2 rounded-3xl hover:opacity-90' target="_blank" rel='noreferrer' href='https://github.com/xRiiku/WeatherApp'>{t('cardproject.code')}</a>
                        </div>
            </div>
            </div>
        </div>
        {/*TICTACTOE WEB CARD */}
        <div className='relative flex flex-col justify-center items-center cursor-pointer'>
            <div>
                <img className='rounded-2xl' src={tictactoe} alt='tictactoe'></img>
            <div className='absolute h-full flex flex-col justify-center items-center text-center bottom-0 left-0 right-0 bg-black bg-opacity-70 opacity-0 transition-opacity ease-in hover:opacity-100 hover:rounded-2xl'>
                <span className='text-white mt-8 text-2xl font-bold maxls:text-lg maxxs:text-sm'>{t('cardproject.tictactoe')}</span>
                <p className='text-white mt-5 pChoseWidthTeam maxls:text-sm maxxs:text-xs'>{t('projects.technologies')}</p>
                <div className='flex justify-center items-center gap-10 mt-5 w-full'>
                            <img className='w-10 h-10' src={react} alt='react'></img>
                            <img className='w-10 h-10' src={css} alt='css'></img>
                            <img className='w-10 h-10' src={vscode} alt='vscode'></img>
                            <img className='w-10 h-10' src={vite} alt='vite'></img>
                        </div>
                        <div className='flex justify-between items-center mt-6 gap-3 text-white'>
                        <a className='bg-blue-500 text-white w-24 h-8 text-xs text-center font-medium decoration-0 p-2 rounded-3xl hover:opacity-90' target="_blank" rel='noreferrer' href='https://tictactoe.rikudev.com/'>{t('cardproject.preview')}</a>
                        <a className='bg-blue-500 text-white w-24 h-8 text-xs text-center font-medium decoration-0 p-2 rounded-3xl hover:opacity-90' target="_blank" rel='noreferrer' href='https://github.com/xRiiku/TicTacToe'>{t('cardproject.code')}</a>
                        </div>
            </div>
            </div>
        </div>
        {/*GITHUB FINDER WEB CARD */}
        <div className='relative flex flex-col justify-center items-center cursor-pointer'>
            <div>
                <img className='rounded-2xl' src={githubFinder} alt='githubFinder'></img>
            <div className='absolute h-full flex flex-col justify-center items-center text-center bottom-0 left-0 right-0 bg-black bg-opacity-70 opacity-0 transition-opacity ease-in hover:opacity-100 hover:rounded-2xl'>
                <span className='text-white mt-8 text-2xl font-bold maxls:text-lg maxxs:text-sm'>{t('cardproject.githubFinder')}</span>
                <p className='text-white mt-5 pChoseWidthTeam maxls:text-sm maxxs:text-xs'>{t('projects.technologies')}</p>
                <div className='flex justify-center items-center gap-10 mt-5 w-full'>
                            <img className='w-10 h-10' src={react} alt='react'></img>
                            <img className='w-10 h-10' src={css} alt='css'></img>
                            <img className='w-10 h-10' src={vscode} alt='vscode'></img>
                        </div>
                        <div className='flex justify-between items-center mt-6 gap-3 text-white'>
                        <a className='bg-blue-500 text-white w-24 h-8 text-xs text-center font-medium decoration-0 p-2 rounded-3xl hover:opacity-90' target="_blank" rel='noreferrer' href='https://githubfinder.rikudev.com//'>{t('cardproject.preview')}</a>
                        <a className='bg-blue-500 text-white w-24 h-8 text-xs text-center font-medium decoration-0 p-2 rounded-3xl hover:opacity-90' target="_blank" rel='noreferrer' href='https://github.com/xRiiku/GithubProfileFinder'>{t('cardproject.code')}</a>
                        </div>
            </div>
            </div>
        </div>


        </div>
        </div>
        </section>
    );
}

// flex justify-between items-center max-w-[1280px] w-screen  mx-auto