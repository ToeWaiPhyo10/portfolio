"use client";
import Link from "next/link";
import React, { useState } from "react";
import { CustomLink } from "./CustomLink";
import { GithubIcon } from "@/icons/GithubIcon";
import { LinkedInIcon } from "@/icons/LinkedInIcon";
import { motion } from "framer-motion";
import CustomMobileLink from "./CustomMobileLink";
import { FacebookIcon } from "@/icons/Facebook";
import { InstagramIcon } from "@/icons/InstagramIcon";
import { BurgerMenu } from "./BurgerMenu";

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <header className="w-full px-32 py-8 font-medium flex items-center justify-between relative lg:px-16 md:px-12 sm:px-8">
      <BurgerMenu isOpen={isOpen} setIsOpen={setIsOpen} />

      {/* Full Screen NavBar */}
      <div className="w-full flex items-center justify-between  lg:hidden">
        <nav>
          <CustomLink href="/" title={"Home"} className="mr-4" />
          <CustomLink href="/about" title={"About"} className="mx-4" />
          <CustomLink href="/projects" title={"Projects"} className="mx-4" />
          <CustomLink href="/articles" title={"Articles"} className="ml-4" />
        </nav>
        <nav className="flex justify-center items-center flex-wrap">
          <motion.a
            href="https://github.com"
            target={"_blank"}
            whileHover={{ y: -2 }}
            whileTap={{ scale: 0.9 }}
            className="w-6 mr-3"
          >
            <GithubIcon />
          </motion.a>
          <motion.a
            href="/"
            target={"_blank"}
            whileHover={{ y: -2 }}
            whileTap={{ scale: 0.9 }}
            className="w-6 mx-3"
          >
            <LinkedInIcon />
          </motion.a>
          <motion.a
            href="/"
            target={"_blank"}
            whileHover={{ y: -2 }}
            whileTap={{ scale: 0.9 }}
            className="w-6 mx-3"
          >
            <InstagramIcon />
          </motion.a>
          <motion.a
            href="/"
            target={"_blank"}
            whileHover={{ y: -2 }}
            whileTap={{ scale: 0.9 }}
            className="w-6 ml-3"
          >
            <FacebookIcon />
          </motion.a>
        </nav>
      </div>

      {/* Small Screen NavBar */}
      {isOpen && (
        <motion.div
          initial={{ scale: 0, opacity: 0, x: "-50%", y: "-50%" }}
          animate={{
            scale: 1,
            opacity: 1,
            transition: {
              duration: 0.3,
            },
          }}
          className="min-w-[70vw] flex flex-col items-center justify-between fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-30 bg-dark/90 rounded-lg backdrop-blur-md py-32"
        >
          <nav className="flex items-center flex-col justify-center">
            <CustomMobileLink
              toggle={() => setIsOpen(false)}
              href="/"
              title={"Home"}
            />
            <CustomMobileLink
              toggle={() => setIsOpen(false)}
              href="/about"
              title={"About"}
            />
            <CustomMobileLink
              toggle={() => setIsOpen(false)}
              href="/projects"
              title={"Projects"}
            />
            <CustomMobileLink
              toggle={() => setIsOpen(false)}
              href="/articles"
              title={"Articles"}
            />
          </nav>
          <nav className="flex justify-center items-center flex-wrap mt-2">
            <motion.a
              href="https://github.com"
              target={"_blank"}
              whileHover={{ y: -2 }}
              whileTap={{ scale: 0.9 }}
              className="w-6 mr-3 bg-light rounded-full sm:mx-1"
            >
              <GithubIcon />
            </motion.a>
            <motion.a
              href="/"
              target={"_blank"}
              whileHover={{ y: -2 }}
              whileTap={{ scale: 0.9 }}
              className="w-6 mx-3 sm:mx-1"
            >
              <LinkedInIcon />
            </motion.a>
            <motion.a
              href="/"
              target={"_blank"}
              whileHover={{ y: -2 }}
              whileTap={{ scale: 0.9 }}
              className="w-6 mx-3 sm:mx-1"
            >
              <InstagramIcon />
            </motion.a>
            <motion.a
              href="/"
              target={"_blank"}
              whileHover={{ y: -2 }}
              whileTap={{ scale: 0.9 }}
              className="w-6 ml-3 sm:mx-1"
            >
              <FacebookIcon />
            </motion.a>
          </nav>
        </motion.div>
      )}
    </header>
  );
};

export default NavBar;
