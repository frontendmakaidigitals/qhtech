"use client";
import React, { useRef } from "react";
import Logo from "./Logo";
import Ribbon from "./Ribbon";
import { motion, useInView } from "framer-motion";
import {
  FacebookLogo,
  XLogo,
  InstagramLogo,
  Circle,
  LinkedinLogo,
  ArrowUpRight,
} from "@phosphor-icons/react";

const Footer = () => {
  const menu = [
    { title: "home", link: "/" },
    { title: "about", link: "/" },
    { title: "services", link: "/" },
    { title: "work process", link: "/" },
    { title: "contact", link: "/" },
  ];
  const legal = [
    { title: "Privacy policy", link: "/" },
    { title: "Terms & Conditions", link: "/" },
    { title: "Cookie policy", link: "/" },
  ];
  const socialIcons = [
    { icon: <FacebookLogo />, link: "" },
    { icon: <InstagramLogo />, link: "" },
    { icon: <XLogo />, link: "" },
    { icon: <LinkedinLogo />, link: "" },
  ];
  const ref = useRef(null);
  const inView = useInView(ref);
  return (
    <div
      ref={ref}
      className="h-full overflow-hidden py-10 flex  flex-col justify-around  w-full bg-gradient-to-t from-purple-400 to-purple-100 "
    >
      <div className="container  grid grid-cols-1 lg:grid-cols-3">
        <div className="">
          <motion.div
            transition={{ duration: 0.7, ease: [0.22, 0.61, 0.36, 1] }}
            animate={{ y: inView ? 0 : 200, rotate: inView ? 0 : 10 }}
          >
            <Logo />
          </motion.div>
          <motion.p
            animate={{ y: inView ? 0 : 200 }}
            className={`text-indigo-950 text-md lg:text-lg  font-Satoshi mt-2 lg:mt-4`}
          >
            We create possibilities for the connected world.
          </motion.p>

          <motion.div className="w-full grid grid-cols-4 gap-3 mt-8 lg:mt-12">
            {socialIcons.map((elem, index) => (
              <motion.div
                key={index}
                animate={{ y: inView ? 0 : 100 }}
                transition={{
                  delay: index * 0.1,
                  ease: [0.22, 0.61, 0.36, 1],
                  duration: 0.7,
                }}
                className=" flex overflow-hidden justify-center text-4xl text-slate-600 items-center size-14 rounded-full bg-slate-100/10 border border-gray-800"
              >
                <motion.button whileHover={{ scale: 1.3 }}>
                  {elem.icon}
                </motion.button>
              </motion.div>
            ))}
          </motion.div>
        </div>
        <div></div>
        <div className="flex items-start mt-6 justify-end gap-20">
          <motion.ul whileInView={"animate"} className="">
            <motion.p className="text-indigo-950 mb-2 font-Synonym font-[500] text-2xl lg:text-3xl">
              Menu
            </motion.p>
            {menu.map((item, index) => (
              <motion.li
                className="font-Satoshi mb-1 text-md capitalize lg:text-lg text-purple-950 flex items-center gap-1 "
                key={index}
                animate={{ y: inView ? 0 : 130 }}
                transition={{
                  delay: index * 0.1,
                  ease: [0.22, 0.61, 0.36, 1],
                  duration: 0.7,
                }}
              >
                {item.title} <ArrowUpRight className="mt-1" />
              </motion.li>
            ))}
          </motion.ul>
          <motion.ul className="">
            <motion.p className="text-indigo-950 mb-2 font-Synonym font-[500] text-2xl lg:text-3xl">
              Legal
            </motion.p>
            {legal.map((item, index) => (
              <motion.li
                className="font-Satoshi mb-1 text-md lg:text-lg text-purple-950 flex items-center gap-1 "
                key={index}
                animate={{ y: inView ? 0 : 130 }}
                transition={{
                  delay: index * 0.1,
                  ease: [0.22, 0.61, 0.36, 1],
                  duration: 0.7,
                }}
              >
                {item.title} <ArrowUpRight className="mt-1" />
              </motion.li>
            ))}
          </motion.ul>
        </div>
      </div>
      <div className="grid mt-3 lg:mt-6 grid-cols-1 lg:grid-cols-3 lg:items-end container">
        <motion.div>
          <motion.p
            animate={{ y: inView ? 0 : 180 }}
            transition={{
              ease: [0.22, 0.61, 0.36, 1],
              duration: 0.7,
            }}
            className="text-indigo-950 font-Synonym font-[500] text-lg"
          >
            Subscribe
          </motion.p>
          <motion.div
            animate={{ y: inView ? 0 : 180 }}
            transition={{
              ease: [0.22, 0.61, 0.36, 1],
              duration: 0.7,
            }}
            className="w-full relative mt-2"
          >
            <input
              placeholder="Enter your email"
              className="w-full text-purple-950 placeholder:text-slate-700 pl-5 pr-16 py-3 bg-transparent border border-[#363636] rounded-full"
            />
            <button className="text-xl overflow-hidden rounded-full flex justify-center items-center bg-black hover:bg-slate-950 text-purple-100 absolute top-1/2 right-1 -translate-y-1/2 px-4 py-1 h-11">
              <ArrowUpRight fontWeight={500} />
            </button>
          </motion.div>
        </motion.div>
        <div></div>
        <motion.div className="w-full justify-start mt-5 lg:mt-0 lg:justify-end flex">
          <motion.div
            animate={{ y: inView ? 0 : 180 }}
            transition={{
              ease: [0.22, 0.61, 0.36, 1],
              duration: 0.7,
            }}
            className="flex  text-black p-2 font-Synonym font-[500] border border-[#363636] rounded-xl justify-center items-center gap-2"
          >
            <Circle weight="fill" className="text-[.5rem] text-[#00FF6A]" />

            <span className="text-lg font-regular">Connected</span>
          </motion.div>
        </motion.div>
      </div>
      <motion.div
        animate={{
          y: inView ? 0 : 300,
          scale: inView ? 1 : 0.6,
          rotateX: inView ? 0 : "40deg",
        }}
        transition={{
          ease: [0.22, 0.61, 0.36, 1],
          duration: 0.7,
        }}
        className="overflow-hidden mt-5 origin-top-left w-full"
      >
        <Ribbon
          className="  !text-purple-950 !text-lg lg:!text-7xl"
          text={`  Let's Talk ↗  `}
        />
      </motion.div>
      <div className="flex justify-between mt-3  text-purple-950  container text-sm lg:text-md items-center">
        <motion.p className="text-purple-950 hidden lg:block">
          Copyright © 2025 Insight Vision
        </motion.p>
        <motion.p className="text-purple-950 w-full text-center lg:w-auto">
          Designed and Developed by{" "}
          <span className="underline  font-Synonym text-black font-[600] underline-offset-4">
            Faheem
          </span>
        </motion.p>
      </div>
    </div>
  );
};

export default Footer;
