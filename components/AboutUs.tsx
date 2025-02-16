'use client';
import { useRef } from 'react';
import TextOpacityOnScroll from './TextOnScroll';
import Link from 'next/link';

const AboutUs: React.FC = () => {
   const contain = useRef<HTMLDivElement>(null) as React.RefObject<HTMLDivElement>;

   return (
      <div id='our-story' ref={contain} className="relative h-[400px] xl:h-[500px] w-full flex border-x border-b">
         <div className="w-1/6 md:block hidden h-full" />
         <div className="w-1/4 md:w-1/6 h-full border-x" />
         <div className="w-1/4 md:w-1/6 h-full" />
         <div className="w-1/4 md:w-1/6 h-full relative border-x">
            <Button />
         </div>
         <div className="w-1/6 md:block hidden h-full border-r" />
         <div className="absolute z-10 left-1/2 -translate-x-1/2 w-[300px] md:w-[440px]  xl:w-[520px] 2xl:w-[600px]  h-full -top-5 font-inter text:sm sm:text-medium md:text-lg xl:text-[1.3rem] 2xl:text-[1.35rem]">
            <TextOpacityOnScroll contain={contain} phrase="We specialize in growing brands, building strong social media presence, reaching the right audience, and driving sales. Client-first, responsive, and long-term focused mindset drives us to deliver sustainable and impactful solutions," />
         </div>
         <svg className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-0 w-full h-full' width="1094" height="299" viewBox="0 0 1094 299" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect width="1094" height="299" fill="url(#paint0_radial_257_3)" />
            <defs>
               <radialGradient id="paint0_radial_257_3" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(547 149.5) scale(547 149.5)">
                  <stop stopColor="#F4F3EF" />
                  <stop offset="1" stopColor="#F4F3EF" stopOpacity="0" />
               </radialGradient>
            </defs>
         </svg>

      </div>
   );
}

const Button = () => {
   return (
      <Link href='#connect' className="w-full bg-[#030303] h-7 md:h-11 absolute z-40 border-y bottom-16 lg:bottom-18 xl:bottom-24">
         <div className="h-full w-full flex justify-center px-0 gap-1 md:gap-4 items-center">

         <p className=" text-[10px] md:text-md lg:text-base text-center font-inter text-white"><span className='block md:hidden'>Contact</span> <span className='hidden md:block'> Contact Now</span></p>
            <svg className='w-3 h-3 lg:w-4 lg:h-4' width="16" height="23" viewBox="0 0 16 23" fill="none" xmlns="http://www.w3.org/2000/svg">
               <path d="M1 1L15 11.7234L1 22" stroke="#F4F3EF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
         </div>
      </Link>
   );
};

export default AboutUs;
