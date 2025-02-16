"use client"
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Autoplay, Navigation } from "swiper/modules";
import testimonialData from "@/data/testimonialData";
import Image from "next/image";

const Testimonials: React.FC = () => {
   const data = testimonialData;
   return (
      <div className='relative flex flex-col border-l border-b'>
         <div className='w-full h-full flex flex-row border-r'>
            <p className="w-5/6 text-3xl font-questrial p-5 py-7 ">What Our Clients Have to Say</p>
            <div className="w-1/6  flex gap-2 items-end">
               <div className="w-full h-10 border-t flex justify-between items-center">
                  <button className="custom-prev w-12 h-10 bg-[#030303] flex items-center justify-center">
                     <svg width="16" height="23" viewBox="0 0 16 23" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M15 22L1 11.2766L15 1" stroke="#F4F3EF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                     </svg>
                  </button>
                  <button className="custom-next w-12 h-10 bg-[#030303] flex items-center justify-center">
                     <svg width="16" height="23" viewBox="0 0 16 23" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M1 1L15 11.7234L1 22" stroke="#F4F3EF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                     </svg>
                  </button>
               </div>
            </div>
         </div>
         <div className='w-full h-[450px] md:h-[600px] flex flex-row border-t'>
            <Swiper
               loop={true}
               spaceBetween={20}
               autoplay={{
                  delay: 2500,
                  disableOnInteraction: false,
               }}
               navigation={{
                  nextEl: ".custom-next",
                  prevEl: ".custom-prev",
               }}
               breakpoints={{
                  1280: { slidesPerView: 6, spaceBetween: 0 },
                  1026: { slidesPerView: 6, spaceBetween: 0 },
                  760: { slidesPerView: 4, spaceBetween: 0 },
                  300: { slidesPerView: 2, spaceBetween: 0 },
               }}
               autoHeight={true}
               modules={[Navigation, Autoplay]}
            >
               {data.map((item, idx) => {
                  return (
                     <SwiperSlide key={idx}>
                        <div className='w-full h-[450px] md:h-[600px] flex flex-col gap-5 p-3 border-r pt-10 md:pt-15 lg:pt-20'>
                           <p className="text-xs font-sans hidden">December 22 - 2022</p>
                           <div className="flex items-center gap-2">

                              <Image
                                 src={`/testimonials/${item?.image}`}
                                 width={40}
                                 height={40}
                                 alt="login"

                                 className="w-10 h-10 rounded-full border"

                              />
                              <div className="flex flex-col gap-1">
                                 <p className="text-xs font-sans">{item?.author}</p>
                                 <p className='text-sm font-semibold font-questrial'>{item?.title}</p>
                              </div>
                           </div>
                           <p className="text-xs font-sans md:text-sm h-full ">{item?.description}</p>
                        </div>
                     </SwiperSlide>
                  );
               })}
            </Swiper>
         </div>
      </div>
   );
};

export default Testimonials;