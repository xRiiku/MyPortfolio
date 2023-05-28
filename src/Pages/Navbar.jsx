import { useState, useEffect } from "react";
import { navbarDataEn } from "../assets/utilities/navbarDataEn";
import { navbarDataEs } from "../assets/utilities/navbarDataEs";
import { useTranslation } from "react-i18next";
import DarkMode from "../assets/utilities/DarkMode";
import { EeUuWave, SpainWave } from "../assets/utilities/Language";

export default function Navbar() {
    const [toggle, setToggle] = useState(false);
    const { i18n } = useTranslation();
    const [language, setLanguage] = useState("es");
    const [isNavbarAbove, setIsNavbarAbove] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
        const navbarHeight = document.getElementById("navbar").offsetHeight;
        const scrollY = window.scrollY;
        setIsNavbarAbove(scrollY > navbarHeight);
        };

        window.addEventListener("scroll", handleScroll);
        return () => {
        window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    const onChangeLanguage = () => {
        if (language === "en") {
        setLanguage("es");
        } else {
        setLanguage("en");
        }
        i18n.changeLanguage(language);
    };

    const showNav = () => {
        setToggle(!toggle);
    };

    return (
        <nav
        id="navbar"
        className={`fixed pt-5 text-xl w-screen items-center flex z-20 ${
            isNavbarAbove ? "backdrop-blur-lg" : ""
        } bg-opacity-70 light:bg-white dark:bg-gray-800`}
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
            } flex-col justify-center gap-6 items-center w-screen first:mt-2 minlg:flex-row minlg:w-auto minlg:space-x-10 minlg:flex`}
            >
            {language === "en"
                ? navbarDataEn.map((link, index) => {
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
                : navbarDataEs.map((link, index) => {
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
                })}
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
                    {language === "en" ? <SpainWave /> : <EeUuWave />}
                </span>
                <div>
                    <DarkMode />
                </div>
                </div>
            )}
            </div>
        </div>
        </nav>
    );
}
