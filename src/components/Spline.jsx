import Spline from "@splinetool/react-spline";
import React from 'react';

function SplineComponent() {
    return ( 
        <section className='flex flex-col justify-center items-center relative' id='home'>
            <Spline scene="https://draft.spline.design/qsaQMLk5bn5B-K9N/scene.spline" />
            <div className="motion-hint">Press & Drag to Orbit</div>
        </section>
     );
}

export default SplineComponent;
