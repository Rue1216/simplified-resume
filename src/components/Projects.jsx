import React from 'react';
import { PetProjects } from '../Data';
import {AiOutlineGithub} from 'react-icons/ai'
import { motion, AnimatePresence} from 'framer-motion'

function Projects() {
    return ( 
        <AnimatePresence initial={false}>
            <section id='projects' className='w-10/12 py-16 md:py-24 grid grid-cols-6 gap-4 md:gap-8'>
            <h2>Projects</h2>
            { PetProjects && PetProjects.map(item=>(
                <div
                    key={item.id}
                    className="text-gray-100 col-span-6 p-4 sm:col-span-3 border border-gray-500 rounded-md hover:shadow-lg shadow-gray-800"
                >
                    
                    
                        <h3 className='text-xl font-bold pb-4'>
                            {item.name.length > 25? `${item.name.slice(0,25)}...`: item.name}
                        </h3>
                        <a href={item.demo} target="_blank">
                        <img className='w-full h-72 object-cover rounded-md saturate-50 hover:saturate-200' src={item.imageSrc} alt={item.name} />
                        </a>
                        {/* info */}
                        <div className='flex justify-between items-end py-2 md:text-lg'>
                            <div>
                                <span className='text-gray-400'>Technologies:</span>
                                <p className='text-sm'>{item.techs}</p>
                            </div>
                            <motion.a
                                whileTap={{scale: 1.5}}
                                className='hover:text-orange-300' href={item.github}
                            >
                                <AiOutlineGithub className='block w-6 h-6'/>
                            </motion.a>
                        </div>
                </div>
            ))}
        </section>
        </AnimatePresence>
        
     );
}

export default Projects;