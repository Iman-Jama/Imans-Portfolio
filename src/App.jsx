import { BrowserRouter } from "react-router-dom";
import About from './components/About.jsx'
import Footer from './components/Footer.jsx';
import Works from './components/Works.jsx';
import Navbar from './components/Navbar.jsx';
import Hero from './components/Hero.jsx';
import Experience from './components/Experience.jsx';




const App = () => {
  return (
    <BrowserRouter>
      <div className="relative z-0 bg-hero-pattern bg-cover bg-no-repeat bg-center">
        <div>
          <Navbar />
          <Hero className=''/>
        </div>
        
        <About className=""/>
        <Works />
        <Experience />
        
        <div>
          <Footer />
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App
