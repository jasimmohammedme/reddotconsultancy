'use client'
import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

const OurServices: React.FC = () => {
   return (
      <div id='what-we-do' className='relative h-[700px] md:h-[460px] lg:h-[500px] xl:h-[500px] w-full flex flex-col border-l   md:border-x border-b '>
         <p className="text-3xl font-questrial p-5 py-7 border-r md:border-r-0">Our Services</p>
         <div className='w-full h-full flex flex-row border-y'>
            <div className='w-1/2 md:w-1/3 h-full flex flex-col gap-3 p-3 md:p-5 lg:p-10 border-r '>
               <p className='text-lg md:text-xl font-semibold font-questrial'>Social Media Management</p>
               <p className='text-sm md:text-medium'>Strategy, content posting, branding, and page growth to enhance your online presence</p>
            </div>
            <div className='w-1/2 md:w-1/3 h-full flex flex-col gap-3 p-3 md:p-5 lg:p-10 border-r'>
               <p className='text-lg md:text-xl font-semibold font-questrial'>Content Creation</p>
               <p className='text-sm md:text-medium'>High-quality photography, videography, and engaging blog writing to captivate your audience.</p>
            </div>
            <div className='md:block hidden w-1/3 h-full'>
               <div className='w-full h-full flex flex-col gap-3 p-3 md:p-5 lg:p-10  '>
                  <p className='text-base md:text-lg lg:text-xl font-semibold font-questrial'>Graphic & Web Design</p>
                  <p className='text-sm md:text-medium'>Stunning visuals, websites, and branding elements to establish a strong digital identity.</p>
               </div>
            </div>
         </div>
         <div className='w-full h-full flex flex-row'>
            <div className='w-1/2 md:w-1/3 h-full flex flex-col gap-3 p-3 md:p-5 lg:p-10 border-b md:border-b-0 border-r'>
               <p className='text-base md:text-lg lg:text-xl font-semibold font-questrial'>Advertising & Lead Generation</p>
               <p className='text-sm md:text-medium'>Targeted Facebook and Instagram ads to drive traffic and maximize conversions.</p>
            </div>
            <div className='w-1/2 md:w-1/3 h-full flex flex-col gap-3 p-3 md:p-5 lg:p-10 border-b md:border-b-0 border-r '>
               <p className='text-base md:text-lg lg:text-xl font-semibold font-questrial'>Post-Production & Copywriting</p>
               <p className='text-sm md:text-medium'> Polished editing, compelling copy, and refined messaging for impactful storytelling.</p>
            </div>
            <div className='md:block hidden w-1/3 h-full relative'>
               <div className='w-full h-full flex flex-col gap-3 p-3 md:p-5 lg:p-10  '>
                  <p className='text-base md:text-lg lg:text-xl font-semibold font-questrial'>Growth & Analytics</p>
                  <p className='text-sm md:text-medium'>Performance tracking and data-driven insights to optimize strategy and ensure success.</p>
               </div>
               <div className='absolute bottom-0 right-0'><GridAnimation /></div>
            </div>
         </div>
         <div className='w-full h-full md:hidden block '>
            <div className='w-full h-full flex flex-row'>
               <div className='w-1/2 h-full flex flex-col gap-3 p-3 md:p-5 lg:p-10 border-r'>
                  <p className='text-base md:text-lg lg:text-xl font-semibold font-questrial'>Growth & Analytics</p>
                  <p className='text-sm md:text-medium'>Performance tracking and data-driven insights to optimize strategy and ensure success.</p>
               </div>
               <div className='w-1/2 h-full flex flex-col gap-3 p-3 md:p-5 lg:p-10 border-r'>
                  <p className='text-base md:text-lg lg:text-xl font-semibold font-questrial'>Graphic & Web Design</p>
                  <p className='text-sm md:text-medium'>Stunning visuals, websites, and branding elements to establish a strong digital identity.</p>
               </div>
            </div>
         </div>
      </div>
   )
}

export default OurServices

const GridAnimation = () => {
   const containerRef = useRef(null);
   const { scrollYProgress } = useScroll({ target: containerRef, offset: ["start end", "end start"] });

   const opacityOne = useTransform(scrollYProgress, [0.2, 0.23, 0.26, 0.3, 0.4], [0, 1, 0, 1, 1]);
   const opacityTwo = useTransform(scrollYProgress, [0.2, 0.23, 0.26, 0.3, 0.4], [0, 0.5, 0, 0.5, 0.5]);
   const opacityThree = useTransform(scrollYProgress, [0.2, 0.23, 0.26, 0.3, 0.4], [0.5, 0, 0.5, 0, 0]);
   const opacityFour = useTransform(scrollYProgress, [0, 0.4], [0.5, 1]);
   const opacityFive = useTransform(scrollYProgress, [0, 0.4], [0.5, 1]);
   const opacitySix = useTransform(scrollYProgress, [0, 0.4], [0.5, 1]);

   return (
      <div ref={containerRef} className=' flex flex-col  '>
         <div className="flex flex-row">
            <motion.div style={{ opacity: opacityThree }} className='w-8 h-8 flex flex-col gap-3 bg-primary'></motion.div>
            <motion.div style={{ opacity: opacityThree }} className='w-8 h-8 flex flex-col gap-3 bg-primary'></motion.div>
            <motion.div style={{ opacity: opacityOne }} className='w-8 h-8 flex flex-col gap-3 bg-primary'></motion.div>
         </div>
         <div className="flex flex-row">
            <motion.div style={{ opacity: opacityThree }} className='w-8 h-8 flex flex-col gap-3 bg-primary'></motion.div>
            <motion.div style={{ opacity: opacityOne }} className='w-8 h-8 flex flex-col gap-3 bg-primary'></motion.div>
            <motion.div style={{ opacity: opacityTwo }} className='w-8 h-8 flex flex-col gap-3 bg-primary  '></motion.div>
            <motion.div style={{ opacity: opacityThree }} className='w-8 h-8 flex flex-col gap-3 bg-primary'></motion.div>
            <motion.div style={{ opacity: opacityFour }} className='w-8 h-8 flex flex-col gap-3 bg-primary'></motion.div>
            <motion.div style={{ opacity: opacityOne }} className='w-8 h-8 flex flex-col gap-3 bg-primary'></motion.div>
         </div>
         <div className="flex flex-row">
            <motion.div style={{ opacity: opacityOne }} className='w-8 h-8 flex flex-col gap-3 bg-primary'></motion.div>
            <motion.div style={{ opacity: opacityThree }} className='w-8 h-8 flex flex-col gap-3 bg-primary'></motion.div>
            <motion.div style={{ opacity: opacityThree }} className='w-8 h-8 flex flex-col gap-3 bg-primary'></motion.div>
            <motion.div style={{ opacity: opacityOne }} className='w-8 h-8 flex flex-col gap-3 bg-primary'></motion.div>
            <motion.div style={{ opacity: opacityTwo }} className='w-8 h-8 flex flex-col gap-3 bg-primary  '></motion.div>
            <motion.div style={{ opacity: opacityThree }} className='w-8 h-8 flex flex-col gap-3 bg-primary'></motion.div>
         </div>
      </div>
   )
}
