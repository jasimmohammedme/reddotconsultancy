import React from 'react'
import { motion } from 'framer-motion'
import Image from 'next/image'

const Navbar = () => {
   return (
      <motion.div initial={{ opacity: 0.5, y: -100 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 1.5 }} className='fixed top-0 left-0 w-full z-50 border-b backdrop-blur-3xl bg-[#f4f3ef86]'>
         <div className="pr-5 max-w-screen-xl mx-auto h-16 flex items-center justify-between ">
            <Image 
              src="/logo.svg"
              width={170}
              height={80}
              alt="Logo"
            />
            <div className='flex items-center gap-3 md:gap-7'>
               <a href='#our-story' className='font-questrial '><p className='text-base md:text-base '> About</p></a>
               <a href='#what-we-do' className='font-questrial '><p className='text-base md:text-base '>Services </p></a>
               <a href='#connect' className='font-questrial '><p className='text-base md:text-base '>Connect </p></a> 
            </div>
         </div>
      </motion.div>
   )
}

export default Navbar