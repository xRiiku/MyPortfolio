
import { useTranslation } from 'react-i18next';
import link from '../assets/img/link.svg'
import github from '../assets/img/github.svg'
import html from '../assets/img/html.svg'
import css from '../assets/img/css.svg'
import javascript from '../assets/img/javascript.svg'
import react from '../assets/img/react.svg'
import sass from '../assets/img/sass.svg'
import bootstrap from '../assets/img/bootstrap.svg'
import tailwind from '../assets/img/tailwind.svg'
import vscode from '../assets/img/vscode.svg'
import vite from '../assets/img/vite.svg'
import gympage from '../assets/img/projects/gym.jpg'
import pokedex from '../assets/img/projects/Pokedex.jpg'
import coinbase from '../assets/img/projects/Coinbase.jpg'
import githubFinder from '../assets/img/projects/githubProfileSearch.jpg'
import calculator from '../assets/img/projects/Calculator.jpg'
import music from '../assets/img/projects/MusicPlayer.jpg'
import portfolio1 from '../assets/img/projects/PortfolioV1.jpg'
import portfolio2 from '../assets/img/projects/PortfolioV2.jpg'
import portfolio3 from '../assets/img/projects/portfolio3.jpg'
import puzzle from '../assets/img/projects/Puzzle.jpg'
import watch from '../assets/img/projects/watch.jpg'


