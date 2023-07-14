
import { useTranslation } from 'react-i18next';
import html from '../assets/img/html.svg'
import css from '../assets/img/css.svg'
import javascript from '../assets/img/javascript.svg'
import react from '../assets/img/react.svg'
import sass from '../assets/img/sass.svg'
import bootstrap from '../assets/img/bootstrap.svg'
import tailwind from '../assets/img/tailwind.svg'
import vscode from '../assets/img/vscode.svg'
import vite from '../assets/img/vite.svg'
import gympage from '../assets/img/projects/gym.webp'
import pokedex from '../assets/img/projects/Pokedex.webp'
import weather from '../assets/img/projects/weather.webp'
import tictactoe from '../assets/img/projects/tictactoe.webp'
import todolist from '../assets/img/projects/todolist.webp'
import coinbase from '../assets/img/projects/Coinbase.webp'
import githubFinder from '../assets/img/projects/githubProfileSearch.webp'
import calculator from '../assets/img/projects/Calculator.webp'
import music from '../assets/img/projects/MusicPlayer.webp'
import portfolio1 from '../assets/img/projects/PortfolioV1.webp'
import portfolio2 from '../assets/img/projects/PortfolioV2.webp'
import portfolio3 from '../assets/img/projects/portfolio3.webp'
import puzzle from '../assets/img/projects/Puzzle.webp'
import watch from '../assets/img/projects/watch.webp'


