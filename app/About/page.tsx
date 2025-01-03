"use client";
import React from "react";
import { motion, useMotionValue, useTransform, useInView } from "framer-motion";
import BreadCrumb from "../App chunks/components/BreadCrumb";
import { BackgroundGradientAnimation } from "../(Home Page)/HeroGradient";
const Page = () => {
  const [height, setHeight] = React.useState(0);
  const containerRef = React.useRef<HTMLDivElement>(null);

  const scrollY = useMotionValue(0);

  const background = useTransform(
    scrollY,
    [400, 800],
    ["rgba(0,0,0,1)", "rgba(255,255,255,1)"]
  );

  React.useEffect(() => {
    const handleScroll = () => {
      scrollY.set(window.scrollY); // Update scrollY with current scroll position
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [scrollY]);
  React.useEffect(() => {
    const rect = document
      .getElementsByClassName("HeadNavigation")[0]
      .getBoundingClientRect();
    setHeight(rect.height);
  }, []);
  const selfPraise = [
    {
      title: "expert team support",
      content:
        " Our professionals bring years of experience and industry knowledge to every project.",
      color: "#D4E157",
    },
    {
      title: "Measurable Results",
      content:
        " We combine creativity with analytics to deliver strategies that work.",
      color: "#4FC3F7",
    },
    {
      title: "Client-First Approach",
      content:
        " We prioritize your vision and values, ensuring campaigns align with your brand’s identity.",
      color: "#FF8A65",
    },
    {
      title: "Proven Success",
      content:
        " Our track record speaks for itself, with satisfied clients across various industries.",
      color: "#FFEE58",
    },
  ];
  const selfPrasiseContainer = React.useRef<HTMLDivElement>(null);
  const boxInView = useInView(selfPrasiseContainer, { once: true });
  const whoContainerRef = React.useRef<HTMLDivElement>(null);
  const whoInView = useInView(whoContainerRef, { once: true });
  const para = ` Transforming brands with digital excellence`;
  return (
    <motion.div className="  bg-white" ref={containerRef}>
      <motion.div>
        <div className="w-full h-screen overflow-hidden bg-black relative">
          <div className=" w-full h-full flex relative ">
            <div className="absolute top-0 left-0 w-full h-full">
              <BackgroundGradientAnimation
                gradientBackgroundStart="black"
                gradientBackgroundEnd="white"
              />
            </div>
            <div
              style={{ marginTop: `${height + 50}px` }}
              className="container relative z-[99]"
            >
              <BreadCrumb />
              <div
                style={{ height: `calc(100vh - ${height + 200}px)` }}
                className="flex flex-col items-center justify-center "
              >
                <div className="relative w-full">
                  <div className="absolute -top-4 left-0">
                    <img src={"aboutUsleft.svg"} />
                  </div>
                  <div className="absolute -top-4 right-0">
                    <img src={"aboutUsright.svg"} />
                  </div>
                  <p className="text-slate-50 text-center text-lg font-[400] font-Synonym">
                    Some tagline here
                  </p>
                </div>
                <motion.h1 className="text-center font-[600] text-slate-100 flex-wrap lg:text-3xl xl:text-6xl xxl:text-8xl  font-Grostek relative">
                  {para.split(" ").map((item, index) => (
                    <motion.span
                      key={index}
                      className="xl:mr-2 xxl:mr-5 overflow-hidden h-[100px]"
                      style={{
                        display: "inline-block", // Ensure words are treated as block elements
                      }}
                    >
                      <motion.span
                        initial={{ y: 300, opacity: 0, rotate: 10, x: -30 }} // Start from below
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
                          duration: 1.3,
                          delay: index * 0.01, // Increased delay to prevent overlap
                        }}
                      >
                        {item}
                      </motion.span>
                      {"  "}
                    </motion.span>
                  ))}
                </motion.h1>
                <div className="grid grid-cols-1 lg:grid-cols-2 w-full lg:w-1/2 gap-10 mt-10">
                  <div className="bg-white/30  backdrop-filter backdrop-blur-lg p-3 rounded-xl">
                    <h2 className="text-6xl font-[600] font-Grostek text-white">
                      10+
                    </h2>
                    <p className="text-lg text-slate-100 font-Satoshi">
                      Years of experience in web development.
                    </p>
                  </div>
                  <div className="bg-white/30  backdrop-filter backdrop-blur-lg p-3 rounded-xl">
                    <h2 className="text-6xl font-[600] font-Grostek text-white">
                      90+
                    </h2>
                    <p className="text-slate-100 text-lg font-Satoshi">
                      {" "}
                      Clients across various Industries
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </motion.div>

      <div className="relative">
        <motion.div style={{ backgroundColor: background }} className="py-28 ">
          <div className=" container">
            <motion.div className="sticky top-0 left-0 w-[500px]">
              <div className="aspect-[3/4] bg-slate-400 w-full">
                <img
                  src={
                    "https://images.pexels.com/photos/355952/pexels-photo-355952.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                  }
                  className="w-full h-full object-cover"
                />
              </div>
              <h2 className="text-4xl mt-3 font-Grostek font-[600]">
                Our Vision
              </h2>
              <p className="text-lg font-Synonym font-[400]">
                Our Vision is to be a leading marketing agency that transforms
                businesses into impactful brands using our expert team’s
                creativity, innovation, and data-driven techniques.
              </p>
            </motion.div>
            <div className="w-full flex justify-end">
              <motion.div className="w-[500px]">
                <div className="aspect-[3/4] bg-slate-400 w-full">
                  <img
                    src={
                      "https://images.pexels.com/photos/6147381/pexels-photo-6147381.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                    }
                    className="w-full h-full object-cover"
                  />
                </div>
                <h2 className="text-4xl mt-3 font-Grostek font-[600]">
                  Our Mission
                </h2>
                <p className="text-lg font-Synonym font-[400]">
                  Our Vision is to be a leading marketing agency that transforms
                  businesses into impactful brands using our expert team’s
                  creativity, innovation, and data-driven techniques.
                </p>
              </motion.div>
            </div>
          </div>
        </motion.div>

        <div ref={whoContainerRef} className="w-full bg-white relative">
          <div className="container ">
            <motion.article className="flex justify-center lg:justify-start items-center text-black gap-3">
              {["Who", "we", "are", "?"].map((text, index) => (
                <motion.h1
                  key={index}
                  transition={{
                    delay: index * 0.1,
                    duration: 0.6,
                    ease: [0.22, 0.61, 0.36, 1],
                  }}
                  viewport={{ once: true }}
                  initial={{ opacity: 0, y: 100 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  className="text-5xl lg:text-6xl leading-[100%] font-Grostek font-[600] tracking-tight break-words"
                >
                  {text}
                </motion.h1>
              ))}
            </motion.article>
            <div className="grid grid-cols-2 gap-6 my-10">
              <p className="text-2xl font-Grostek">
                At Insight Vision, every brand has a unique story waiting to be
                told. Founded on passion, creativity, and a deep understanding
                of marketing trends, we specialize in delivering solutions that
                gives measurable results. Our mission is simple: to help you
                grow, connect, and stand out in a crowded marketplace.{" "}
              </p>
              <div className="w-full relative overflow-hidden">
                <motion.div
                  animate={{ y: whoInView ? "-100%" : "0%" }}
                  transition={{
                    delay: 0.2,
                    duration: 0.6,
                    ease: "easeOut",
                  }}
                  className="w-full h-full absolute z-[10] top-0 left-0 bg-purple-100"
                />
                <img
                  src={
                    "https://images.pexels.com/photos/17485633/pexels-photo-17485633/free-photo-of-an-artist-s-illustration-of-artificial-intelligence-ai-this-image-depicts-ai-safety-research-to-prevent-its-misuse-and-encourage-beneficial-uses-it-was-created-by-khyati-trehan-as-part.png?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                  }
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div ref={selfPrasiseContainer} className="w-full py-12 ">
        <div className="container ">
          <motion.article className="flex justify-center lg:justify-start items-center text-black gap-3">
            {["Why", "Choose", "us?"].map((text, index) => (
              <motion.h1
                key={index}
                transition={{
                  delay: index * 0.1,
                  duration: 0.6,
                  ease: [0.22, 0.61, 0.36, 1],
                }}
                viewport={{ once: true }}
                initial={{ opacity: 0, y: 100 }}
                whileInView={{ opacity: 1, y: 0 }}
                className="text-5xl lg:text-6xl leading-[100%] font-Grostek font-[600] tracking-tight break-words"
              >
                {text}
              </motion.h1>
            ))}
          </motion.article>
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-7 mt-10 !text-purple-50">
            {selfPraise.map((item, index) => (
              <motion.div
                animate={{
                  x: boxInView ? "0%" : "100%",
                  y: boxInView ? "0%" : "70%",
                }}
                transition={{ duration: 1.5, ease: [0.175, 0.885, 0.32, 1] }}
                key={index}
                style={{ backgroundColor: item.color }}
                className=" text-slate-950 rounded-lg p-5"
              >
                <h2 className="text-3xl pr-10 capitalize font-SplineSans font-[500]">
                  {item.title}
                </h2>
                <p className="mt-3 text-lg font-Grostek">{item.content}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
      <div className="py-16 container">
        <div className=" ">
          <div className=" p-7  w-full bg-black text-slate-100 rounded-xl">
            <h2 className="text-3xl font-SplineSans font-[500]">
              Let’s Grow Together
            </h2>
            <p className="mt-3 font-Synonym font-[400] text-lg">
              At Insight Vision, we don’t just market products—we build
              connections that last. Whether you’re a startup looking to make a
              big growth or an established brand seeking to level up, we’re here
              to help you achieve your goals.
            </p>
            <p className="mt-3 font-Synonym font-[400] text-lg">
              Get in touch today and let’s turn your vision into reality.
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
