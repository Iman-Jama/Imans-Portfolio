import { BrowserRouter } from "react-router-dom";
import {About, Contact, Experience, Hero, Navbar, Works,} from './components'



const App = () => {
  return (
    <BrowserRouter>
      <div className="relative z-0 bg-hero-pattern bg-cover bg-no-repeat bg-center">
      <div>
        <Navbar />
        <Hero />

      </div>
      <About />
      <Works />
      <Experience />
      <Contact />
       

      </div>
      
    </BrowserRouter>
  )
}

export default App
