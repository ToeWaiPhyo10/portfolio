"use client";
import { useRef } from "react";
import { motion, useScroll } from "framer-motion";
import ExperienceDetail from "@/components/ExperienceDetail.js";
import { experienceData } from "@/constants";
import AnimatedText from "./AnimatedText";

export const Experience = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "center start"],
  });
  return (
    <div className="my-20">
      <AnimatedText
        text="Experiences"
        className="mb-16 !text-6xl lg:!text-5xl sm:!text-4xl xl:!text-3xl sm:mb-8"
      />
      <div className="w-[80%] mx-auto relative lg:w-[90%] md:w-full">
        <motion.div
          ref={ref}
          style={{ scaleY: scrollYProgress }}
          className="absolute left-9 top-1 w-[4px] h-full bg-dark origin-top md:w-[2px] md:left-[30px] xs:left-[20px]"
        />
        <ul className="w-full flex flex-col items-start justify-between ml-4 xs:ml-2 ">
          {experienceData.map((experience) => (
            <ExperienceDetail experience={experience} key={experience.id} />
          ))}
        </ul>
      </div>
    </div>
  );
};
