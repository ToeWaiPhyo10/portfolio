"use client";
import React, { useRef } from "react";
import ExperienceDetail from "./ExperienceDetail";
import { motion, useScroll } from "framer-motion";
import { educationData } from "@/constants";

const Education = () => {
  const eduRef = useRef();
  const { scrollYProgress } = useScroll({
    target: eduRef,
    offset: ["start end", "center start"],
  });
  return (
    <div className="my-40">
      <h2 className="font-bold mb-16 w-full text-center !text-6xl lg:!text-5xl sm:!text-4xl xl:!text-3xl md:mb-8">
        Education
      </h2>
      <div className="w-[80%] mx-auto relative lg:w-[90%] md:w-full">
        <motion.div
          ref={eduRef}
          style={{ scaleY: scrollYProgress }}
          className="absolute left-9 top-1 w-[4px] h-full bg-dark origin-top md:w-[2px] md:left-[30px] xs:left-[20px]"
        />
        <ul className="w-full flex flex-col items-start justify-between ml-4 xs:ml-2 ">
          <ExperienceDetail experience={educationData} key={educationData.id} />
        </ul>
      </div>
    </div>
  );
};

export default Education;
