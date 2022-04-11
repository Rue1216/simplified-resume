import React, {useState} from 'react';
import { AiOutlineMenu } from 'react-icons/ai'
import {motion ,AnimatePresence} from 'framer-motion'

function Navbar() {
    const [IsActive, setIsActive] = useState(false);
    return ( 
        <AnimatePresence initial={false}>
            <nav className='nav'>
            <h1 className="font-bold text-xl"><a href="#">Rue Lin</a></h1>
            <ul className="hidden md:flex">
              <li className="sm:pl-4 py-2"><a className="nav-link" href="#home">Home</a></li>
              <li className="sm:pl-4 py-2"><a className="nav-link" href="#about">About</a></li>
              <li className="sm:pl-4 py-2"><a className="nav-link" href="#projects">Projects</a></li>
              <li className="sm:pl-4 py-2"><a className="nav-link" href="#contact">Contact</a></li>
            </ul>
            <motion.button
                whileTap={ {scale:0.5} }
                className="md:hidden block"
                onClick={()=>setIsActive(!IsActive)}
            >
              <AiOutlineMenu className='h-6 w-6'/>
            </motion.button>

            {/* toggle event */}
            { IsActive && (
                <motion.ul
                    initial={{opacity:0, scale: 0.5}}
                    animate={{opacity:1, scale:1.1}}
                    exit={{opacity:0, scale:0.5}}
                    transition={{delay:'0.1s', type:'spring'}}
                    className="fixed md:hidden bg-gray-600 shadow-sm shadow-gray-800 rounded-lg py-2 px-8 right-20 top-24 text-center">
                    <li className="sm:px-4 py-2"><a className="nav-link" onClick={()=>setIsActive()} href="#home">Home</a></li>
                    <li className="sm:px-4 py-2"><a className="nav-link" onClick={()=>setIsActive()} href="#about">About</a></li>
                    <li className="sm:px-4 py-2"><a className="nav-link" onClick={()=>setIsActive()} href="#projects">Projects</a></li>
                    <li className="sm:px-4 py-2"><a className="nav-link" onClick={()=>setIsActive()} href="#contact">Contact</a></li>
                </motion.ul>
            )}
            </nav>
        </AnimatePresence>
        
    );
}
    
export default Navbar;