'use client'
import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

const OurServices: React.FC = () => {
   return (
      <div id='what-we-do' className='relative h-[700px] md:h-[500px] lg:h-[540px] xl:h-[520px] w-full flex flex-col border-l   md:border-x border-b '>
         <p className="text-3xl font-questrial p-5 py-7 border-r md:border-r-0">Our Services</p>
         <div className='w-full h-full flex flex-row border-y'>
            <div className='w-1/2 md:w-1/3 h-full flex flex-col gap-3 p-3 md:p-5 lg:p-10 border-r '>
               <p className='text-lg md:text-xl font-semibold font-questrial'>Social Media Management </p>
               <p className='text-sm md:text-medium'>We provide expert social media consulting, including strategy development, content posting, branding, and page growth. </p>
            </div>
            <div className='w-1/2 md:w-1/3 h-full flex flex-col gap-3 p-3 md:p-5 lg:p-10 border-r'>
               <p className='text-lg md:text-xl font-semibold font-questrial'>Paid Advertising &  Lead Generation  </p>
               <p className='text-sm md:text-medium'>We help businesses grow by creating targeted ad campaigns that drive engagement, attract quality leads, and maximize conversions. </p>
            </div>
            <div className='md:block hidden w-1/3 h-full'>
               <div className='w-full h-full flex flex-col gap-3 p-3 md:p-5 lg:p-10  '>
                  <p className='text-base md:text-lg lg:text-xl font-semibold font-questrial'>Content Creation </p>
                  <p className='text-sm md:text-medium'>We provide full-service content creation, including photography, videography, graphic design, video editing, and photo editing. </p>
               </div>
            </div>
         </div>
         <div className='w-full h-full flex flex-row'>
            <div className='w-1/2 md:w-1/3 h-full flex flex-col gap-3 p-3 md:p-5 lg:p-10 border-b md:border-b-0 border-r'>
               <p className='text-base md:text-lg lg:text-xl font-semibold font-questrial'>Branding & Design </p>
               <p className='text-sm md:text-medium'>We provide complete graphic design and branding services, including logos, brochures, social media graphics, visiting cards, billboards, and merchandise designs. </p>
            </div>
            <div className='w-1/2 md:w-1/3 h-full flex flex-col gap-3 p-3 md:p-5 lg:p-10 border-b md:border-b-0 border-r '>
               <p className='text-base md:text-lg lg:text-xl font-semibold font-questrial'>Web Design </p>
               <p className='text-sm md:text-medium'>We design and develop responsive and professional websites that enhance your brand and drive conversions.</p>
            </div>
            <div className='md:block hidden w-1/3 h-full relative'>
               <div className='w-full h-full flex flex-col gap-3 p-3 md:p-5 lg:p-10  '>
                  <p className='text-base md:text-lg lg:text-xl font-semibold font-questrial'> </p>
                  <p className='text-sm md:text-medium'> </p>
               </div>
               <div className='absolute bottom-0 right-0'><GridAnimation /></div>
            </div>
         </div>
         <div className='w-full h-full md:hidden block '>
            <div className='w-full h-full flex flex-row'>
               <div className='w-1/2 h-full flex flex-col gap-3 p-3 md:p-5 lg:p-10 border-r'>
                  <p className='text-base md:text-lg lg:text-xl font-semibold font-questrial'>Content Creation </p>
                  <p className='text-sm md:text-medium'>We provide full-service content creation, including photography, videography, graphic design, video editing, and photo editing.</p>
               </div>
               <div className='w-1/2 h-full flex flex-col gap-3 p-3 md:p-5 lg:p-10 border-r'>
                  <p className='text-base md:text-lg lg:text-xl font-semibold font-questrial'> </p>
                  <p className='text-sm md:text-medium'> </p>
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
