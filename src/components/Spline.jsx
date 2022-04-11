import Spline from "@splinetool/react-spline";
import React from 'react';
import { LazyMotion, domAnimation, m } from "framer-motion"

function SplineComponent() {
    return ( 
        <LazyMotion features={domAnimation}>
            <m.section
                initial={{opacity:0}}
                animate={{opacity:1}}
                
                transition={{duration:1}}
                className='flex flex-col justify-center items-center relative' id='home'>
                <Spline scene="https://draft.spline.design/qsaQMLk5bn5B-K9N/scene.spline" />
                <div className="motion-hint">Press & Drag to Orbit</div>
            </m.section>
        </LazyMotion>
        
     );
}

export default SplineComponent;
