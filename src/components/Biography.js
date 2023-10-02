import Image from "next/image";
import React from "react";

import profilePics from "@/images/IMG_8186.png";

export const Biography = () => {
  return (
    <div className="grid w-full grid-cols-8 gap-16 sm:gap-8">
      <div className="col-span-4 flex flex-col items-start justify-start  md:order-2 md:col-span-8">
        <h2 className="mb-4 text-lg font-bold uppercase text-dark/75">
          Biography
        </h2>
        <p className="font-medium text-justify">
          Hello, I am Toe Wai Phyo.I am a passionate web developer with over 4
          years of experience crafting elegant and user-friendly solutions. As
          an analytical problem solver, I leverage my skills and strong work
          ethic to deliver innovative web applications that meet business
          objectives and user needs.
        </p>
        <p className="my-4 font-medium text-justify">
          I am dedicated to continuously expanding my technical expertise in
          front-end and back-end development through independent research of
          emerging technologies and frameworks like React. Beyond coding skills,
          I value soft skills like clear communication, attention to detail, and
          responsiveness to feedback.
        </p>
        <p className="mb-4 font-medium text-justify">
          Throughout my career, I have worked both independently and
          collaboratively in agile environments. I am skilled at scouting
          requirements, designing interfaces, and building full-stack solutions
          from concept to deployment. As an advocate for accessibility, I aim to
          develop websites and applications that are usable and enjoyable for
          all.
        </p>
        <p className="font-medium text-justify">
          Outside of work, I enjoy sharing knowledge with aspiring developers
          through conference speaking and mentorship. Educating others is
          rewarding, and I believe strongly in empowering community members
          through open sharing of skills and ideas. Overall, my goal is to
          innovate, solve problems, and make a positive impact through
          technological progress.
        </p>
      </div>
      <div
        className="col-span-4 relative h-max border-dark/60 border-2 border-solid shadow-lg
            bg-light p-4 md:order-1 md:col-span-8 rounded-tr-[616px] rounded-tl-[316px] rounded-bl-[616px] rounded-br-[316px]"
      >
        <Image
          src={profilePics}
          alt="ToeWaiPhyo"
          className="w-full h-auto bg-dark/80 rounded-tr-[600px] rounded-tl-[310px] rounded-bl-[600px] rounded-br-[300px]"
        />
      </div>
    </div>
  );
};
