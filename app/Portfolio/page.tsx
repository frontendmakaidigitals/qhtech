"use client";
import React from "react";
import { motion } from "framer-motion";
import BreadCrumb from "../App chunks/components/BreadCrumb";
import { BackgroundGradientAnimation } from "../App chunks/components/HeroGradient";
import SliderForm from "../App chunks/components/SliderForm";
import { ArrowUpRight } from "@phosphor-icons/react";
const Page = () => {
  const [height, setHeight] = React.useState(0);
  const containerRef = React.useRef<HTMLDivElement>(null);
  const mediaRef = React.useRef<HTMLDivElement>(null);

  React.useEffect(() => {
    const rect = document
      .getElementsByClassName("HeadNavigation")[0]
      .getBoundingClientRect();
    setHeight(rect.height);
  }, []);

  const fileNames = [
    "1.jpg",
    "2.mp4",
    "3.jpg",
    "4.mp4",
    "5.jpg",
    "6.mp4",
    "7.jpg",
    "8.mp4",
    "9.jpg",
    "10.mp4",
    "11.jpg",
    "12.mp4",
    "13.jpg",
    "14.mp4",
    "15.jpg",
  ];

  const fileObjects = fileNames.map((name) => ({
    fileName: `media/photographyImages/${name}`,
  }));
  const para =
    "Showcasing Creativity and Craft: A Portfolio of Innovative Design and Thoughtful Solutions";
  const [isFormOpen, setIsFormOpen] = React.useState(false);
  return (
    <motion.div className="  bg-white" ref={containerRef}>
      <SliderForm isFormOpen={isFormOpen} setIsFormOpen={setIsFormOpen} />
      <motion.div>
        <div className="w-full h-screen overflow-hidden bg-gradient-to-tr from-blue-200 from-10% to-[#81C784] relative">
          <div className="w-full h-full flex relative">
            <div className="absolute top-0 left-0 w-full h-full">
              <BackgroundGradientAnimation
                gradientBackgroundStart="white"
                gradientBackgroundEnd="blue"
              />
            </div>
            <div
              style={{ marginTop: `${height + 50}px` }}
              className="container relative z-[99]"
            >
              <BreadCrumb />
              <div
                style={{ height: `calc(100vh - ${height + 200}px)` }}
                className="flex flex-col container items-center text-slate-100 justify-center"
              >
                <motion.h1 className="text-center font-[600]  flex-wrap lg:text-3xl xl:text-6xl font-Grostek relative">
                  {para.split(" ").map((item, index) => (
                    <motion.span
                      key={index}
                      className="xl:mr-2 xxl:mr-4 overflow-hidden h-[80px]"
                      style={{
                        display: "inline-block", // Ensure words are treated as block elements
                      }}
                    >
                      <motion.span
                        initial={{ y: 300, opacity: 0, rotate: 20, x: -10 }} // Start from below
                        animate={{
                          y: 0, // Move to original position
                          opacity: 1,
                          rotate: 0,
                          x: 0,
                        }}
                        style={{
                          display: "inline-block", // Ensure words are treated as block elements
                        }}
                        transition={{
                          ease: [0, 0, 0.2, 1],
                          duration: 1,
                          delay: index * 0.1, // Increased delay to prevent overlap
                        }}
                        className="origin-top-right"
                      >
                        {item}
                      </motion.span>
                      {"  "}
                    </motion.span>
                  ))}
                </motion.h1>
                <button
                  onClick={() => setIsFormOpen(true)}
                  className="group relative h-12 rounded-full bg-black px-5 font-Synonym font-[500]  text-neutral-50"
                >
                  <span className="relative inline-flex overflow-hidden">
                    <div className="translate-y-0 skew-y-0 transition duration-500 group-hover:-translate-y-[130%] group-hover:skew-y-12 flex items-center gap-2">
                      Get Expert Help <ArrowUpRight />
                    </div>
                    <div className="absolute  translate-y-[134%] flex items-center gap-2 skew-y-12 transition duration-500 group-hover:translate-y-0 group-hover:skew-y-0">
                      Get Expert Help <ArrowUpRight />
                    </div>
                  </span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </motion.div>

      <motion.div ref={mediaRef}>
        <div className="">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
            {fileObjects.map((file, index) => {
              const fileExtension = file.fileName
                .split("/")
                .pop()
                ?.split(".")
                .pop();

              return (
                <motion.div key={index} className="w-full aspect-[3/4]">
                  {fileExtension === "mp4" ? (
                    <video
                      muted
                      loop
                      autoPlay
                      className="w-full h-full object-cover"
                    >
                      <source src={file.fileName} type="video/mp4" />
                    </video>
                  ) : fileExtension === "jpg" ||
                    fileExtension === "jpeg" ||
                    fileExtension === "png" ? (
                    <img
                      src={file.fileName}
                      alt={file.fileName}
                      className="w-full h-full object-cover"
                    />
                  ) : (
                    <p>{file.fileName}</p>
                  )}
                </motion.div>
              );
            })}
          </div>
        </div>
      </motion.div>

      <div className="py-16 container">
        <div className=" ">
          <div className=" p-7  w-full bg-[#3F51B5] text-slate-100 rounded-xl">
            <h2 className="text-3xl font-SplineSans font-[500]">
              Let’s Drive Performance Together
            </h2>
            <p className="mt-3 font-Synonym font-[400] text-lg">
              If you`re ready to take your marketing to the next level and see
              measurable growth, contact us today. Whether you`re looking to
              scale quickly or improve your marketing ROI, we have the tools and
              expertise to get you there.
            </p>

            <button className="mt-5 px-4 py-2 bg-white text-slate-900 font-SplineSans rounded-lg font-[400]">
              Contact us
            </button>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Page;
