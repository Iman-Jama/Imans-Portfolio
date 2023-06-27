import React from 'react';
import { Tilt } from 'react-tilt';
import { motion } from 'framer-motion';
import { styles } from '../styles';
import { services } from '../constants/index';
import {fadeIn, textVariant} from '../utils/motion';


const ServiceCard =({index, title, icon}) => {
  return (
    <Tilt className="xs:w-[250px] w-full">
      <motion.div
      variants={fadeIn("right", "spring", 0.5 *index, 0.75)}
      className='w-full bg-gradient-to-r from-indigo-500 via-10% via-sky-500 via-30% to-pink-500 via-90% p-[1px] rounded-[20px] shadow-card'
      >
        <div
          options={{
            max: 45,
            scale: 1,
            speed: 450,
          }}
          className='bg-rose-950 rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col'
        >
          <img src={icon} alt={title} className='w-16 h-16 object-contain' />
          <h3 className='text-white text-[20px] font-bold text-center'>{title}</h3>

        </div>

      </motion.div>

    </Tilt>
   
  )
} 

const About = () => {
  return (
    <>
    <motion.div>
      <p className= {styles.sectionSubText}>Introduction</p>
      <h2 className= {styles.sectionHeadText}>About Me</h2>
    </motion.div>
    <motion.p
    variants={fadeIn("","",0.1,1)}
    className="mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]"
    >As a medical doctor with a background in psychiatry and a new focus on full-stack development, I bring a unique skill set and perspective to the tech industry. Currently studying full stack web development at the University of Birmingham coding bootcamp and am passionate about solving complex problems and delivering innovative solutions with a focus on mobile-first development.
    </motion.p>
    
    <div className='mt-20 flex flex-wrap gap-10'>
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service} />
        ))}
      </div>
    </>
  )
}

export default About;