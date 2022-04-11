import About from "./components/About";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import Projects from "./components/Projects";
import Spline from "./components/Spline";
import Timeline from "./components/Timeline";
import { AnimatePresence } from 'framer-motion'
import { useState,useEffect } from "react";
import { PuffLoader } from "react-spinners";

function App() {
  const [loading, setloading] = useState(false);
  
  useEffect(()=>{
    setloading(true)
    setTimeout(() => {
      setloading(false)
    }, 3000);
  },[])

  return (
    <AnimatePresence initial={false}>
      {
        loading?

        <div className="w-full min-h-screen bg-gray-600 flex justify-center items-center align-middle">
          <PuffLoader 
            size={150}
            color={"#F59A00"}
            loading={loading}
            speedMultiplier={1.5}
          />
        </div>
        :
        <div className="wrapper">
          <Navbar/>
          <Spline/>
          <About/>
          <Timeline/>
          <Projects/>
          <Footer/>
        </div>
      }
    </AnimatePresence>
    
  );
}

export default App;
