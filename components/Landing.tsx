'use client'
import { useEffect, useState, useRef } from "react";
import { motion, useScroll, useSpring, useTransform } from "framer-motion";

const Landing: React.FC = () => {
    
   const { scrollYProgress } = useScroll( )
   const scale = useTransform(scrollYProgress, [0, 1], [0.75, 2.8])
   const moveY = useTransform(scrollYProgress, [0, 1], [-100, 100])

   const animatedMoveY = useSpring(moveY, { stiffness: 100, damping: 20 });

   return (
      <div   className='h-[85vh] md:h-[700px] flex items-center justify-start relative'>
         <p style={{ lineHeight: "1.15"}} className=' text-5xl 2xl:text-6xl 2xl:leading-heading font-outfit font-semibold'>
            We Help <br />
            Businesses<br />
            &nbsp;&nbsp;&nbsp;&nbsp;
            &nbsp;&nbsp;&nbsp;&nbsp;
            &nbsp;&nbsp;&nbsp;&nbsp;
            &nbsp;&nbsp;&nbsp;&nbsp;
            <span className='text-primary'>Handle </span>
            <br />
            Their Social <br /> Media.
         </p>
         <motion.div  style={{ scale: scale, y: animatedMoveY }} animate={{ scale: 0.8, rotate: 360 }} transition={{ repeat: Infinity, duration: 20, ease: "linear" }} className="absolute left-1/4 opacity-10 w-36 h-36 rounded-full  ">
            <svg className="blur-xl opacity-100 left-1/4" width="239" height="237" viewBox="0 0 239 237" fill="none" xmlns="http://www.w3.org/2000/svg">
               <motion.g animate={{ rotate: 360 }} transition={{ repeat: Infinity, duration: 5, ease: "linear" }}>
                  < circle cx="119.5" cy="119.5" r="119.5" fill="#F25E40" />
               </motion.g>
               <motion.g animate={{ rotate: -360 }} transition={{ repeat: Infinity, duration: 5, ease: "linear" }} >
                  < circle cx="57.5" cy="57.5" r="57.5" fill="#D21603" />
               </motion.g>
            </svg>
         </motion.div>
      </div>
   )
}

export default Landing

 