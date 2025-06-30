
import gsap from 'gsap';
import {ScrollTrigger,SplitText } from "gsap/all"
import Navbar from './component/Navbar';
import Hero from './component/hero';
import Cocktail from './component/Cocktail';
import About from './component/About';


gsap.registerPlugin(ScrollTrigger, SplitText);

const App = () => {
  return (
    <main>
       <Navbar />
       <Hero />
       <Cocktail />
       <About />
    </main>
  )
}

export default App
