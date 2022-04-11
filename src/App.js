import About from "./components/About";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import Projects from "./components/Projects";
import Spline from "./components/Spline";
import Timeline from "./components/Timeline";
import { AnimatePresence } from 'framer-motion'

function App() {
  return (
    <AnimatePresence initial={false}>
      <div className="wrapper">
        <Navbar/>
        <Spline/>
        <About/>
        <Timeline/>
        <Projects/>
        <Footer/>
      </div>
    </AnimatePresence>
    
  );
}

export default App;
