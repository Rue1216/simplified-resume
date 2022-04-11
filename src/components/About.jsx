import React from 'react';
import selfie from './images/selfie.png'
function About() {
    return ( 
        <section id='about' className='py-24 md:py-40 grid grid-cols-12 gap-4 md:gap-8 text-gray-100'>
            <h2 className='col-start-4 col-span-6'>About</h2>
        {/* photo */}
            <div className='col-start-4 col-span-6 md:col-start-3 md:col-span-3 pb-10 md:pb-0'>
                <img className='w-full h-auto rounded-full shadow-gray-600 shadow-2xl' src={selfie} alt="selfie" />
            </div>
        {/* short self-introduction */}
            <div className='col-start-3 col-span-8 md:col-span-5'>
                <p className='zh leading-8 pb-4'>
                    <span className='text-2xl font-bold'>嗨，我是林子芸</span><br/>
                    目前是成大航太系的大四生<br/>
                    從去年開始自學前端，跟喜歡黑咖啡一樣的喜歡寫程式，熱愛一切與前端相關的事物
                </p>
                <p>
                    Hello, I'm Rue, a undergraduate student major in Aeronautics and Astronautics Engineering at NCKU, Tainan, Taiwan.<br/><br/>
                    Passionate about creating websites and drinking black coffee, looking forward to dive into the deep ocean of Front-end development.<br/>

                </p>
            </div>
        </section>
     );
}

export default About;