export default function Projects(){

    const {t} = useTranslation()

    
    return (
        <section id='projects' className='text-xl w-screen items-center flex pt-52 z-20 px-10'>
        <div className='flex flex-col justify-between mt-10 max-w-[1280px] w-screen mx-auto items-center maxsm:flex-col maxsm:gap-10'>
            <div className='flex flex-col font-medium gap-2 justify-center items-center'>
                <span className='text-2xl text-center'>{t('projects.mainTitle')}</span>
                <span className='text-gray-500 text-center'> {t('projects.description')}</span>
            </div>

            <div className='flex flex-wrap justify-between items-center mx-auto w-full mt-10 gap-10 maxsm:justify-center'>
                {/* Project Gym Card */}
                <article className='flex flex-col items-center w-[250px] h-[425px] mb-10 rounded-xl border border-zinc-600 maxxs:w-full'>
                    <div className='w-full h-[150px] mt-0'>
                        <img className='rounded-xl h-full' src={gympage} alt='gym'></img>
                    </div>
                    <div className='flex flex-col text-left p-3 justify-center items-center'>
                        <h1 className='font-bold'>{t('cardproject.gym')}</h1>
                        <h6 className='text-gray-500 mt-10'>{t('projects.technologies')}</h6>
                        <div className='flex justify-between items-center mt-5 w-full'>
                            <img className='w-10 h-10' src={react} alt='react'></img>
                            <img className='w-10 h-10' src={tailwind} alt='tailwind'></img>
                            <img className='w-10 h-10' src={vscode} alt='vscode'></img>
                            <img className='w-10 h-10' src={vite} alt='vite'></img>
                        </div>
                        <div className='flex justify-between items-center mt-10 gap-1'>
                            <img className='w-5 h-5' src={link} alt='link'></img>
                            <a className='text-sm hover:opacity-70' href='https://rikudev.com/GymPage/index.html' target='_blank' rel='noopener noreferrer'>{t('cardproject.preview')}</a>
                            <img className='w-5 h-5 ml-3' src={github} alt='github'></img>
                            <a className='text-sm hover:opacity-70' href='https://github.com/xRiiku/GymPage' target='_blank' rel='noopener noreferrer'> {t('cardproject.code')}</a>
                        </div>
                    </div>
                </article>

                {/* Project Pokedex Card */}
                <article className='flex flex-col items-center w-[250px] h-[425px] mb-10 rounded-xl border border-zinc-600 maxxs:w-full'>
                    <div className='w-full h-[150px] mt-0'>
                        <img className='rounded-xl h-full' src={pokedex} alt='pokedex'></img>
                    </div>
                    <div className='flex flex-col text-left p-3 justify-center items-center'>
                        <h1 className='font-bold'>{t('cardproject.pokedex')}</h1>
                        <h6 className='text-gray-500 mt-10'>{t('projects.technologies')}</h6>
                        <div className='flex justify-between items-center mt-5 w-full'>
                            <img className='w-10 h-10' src={react} alt='react'></img>
                            <img className='w-10 h-10' src={css} alt='css'></img>
                            <img className='w-10 h-10' src={javascript} alt='javascript'></img>
                            <img className='w-10 h-10' src={vscode} alt='vscode'></img>
                        </div>
                        <div className='flex justify-between items-center mt-10 gap-1'>
                            <img className='w-5 h-5' src={link} alt='link'></img>
                            <a className='text-sm hover:opacity-70' href='https://www.rikudev.com/Pokedex/index.html' target='_blank' rel='noopener noreferrer'>{t('cardproject.preview')}</a>
                            <img className='w-5 h-5 ml-3' src={github} alt='github'></img>
                            <a className='text-sm hover:opacity-70' href='https://github.com/xRiiku/pokedex' target='_blank' rel='noopener noreferrer'> {t('cardproject.code')}</a>
                        </div>
                    </div>
                </article>

                {/* Project Coinbase Card */}
                <article className='flex flex-col items-center w-[250px] h-[425px] mb-10 rounded-xl border border-zinc-600 maxxs:w-full'>
                    <div className='w-full h-[150px] mt-0'>
                        <img className='rounded-xl h-full' src={coinbase} alt='coinbase'></img>
                    </div>
                    <div className='flex flex-col text-left p-3 justify-center items-center'>
                        <h1 className='font-bold'>{t('cardproject.coinbase')}</h1>
                        <h6 className='text-gray-500 mt-10'>{t('projects.technologies')}</h6>
                        <div className='flex justify-between items-center mt-5 w-full'>
                            <img className='w-10 h-10' src={html} alt='html'></img>
                            <img className='w-10 h-10' src={bootstrap} alt='bootstrap'></img>
                            <img className='w-10 h-10' src={sass} alt='sass'></img>
                            <img className='w-10 h-10' src={vscode} alt='vscode'></img>
                        </div>
                        <div className='flex justify-between items-center mt-10 gap-1'>
                            <img className='w-5 h-5' src={link} alt='link'></img>
                            <a className='text-sm hover:opacity-70' href='https://www.rikudev.com/Coinbase/html/proyecto.html' target='_blank' rel='noopener noreferrer'>{t('cardproject.preview')}</a>
                            <img className='w-5 h-5 ml-3' src={github} alt='github'></img>
                            <a className='text-sm hover:opacity-70' href='https://github.com/xRiiku/CoinBase' target='_blank' rel='noopener noreferrer'> {t('cardproject.code')}</a>
                        </div>
                    </div>
                </article>

                {/* Project GithubFinder Card */}
                <article className='flex flex-col items-center w-[250px] h-[425px] mb-10 rounded-xl border border-zinc-600 maxxs:w-full'>
                    <div className='w-full h-[150px] mt-0'>
                        <img className='rounded-xl h-full' src={githubFinder} alt='githubFinder'></img>
                    </div>
                    <div className='flex flex-col text-left p-3 justify-center items-center'>
                        <h1 className='font-bold'>{t('cardproject.githubFinder')}</h1>
                        <h6 className='text-gray-500 mt-10'>{t('projects.technologies')}</h6>
                        <div className='flex justify-between items-center mt-5 w-full'>
                            <img className='w-10 h-10' src={react} alt='react'></img>
                            <img className='w-10 h-10' src={css} alt='css'></img>
                            <img className='w-10 h-10' src={javascript} alt='javascript'></img>
                            <img className='w-10 h-10' src={vscode} alt='vscode'></img>
                        </div>
                        <div className='flex justify-between items-center mt-10 gap-1'>
                            <img className='w-5 h-5' src={link} alt='link'></img>
                            <a className='text-sm hover:opacity-70' href='https://rikudev.com/githubProfileFinder/index.html' target='_blank' rel='noopener noreferrer'>{t('cardproject.preview')}</a>
                            <img className='w-5 h-5 ml-3' src={github} alt='github'></img>
                            <a className='text-sm hover:opacity-70' href='https://github.com/xRiiku/GithubProfileFinder' target='_blank' rel='noopener noreferrer'> {t('cardproject.code')}</a>
                        </div>
                    </div>
                </article>

                {/* Project Calculator Card */}
                <article className='flex flex-col items-center w-[250px] h-[425px] mb-10 rounded-xl border border-zinc-600 maxxs:w-full'>
                    <div className='w-full h-[150px] mt-0'>
                        <img className='rounded-xl h-full' src={calculator} alt='calculator'></img>
                    </div>
                    <div className='flex flex-col text-left p-3 justify-center items-center'>
                        <h1 className='font-bold'>{t('cardproject.calculator')}</h1>
                        <h6 className='text-gray-500 mt-10'>{t('projects.technologies')}</h6>
                        <div className='flex justify-between items-center mt-5 w-full'>
                            <img className='w-10 h-10' src={react} alt='react'></img>
                            <img className='w-10 h-10' src={css} alt='css'></img>
                            <img className='w-10 h-10' src={javascript} alt='javascript'></img>
                            <img className='w-10 h-10' src={vscode} alt='vscode'></img>
                        </div>
                        <div className='flex justify-between items-center mt-10 gap-1'>
                            <img className='w-5 h-5' src={link} alt='link'></img>
                            <a className='text-sm hover:opacity-70' href='https://rikudev.com/Calculator/index.html' target='_blank' rel='noopener noreferrer'>{t('cardproject.preview')}</a>
                            <img className='w-5 h-5 ml-3' src={github} alt='github'></img>
                            <a className='text-sm hover:opacity-70' href='https://github.com/xRiiku/Calculator' target='_blank' rel='noopener noreferrer'> {t('cardproject.code')}</a>
                        </div>
                    </div>
                </article>

                {/* Project MusicPlayer Card */}
                <article className='flex flex-col items-center w-[250px] h-[425px] mb-10 rounded-xl border border-zinc-600 maxxs:w-full'>
                    <div className='w-full h-[150px] mt-0'>
                        <img className='rounded-xl h-full' src={music} alt='music'></img>
                    </div>
                    <div className='flex flex-col text-left p-3 justify-center items-center'>
                        <h1 className='font-bold'>{t('cardproject.music')}</h1>
                        <h6 className='text-gray-500 mt-10'>{t('projects.technologies')}</h6>
                        <div className='flex justify-between items-center mt-5 w-full'>
                            <img className='w-10 h-10' src={react} alt='react'></img>
                            <img className='w-10 h-10' src={css} alt='css'></img>
                            <img className='w-10 h-10' src={javascript} alt='javascript'></img>
                            <img className='w-10 h-10' src={vscode} alt='vscode'></img>
                        </div>
                        <div className='flex justify-between items-center mt-10 gap-1'>
                            <img className='w-5 h-5' src={link} alt='link'></img>
                            <a className='text-sm hover:opacity-70' href='https://rikudev.com/MusicPlayer/index.html' target='_blank' rel='noopener noreferrer'>{t('cardproject.preview')}</a>
                            <img className='w-5 h-5 ml-3' src={github} alt='github'></img>
                            <a className='text-sm hover:opacity-70' href='https://github.com/xRiiku/MusicPlayer' target='_blank' rel='noopener noreferrer'> {t('cardproject.code')}</a>
                        </div>
                    </div>
                </article>

                {/* Project Portfolio V1 Card */}
                <article className='flex flex-col items-center w-[250px] h-[425px] mb-10 rounded-xl border border-zinc-600 maxxs:w-full'>
                    <div className='w-full h-[150px] mt-0'>
                        <img className='rounded-xl h-full' src={portfolio1} alt='portfolio1'></img>
                    </div>
                    <div className='flex flex-col text-left p-3 justify-center items-center'>
                        <h1 className='font-bold'>{t('cardproject.portfolio1')}</h1>
                        <h6 className='text-gray-500 mt-10'>{t('projects.technologies')}</h6>
                        <div className='flex justify-between items-center mt-5 w-full'>
                            <img className='w-10 h-10' src={html} alt='html'></img>
                            <img className='w-10 h-10' src={css} alt='css'></img>
                            <img className='w-10 h-10' src={javascript} alt='javascript'></img>
                            <img className='w-10 h-10' src={vscode} alt='vscode'></img>
                        </div>
                        <div className='flex justify-between items-center mt-10 gap-1'>
                            <img className='w-5 h-5' src={link} alt='link'></img>
                            <a className='text-sm hover:opacity-70' href='https://rikudev.com/PortfolioV1/index.html' target='_blank' rel='noopener noreferrer'>{t('cardproject.preview')}</a>
                            <img className='w-5 h-5 ml-3' src={github} alt='github'></img>
                            <a className='text-sm hover:opacity-70' href='https://github.com/xRiiku/PortfolioV1' target='_blank' rel='noopener noreferrer'> {t('cardproject.code')}</a>
                        </div>
                    </div>
                </article>

                {/* Project Portfolio V2 Card */}
                <article className='flex flex-col items-center w-[250px] h-[425px] mb-10 rounded-xl border border-zinc-600 maxxs:w-full'>
                    <div className='w-full h-[150px] mt-0'>
                        <img className='rounded-xl h-full' src={portfolio2} alt='portfolio2'></img>
                    </div>
                    <div className='flex flex-col text-left p-3 justify-center items-center'>
                        <h1 className='font-bold'>{t('cardproject.portfolio2')}</h1>
                        <h6 className='text-gray-500 mt-10'>{t('projects.technologies')}</h6>
                        <div className='flex justify-between items-center mt-5 w-full'>
                            <img className='w-10 h-10' src={react} alt='react'></img>
                            <img className='w-10 h-10' src={css} alt='css'></img>
                            <img className='w-10 h-10' src={javascript} alt='javascript'></img>
                            <img className='w-10 h-10' src={vscode} alt='vscode'></img>
                        </div>
                        <div className='flex justify-between items-center mt-10 gap-1'>
                            <img className='w-5 h-5' src={link} alt='link'></img>
                            <a className='text-sm hover:opacity-70' href='https://rikudev.com/PortfolioV2/index.html' target='_blank' rel='noopener noreferrer'>{t('cardproject.preview')}</a>
                            <img className='w-5 h-5 ml-3' src={github} alt='github'></img>
                            <a className='text-sm hover:opacity-70' href='https://github.com/xRiiku/PortfolioV2' target='_blank' rel='noopener noreferrer'> {t('cardproject.code')}</a>
                        </div>
                    </div>
                </article>

                {/* Project Portfolio V3 Card */}
                <article className='flex flex-col items-center w-[250px] h-[425px] mb-10 rounded-xl border border-zinc-600 maxxs:w-full'>
                    <div className='w-full h-[150px] mt-0'>
                        <img className='rounded-xl h-full' src={portfolio3} alt='portfolio3'></img>
                    </div>
                    <div className='flex flex-col text-left p-3 justify-center items-center'>
                        <h1 className='font-bold'>{t('cardproject.portfolio3')}</h1>
                        <h6 className='text-gray-500 mt-10'>{t('projects.technologies')}</h6>
                        <div className='flex justify-between items-center mt-5 w-full'>
                            <img className='w-10 h-10' src={react} alt='react'></img>
                            <img className='w-10 h-10' src={css} alt='css'></img>
                            <img className='w-10 h-10' src={javascript} alt='javascript'></img>
                            <img className='w-10 h-10' src={vscode} alt='vscode'></img>
                        </div>
                        <div className='flex justify-between items-center mt-10 gap-1'>
                            <img className='w-5 h-5' src={link} alt='link'></img>
                            <a className='text-sm hover:opacity-70' href='https://rikudev.com/Portfolio3/index.html' target='_blank' rel='noopener noreferrer'>{t('cardproject.preview')}</a>
                            <img className='w-5 h-5 ml-3' src={github} alt='github'></img>
                            <a className='text-sm hover:opacity-70' href='https://github.com/xRiiku/Portfolio3' target='_blank' rel='noopener noreferrer'> {t('cardproject.code')}</a>
                        </div>
                    </div>
                </article>

                {/* Project Puzzle Card */}
                <article className='flex flex-col items-center w-[250px] h-[425px] mb-10 rounded-xl border border-zinc-600 maxxs:w-full'>
                    <div className='w-full h-[150px] mt-0'>
                        <img className='rounded-xl h-full' src={puzzle} alt='puzzle'></img>
                    </div>
                    <div className='flex flex-col text-left p-3 justify-center items-center'>
                        <h1 className='font-bold'>{t('cardproject.puzzle')}</h1>
                        <h6 className='text-gray-500 mt-10'>{t('projects.technologies')}</h6>
                        <div className='flex justify-between items-center mt-5 w-full'>
                            <img className='w-10 h-10' src={react} alt='react'></img>
                            <img className='w-10 h-10' src={css} alt='css'></img>
                            <img className='w-10 h-10' src={javascript} alt='javascript'></img>
                            <img className='w-10 h-10' src={vscode} alt='vscode'></img>
                        </div>
                        <div className='flex justify-between items-center mt-10 gap-1'>
                            <img className='w-5 h-5' src={link} alt='link'></img>
                            <a className='text-sm hover:opacity-70' href='https://rikudev.com/Puzzle/index.html' target='_blank' rel='noopener noreferrer'>{t('cardproject.preview')}</a>
                            <img className='w-5 h-5 ml-3' src={github} alt='github'></img>
                            <a className='text-sm hover:opacity-70' href='https://github.com/xRiiku/Puzzle' target='_blank' rel='noopener noreferrer'> {t('cardproject.code')}</a>
                        </div>
                    </div>
                </article>

                {/* Project Watch Card */}
                <article className='flex flex-col items-center w-[250px] h-[425px] mb-10 rounded-xl border border-zinc-600 maxxs:w-full'>
                    <div className='w-full h-[150px] mt-0'>
                        <img className='rounded-xl h-full' src={watch} alt='watch'></img>
                    </div>
                    <div className='flex flex-col text-left p-3 justify-center items-center'>
                        <h1 className='font-bold'>{t('cardproject.watch')}</h1>
                        <h6 className='text-gray-500 mt-10'>{t('projects.technologies')}</h6>
                        <div className='flex justify-between items-center mt-5 w-full'>
                            <img className='w-10 h-10' src={html} alt='html'></img>
                            <img className='w-10 h-10' src={css} alt='css'></img>
                            <img className='w-10 h-10' src={javascript} alt='javascript'></img>
                            <img className='w-10 h-10' src={vscode} alt='vscode'></img>
                        </div>
                        <div className='flex justify-between items-center mt-10 gap-1'>
                            <img className='w-5 h-5' src={link} alt='link'></img>
                            <a className='text-sm hover:opacity-70' href='https://rikudev.com/Watch/index.html' target='_blank' rel='noopener noreferrer'>{t('cardproject.preview')}</a>
                            <img className='w-5 h-5 ml-3' src={github} alt='github'></img>
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