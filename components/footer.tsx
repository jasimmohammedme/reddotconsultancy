import React from 'react'

const Footer: React.FC = () => {
   return (
      <div className='w-full h-[100px] border-t border-x mt-20 px-5 flex gap-5 justify-between items-center'>
         <div className='flex items-center gap-3 md:gap-5'>
            <a href='mailto:reddotconsults@gmail.com' target='_blank' className='w-9 md:w-10 lg h-9 md:h-10 bg-black flex items-center justify-center border-2 border-black'>
               <svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M5.77 23.75C5.19417 23.75 4.71375 23.5575 4.32875 23.1725C3.94375 22.7875 3.75083 22.3067 3.75 21.73V8.27C3.75 7.69417 3.94292 7.21375 4.32875 6.82875C4.71458 6.44375 5.19458 6.25083 5.76875 6.25H24.2313C24.8063 6.25 25.2863 6.44292 25.6713 6.82875C26.0563 7.21458 26.2492 7.695 26.25 8.27V21.7313C26.25 22.3063 26.0571 22.7867 25.6713 23.1725C25.2854 23.5583 24.8054 23.7508 24.2313 23.75H5.77ZM15 15.145L5 8.60625V21.7313C5 21.9554 5.07208 22.1396 5.21625 22.2837C5.36042 22.4279 5.545 22.5 5.77 22.5H24.2313C24.4554 22.5 24.6396 22.4279 24.7837 22.2837C24.9279 22.1396 25 21.955 25 21.73V8.605L15 15.145ZM15 13.75L24.615 7.5H5.385L15 13.75ZM5 8.60625V7.5V21.7313C5 21.9554 5.07208 22.1396 5.21625 22.2837C5.36042 22.4279 5.545 22.5 5.77 22.5H5V8.60625Z" fill="white" />
               </svg>
            </a>
            <a href='tel:+917994821608' className='w-9 md:w-10 h-9 md:h-10 bg-black flex items-center justify-center border-2   border-black'>
               <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M19.95 21C17.8667 21 15.8083 20.546 13.775 19.638C11.7417 18.73 9.89167 17.4423 8.225 15.775C6.55833 14.1077 5.271 12.2577 4.363 10.225C3.455 8.19233 3.00067 6.134 3 4.05C3 3.75 3.1 3.5 3.3 3.3C3.5 3.1 3.75 3 4.05 3H8.1C8.33333 3 8.54167 3.07933 8.725 3.238C8.90833 3.39667 9.01667 3.584 9.05 3.8L9.7 7.3C9.73333 7.56667 9.725 7.79167 9.675 7.975C9.625 8.15833 9.53333 8.31667 9.4 8.45L6.975 10.9C7.30833 11.5167 7.704 12.1123 8.162 12.687C8.62 13.2617 9.12433 13.816 9.675 14.35C10.1917 14.8667 10.7333 15.346 11.3 15.788C11.8667 16.23 12.4667 16.634 13.1 17L15.45 14.65C15.6 14.5 15.796 14.3877 16.038 14.313C16.28 14.2383 16.5173 14.2173 16.75 14.25L20.2 14.95C20.4333 15.0167 20.625 15.1377 20.775 15.313C20.925 15.4883 21 15.684 21 15.9V19.95C21 20.25 20.9 20.5 20.7 20.7C20.5 20.9 20.25 21 19.95 21Z" fill="white" />
               </svg>
            </a>
            <a href='https://www.instagram.com/reddotconsultancy/' className='w-9 md:w-10 h-9 md:h-10 bg-black flex items-center justify-center border-2   border-black'>
               <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M2.5 12C2.5 7.522 2.5 5.282 3.891 3.891C5.282 2.5 7.521 2.5 12 2.5C16.478 2.5 18.718 2.5 20.109 3.891C21.5 5.282 21.5 7.521 21.5 12C21.5 16.478 21.5 18.718 20.109 20.109C18.718 21.5 16.479 21.5 12 21.5C7.522 21.5 5.282 21.5 3.891 20.109C2.5 18.718 2.5 16.479 2.5 12Z" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                  <path d="M17.508 6.5H17.498M16.5 12C16.5 13.1935 16.0259 14.3381 15.182 15.182C14.3381 16.0259 13.1935 16.5 12 16.5C10.8065 16.5 9.66193 16.0259 8.81802 15.182C7.97411 14.3381 7.5 13.1935 7.5 12C7.5 10.8065 7.97411 9.66193 8.81802 8.81802C9.66193 7.97411 10.8065 7.5 12 7.5C13.1935 7.5 14.3381 7.97411 15.182 8.81802C16.0259 9.66193 16.5 10.8065 16.5 12Z" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
               </svg>
            </a>
         </div>
         <p className='text-sm'>© 2025 <a href='https://www.reddotconsultancy.in' target='_blank' className='text-primary'>Red Dot Consultancy</a>. All rights reserved<span className='text-primary'>.</span></p>
      </div>
   )
}

export default Footer