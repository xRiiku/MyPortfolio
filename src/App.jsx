
import About from './Pages/About.jsx';
import Contact from './Pages/Contact.jsx';
import Footer from './Pages/Footer.jsx';
import Home from './Pages/Home.jsx';
import Navbar from './Pages/Navbar.jsx';
import Projects from './Pages/Projects.jsx';
import Skills from './Pages/Skills.jsx';

export default function App() {
  
  return (
    <div className=''>
    
        <Navbar />
        <Home />
        <About />
        <Skills />
        <Projects />
        <Contact />
        <Footer />
    </div>
  );
}
