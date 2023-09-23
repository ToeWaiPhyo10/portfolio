import React from "react";
import Layout from "./layout";
import Image from "next/image";
import profilePics from "@/images/developer-pic-1.png";
import AnimatedText from "@/components/AnimatedText";
import Link from "next/link";
import { LinkArrow } from "@/icons/LinkArrow";
import { TransitionEffect } from "@/components/TransitionEffect";
const Home = () => {
  return (
    <>
      <TransitionEffect />
      <div className="flex-1 flex flex-col items-center text-dark w-full">
        <Layout className="pt-0 md:pt-16 sm:pt-8">
          <div className="flex items-center justify-between w-full lg:flex-col">
            <div className="w-1/2 lg:w-2/3 md:w-full">
              <Image
                src={profilePics}
                alt="Profile"
                className="w-full h-auto lg:inline-block lg:w-full "
                priority
                sizes="(max-width:768px) 100vw, (max-width:1200px) 50vw,50vw"
              />
            </div>
            <div className="w-1/2 flex flex-col items-center self-center lg:w-full lg:text-center">
              <AnimatedText
                text="Hello, I am Toe Wai Phyo"
                className="!text-7xl !text-left xl:!text-5xl lg:!text-center lg:!text-6xl md:!text-5xl sm:!text-3xl"
              />
              <p className="my-4 text-base font-medium md:text-sm sm:text-xs">
                &nbsp; &nbsp; &nbsp;A full stack developer, specializing in
                React and Node.js. Get ready to explore my digital world, where
                I showcase the latest and most innovative web creations. Join me
                on this exciting journey!
              </p>
              <div className="flex items-center self-start mt-2 lg:self-center">
                <Link
                  href="/Resume Toe Wai Phyo.pdf"
                  target={"_blank"}
                  className="flex items-center bg-dark text-light p-2.5 px-6 rounded-lg text-lg font-semibold hover:bg-light hover:text-dark border-2 border-solid border-transparent hover:border-dark md:p-2 md:px-4 md:text-base"
                  download={true}
                >
                  Resume <LinkArrow className={"w-6 ml-1"} />
                </Link>
                <Link
                  href="mailto:toewaiphyo2799@gmail.com"
                  target={"_blank"}
                  className="ml-4 text-lg font-medium capitalize text-dark underline md:text-base"
                >
                  Contact
                </Link>
              </div>
            </div>
          </div>
        </Layout>
      </div>
    </>
  );
};

export default Home;
