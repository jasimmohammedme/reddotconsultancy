"use client";
import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";

const Loading: React.FC<{
   children: React.ReactNode;
}> = ({ children }) => {
   const [isLoading, setIsLoading] = useState(true);

   useEffect(() => {
      const timer = setTimeout(() => setIsLoading(false), 1500); //1500
      return () => clearTimeout(timer);
   }, []);

   return (
      <div className={`relative ${isLoading && "h-screen overflow-hidden"}`}>
         {isLoading && (
            <motion.div className="absolute inset-0 z-50 h-screen flex items-center justify-center ">
               <motion.div initial={{ scale: 0.75 }} animate={{ scale: 0.8, rotate: 360 }} transition={{ repeat: Infinity, duration: 5, ease: "linear" }} className="blur-[1px] w-36 h-36 rounded-full overflow-hidden">
                  <svg className="blur-xl" width="239" height="237" viewBox="0 0 239 237" fill="none" xmlns="http://www.w3.org/2000/svg">
                     <motion.g animate={{ rotate: 360 }} transition={{ repeat: Infinity, duration: 5, ease: "linear" }}>
                        < circle cx="119.5" cy="119.5" r="119.5" fill="#F25E40" />
                     </motion.g>
                     <motion.g animate={{ rotate: -360 }} transition={{ repeat: Infinity, duration: 5, ease: "linear" }} >
                        < circle cx="57.5" cy="57.5" r="57.5" fill="#D21603" />
                     </motion.g>
                  </svg>
               </motion.div>
            </motion.div>
         )}
         <div className={`${isLoading ? "opacity-0" : "opacity-100"} transition-opacity duration-500`}>
            {children}
         </div>
      </div>
   );
};

export default Loading;