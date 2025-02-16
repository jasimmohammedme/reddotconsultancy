'use client'
import { useMotionValueEvent, useScroll, useTransform ,motion, useSpring} from 'framer-motion'
import React, { useCallback, useRef } from 'react'

const LearnTheProcess: React.FC = () => {
   return (
      <div className='relative h-[800px] md:h-[500px] lg:h-[600px] xl:h-[600px] w-full border-x border-b'>
         <p className="text-3xl font-questrial p-5 py-8">Our   process<span className='text-primary'>.</span></p>
         <div className="flex flex-col md:flex-row gap-4 md:gap-6 h-[300px] lg:h-[390px]">
            <div className="w-full md:w-[45%] h-[300px]  md:h-full bg-[#DDDACB] flex flex-row justify-end border-y md:border">
               <div className='flex flex-col w-1/2 h-[270px] p-3 sm:p-4 lg:p-5 gap-1 sm:gap-3'>
                  <p className='text-lg md:text-xl font-semibold font-questrial'>Strategy & Planning</p>
                  <p className='text-xs md:text-sm lg:text-base'>
                  We begin with a deep dive into your business, goals, and target audience through a discovery call. Our team conducts a thorough competitor analysis to identify opportunities and create a data-driven social media strategy tailored to your brand.

                  </p>
               </div>
               <StepOne />
            </div>
            <div className='w-full md:w-[55%] h-[300px] md:h-full flex gap-4  md:gap-6  '>
               <div className="flex flex-col w-1/2 h-full bg-[#D2CFC9] p-4 lg:p-5 gap-3 ">
                  <p className='text-lg md:text-xl font-semibold font-questrial lg:leading-9'>Execution & <br /> Content Creation</p>
                     <p className='text-xs md:text-sm lg:text-base'>
                     With a clear strategy in place, we bring your brand to life by designing high-quality content, ad campaigns, and branding elements. 
                  </p>
               </div>
               <div className="relative w-1/2 h-[300px] md:h-full bg-[#D2CFC9] overflow-hidden"><SvgGraph />
                  <div className='absolute bottom-0 md:bottom-2 flex flex-col  p-4 lg:p-5 gap-3 z-10'>
                     <p className='text-lg md:text-xl font-semibold font-questrial'>Optimization & Growth</p>
                     <p className='text-xs md:text-sm lg:text-base'>
                     We continuously monitor performance, analyze key metrics, and refine strategies to improve engagement and conversions.</p>
                  </div>
                  <svg className="absolute -bottom-20 md:bottom-0 w-full " width="337" height="234" viewBox="0 0 337 234" fill="none" xmlns="http://www.w3.org/2000/svg">
                     <rect width="346" height="234" transform="translate(-5)" fill="url(#paint0_linear_19_12)" />
                     <defs>
                        <linearGradient id="paint0_linear_19_12" x1="176.5" y1="67.5" x2="178.967" y2="341.929" gradientUnits="userSpaceOnUse">
                           <stop stopColor="#D2CFC9" stopOpacity="0" />
                           <stop offset="0.152381" stopColor="#D2CFC9" />
                        </linearGradient>
                     </defs>
                  </svg>

               </div>
            </div>
         </div>
      </div>
   )
}

const StepOne = () => {
   const ref = useRef<HTMLCanvasElement>(null)
   const { scrollYProgress } = useScroll({
      offset: ['start end', 'end center']
   });

   const [images, setImages] = React.useState<HTMLImageElement[]>([]);

   React.useEffect(() => {
      const loadedImages: HTMLImageElement[] = [];
      for (let i = 1; i <= 200; i++) {
         const img = new Image();
         img.src = `/script/${i}.webp`;
         loadedImages.push(img);
      }
      setImages(loadedImages);
   }, []);

   const currentIndex = useTransform(scrollYProgress, [0, 1], [1, 200], { clamp: true });

   const render = useCallback((index: number) => {
      if (images[index - 1]) {
         ref.current?.getContext('2d')?.drawImage(images[index - 1], 0, 0);
      }
   }, [images])

   useMotionValueEvent(currentIndex, 'change',
      (latest) => {
         render(Number(latest.toFixed()))
      }
   )
   return (
      <div className="relative w-1/2 h-full overflow-hidden">
         <canvas className='absolute -top-14 left-2 md:left-4 lg:left-5 h-[350px]  md:h-[500px]' width={1000} height={1800} ref={ref} />
      </div>
   )
}


const SvgGraph = () => {
   const ref = useRef<HTMLCanvasElement>(null)
   const { scrollYProgress } = useScroll({
      offset: ['start end', 'end center']
   });
   

   const path  = useTransform(scrollYProgress, [0, 0.5], [0, 1],);
   const pathTwo  = useTransform(scrollYProgress, [0, 0.5], [0, 1],);
   const pathLength = useSpring(pathTwo, { stiffness: 100, damping: 190 });

   return (
      <motion.svg className='absolute w-full h-full -top-24 md:-top-20 xl:-top-16 ' width="327" height="245" viewBox="0 0 327 245" fill="none" xmlns="http://www.w3.org/2000/svg">
         <line y1="65" x2="327.002" y2="75" stroke="#DFDBD5" />
         <line x1="0.000976562" y1="136.5" x2="327.001" y2="137.5" stroke="#DFDBD5" />
         <line x1="0.000976562" y1="207.5" x2="327.001" y2="208.5" stroke="#DFDBD5" />
         <line x1="163.501" x2="162.501" y2="245" stroke="#DFDBD5" />
         <line x1="220.501" x2="219.501" y2="245" stroke="#DFDBD5" />
         <line x1="277.501" x2="276.501" y2="245" stroke="#DFDBD5" />
         <line x1="106.501" x2="105.501" y2="245" stroke="#DFDBD5" />
         <line x1="49.501" x2="48.501" y2="245" stroke="#DFDBD5" />
         <motion.path initial={{ pathLength: 0 }} style={{ pathLength: path }}   d="M49.5 126.5L106 105L163 181L220.5 162L276 105L293 75.5" stroke="#969595" />
         <motion.path initial={{ pathLength: 0 }} style={{ pathLength: pathTwo }} d="M49 208L114.87 132.5L140 143.5L159.26 102.5H177L197 75L231.5 102.5L294.029 32" stroke="#EC1704" />
      </motion.svg>
   )
}
export default LearnTheProcess