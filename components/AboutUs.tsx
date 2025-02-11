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
         <div className="absolute left-1/2 -translate-x-1/2 w-[300px] md:w-[440px]  xl:w-[500px] h-full -top-5 font-inter text:sm sm:text-medium md:text-lg xl:text-xl">
            <TextOpacityOnScroll contain={contain} phrase="We specialize in helping businesses manage, grow, and thrive on social media with expert strategies and engaging content. Our goal is to simplify digital marketing for businesses, ensuring consistent growth and brand recognition." />
         </div>
      </div>
   );
}

const Button = () => {
   return (
      <Link href="#connect" className="w-full h-8 md:h-10 absolute z-10 border-y bottom-16 lg:bottom-18 xl:bottom-24 flex justify-between items-center">
         <p className="w-full text-[10px] md:text-sm lg:text-base text-center font-inter text-gray-600">Contact Now</p>
         <div className="w-6 h-8 lg:w-10 lg:h-10 bg-[#030303] flex items-center justify-center">
            <svg className='w-4 h-4 lg:w-6 lg:h-6' width="16" height="23" viewBox="0 0 16 23" fill="none" xmlns="http://www.w3.org/2000/svg">
               <path d="M1 1L15 11.7234L1 22" stroke="#F4F3EF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
         </div>
      </Link>
   );
};

export default AboutUs;
