import { TransitionEffect } from "@/components/TransitionEffect";
import React from "react";
import AppLayout from "../../components/AppLayout";
import AnimatedText from "@/components/AnimatedText";
import { Experience } from "@/components/Experience";
import { Biography } from "@/components/Biography";
import Education from "@/components/Education";
import Skills from "@/components/Skills";

const About = () => {
  return (
    <>
      <TransitionEffect />
      <div className="flex-1 flex flex-col items-center">
        <AppLayout className="pt-16">
          <AnimatedText
            text="About Me"
            className="mb-16 !text-6xl lg:!text-5xl sm:!text-4xl xl:!text-3xl sm:mb-8"
          />
          <Biography />
          <Skills />
          <Experience />
          <Education />
        </AppLayout>
      </div>
    </>
  );
};

export default About;
