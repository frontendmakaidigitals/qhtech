"use client";
import React from "react";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import BreadCrumb from "../App chunks/components/BreadCrumb";
import { BackgroundGradientAnimation } from "../(Home Page)/HeroGradient";
import VideoPortfolio from "../App chunks/components/videoScroll";
const Page = () => {
  const [height, setHeight] = React.useState(0);
  const containerRef = React.useRef<HTMLDivElement>(null);
  const container = React.useRef<HTMLDivElement>(null);
  React.useEffect(() => {
    const rect = document
      .getElementsByClassName("HeadNavigation")[0]
      .getBoundingClientRect();
    setHeight(rect.height);
  }, []);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start start", "end end"],
  });

  const y = useTransform(scrollYProgress, [0, 1], ["50%", "-50%"]);

  // Apply spring for smooth transitions
  const springY = useSpring(y, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });
  const para =
    "Showcasing Creativity and Craft: A Portfolio of Innovative Design and Thoughtful Solutions";

  return (
    <motion.div className="  bg-white" ref={containerRef}>
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
              </div>
            </div>
          </div>
        </div>
      </motion.div>

      <motion.div ref={container} className="py-24 bg-orange-50">
        <div className="container relative flex justify-center items-center h-[180vh]">
          <motion.div className="realative z-[10]">
            <h3 className="text-8xl text-yellow-950 font-Grostek font-[700]">
              Photography
            </h3>
          </motion.div>
          <motion.div
            style={{ translateY: springY, scale: 1.1 }}
            transition={{
              ease: [0.42, 0, 0.58, 1], // Custom easing for smooth motion
              duration: 5, // Duration of the scroll-based image transformation
            }}
            className="w-[400px]  absolute top-0 left-0 bg-slate-50 aspect-[3/4]"
          >
            <img
              className="w-full h-full object-cover"
              src={
                "media/photographyImages/Snapinsta.app_462791529_1088018526665104_5505518182070144394_n_1080.jpg"
              }
            />
          </motion.div>
          <motion.div
            style={{ translateY: springY, scale: 1.1 }}
            transition={{
              ease: [0.42, 0, 0.58, 1], // Custom easing for smooth motion
              duration: 5, // Duration of the scroll-based image transformation
            }}
            className="w-[400px]  absolute top-24 right-0 bg-red-400 aspect-[3/4]"
          >
            <img
              className="w-full h-full object-cover"
              src={
                "media/photographyImages/Snapinsta.app_471757945_1006467234854614_4548150390414566411_n_1080.jpg"
              }
            />
          </motion.div>
          <motion.div
            style={{ translateY: springY, scale: 1.1 }}
            transition={{
              ease: [0.42, 0, 0.58, 1], // Custom easing for smooth motion
              duration: 5, // Duration of the scroll-based image transformation
            }}
            className="w-[400px]  absolute bottom-0 left-0 bg-red-400 aspect-[3/4]"
          >
            <img
              className="w-full h-full object-cover"
              src={"media/photographyImages/2024_11_30_12_59_IMG_5791.jpg"}
            />
          </motion.div>
          <motion.div
            style={{ translateY: springY, scale: 1.1 }}
            transition={{
              ease: [0.42, 0, 0.58, 1], // Custom easing for smooth motion
              duration: 5, // Duration of the scroll-based image transformation
            }}
            className="w-[400px]  absolute -bottom-20 right-0 bg-green-400 aspect-[3/4]"
          >
            <img
              className="w-full h-full object-cover"
              src={"media/photographyImages/20241130_130756.jpg"}
            />
          </motion.div>
        </div>
      </motion.div>

      <motion.div>
        <VideoPortfolio />
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
