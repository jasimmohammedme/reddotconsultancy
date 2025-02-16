"use client"
import { useEffect } from "react";
import Lenis from "lenis";
import Navbar from "@/components/Navbar";
import Landing from "@/components/Landing";
import Progress from "@/components/Progress";
import AboutAs from "@/components/AboutUs";
import LearnTheProcess from "@/components/LearnTheProcess";
import OurServices from "@/components/OurServices";
import MissionVisionValue from "@/components/MissionVisionValue";
import Testimonials from "@/components/Testimonials";
import Contact from "@/components/Contact";
import Footer from "@/components/footer";

export default function Home() {
  useEffect(() => {
    const lenis = new Lenis({
      lerp: 0.1,
      smoothWheel: true,
    });
    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);
    return () => {
      lenis.destroy();
    };
  }, []);

  return (
    <main className="px-3 sm:px-5 xl:max-w-screen-xl mx-auto font-sans h-full pb-0 relative">
      <Navbar />
      <Landing />
       <Progress /> 
      <AboutAs />
      <LearnTheProcess />
      <OurServices />
      <MissionVisionValue />
      <Testimonials />
      <Contact />
      <Footer />
    </main>
  );
}
