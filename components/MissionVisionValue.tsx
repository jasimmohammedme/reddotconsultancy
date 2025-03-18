'use client'
import { useMotionValueEvent } from 'framer-motion';
import { useTransform } from 'framer-motion';
import { useScroll } from 'framer-motion';
import { useCallback, useMemo, useRef } from 'react';

const MissionVisionValue: React.FC = () => {
   return (
      <div id='our-story' className='relative h-[550px] md:h-[550px] xl:h-[650px] w-full flex flex-col border-x border-b '>
         <div className="text-3xl font-questrial h-20 md:h-32" />
         <div className='w-full h-full flex flex-row border-t justify-end'>
            <div className='w-full md:w-2/3 h-full flex flex-col gap-3 p-10 md:p-10 lg:p-20 md:border-r border-r-0'>
               <p className='text-xl font-semibold font-questrial'>About Us.              </p>
               <p className='text-base leading-7 md:leading-7'>
                  At Red Dot Consultancy, we're focused on building lasting relationships with our clients. Our team is always responsive, ensuring you feel supported and that your needs are met. We believe that sustainable measures are the key to achieving long-term success for your brand. We will help you build your brand from the ground up, drive sales, and grow your audience.
               </p>
            </div>
            <div className='hidden md:block w-1/3 h-full'>
               <div className='w-full h-full flex flex-col gap-3 border-r'>
                  <div className='w-full h-52 flex flex-row'></div>
                  <div className='w-full h-full flex relative border-t bg-[#D0CED2] items-center justify-center overflow-hidden' >
                     <Blocks />
                     <div className='absolute w-full h-full md:block hidden'><Svg /></div>
                  </div>
               </div>
            </div>
         </div>
      </div>
   )
}

const Blocks = () => {
   const ref = useRef<HTMLCanvasElement>(null)
   const { scrollYProgress } = useScroll({
      offset: ['start end', 'end center']
   });

   const images = useMemo(() => {
      const loadedImages = [];
      for (let i = 1; i <= 90; i++) {
         if (typeof window !== 'undefined') {
            const img = new window.Image();
            img.src = `/reddot/${i}.webp`;
            loadedImages.push(img);
         }
      }
      return loadedImages;
   }, [])

   const currentIndex = useTransform(scrollYProgress, [0, 1], [1, 90], { clamp: true });

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
      <div className="relative xl:top-10 w-[250px] h-full overflow-hidden  ">
         <canvas className='absolute w-full ' width={1000} height={1800} ref={ref} >
         </canvas>
      </div>
   )
}

export default MissionVisionValue

const Svg = () => {
   return (
      <svg width="447" className='w-full h-full' height="429" viewBox="0 0 447 429" fill="none" xmlns="http://www.w3.org/2000/svg">
         <g filter="url(#filter0_f_212_2)">
            <rect width="96" height="429" transform="translate(-48 81.9895) rotate(-89.1517)" fill="#D0CED2" />
         </g>
         <g filter="url(#filter1_f_212_2)">
            <rect width="96" height="429" transform="translate(9 403.99) rotate(-89.1517)" fill="#D0CED2" />
         </g>
         <g filter="url(#filter2_f_212_2)">
            <rect width="182.856" height="449.569" transform="translate(120.711 436.984) rotate(179.504)" fill="#D0CED2" />
         </g>
         <g filter="url(#filter3_f_212_2)">
            <rect width="256.994" height="552.112" transform="translate(581.148 487.426) rotate(179.504)" fill="#D0CED2" />
         </g>
         <g filter="url(#filter4_f_212_2)">
            <rect width="96" height="429" transform="translate(267.818 -94) rotate(56.7626)" fill="#D0CED2" />
         </g>
         <g filter="url(#filter5_f_212_2)">
            <rect width="209.628" height="480.418" transform="translate(-146.255 404.473) rotate(-65.9787)" fill="#D0CED2" />
         </g>
         <g filter="url(#filter6_f_212_2)">
            <rect width="96" height="429" transform="translate(123 -8.3418) rotate(-58.2777)" fill="#D0CED2" />
         </g>
         <defs>
            <filter id="filter0_f_212_2" x="-58" y="-24" width="450.374" height="122.341" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
               <feFlood floodOpacity="0" result="BackgroundImageFix" />
               <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
               <feGaussianBlur stdDeviation="5" result="effect1_foregroundBlur_212_2" />
            </filter>
            <filter id="filter1_f_212_2" x="-1" y="298" width="450.374" height="122.341" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
               <feFlood floodOpacity="0" result="BackgroundImageFix" />
               <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
               <feGaussianBlur stdDeviation="5" result="effect1_foregroundBlur_212_2" />
            </filter>
            <filter id="filter2_f_212_2" x="-76.0313" y="-22.5679" width="206.743" height="471.135" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
               <feFlood floodOpacity="0" result="BackgroundImageFix" />
               <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
               <feGaussianBlur stdDeviation="5" result="effect1_foregroundBlur_212_2" />
            </filter>
            <filter id="filter3_f_212_2" x="309.383" y="-74.6648" width="281.766" height="574.317" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
               <feFlood floodOpacity="0" result="BackgroundImageFix" />
               <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
               <feGaussianBlur stdDeviation="5" result="effect1_foregroundBlur_212_2" />
            </filter>
            <filter id="filter4_f_212_2" x="-101" y="-104" width="431.437" height="335.434" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
               <feFlood floodOpacity="0" result="BackgroundImageFix" />
               <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
               <feGaussianBlur stdDeviation="5" result="effect1_foregroundBlur_212_2" />
            </filter>
            <filter id="filter5_f_212_2" x="-156.255" y="203" width="544.146" height="407.04" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
               <feFlood floodOpacity="0" result="BackgroundImageFix" />
               <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
               <feGaussianBlur stdDeviation="5" result="effect1_foregroundBlur_212_2" />
            </filter>
            <filter id="filter6_f_212_2" x="113" y="-100" width="435.387" height="327.228" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
               <feFlood floodOpacity="0" result="BackgroundImageFix" />
               <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
               <feGaussianBlur stdDeviation="5" result="effect1_foregroundBlur_212_2" />
            </filter>
         </defs>
      </svg>
   )
}
