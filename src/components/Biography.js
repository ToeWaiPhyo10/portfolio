import Image from "next/image";
import React from "react";
import { AnimatedNumber } from "./AnimatedNumber";
import profilePics from "@/images/IMG_8186.png";

export const Biography = () => {
  return (
    <div className="grid w-full grid-cols-8 gap-16 sm:gap-8">
      <div className="col-span-3 flex flex-col items-start justify-start xl:col-span-4 md:order-2 md:col-span-8">
        <h2 className="mb-4 text-lg font-bold uppercase text-dark/75">
          Biography
        </h2>
        <p className="font-medium">
          Hi, I am CodeBucks, a web developer and UI/UX designer with a passion
          for creating beautiful, functional, and user-centered digital
          experiences. With 4 years of experience in the field. I am always
          looking for new and innovative ways to bring my clients visions to
          life.
        </p>
        <p className="my-4 font-medium">
          I believe that design is about more than just making things look
          pretty – it is about solving problems and creating intuitive,
          enjoyable experiences for users.
        </p>
        <p className="font-medium">
          Whether I am working on a website, mobile app, or other digital
          product, I bring my commitment to design excellence and user-centered
          thinking to every project I work on. I look forward to the opportunity
          to bring my skills and passion to your next project.
        </p>
      </div>
      <div
        className="col-span-3 relative h-max rounded-2xl border-2 border-solid border-dark
            bg-light p-8 xl:col-span-4 md:order-1 md:col-span-8"
      >
        <div className="absolute top-0 -right-3 -z-10 w-[102%] h-[103%] rounded-[2rem] bg-dark" />
        <Image
          src={profilePics}
          alt="ToeWaiPhyo"
          className="w-full h-auto rounded-2xl bg-dark/80"
        />
      </div>
      <div className="col-span-2 flex flex-col item-end justify-between xl:col-span-8 xl:flex-row xl:items-center md:order-3">
        <div className="flex flex-col items-end justify-center xl:items-center">
          <span className="inline-block text-7xl font-bold md:text-6xl sm:text-5xl xs:text-4xl">
            <AnimatedNumber value={50} /> +
          </span>
          <h2 className="text-xl font-medium capitalize text-dark/75 xl:items-center md:text-lg sm:text-base xs:text-sm">
            satisfied client
          </h2>
        </div>
        <div className="flex flex-col items-end justify-center xl:items-center">
          <span className="inline-block text-7xl font-bold md:text-6xl sm:text-5xl xs:text-4xl">
            <AnimatedNumber value={40} /> +
          </span>
          <h2 className="text-xl font-medium capitalize text-dark/75 xl:items-center md:text-lg sm:text-base xs:text-sm">
            completed projects
          </h2>
        </div>
        <div className="flex flex-col items-end justify-center xl:items-center">
          <span className="inline-block text-7xl font-bold md:text-6xl sm:text-5xl xs:text-4xl">
            <AnimatedNumber value={3} /> +
          </span>
          <h2 className="text-xl font-medium capitalize text-dark/75 xl:items-center md:text-lg sm:text-base xs:text-sm">
            years of experience
          </h2>
        </div>
      </div>
    </div>
  );
};
