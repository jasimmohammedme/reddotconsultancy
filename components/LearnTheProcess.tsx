'use client'
import { useMotionValueEvent, useScroll, useTransform } from 'framer-motion'
import React, { useCallback, useRef } from 'react'

const LearnTheProcess: React.FC = () => {
   return (
      <div className='relative h-[800px] md:h-[500px] lg:h-[600px] xl:h-[600px] w-full border-x border-b'>
         <p className="text-3xl font-questrial p-5 py-8">Learn the <br /> process<span className='text-primary'>.</span></p>
         <div className="flex flex-col md:flex-row gap-4 md:gap-6 h-[300px] lg:h-[390px]">
            <div className="w-full md:w-[45%] h-[270px] md:h-full bg-[#DDDACB] flex flex-row justify-end border-y md:border">
               <div className='flex flex-col w-1/2 p-4 lg:p-5 gap-3'>
                  <p className='text-lg md:text-xl font-semibold font-questrial'>Impactful Strategy Design</p>
                  <p className='text-sm md:text-medium'>
                     We craft a tailored social media strategy by analyzing your business, audience, and trends, ensuring a strong brand voice and engagement.
                  </p>
               </div>
               <StepOne />
            </div>
            <div className='w-full md:w-[55%] h-[300px] md:h-full flex gap-4  md:gap-6  '>
               <div className="flex flex-col w-1/2 h-full bg-[#D2CFC9] p-4 lg:p-5 gap-3 ">
                  <p className='text-lg md:text-xl font-semibold font-questrial lg:leading-9'>Maximizing Execution <br /> Efficiency</p>
                  <p className='text-sm md:text-medium'>
                     From content creation to scheduling, we streamline social media execution using automation, influencer collaborations, and paid promotions, ensuring consistent visibility.
                  </p>
               </div>
               <div className="relative w-1/2 h-[300px] md:h-full bg-[#D2CFC9] overflow-hidden"><StepTwo />
                  <div className='absolute bottom-0 md:bottom-2 flex flex-col  p-4 lg:p-5 gap-3 z-10'>
                     <p className='text-lg md:text-xl font-semibold font-questrial'>Core Functionality Marking</p>
                     <p className='text-sm md:text-medium'>
                        We track interactions, identify trends, and optimize strategies to boost engagement and drive quality leads.</p>
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

const StepTwo = () => {
   const ref = useRef<HTMLCanvasElement>(null)
   const { scrollYProgress } = useScroll({
      offset: ['start end', 'end center']
   });

   const [images, setImages] = React.useState<HTMLImageElement[]>([]);

   React.useEffect(() => {
      const loadedImages: HTMLImageElement[] = [];
      for (let i = 1; i <= 121; i++) {
         const img = new Image();
         img.src = `/frame/${i}.webp`;
         loadedImages.push(img);
      }
      setImages(loadedImages);
   }, []);

   const currentIndex = useTransform(scrollYProgress, [0, 1], [1, 121], { clamp: true });

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
      <div className="relative w-full h-full overflow-hidden ">
         <canvas className='absolute lg:-top-20 w-full ' width={1000} height={1800} ref={ref} />
      </div>
   )
}


export default LearnTheProcess