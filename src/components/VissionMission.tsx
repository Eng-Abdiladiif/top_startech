"use client";
import React, { useEffect } from "react";
import { StickyScroll } from "../components/ui/sticky-scroll-reveal";
import   Aos   from "aos"
import   "aos/dist/aos.css"
const content = [
  {
    title: "Our Vission",
    description:
      "At Top Star Tech, our vision is to empower seamless collaboration between teams, clients, and stakeholders in real time. We aim to simplify workflows, spark innovation, and drive faster decision-making through a unified platform. By combining smart technology with intuitive design, we help businesses boost productivity and achieve their goals with confidence",
    content: (
      <div className="flex h-full w-full items-center justify-center bg-[linear-gradient(to_bottom_right,var(--cyan-500),var(--emerald-500))] text-white">
        Our Vission
      </div>
    ),
  },

  {
    title: "Our Missiob",
    description:
      "Our mission at Top Star Tech is to deliver innovative digital solutions that enable real-time collaboration between teams, clients, and stakeholders. We are committed to streamlining workflows, enhancing productivity, and driving smarter decision-making through user-friendly technology and intelligent design.",
    content: (
      <div className="flex h-full w-full items-center justify-center bg-[linear-gradient(to_bottom_right,var(--cyan-500),var(--emerald-500))] text-white">
        Our Mission
      </div>
    ),
  },
  
];
function VissionMission() {


  useEffect(()  => {


    Aos.init({duration:3000})
  })
  return (
    <div className="w-full py-4"
    data-aos = "fade-up">
      <StickyScroll content={content} />
    </div>
  );
}

export  default VissionMission