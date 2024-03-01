import Contact from './Pages/Contact.jsx';
import Footer from './Pages/Footer.jsx';
import Home from './Pages/Home.jsx';
import Navbar from './Pages/Navbar.jsx';
import Projects from './Pages/Projects.jsx';
import Skills from './Pages/Skills.jsx';
import { useEffect, useState } from "react";
import "./index.css";
import "./App.scss";

export default function App() {

  const storedDarkMode = localStorage.getItem("darkMode");
  const [darkMode, setDarkMode] = useState(
    storedDarkMode ? JSON.parse(storedDarkMode) : null
  );

  useEffect(() => {
    if (darkMode === null) {
      const prefersDarkMode = window.matchMedia("(prefers-color-scheme: dark)");
      setDarkMode(prefersDarkMode.matches);

      const handleChange = (event) => {
        setDarkMode(event.matches);
      };

      prefersDarkMode.addEventListener("change", handleChange);

      return () => {
        prefersDarkMode.removeEventListener("change", handleChange);
      };
    }
  }, [darkMode]);

  const toggleDarkMode = () => {
    const newDarkMode = !darkMode;
    setDarkMode(newDarkMode);
    localStorage.setItem("darkMode", JSON.stringify(newDarkMode));
  };

  return (
    <div className={`App overflow-x-hidden ${darkMode ? "dark-mode" : "light-mode"}`}>
        <Navbar darkMode={darkMode} toggleDarkMode={toggleDarkMode}/>
        <Home />
        <Skills />
        <Projects />
        <Contact />
        <Footer />
    </div>
  );
}
