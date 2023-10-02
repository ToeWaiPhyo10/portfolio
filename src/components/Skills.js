import React from "react";
import AnimatedProgressBar from "./AnimatedProgressBar";
import { SkillsData } from "@/constants";
import AnimatedText from "./AnimatedText";

const Skills = () => {
  return (
    <div className="my-20">
      <AnimatedText
        text="Skills"
        className="mb-16 !text-6xl lg:!text-5xl sm:!text-4xl xl:!text-3xl sm:mb-8"
      />
      <div className="grid w-full grid-cols-8 gap-16 sm:gap-8">
        {SkillsData.map((skill, index) => (
          <div
            className="col-span-4 flex flex-col items-start justify-start md:col-span-8"
            key={index}
          >
            <AnimatedProgressBar
              progress={skill.progress}
              skill={skill.skill}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Skills;
