import { TransitionEffect } from "@/components/TransitionEffect";
import React from "react";
import Layout from "../home/layout";
import AnimatedText from "@/components/AnimatedText";
import { Experience } from "@/components/Experience";
import { Biography } from "@/components/Biography";

const About = () => {
  return (
    <>
      <TransitionEffect />
      <div className="flex-1 flex flex-col items-center">
        <Layout className="pt-16">
          <AnimatedText
            text="About"
            className="mb-16 lg:!text-7xl sm:!text-6xl xl:!text-4xl sm:mb-8"
          />
          <Biography />
          <Experience />
        </Layout>
      </div>
    </>
  );
};

export default About;
