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
    // Ensure GSAP targets valid elements in the refs
    gsap.to(refs.current, {
      scrollTrigger: {
        trigger: container.current,
        start: "top bottom",
        end: "bottom",
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

  // Transform scrollYProgress into y movement
  const y = useTransform(scrollYProgress, [0, 1], ["20%", "-20%"]);

  // Apply spring for smooth transitions
  const springY = useSpring(y, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  const inView = useInView(container, { once: true });

  return (
    <div ref={container} className="w-full bg-black py-14">
      <div className="container">
        <motion.article className="flex justify-center lg:justify-start items-center text-purple-100 gap-3">
          {["About", "Us"].map((text, index) => (
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

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-7 mt-6 !text-purple-50">
          <div>
            <div ref={body} className="w-full flex flex-wrap">
              {splitWords(para1)}
            </div>
            
          </div>

          {/* Image section */}
          <motion.div className="w-full h-full relative overflow-hidden">
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
              src="https://cdn.dribbble.com/userupload/12017863/file/original-81427c44c3bb53199e8c3db7196ffd9a.png?resize=1504x1128&vertical=center"
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
  );
};

export default AboutUs;
