import { useState, useEffect } from "react";
import { navbarDataEn } from "../assets/utilities/navbarDataEn";
import { navbarDataEs } from "../assets/utilities/navbarDataEs";
import { useTranslation } from "react-i18next";
import { Moon, Sun } from '../assets/utilities/DarkModeIcons';
import { EeUuWave, SpainWave } from "../assets/utilities/Language";

export default function Navbar() {
    const [toggle, setToggle] = useState(false);
    const { i18n } = useTranslation();
    const [language, setLanguage] = useState("es");
    const [isScrolled, setIsScrolled] = useState(false);
    const [theme, setTheme] = useState('light');

    /* DARK MODE */
    const toggleTheme = () => {
        setTheme(prevTheme => (prevTheme === 'light' ? 'dark' : 'light'));
    };

    useEffect(() => {
        const body = document.querySelector('body');
        body.classList.remove('dark', 'light');
        body.classList.add(theme);
    }, [theme]);

  /* SCROLL NAV BACKGROUND */
    useEffect(() => {
        const handleScroll = () => {
            const scrollTop = window.pageYOffset;
            setIsScrolled(scrollTop > 0);
        };
    
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);
    
/* CHANGE LANGUAGE */
    const onChangeLanguage = () => {
        if (language === "en") {
        setLanguage("es");
        } else {
        setLanguage("en");
        }
        i18n.changeLanguage(language);
    };

    /* SHOW NAV RESPONSIVE */
    const showNav = () => {
        setToggle(!toggle);
    };

    return (
        <nav
        id="navbar"
        className={`fixed px-10 pt-5 text-xl w-screen items-center flex z-20 ${
            isScrolled ? (theme === "light" ? "bg-white" : "bg-black") : ""
        }`}
        >


        <div className="flex justify-between items-center max-w-[1280px] w-screen mx-auto flex-wrap minlg:flex-nowrap">
            <a href="/">
            <span className="font-medium bg-gradient-to-r from-sky-500 via-purple-500 to-pink-600 text-transparent bg-clip-text">
                RikuDev
            </span>
            </a>

            <button
            className="flex justify-end minlg:hidden ring-1 ring-current rounded"
            onClick={showNav}
            >
            <i className="fas fa-bars text-current w-9 h-9 flex justify-center items-center"></i>
            </button>

            <ul
            className={`${
                toggle ? "flex" : "hidden"
            } ${
            isScrolled === false ? (theme === "light" ? "bg-white" : "bg-black") : ""
        } flex-col justify-center gap-6 items-center w-full first:mt-2 minlg:flex-row minlg:w-auto minlg:space-x-10 minlg:flex`}
            >
            {language === "en"
                ? navbarDataEs.map((link, index) => {
                    return (
                    <li key={index} className={link.cname}>
                        <a
                        className="hover:bg-gradient-to-r hover:from-sky-500 hover:via-purple-500 hover:to-pink-600 hover:text-transparent hover:bg-clip-text"
                        href={link.href}
                        >
                        {link.title}
                        </a>
                    </li>
                    );
                })
                : language === "es" ? 
                navbarDataEn.map((link, index) => {
                    return (
                    <li key={index} className={link.cname}>
                        <a
                        className="hover:bg-gradient-to-r hover:from-indigo-500 hover:via-purple-500 hover:to-pink-500 hover:text-transparent hover:bg-clip-text"
                        href={link.href}
                        >
                        {link.title}
                        </a>
                    </li>
                    );
                }):null}
            </ul>
            

            <div className={`${toggle ? "hidden" : "flex"}`}>
            {toggle ? (
                <button
                className="flex justify-end minlg:hidden ring-1 ring-current rounded"
                onClick={showNav}
                >
                <i className="fas fa-bars text-current w-9 h-9 flex justify-center items-center"></i>
                </button>
            ) : (
                <div className="flex justify-center items-center">
                <span onClick={onChangeLanguage} className="cursor-pointer">
                    {language === "en" ? <EeUuWave /> : <SpainWave />}
                </span>

                <div>
                <span
                    className={`w-12 h-12 rounded-full cursor-pointer ${theme === 'light' ? 'bg-black text-white' : 'bg-white text-black'}`}
                    onClick={toggleTheme}
                    >
                    {theme === 'light' ? <Moon /> : <Sun />}
                </span>
                </div>
                </div>
            )}
            </div>
        </div>
        </nav>
    );
}
