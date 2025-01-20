"use client";
import React, { useRef, useEffect } from "react";
import {
  motion,
  useScroll,
  useTransform,
  useSpring,
  useInView,
} from "framer-motion";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const AboutUs = () => {
  const container = useRef<HTMLDivElement>(null);
  const body = useRef(null);
  const refs = useRef<(HTMLSpanElement | null)[]>([]); // To store refs for each span

  const para1 = `We’re more than just a marketing agency. At Insight Vision, we’re your growth partners. With a deep understanding of digital landscapes, creative strategies, and technology, we specialize in turning ideas into results.`;

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    if (refs.current.length > 0) {
      createAnimation();
    }
  }, []);

  const createAnimation = () => {
    gsap.to(refs.current, {
      scrollTrigger: {
        trigger: container.current,
        start: "10%",
        end: "40%",
        scrub: true,
      },
      opacity: 1, // Fade in the elements
      ease: "none",
      stagger: 0.1, // Add stagger effect
    });
  };

  const splitWords = (phrase: string) => {
    return phrase.split(" ").map((word, i) => {
      const letters = splitLetters(word);
      return (
        <p
          key={word + "_" + i}
          className="font-Synonym mr-[1.1vw] font-[500] text-xl lg:text-3xl"
        >
          {letters}
        </p>
      );
    });
  };

  const splitLetters = (word: string) => {
    return word.split("").map((letter, i) => (
      <span
        key={letter + "_" + i}
        style={{ opacity: 0.2 }} // Initially hide the letters
        ref={(el) => {
          // Only push new refs during the first render to avoid adding duplicates
          if (el && !refs.current.includes(el)) {
            refs.current.push(el);
          }
        }}
      >
        {letter}
      </span>
    ));
  };

  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start start", "end end"],
  });

  const pathLength = useTransform(scrollYProgress, [0, 1], [0, 1]);

  // Transform scrollYProgress into y movement
  const y = useTransform(scrollYProgress, [0, 1], ["20%", "-20%"]);

  // Apply spring for smooth transitions
  const springY = useSpring(y, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  const inView = useInView(container, { once: false });
  const strokeDashoffset = useTransform(pathLength, [0, 1], [1000, 0]);
  return (
    <div ref={container} className="w-full overflow-hidden relative py-32">
      <div className="absolute -z-10 w-full h-full top-1/2 -translate-y-1/2 left-0">
        <motion.svg
          width="100%"
          height="100%"
          viewBox="0 0 1616 817"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <motion.path
            d="M15.5625 27C195.774 33.1937 594.291 154.477 539.593 424.002C471.22 760.908 170.209 479.26 328.932 297.849C455.911 152.72 991.662 505.013 1243.67 699.3C1480.11 881.589 1826.42 846.322 1740.64 589.924C1645.24 304.757 1139.5 356 769 669.5C660.171 761.586 1609.5 1050 1729.5 1094.5"
            stroke="url(#paint0_linear_1546_83)"
            strokeWidth="51"
            strokeLinecap="square"
            style={{
              pathLength, // The path length animates from 0 to 1
              strokeDashoffset, // The dash offset animates from 1000 to 0
            }}
            strokeDasharray="1000"
          />
          <defs>
            <linearGradient
              id="paint0_linear_1546_83"
              x1="879.64"
              y1="27.0001"
              x2="1087.75"
              y2="413.378"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#52FF00" />
              <stop offset="1" stopColor="#47D007" />
            </linearGradient>
          </defs>
        </motion.svg>
      </div>
      <div className="container">
        <div className="text-slate-950 leading-[.99] w-full font-Grostek lg:text-[6rem] xl:text-[8rem] font-[400]">
          <motion.div
            animate={{ paddingLeft: inView ? "170px" : "0px" }}
            transition={{
              delay: 1,
              duration: 0.8,
              ease: [0.25, 0.46, 0.45, 0.94],
            }}
            className="inline-block overflow-hidden"
          >
            {"Shape Imagination".split(" ").map((word, idx) => (
              <motion.h1
                animate={{ y: inView ? "0%" : "100%" }}
                transition={{ duration: 1, delay: 0.3 * idx }}
                className="inline-block ml-5"
                key={idx}
              >
                {word}
              </motion.h1>
            ))}
          </motion.div>
          <motion.div
            transition={{ delay: 0.8, duration: 1, ease: [] }}
            className="inline-block   overflow-hidden"
          >
            {"Into Reality".split(" ").map((word, idx) => (
              <motion.h1
                animate={{ y: inView ? "0%" : "100%" }}
                transition={{ duration: 1, delay: 0.3 * idx }}
                className="inline-block ml-5"
                key={idx}
              >
                {word}
              </motion.h1>
            ))}
          </motion.div>
        </div>

        <div className=" mt-6 !text-purple-950">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 ">
            <div ref={body} className="w-full flex flex-wrap">
              {splitWords(para1)}
            </div>
          </div>

          {/* Image section */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
            <div></div>
            <motion.div className="w-full h-[500px] rounded-lg relative overflow-hidden">
              <motion.div
                animate={{ y: inView ? "-100%" : "0%" }}
                transition={{
                  delay: 0.2,
                  duration: 0.6,
                  ease: "easeOut",
                }}
                className="w-full h-full absolute z-[10] top-0 left-0 bg-purple-100"
              />
              <motion.img
                src="/about us image.png"
                alt="Image"
                className="w-full h-full object-cover"
                style={{ translateY: springY, scale: 1.1 }}
                transition={{
                  ease: [0.42, 0, 0.58, 1], // Custom easing for smooth motion
                  duration: 5, // Duration of the scroll-based image transformation
                }}
              />
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
