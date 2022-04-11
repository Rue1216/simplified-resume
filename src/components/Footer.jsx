import React from 'react';
import {motion,AnimatePresence} from 'framer-motion'

function Footer() {
    return ( 
        <AnimatePresence initial={false}>
            <footer id='contact' className='w-full flex flex-col justify-center items-center py-14 bg-gray-600 text-gray-200'>
            <h2 className='w-1/2'>Contact</h2>
            <ul className='py-4 text-center'>
                    <motion.li whileTap={{scale: 1.2}} className='py-2'><a rel='noreferrer' target="_blank" className='hover:text-orange-300 text-lg' href="https://www.linkedin.com/in/tsu-yun-lin/">LinkedIn</a></motion.li>
                    <motion.li whileTap={{scale: 1.2}} className='py-2'><a target="_blank" className='hover:text-orange-300 text-lg' href="https://github.com/Rue1216" rel='noreferrer'>GitHub</a></motion.li>
                    <li className='text-lg py-2' >ltsuyun1999@gmail.com</li>
            </ul>
            <p className='py-4 text-sm text-center'>
                This site is created with React.js & Spline<br/>
                2022 Rue © all rights reserved
            </p>
            </footer>
        </AnimatePresence>
        
     );
}

export default Footer;