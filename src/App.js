import React, { Suspense } from 'react';
import About from "./components/About";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import Projects from "./components/Projects";
import Timeline from "./components/Timeline";
import { AnimatePresence, LazyMotion, domAnimation, m } from 'framer-motion';

const SplineScene = React.lazy(()=>import("./components/Spline"));

function App() {

  return (
        <div className="wrapper">
          <Suspense
            fallback={
              // spinner
              <div className='w-full min-h-screen flex items-center justify-center'>
                <div className='animate-ping bg-orange-400 w-10 h-10 rounded-full'></div>
              </div>
            }
          >
            <Navbar/>
            <LazyMotion features={domAnimation}>
              <m.div
                initial={{opacity:0}}
                animate={{opacity:1}}
                transition={{duration:1}}
              >
                <SplineScene/>
              </m.div>
            </LazyMotion>
            <About/>
            <Timeline/>
            <Projects/>
            <Footer/>
          </Suspense>
        </div>
  );
}

export default App;