export default function Projects(){

    const {t} = useTranslation()

    
    return (
        <section id='projects' className='text-xl w-screen items-center flex pt-52 z-20 px-10'>
        <div className='flex flex-col justify-between mt-10 max-w-[1280px] w-screen mx-auto items-center maxsm:flex-col maxsm:gap-10'>
            <div className='flex flex-col font-medium gap-2 justify-center items-center'>
                <span className='text-5xl text-[#dc72b5] text-center italic'>{t('projects.mainTitle')}</span>
            </div>

            <div className='flex flex-wrap justify-between items-center mx-auto w-full mt-10 gap-10 maxsm:justify-center'>
                {/* Project Gym Card */}
                <article className="flex flex-col items-center w-[250px] h-[425px] mb-10 rounded-xl border border-zinc-600 maxxs:w-full">
                    <div className='w-full h-[150px] mt-0'>
                        <img className='rounded-xl h-full w-full ' src={gympage} alt='gym'></img>
                    </div>
                    <div className='flex flex-col text-left p-3 justify-center items-center'>
                        <h1 className='font-bold'>{t('cardproject.gym')}</h1>
                        <span className='text-gray-500 mt-10'>{t('projects.technologies')}</span>
                        <div className='flex justify-between items-center mt-5 w-full'>
                            <img className='w-10 h-10' src={react} alt='react'></img>
                            <img className='w-10 h-10' src={tailwind} alt='tailwind'></img>
                            <img className='w-10 h-10' src={vscode} alt='vscode'></img>
                            <img className='w-10 h-10' src={vite} alt='vite'></img>
                        </div>
                        <div className='flex justify-between items-center mt-10 gap-1'>
                        <svg fill="#dc72b5" width="20" height="20" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="m10.667 13.333-.586-.585a2 2 0 0 1 0-2.829l4.505-4.505a2 2 0 0 1 2.828 0l1.172 1.172a2 2 0 0 1 0 2.828L17 11m-3.667-.333.586.585a2 2 0 0 1 0 2.829l-4.505 4.505a2 2 0 0 1-2.828 0l-1.172-1.172a2 2 0 0 1 0-2.828L7 13"/></svg>
                            <a className='text-sm hover:opacity-70' href='https://gym.rikudev.com/' target='_blank' rel='noopener noreferrer'>{t('cardproject.preview')}</a>
                            <svg fill="#dc72b5" width="20" height="20" viewBox="0 -0.5 48 48" xmlns="http://www.w3.org/2000/svg"><path d="M23.999 0C10.746 0 0 10.787 0 24.097 0 34.74 6.876 43.772 16.414 46.958c1.2.222 1.639-.522 1.639-1.16 0-.573-.021-2.088-.034-4.098-6.676 1.456-8.085-3.23-8.085-3.23-1.09-2.784-2.664-3.525-2.664-3.525-2.179-1.495.166-1.465.166-1.465 2.407.17 3.675 2.483 3.675 2.483 2.142 3.683 5.617 2.62 6.985 2.002.217-1.557.838-2.619 1.524-3.221-5.33-.609-10.932-2.675-10.932-11.908 0-2.63.934-4.781 2.47-6.466-.247-.61-1.07-3.059.235-6.377 0 0 2.016-.647 6.6 2.47 1.915-.534 3.967-.801 6.008-.811 2.039.01 4.092.277 6.01.811 4.58-3.117 6.592-2.47 6.592-2.47 1.31 3.318.486 5.767.238 6.377 1.54 1.685 2.468 3.835 2.468 6.466 0 9.256-5.612 11.293-10.958 11.89.861.744 1.63 2.213 1.63 4.462 0 3.22-.03 5.819-.03 6.61 0 .644.432 1.394 1.65 1.157C41.13 43.763 48 34.738 48 24.097 48 10.787 37.254 0 23.999 0"/></svg>
                            <a className='text-sm hover:opacity-70' href='https://github.com/xRiiku/GymPage' target='_blank' rel='noopener noreferrer'> {t('cardproject.code')}</a>
                        </div>
                    </div>
                </article>

                {/* Project Pokedex Card */}
                <article className="flex flex-col items-center w-[250px] h-[425px] mb-10 rounded-xl border border-zinc-600 maxxs:w-full">
                    <div className='w-full h-[150px] mt-0'>
                        <img className='rounded-xl h-full w-full' src={pokedex} alt='pokedex'></img>
                    </div>
                    <div className='flex flex-col text-left p-3 justify-center items-center'>
                        <h1 className='font-bold'>{t('cardproject.pokedex')}</h1>
                        <span className='text-gray-500 mt-10'>{t('projects.technologies')}</span>
                        <div className='flex justify-between items-center mt-5 w-full'>
                            <img className='w-10 h-10' src={react} alt='react'></img>
                            <img className='w-10 h-10' src={css} alt='css'></img>
                            <img className='w-10 h-10' src={javascript} alt='javascript'></img>
                            <img className='w-10 h-10' src={vscode} alt='vscode'></img>
                        </div>
                        <div className='flex justify-between items-center mt-10 gap-1'>
                        <svg fill="#dc72b5" width="20" height="20" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="m10.667 13.333-.586-.585a2 2 0 0 1 0-2.829l4.505-4.505a2 2 0 0 1 2.828 0l1.172 1.172a2 2 0 0 1 0 2.828L17 11m-3.667-.333.586.585a2 2 0 0 1 0 2.829l-4.505 4.505a2 2 0 0 1-2.828 0l-1.172-1.172a2 2 0 0 1 0-2.828L7 13"/></svg>
                            <a className='text-sm hover:opacity-70' href='https://pokedex.rikudev.com/' target='_blank' rel='noopener noreferrer'>{t('cardproject.preview')}</a>
                            <svg fill="#dc72b5" width="20" height="20" viewBox="0 -0.5 48 48" xmlns="http://www.w3.org/2000/svg"><path d="M23.999 0C10.746 0 0 10.787 0 24.097 0 34.74 6.876 43.772 16.414 46.958c1.2.222 1.639-.522 1.639-1.16 0-.573-.021-2.088-.034-4.098-6.676 1.456-8.085-3.23-8.085-3.23-1.09-2.784-2.664-3.525-2.664-3.525-2.179-1.495.166-1.465.166-1.465 2.407.17 3.675 2.483 3.675 2.483 2.142 3.683 5.617 2.62 6.985 2.002.217-1.557.838-2.619 1.524-3.221-5.33-.609-10.932-2.675-10.932-11.908 0-2.63.934-4.781 2.47-6.466-.247-.61-1.07-3.059.235-6.377 0 0 2.016-.647 6.6 2.47 1.915-.534 3.967-.801 6.008-.811 2.039.01 4.092.277 6.01.811 4.58-3.117 6.592-2.47 6.592-2.47 1.31 3.318.486 5.767.238 6.377 1.54 1.685 2.468 3.835 2.468 6.466 0 9.256-5.612 11.293-10.958 11.89.861.744 1.63 2.213 1.63 4.462 0 3.22-.03 5.819-.03 6.61 0 .644.432 1.394 1.65 1.157C41.13 43.763 48 34.738 48 24.097 48 10.787 37.254 0 23.999 0"/></svg>
                            <a className='text-sm hover:opacity-70' href='https://github.com/xRiiku/pokedex' target='_blank' rel='noopener noreferrer'> {t('cardproject.code')}</a>
                        </div>
                    </div>
                </article>

                {/* Project Weather Card */}
                <article className="flex flex-col items-center w-[250px] h-[425px] mb-10 rounded-xl border border-zinc-600 maxxs:w-full">
                    <div className='w-full h-[150px] mt-0'>
                        <img className='rounded-xl h-full w-full ' src={weather} alt='weather'></img>
                    </div>
                    <div className='flex flex-col text-left p-3 justify-center items-center'>
                        <h1 className='font-bold'>{t('cardproject.weather')}</h1>
                        <span className='text-gray-500 mt-10'>{t('projects.technologies')}</span>
                        <div className='flex justify-between items-center mt-5 w-full'>
                            <img className='w-10 h-10' src={react} alt='react'></img>
                            <img className='w-10 h-10' src={css} alt='css'></img>
                            <img className='w-10 h-10' src={vscode} alt='vscode'></img>
                            <img className='w-10 h-10' src={vite} alt='vite'></img>
                        </div>
                        <div className='flex justify-between items-center mt-10 gap-1'>
                        <svg fill="#dc72b5" width="20" height="20" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="m10.667 13.333-.586-.585a2 2 0 0 1 0-2.829l4.505-4.505a2 2 0 0 1 2.828 0l1.172 1.172a2 2 0 0 1 0 2.828L17 11m-3.667-.333.586.585a2 2 0 0 1 0 2.829l-4.505 4.505a2 2 0 0 1-2.828 0l-1.172-1.172a2 2 0 0 1 0-2.828L7 13"/></svg>
                            <a className='text-sm hover:opacity-70' href='https://weather.rikudev.com/' target='_blank' rel='noopener noreferrer'>{t('cardproject.preview')}</a>
                            <svg fill="#dc72b5" width="20" height="20" viewBox="0 -0.5 48 48" xmlns="http://www.w3.org/2000/svg"><path d="M23.999 0C10.746 0 0 10.787 0 24.097 0 34.74 6.876 43.772 16.414 46.958c1.2.222 1.639-.522 1.639-1.16 0-.573-.021-2.088-.034-4.098-6.676 1.456-8.085-3.23-8.085-3.23-1.09-2.784-2.664-3.525-2.664-3.525-2.179-1.495.166-1.465.166-1.465 2.407.17 3.675 2.483 3.675 2.483 2.142 3.683 5.617 2.62 6.985 2.002.217-1.557.838-2.619 1.524-3.221-5.33-.609-10.932-2.675-10.932-11.908 0-2.63.934-4.781 2.47-6.466-.247-.61-1.07-3.059.235-6.377 0 0 2.016-.647 6.6 2.47 1.915-.534 3.967-.801 6.008-.811 2.039.01 4.092.277 6.01.811 4.58-3.117 6.592-2.47 6.592-2.47 1.31 3.318.486 5.767.238 6.377 1.54 1.685 2.468 3.835 2.468 6.466 0 9.256-5.612 11.293-10.958 11.89.861.744 1.63 2.213 1.63 4.462 0 3.22-.03 5.819-.03 6.61 0 .644.432 1.394 1.65 1.157C41.13 43.763 48 34.738 48 24.097 48 10.787 37.254 0 23.999 0"/></svg>
                            <a className='text-sm hover:opacity-70' href='https://github.com/xRiiku/WeatherApp' target='_blank' rel='noopener noreferrer'> {t('cardproject.code')}</a>
                        </div>
                    </div>
                </article>

                {/* Project TicTacToe Card */}
                <article className="flex flex-col items-center w-[250px] h-[425px] mb-10 rounded-xl border border-zinc-600 maxxs:w-full">
                    <div className='w-full h-[150px] mt-0'>
                        <img className='rounded-xl h-full w-full ' src={tictactoe} alt='tictactoe'></img>
                    </div>
                    <div className='flex flex-col text-left p-3 justify-center items-center'>
                        <h1 className='font-bold'>{t('cardproject.tictactoe')}</h1>
                        <span className='text-gray-500 mt-10'>{t('projects.technologies')}</span>
                        <div className='flex justify-between items-center mt-5 w-full'>
                            <img className='w-10 h-10' src={react} alt='react'></img>
                            <img className='w-10 h-10' src={css} alt='css'></img>
                            <img className='w-10 h-10' src={vscode} alt='vscode'></img>
                            <img className='w-10 h-10' src={vite} alt='vite'></img>
                        </div>
                        <div className='flex justify-between items-center mt-10 gap-1'>
                        <svg fill="#dc72b5" width="20" height="20" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="m10.667 13.333-.586-.585a2 2 0 0 1 0-2.829l4.505-4.505a2 2 0 0 1 2.828 0l1.172 1.172a2 2 0 0 1 0 2.828L17 11m-3.667-.333.586.585a2 2 0 0 1 0 2.829l-4.505 4.505a2 2 0 0 1-2.828 0l-1.172-1.172a2 2 0 0 1 0-2.828L7 13"/></svg>
                            <a className='text-sm hover:opacity-70' href='https://tictactoe.rikudev.com/' target='_blank' rel='noopener noreferrer'>{t('cardproject.preview')}</a>
                            <svg fill="#dc72b5" width="20" height="20" viewBox="0 -0.5 48 48" xmlns="http://www.w3.org/2000/svg"><path d="M23.999 0C10.746 0 0 10.787 0 24.097 0 34.74 6.876 43.772 16.414 46.958c1.2.222 1.639-.522 1.639-1.16 0-.573-.021-2.088-.034-4.098-6.676 1.456-8.085-3.23-8.085-3.23-1.09-2.784-2.664-3.525-2.664-3.525-2.179-1.495.166-1.465.166-1.465 2.407.17 3.675 2.483 3.675 2.483 2.142 3.683 5.617 2.62 6.985 2.002.217-1.557.838-2.619 1.524-3.221-5.33-.609-10.932-2.675-10.932-11.908 0-2.63.934-4.781 2.47-6.466-.247-.61-1.07-3.059.235-6.377 0 0 2.016-.647 6.6 2.47 1.915-.534 3.967-.801 6.008-.811 2.039.01 4.092.277 6.01.811 4.58-3.117 6.592-2.47 6.592-2.47 1.31 3.318.486 5.767.238 6.377 1.54 1.685 2.468 3.835 2.468 6.466 0 9.256-5.612 11.293-10.958 11.89.861.744 1.63 2.213 1.63 4.462 0 3.22-.03 5.819-.03 6.61 0 .644.432 1.394 1.65 1.157C41.13 43.763 48 34.738 48 24.097 48 10.787 37.254 0 23.999 0"/></svg>
                            <a className='text-sm hover:opacity-70' href='https://github.com/xRiiku/TicTacToe' target='_blank' rel='noopener noreferrer'> {t('cardproject.code')}</a>
                        </div>
                    </div>
                </article>

                {/* Project ToDoList Card */}
                <article className="flex flex-col items-center w-[250px] h-[425px] mb-10 rounded-xl border border-zinc-600 maxxs:w-full">
                    <div className='w-full h-[150px] mt-0'>
                        <img className='rounded-xl h-full w-full' src={todolist} alt='todolist'></img>
                    </div>
                    <div className='flex flex-col text-left p-3 justify-center items-center'>
                        <h1 className='font-bold'>{t('cardproject.todolist')}</h1>
                        <span className='text-gray-500 mt-10'>{t('projects.technologies')}</span>
                        <div className='flex justify-between items-center mt-5 w-full'>
                            <img className='w-10 h-10' src={react} alt='react'></img>
                            <img className='w-10 h-10' src={css} alt='css'></img>
                            <img className='w-10 h-10' src={javascript} alt='javascript'></img>
                            <img className='w-10 h-10' src={vscode} alt='vscode'></img>
                        </div>
                        <div className='flex justify-between items-center mt-10 gap-1'>
                        <svg fill="#dc72b5" width="20" height="20" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="m10.667 13.333-.586-.585a2 2 0 0 1 0-2.829l4.505-4.505a2 2 0 0 1 2.828 0l1.172 1.172a2 2 0 0 1 0 2.828L17 11m-3.667-.333.586.585a2 2 0 0 1 0 2.829l-4.505 4.505a2 2 0 0 1-2.828 0l-1.172-1.172a2 2 0 0 1 0-2.828L7 13"/></svg>
                            <a className='text-sm hover:opacity-70' href='https://todolist.rikudev.com/' target='_blank' rel='noopener noreferrer'>{t('cardproject.preview')}</a>
                            <svg fill="#dc72b5" width="20" height="20" viewBox="0 -0.5 48 48" xmlns="http://www.w3.org/2000/svg"><path d="M23.999 0C10.746 0 0 10.787 0 24.097 0 34.74 6.876 43.772 16.414 46.958c1.2.222 1.639-.522 1.639-1.16 0-.573-.021-2.088-.034-4.098-6.676 1.456-8.085-3.23-8.085-3.23-1.09-2.784-2.664-3.525-2.664-3.525-2.179-1.495.166-1.465.166-1.465 2.407.17 3.675 2.483 3.675 2.483 2.142 3.683 5.617 2.62 6.985 2.002.217-1.557.838-2.619 1.524-3.221-5.33-.609-10.932-2.675-10.932-11.908 0-2.63.934-4.781 2.47-6.466-.247-.61-1.07-3.059.235-6.377 0 0 2.016-.647 6.6 2.47 1.915-.534 3.967-.801 6.008-.811 2.039.01 4.092.277 6.01.811 4.58-3.117 6.592-2.47 6.592-2.47 1.31 3.318.486 5.767.238 6.377 1.54 1.685 2.468 3.835 2.468 6.466 0 9.256-5.612 11.293-10.958 11.89.861.744 1.63 2.213 1.63 4.462 0 3.22-.03 5.819-.03 6.61 0 .644.432 1.394 1.65 1.157C41.13 43.763 48 34.738 48 24.097 48 10.787 37.254 0 23.999 0"/></svg>
                            <a className='text-sm hover:opacity-70' href='https://github.com/xRiiku/ToDo-List' target='_blank' rel='noopener noreferrer'> {t('cardproject.code')}</a>
                        </div>
                    </div>
                </article>

                {/* Project Coinbase Card */}
                <article className="flex flex-col items-center w-[250px] h-[425px] mb-10 rounded-xl border border-zinc-600 maxxs:w-full">
                    <div className='w-full h-[150px] mt-0'>
                        <img className='rounded-xl h-full w-full' src={coinbase} alt='coinbase'></img>
                    </div>
                    <div className='flex flex-col text-left p-3 justify-center items-center'>
                        <h1 className='font-bold'>{t('cardproject.coinbase')}</h1>
                        <span className='text-gray-500 mt-10'>{t('projects.technologies')}</span>
                        <div className='flex justify-between items-center mt-5 w-full'>
                            <img className='w-10 h-10' src={html} alt='html'></img>
                            <img className='w-10 h-10' src={bootstrap} alt='bootstrap'></img>
                            <img className='w-10 h-10' src={sass} alt='sass'></img>
                            <img className='w-10 h-10' src={vscode} alt='vscode'></img>
                        </div>
                        <div className='flex justify-between items-center mt-10 gap-1'>
                        <svg fill="#dc72b5" width="20" height="20" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="m10.667 13.333-.586-.585a2 2 0 0 1 0-2.829l4.505-4.505a2 2 0 0 1 2.828 0l1.172 1.172a2 2 0 0 1 0 2.828L17 11m-3.667-.333.586.585a2 2 0 0 1 0 2.829l-4.505 4.505a2 2 0 0 1-2.828 0l-1.172-1.172a2 2 0 0 1 0-2.828L7 13"/></svg>
                            <a className='text-sm hover:opacity-70' href='https://coinbase.rikudev.com/' target='_blank' rel='noopener noreferrer'>{t('cardproject.preview')}</a>
                            <svg fill="#dc72b5" width="20" height="20" viewBox="0 -0.5 48 48" xmlns="http://www.w3.org/2000/svg"><path d="M23.999 0C10.746 0 0 10.787 0 24.097 0 34.74 6.876 43.772 16.414 46.958c1.2.222 1.639-.522 1.639-1.16 0-.573-.021-2.088-.034-4.098-6.676 1.456-8.085-3.23-8.085-3.23-1.09-2.784-2.664-3.525-2.664-3.525-2.179-1.495.166-1.465.166-1.465 2.407.17 3.675 2.483 3.675 2.483 2.142 3.683 5.617 2.62 6.985 2.002.217-1.557.838-2.619 1.524-3.221-5.33-.609-10.932-2.675-10.932-11.908 0-2.63.934-4.781 2.47-6.466-.247-.61-1.07-3.059.235-6.377 0 0 2.016-.647 6.6 2.47 1.915-.534 3.967-.801 6.008-.811 2.039.01 4.092.277 6.01.811 4.58-3.117 6.592-2.47 6.592-2.47 1.31 3.318.486 5.767.238 6.377 1.54 1.685 2.468 3.835 2.468 6.466 0 9.256-5.612 11.293-10.958 11.89.861.744 1.63 2.213 1.63 4.462 0 3.22-.03 5.819-.03 6.61 0 .644.432 1.394 1.65 1.157C41.13 43.763 48 34.738 48 24.097 48 10.787 37.254 0 23.999 0"/></svg>
                            <a className='text-sm hover:opacity-70' href='https://github.com/xRiiku/CoinBase' target='_blank' rel='noopener noreferrer'> {t('cardproject.code')}</a>
                        </div>
                    </div>
                </article>

                {/* Project GithubFinder Card */}
                <article className="flex flex-col items-center w-[250px] h-[425px] mb-10 rounded-xl border border-zinc-600 maxxs:w-full">
                    <div className='w-full h-[150px] mt-0'>
                        <img className='rounded-xl h-full w-full' src={githubFinder} alt='githubFinder'></img>
                    </div>
                    <div className='flex flex-col text-left p-3 justify-center items-center'>
                        <h1 className='font-bold'>{t('cardproject.githubFinder')}</h1>
                        <span className='text-gray-500 mt-10'>{t('projects.technologies')}</span>
                        <div className='flex justify-between items-center mt-5 w-full'>
                            <img className='w-10 h-10' src={react} alt='react'></img>
                            <img className='w-10 h-10' src={css} alt='css'></img>
                            <img className='w-10 h-10' src={javascript} alt='javascript'></img>
                            <img className='w-10 h-10' src={vscode} alt='vscode'></img>
                        </div>
                        <div className='flex justify-between items-center mt-10 gap-1'>
                        <svg fill="#dc72b5" width="20" height="20" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="m10.667 13.333-.586-.585a2 2 0 0 1 0-2.829l4.505-4.505a2 2 0 0 1 2.828 0l1.172 1.172a2 2 0 0 1 0 2.828L17 11m-3.667-.333.586.585a2 2 0 0 1 0 2.829l-4.505 4.505a2 2 0 0 1-2.828 0l-1.172-1.172a2 2 0 0 1 0-2.828L7 13"/></svg>
                            <a className='text-sm hover:opacity-70' href='https://githubfinder.rikudev.com/' target='_blank' rel='noopener noreferrer'>{t('cardproject.preview')}</a>
                            <svg fill="#dc72b5" width="20" height="20" viewBox="0 -0.5 48 48" xmlns="http://www.w3.org/2000/svg"><path d="M23.999 0C10.746 0 0 10.787 0 24.097 0 34.74 6.876 43.772 16.414 46.958c1.2.222 1.639-.522 1.639-1.16 0-.573-.021-2.088-.034-4.098-6.676 1.456-8.085-3.23-8.085-3.23-1.09-2.784-2.664-3.525-2.664-3.525-2.179-1.495.166-1.465.166-1.465 2.407.17 3.675 2.483 3.675 2.483 2.142 3.683 5.617 2.62 6.985 2.002.217-1.557.838-2.619 1.524-3.221-5.33-.609-10.932-2.675-10.932-11.908 0-2.63.934-4.781 2.47-6.466-.247-.61-1.07-3.059.235-6.377 0 0 2.016-.647 6.6 2.47 1.915-.534 3.967-.801 6.008-.811 2.039.01 4.092.277 6.01.811 4.58-3.117 6.592-2.47 6.592-2.47 1.31 3.318.486 5.767.238 6.377 1.54 1.685 2.468 3.835 2.468 6.466 0 9.256-5.612 11.293-10.958 11.89.861.744 1.63 2.213 1.63 4.462 0 3.22-.03 5.819-.03 6.61 0 .644.432 1.394 1.65 1.157C41.13 43.763 48 34.738 48 24.097 48 10.787 37.254 0 23.999 0"/></svg>
                            <a className='text-sm hover:opacity-70' href='https://github.com/xRiiku/GithubProfileFinder' target='_blank' rel='noopener noreferrer'> {t('cardproject.code')}</a>
                        </div>
                    </div>
                </article>

                {/* Project Calculator Card */}
                <article className="flex flex-col items-center w-[250px] h-[425px] mb-10 rounded-xl border border-zinc-600 maxxs:w-full">
                    <div className='w-full h-[150px] mt-0'>
                        <img className='rounded-xl h-full w-full' src={calculator} alt='calculator'></img>
                    </div>
                    <div className='flex flex-col text-left p-3 justify-center items-center'>
                        <h1 className='font-bold'>{t('cardproject.calculator')}</h1>
                        <span className='text-gray-500 mt-10'>{t('projects.technologies')}</span>
                        <div className='flex justify-between items-center mt-5 w-full'>
                            <img className='w-10 h-10' src={react} alt='react'></img>
                            <img className='w-10 h-10' src={css} alt='css'></img>
                            <img className='w-10 h-10' src={javascript} alt='javascript'></img>
                            <img className='w-10 h-10' src={vscode} alt='vscode'></img>
                        </div>
                        <div className='flex justify-between items-center mt-10 gap-1'>
                        <svg fill="#dc72b5" width="20" height="20" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="m10.667 13.333-.586-.585a2 2 0 0 1 0-2.829l4.505-4.505a2 2 0 0 1 2.828 0l1.172 1.172a2 2 0 0 1 0 2.828L17 11m-3.667-.333.586.585a2 2 0 0 1 0 2.829l-4.505 4.505a2 2 0 0 1-2.828 0l-1.172-1.172a2 2 0 0 1 0-2.828L7 13"/></svg>
                            <a className='text-sm hover:opacity-70' href='https://calculator.rikudev.com/' target='_blank' rel='noopener noreferrer'>{t('cardproject.preview')}</a>
                            <svg fill="#dc72b5" width="20" height="20" viewBox="0 -0.5 48 48" xmlns="http://www.w3.org/2000/svg"><path d="M23.999 0C10.746 0 0 10.787 0 24.097 0 34.74 6.876 43.772 16.414 46.958c1.2.222 1.639-.522 1.639-1.16 0-.573-.021-2.088-.034-4.098-6.676 1.456-8.085-3.23-8.085-3.23-1.09-2.784-2.664-3.525-2.664-3.525-2.179-1.495.166-1.465.166-1.465 2.407.17 3.675 2.483 3.675 2.483 2.142 3.683 5.617 2.62 6.985 2.002.217-1.557.838-2.619 1.524-3.221-5.33-.609-10.932-2.675-10.932-11.908 0-2.63.934-4.781 2.47-6.466-.247-.61-1.07-3.059.235-6.377 0 0 2.016-.647 6.6 2.47 1.915-.534 3.967-.801 6.008-.811 2.039.01 4.092.277 6.01.811 4.58-3.117 6.592-2.47 6.592-2.47 1.31 3.318.486 5.767.238 6.377 1.54 1.685 2.468 3.835 2.468 6.466 0 9.256-5.612 11.293-10.958 11.89.861.744 1.63 2.213 1.63 4.462 0 3.22-.03 5.819-.03 6.61 0 .644.432 1.394 1.65 1.157C41.13 43.763 48 34.738 48 24.097 48 10.787 37.254 0 23.999 0"/></svg>
                            <a className='text-sm hover:opacity-70' href='https://github.com/xRiiku/Calculator' target='_blank' rel='noopener noreferrer'> {t('cardproject.code')}</a>
                        </div>
                    </div>
                </article>

                {/* Project MusicPlayer Card */}
                <article className="flex flex-col items-center w-[250px] h-[425px] mb-10 rounded-xl border border-zinc-600 maxxs:w-full">
                    <div className='w-full h-[150px] mt-0'>
                        <img className='rounded-xl h-full w-full' src={music} alt='music'></img>
                    </div>
                    <div className='flex flex-col text-left p-3 justify-center items-center'>
                        <h1 className='font-bold'>{t('cardproject.music')}</h1>
                        <span className='text-gray-500 mt-10'>{t('projects.technologies')}</span>
                        <div className='flex justify-between items-center mt-5 w-full'>
                            <img className='w-10 h-10' src={react} alt='react'></img>
                            <img className='w-10 h-10' src={css} alt='css'></img>
                            <img className='w-10 h-10' src={javascript} alt='javascript'></img>
                            <img className='w-10 h-10' src={vscode} alt='vscode'></img>
                        </div>
                        <div className='flex justify-between items-center mt-10 gap-1'>
                        <svg fill="#dc72b5" width="20" height="20" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="m10.667 13.333-.586-.585a2 2 0 0 1 0-2.829l4.505-4.505a2 2 0 0 1 2.828 0l1.172 1.172a2 2 0 0 1 0 2.828L17 11m-3.667-.333.586.585a2 2 0 0 1 0 2.829l-4.505 4.505a2 2 0 0 1-2.828 0l-1.172-1.172a2 2 0 0 1 0-2.828L7 13"/></svg>
                            <a className='text-sm hover:opacity-70' href='https://musicplayer.rikudev.com/' target='_blank' rel='noopener noreferrer'>{t('cardproject.preview')}</a>
                            <svg fill="#dc72b5" width="20" height="20" viewBox="0 -0.5 48 48" xmlns="http://www.w3.org/2000/svg"><path d="M23.999 0C10.746 0 0 10.787 0 24.097 0 34.74 6.876 43.772 16.414 46.958c1.2.222 1.639-.522 1.639-1.16 0-.573-.021-2.088-.034-4.098-6.676 1.456-8.085-3.23-8.085-3.23-1.09-2.784-2.664-3.525-2.664-3.525-2.179-1.495.166-1.465.166-1.465 2.407.17 3.675 2.483 3.675 2.483 2.142 3.683 5.617 2.62 6.985 2.002.217-1.557.838-2.619 1.524-3.221-5.33-.609-10.932-2.675-10.932-11.908 0-2.63.934-4.781 2.47-6.466-.247-.61-1.07-3.059.235-6.377 0 0 2.016-.647 6.6 2.47 1.915-.534 3.967-.801 6.008-.811 2.039.01 4.092.277 6.01.811 4.58-3.117 6.592-2.47 6.592-2.47 1.31 3.318.486 5.767.238 6.377 1.54 1.685 2.468 3.835 2.468 6.466 0 9.256-5.612 11.293-10.958 11.89.861.744 1.63 2.213 1.63 4.462 0 3.22-.03 5.819-.03 6.61 0 .644.432 1.394 1.65 1.157C41.13 43.763 48 34.738 48 24.097 48 10.787 37.254 0 23.999 0"/></svg>
                            <a className='text-sm hover:opacity-70' href='https://github.com/xRiiku/MusicPlayer' target='_blank' rel='noopener noreferrer'> {t('cardproject.code')}</a>
                        </div>
                    </div>
                </article>

                {/* Project Portfolio V1 Card */}
                <article className="flex flex-col items-center w-[250px] h-[425px] mb-10 rounded-xl border border-zinc-600 maxxs:w-full">
                    <div className='w-full h-[150px] mt-0'>
                        <img className='rounded-xl h-full w-full' src={portfolio1} alt='portfolio1'></img>
                    </div>
                    <div className='flex flex-col text-left p-3 justify-center items-center'>
                        <h1 className='font-bold'>{t('cardproject.portfolio1')}</h1>
                        <span className='text-gray-500 mt-10'>{t('projects.technologies')}</span>
                        <div className='flex justify-between items-center mt-5 w-full'>
                            <img className='w-10 h-10' src={html} alt='html'></img>
                            <img className='w-10 h-10' src={css} alt='css'></img>
                            <img className='w-10 h-10' src={javascript} alt='javascript'></img>
                            <img className='w-10 h-10' src={vscode} alt='vscode'></img>
                        </div>
                        <div className='flex justify-between items-center mt-10 gap-1'>
                        <svg fill="#dc72b5" width="20" height="20" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="m10.667 13.333-.586-.585a2 2 0 0 1 0-2.829l4.505-4.505a2 2 0 0 1 2.828 0l1.172 1.172a2 2 0 0 1 0 2.828L17 11m-3.667-.333.586.585a2 2 0 0 1 0 2.829l-4.505 4.505a2 2 0 0 1-2.828 0l-1.172-1.172a2 2 0 0 1 0-2.828L7 13"/></svg>
                            <a className='text-sm hover:opacity-70' href='https://portfolio1.rikudev.com/' target='_blank' rel='noopener noreferrer'>{t('cardproject.preview')}</a>
                            <svg fill="#dc72b5" width="20" height="20" viewBox="0 -0.5 48 48" xmlns="http://www.w3.org/2000/svg"><path d="M23.999 0C10.746 0 0 10.787 0 24.097 0 34.74 6.876 43.772 16.414 46.958c1.2.222 1.639-.522 1.639-1.16 0-.573-.021-2.088-.034-4.098-6.676 1.456-8.085-3.23-8.085-3.23-1.09-2.784-2.664-3.525-2.664-3.525-2.179-1.495.166-1.465.166-1.465 2.407.17 3.675 2.483 3.675 2.483 2.142 3.683 5.617 2.62 6.985 2.002.217-1.557.838-2.619 1.524-3.221-5.33-.609-10.932-2.675-10.932-11.908 0-2.63.934-4.781 2.47-6.466-.247-.61-1.07-3.059.235-6.377 0 0 2.016-.647 6.6 2.47 1.915-.534 3.967-.801 6.008-.811 2.039.01 4.092.277 6.01.811 4.58-3.117 6.592-2.47 6.592-2.47 1.31 3.318.486 5.767.238 6.377 1.54 1.685 2.468 3.835 2.468 6.466 0 9.256-5.612 11.293-10.958 11.89.861.744 1.63 2.213 1.63 4.462 0 3.22-.03 5.819-.03 6.61 0 .644.432 1.394 1.65 1.157C41.13 43.763 48 34.738 48 24.097 48 10.787 37.254 0 23.999 0"/></svg>
                            <a className='text-sm hover:opacity-70' href='https://github.com/xRiiku/PortfolioV1' target='_blank' rel='noopener noreferrer'> {t('cardproject.code')}</a>
                        </div>
                    </div>
                </article>

                {/* Project Portfolio V2 Card */}
                <article className="flex flex-col items-center w-[250px] h-[425px] mb-10 rounded-xl border border-zinc-600 maxxs:w-full">
                    <div className='w-full h-[150px] mt-0'>
                        <img className='rounded-xl h-full w-full' src={portfolio2} alt='portfolio2'></img>
                    </div>
                    <div className='flex flex-col text-left p-3 justify-center items-center'>
                        <h1 className='font-bold'>{t('cardproject.portfolio2')}</h1>
                        <span className='text-gray-500 mt-10'>{t('projects.technologies')}</span>
                        <div className='flex justify-between items-center mt-5 w-full'>
                            <img className='w-10 h-10' src={react} alt='react'></img>
                            <img className='w-10 h-10' src={css} alt='css'></img>
                            <img className='w-10 h-10' src={javascript} alt='javascript'></img>
                            <img className='w-10 h-10' src={vscode} alt='vscode'></img>
                        </div>
                        <div className='flex justify-between items-center mt-10 gap-1'>
                        <svg fill="#dc72b5" width="20" height="20" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="m10.667 13.333-.586-.585a2 2 0 0 1 0-2.829l4.505-4.505a2 2 0 0 1 2.828 0l1.172 1.172a2 2 0 0 1 0 2.828L17 11m-3.667-.333.586.585a2 2 0 0 1 0 2.829l-4.505 4.505a2 2 0 0 1-2.828 0l-1.172-1.172a2 2 0 0 1 0-2.828L7 13"/></svg>
                            <a className='text-sm hover:opacity-70' href='https://portfolio2.rikudev.com/' target='_blank' rel='noopener noreferrer'>{t('cardproject.preview')}</a>
                            <svg fill="#dc72b5" width="20" height="20" viewBox="0 -0.5 48 48" xmlns="http://www.w3.org/2000/svg"><path d="M23.999 0C10.746 0 0 10.787 0 24.097 0 34.74 6.876 43.772 16.414 46.958c1.2.222 1.639-.522 1.639-1.16 0-.573-.021-2.088-.034-4.098-6.676 1.456-8.085-3.23-8.085-3.23-1.09-2.784-2.664-3.525-2.664-3.525-2.179-1.495.166-1.465.166-1.465 2.407.17 3.675 2.483 3.675 2.483 2.142 3.683 5.617 2.62 6.985 2.002.217-1.557.838-2.619 1.524-3.221-5.33-.609-10.932-2.675-10.932-11.908 0-2.63.934-4.781 2.47-6.466-.247-.61-1.07-3.059.235-6.377 0 0 2.016-.647 6.6 2.47 1.915-.534 3.967-.801 6.008-.811 2.039.01 4.092.277 6.01.811 4.58-3.117 6.592-2.47 6.592-2.47 1.31 3.318.486 5.767.238 6.377 1.54 1.685 2.468 3.835 2.468 6.466 0 9.256-5.612 11.293-10.958 11.89.861.744 1.63 2.213 1.63 4.462 0 3.22-.03 5.819-.03 6.61 0 .644.432 1.394 1.65 1.157C41.13 43.763 48 34.738 48 24.097 48 10.787 37.254 0 23.999 0"/></svg>
                            <a className='text-sm hover:opacity-70' href='https://github.com/xRiiku/PortfolioV2' target='_blank' rel='noopener noreferrer'> {t('cardproject.code')}</a>
                        </div>
                    </div>
                </article>

                {/* Project Portfolio V3 Card */}
                <article className="flex flex-col items-center w-[250px] h-[425px] mb-10 rounded-xl border border-zinc-600 maxxs:w-full">
                    <div className='w-full h-[150px] mt-0'>
                        <img className='rounded-xl h-full w-full' src={portfolio3} alt='portfolio3'></img>
                    </div>
                    <div className='flex flex-col text-left p-3 justify-center items-center'>
                        <h1 className='font-bold'>{t('cardproject.portfolio3')}</h1>
                        <span className='text-gray-500 mt-10'>{t('projects.technologies')}</span>
                        <div className='flex justify-between items-center mt-5 w-full'>
                            <img className='w-10 h-10' src={react} alt='react'></img>
                            <img className='w-10 h-10' src={css} alt='css'></img>
                            <img className='w-10 h-10' src={javascript} alt='javascript'></img>
                            <img className='w-10 h-10' src={vscode} alt='vscode'></img>
                        </div>
                        <div className='flex justify-between items-center mt-10 gap-1'>
                        <svg fill="#dc72b5" width="20" height="20" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="m10.667 13.333-.586-.585a2 2 0 0 1 0-2.829l4.505-4.505a2 2 0 0 1 2.828 0l1.172 1.172a2 2 0 0 1 0 2.828L17 11m-3.667-.333.586.585a2 2 0 0 1 0 2.829l-4.505 4.505a2 2 0 0 1-2.828 0l-1.172-1.172a2 2 0 0 1 0-2.828L7 13"/></svg>
                            <a className='text-sm hover:opacity-70' href='https://portfolio3.rikudev.com/' target='_blank' rel='noopener noreferrer'>{t('cardproject.preview')}</a>
                            <svg fill="#dc72b5" width="20" height="20" viewBox="0 -0.5 48 48" xmlns="http://www.w3.org/2000/svg"><path d="M23.999 0C10.746 0 0 10.787 0 24.097 0 34.74 6.876 43.772 16.414 46.958c1.2.222 1.639-.522 1.639-1.16 0-.573-.021-2.088-.034-4.098-6.676 1.456-8.085-3.23-8.085-3.23-1.09-2.784-2.664-3.525-2.664-3.525-2.179-1.495.166-1.465.166-1.465 2.407.17 3.675 2.483 3.675 2.483 2.142 3.683 5.617 2.62 6.985 2.002.217-1.557.838-2.619 1.524-3.221-5.33-.609-10.932-2.675-10.932-11.908 0-2.63.934-4.781 2.47-6.466-.247-.61-1.07-3.059.235-6.377 0 0 2.016-.647 6.6 2.47 1.915-.534 3.967-.801 6.008-.811 2.039.01 4.092.277 6.01.811 4.58-3.117 6.592-2.47 6.592-2.47 1.31 3.318.486 5.767.238 6.377 1.54 1.685 2.468 3.835 2.468 6.466 0 9.256-5.612 11.293-10.958 11.89.861.744 1.63 2.213 1.63 4.462 0 3.22-.03 5.819-.03 6.61 0 .644.432 1.394 1.65 1.157C41.13 43.763 48 34.738 48 24.097 48 10.787 37.254 0 23.999 0"/></svg>
                            <a className='text-sm hover:opacity-70' href='https://github.com/xRiiku/Portfolio3' target='_blank' rel='noopener noreferrer'> {t('cardproject.code')}</a>
                        </div>
                    </div>
                </article>

                {/* Project Puzzle Card */}
                <article className="flex flex-col items-center w-[250px] h-[425px] mb-10 rounded-xl border border-zinc-600 maxxs:w-full">
                    <div className='w-full h-[150px] mt-0'>
                        <img className='rounded-xl h-full w-full' src={puzzle} alt='puzzle'></img>
                    </div>
                    <div className='flex flex-col text-left p-3 justify-center items-center'>
                        <h1 className='font-bold'>{t('cardproject.puzzle')}</h1>
                        <span className='text-gray-500 mt-10'>{t('projects.technologies')}</span>
                        <div className='flex justify-between items-center mt-5 w-full'>
                            <img className='w-10 h-10' src={react} alt='react'></img>
                            <img className='w-10 h-10' src={css} alt='css'></img>
                            <img className='w-10 h-10' src={javascript} alt='javascript'></img>
                            <img className='w-10 h-10' src={vscode} alt='vscode'></img>
                        </div>
                        <div className='flex justify-between items-center mt-10 gap-1'>
                        <svg fill="#dc72b5" width="20" height="20" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="m10.667 13.333-.586-.585a2 2 0 0 1 0-2.829l4.505-4.505a2 2 0 0 1 2.828 0l1.172 1.172a2 2 0 0 1 0 2.828L17 11m-3.667-.333.586.585a2 2 0 0 1 0 2.829l-4.505 4.505a2 2 0 0 1-2.828 0l-1.172-1.172a2 2 0 0 1 0-2.828L7 13"/></svg>
                            <a className='text-sm hover:opacity-70' href='https://puzzle.rikudev.com/' target='_blank' rel='noopener noreferrer'>{t('cardproject.preview')}</a>
                            <svg fill="#dc72b5" width="20" height="20" viewBox="0 -0.5 48 48" xmlns="http://www.w3.org/2000/svg"><path d="M23.999 0C10.746 0 0 10.787 0 24.097 0 34.74 6.876 43.772 16.414 46.958c1.2.222 1.639-.522 1.639-1.16 0-.573-.021-2.088-.034-4.098-6.676 1.456-8.085-3.23-8.085-3.23-1.09-2.784-2.664-3.525-2.664-3.525-2.179-1.495.166-1.465.166-1.465 2.407.17 3.675 2.483 3.675 2.483 2.142 3.683 5.617 2.62 6.985 2.002.217-1.557.838-2.619 1.524-3.221-5.33-.609-10.932-2.675-10.932-11.908 0-2.63.934-4.781 2.47-6.466-.247-.61-1.07-3.059.235-6.377 0 0 2.016-.647 6.6 2.47 1.915-.534 3.967-.801 6.008-.811 2.039.01 4.092.277 6.01.811 4.58-3.117 6.592-2.47 6.592-2.47 1.31 3.318.486 5.767.238 6.377 1.54 1.685 2.468 3.835 2.468 6.466 0 9.256-5.612 11.293-10.958 11.89.861.744 1.63 2.213 1.63 4.462 0 3.22-.03 5.819-.03 6.61 0 .644.432 1.394 1.65 1.157C41.13 43.763 48 34.738 48 24.097 48 10.787 37.254 0 23.999 0"/></svg>
                            <a className='text-sm hover:opacity-70' href='https://github.com/xRiiku/Puzzle' target='_blank' rel='noopener noreferrer'> {t('cardproject.code')}</a>
                        </div>
                    </div>
                </article>

                {/* Project Watch Card */}
                <article className="flex flex-col items-center w-[250px] h-[425px] mb-10 rounded-xl border border-zinc-600 maxxs:w-full">
                    <div className='w-full h-[150px] mt-0'>
                        <img className='rounded-xl h-full w-full' src={watch} alt='watch'></img>
                    </div>
                    <div className='flex flex-col text-left p-3 justify-center items-center'>
                        <h1 className='font-bold'>{t('cardproject.watch')}</h1>
                        <span className='text-gray-500 mt-10'>{t('projects.technologies')}</span>
                        <div className='flex justify-between items-center mt-5 w-full'>
                            <img className='w-10 h-10' src={html} alt='html'></img>
                            <img className='w-10 h-10' src={css} alt='css'></img>
                            <img className='w-10 h-10' src={javascript} alt='javascript'></img>
                            <img className='w-10 h-10' src={vscode} alt='vscode'></img>
                        </div>
                        <div className='flex justify-between items-center mt-10 gap-1'>
                        <svg fill="#dc72b5" width="20" height="20" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="m10.667 13.333-.586-.585a2 2 0 0 1 0-2.829l4.505-4.505a2 2 0 0 1 2.828 0l1.172 1.172a2 2 0 0 1 0 2.828L17 11m-3.667-.333.586.585a2 2 0 0 1 0 2.829l-4.505 4.505a2 2 0 0 1-2.828 0l-1.172-1.172a2 2 0 0 1 0-2.828L7 13"/></svg>
                            <a className='text-sm hover:opacity-70' href='https://watch.rikudev.com/' target='_blank' rel='noopener noreferrer'>{t('cardproject.preview')}</a>
                            <svg fill="#dc72b5" width="20" height="20" viewBox="0 -0.5 48 48" xmlns="http://www.w3.org/2000/svg"><path d="M23.999 0C10.746 0 0 10.787 0 24.097 0 34.74 6.876 43.772 16.414 46.958c1.2.222 1.639-.522 1.639-1.16 0-.573-.021-2.088-.034-4.098-6.676 1.456-8.085-3.23-8.085-3.23-1.09-2.784-2.664-3.525-2.664-3.525-2.179-1.495.166-1.465.166-1.465 2.407.17 3.675 2.483 3.675 2.483 2.142 3.683 5.617 2.62 6.985 2.002.217-1.557.838-2.619 1.524-3.221-5.33-.609-10.932-2.675-10.932-11.908 0-2.63.934-4.781 2.47-6.466-.247-.61-1.07-3.059.235-6.377 0 0 2.016-.647 6.6 2.47 1.915-.534 3.967-.801 6.008-.811 2.039.01 4.092.277 6.01.811 4.58-3.117 6.592-2.47 6.592-2.47 1.31 3.318.486 5.767.238 6.377 1.54 1.685 2.468 3.835 2.468 6.466 0 9.256-5.612 11.293-10.958 11.89.861.744 1.63 2.213 1.63 4.462 0 3.22-.03 5.819-.03 6.61 0 .644.432 1.394 1.65 1.157C41.13 43.763 48 34.738 48 24.097 48 10.787 37.254 0 23.999 0"/></svg>
                            <a className='text-sm hover:opacity-70' href='https://github.com/xRiiku/Watch' target='_blank' rel='noopener noreferrer'> {t('cardproject.code')}</a>
                        </div>
                    </div>
                </article>

            </div>

            
        </div>
        </section>
    );
}

// flex justify-between items-center max-w-[1280px] w-screen  mx-auto