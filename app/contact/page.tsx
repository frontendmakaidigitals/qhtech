"use client";
import React from "react";
import { motion } from "framer-motion";
import BreadCrumb from "../App chunks/components/BreadCrumb";

import { BackgroundGradientAnimation } from "../App chunks/components/HeroGradient";
import {
  FacebookLogo,
  InstagramLogo,
  SealCheck,
  TwitterLogo,
  YoutubeLogo,
} from "@phosphor-icons/react";
const Page = () => {
  const [height, setHeight] = React.useState(0);
  const containerRef = React.useRef<HTMLDivElement>(null);

  React.useEffect(() => {
    const rect = document
      .getElementsByClassName("HeadNavigation")[0]
      .getBoundingClientRect();
    setHeight(rect.height);
  }, []);

  return (
    <motion.div className="  bg-white" ref={containerRef}>
      <motion.div>
        <div className="w-full overflow-hidden relative">
          <div className="w-full  flex relative">
            <div className="absolute top-0 left-0 w-full h-full">
              <BackgroundGradientAnimation
                gradientBackgroundStart="#FFEAD3"
                gradientBackgroundEnd="#FFEAD3"
                firstColor="#FFCA8F"
                secondColor="#FFCA8F"
              />
            </div>
            <div
              style={{ marginTop: `${height + 10}px` }}
              className="container py-10 relative z-[99] h-auto"
            >
              <BreadCrumb />
              <div className="mt-10">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                  <div>
                    <motion.article className="flex justify-center lg:justify-start items-center text-slate-950 gap-3">
                      {["Contact", "Us"].map((text, index) => (
                        <motion.h1
                          key={index}
                          transition={{
                            delay: index * 0.1,
                            duration: 0.7,
                            ease: [0.22, 0.61, 0.36, 1],
                          }}
                          viewport={{ once: true }}
                          initial={{ opacity: 0, y: 100 }}
                          animate={{ opacity: 1, y: 0 }}
                          className="text-5xl lg:text-6xl leading-[100%] font-Grostek font-[600] tracking-tight break-words"
                        >
                          {text}
                        </motion.h1>
                      ))}
                    </motion.article>
                    <p className="mt-3">
                      At Insight Vision, we&apos;re here to help you elevate
                      your brand and reach your business goals. Whether
                      you&apos;re looking for a marketing strategy or just need
                      expert advice, our team is ready to assist.
                      <br /> <br /> Have a project idea, or just want to discuss
                      how we can help you reach your marketing goals? Drop us a
                      message, and one of our team members will be in touch
                      shortly!
                    </p>
                    <div className="grid grid-cols-1 gap-2">
                      <h4 className="font-Grostek text-xl mt-5 font-bold ">
                        Talk to our team today to
                      </h4>
                      <motion.div
                        initial={{ y: 100 }}
                        animate={{ y: 0 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="flex items-start gap-2 w-fit bg-white px-4 py-1 rounded-sm bg-opacity-60 backdrop-filter backdrop-blur-lg"
                      >
                        <div className="mt-1">
                          <SealCheck weight="fill" className="text-green-600" />
                        </div>
                        <p className="font-Synonym font-[500]">
                          Understand more about pricing.
                        </p>
                      </motion.div>
                      <motion.div
                        initial={{ y: 100 }}
                        animate={{ y: 0 }}
                        transition={{ duration: 0.8, delay: 0.3 }}
                        className="flex items-start gap-2 w-fit bg-white px-4 py-1 rounded-sm bg-opacity-60 backdrop-filter backdrop-blur-lg"
                      >
                        <div className="mt-1">
                          <SealCheck weight="fill" className="text-green-600" />
                        </div>
                        <p className="font-Synonym font-[500]">
                          Get a customized quote for your business.
                        </p>
                      </motion.div>
                      <motion.div
                        initial={{ y: 100 }}
                        animate={{ y: 0 }}
                        transition={{ duration: 0.8, delay: 0.4 }}
                        className="flex items-start gap-2 w-fit bg-white px-4 py-1 rounded-sm bg-opacity-60 backdrop-filter backdrop-blur-lg"
                      >
                        <div className="mt-1">
                          <SealCheck weight="fill" className="text-green-600" />
                        </div>
                        <p className="font-Synonym font-[500]">
                          Discover the capabilities and get answer to you
                          questions.
                        </p>
                      </motion.div>
                    </div>
                    <div className="mt-5">
                      <h4 className="font-Grostek text-xl mt-5 font-bold ">
                        Stay Connected with us
                      </h4>
                      <div className="flex text-3xl mt-1 justify-start items-center gap-5">
                        <FacebookLogo
                          weight="fill"
                          className="hover:scale-[1.3] transition-all duration-300 cursor-pointer"
                        />
                        <TwitterLogo
                          weight="fill"
                          className="hover:scale-[1.3] transition-all duration-300 cursor-pointer"
                        />
                        <InstagramLogo
                          weight="fill"
                          className="hover:scale-[1.3] transition-all duration-300 cursor-pointer"
                        />
                        <YoutubeLogo
                          weight="fill"
                          className="hover:scale-[1.3] transition-all duration-300 cursor-pointer"
                        />
                      </div>
                    </div>
                  </div>
                  <motion.div className="w-full p-5 grid rounded-lg grid-cols-1 gap-4 bg-white/60 ">
                    <p className="text-2xl font-SplineSans font-[500]">
                      Get in Touch
                    </p>
                    <div className="grid w-full grid-cols-1 lg:grid-cols-2 gap-4">
                      <div className="w-full">
                        <label className="font-Grostek text-lg font-[500]">
                          First Name
                        </label>
                        <input className="w-full mt-1 border border-slate-950 bg-transparent px-3 py-2 rounded-md" />
                      </div>
                      <div className="w-full">
                        <label className="font-Grostek text-lg font-[500]">
                          Last Name
                        </label>
                        <input className="w-full mt-1 border border-slate-950 bg-transparent px-3 py-2 rounded-md" />
                      </div>
                    </div>
                    <div className="grid w-full grid-cols-1 lg:grid-cols-2 gap-4">
                      <div className="w-full">
                        <label className="font-Grostek text-lg font-[500]">
                          Email
                        </label>
                        <input className="w-full mt-1 border border-slate-950 bg-transparent px-3 py-2 rounded-md" />
                      </div>
                      <div className="w-full">
                        <label className="font-Grostek text-lg font-[500]">
                          Phone
                        </label>
                        <input className="w-full mt-1 border border-slate-950 bg-transparent px-3 py-2 rounded-md" />
                      </div>
                    </div>

                    <div className="w-full">
                      <label className="font-Grostek text-lg font-[500] ">
                        Message
                      </label>
                      <textarea className="w-full border border-slate-950 bg-transparent resize-none px-3 py-2 mt-1 h-40 rounded-md" />
                    </div>
                    <div>
                      <button className="group relative inline-flex h-10 items-center justify-center overflow-hidden rounded-md border-2  border-[#394481]  font-medium">
                        <div className="inline-flex h-10 translate-y-0 items-center justify-center px-6  bg-gradient-to-r  text-black transition duration-500 group-hover:-translate-y-[150%]">
                          Submit
                        </div>
                        <div className="absolute inline-flex h-10 w-full translate-y-[100%] items-center justify-center text-neutral-50 transition duration-500 group-hover:translate-y-0">
                          <span className="absolute h-full w-full translate-y-full skew-y-12 scale-y-0 bg-[#394481]  transition duration-500 group-hover:translate-y-0 group-hover:scale-150"></span>
                          <span className="z-10">Submit</span>
                        </div>
                      </button>
                    </div>
                  </motion.div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default Page;
