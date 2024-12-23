"use client";
import React, { useRef } from "react";
import { useScroll, motion, useTransform } from "framer-motion";
const AboutUs = () => {
  const container = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start start", "end end"],
  });
  const scale = useTransform(scrollYProgress, [0, 1], [0.6, 1]);
  return (
    <div ref={container} className="w-full bg-purple-100">
      <div className="container ">
        <motion.article className="flex items-center gap-3">
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
              className="text-6xl leading-[100%] font-Grostek font-[600] tracking-tight "
            >
              {text}
            </motion.h1>
          ))}
        </motion.article>

        <p className="mt-8 font-Synonym font-[400] text-3xl tracking-wider">
          We’re more than just a marketing agency. At Insight Vision, we’re your
          growth partners. With a deep understanding of digital landscapes,
          creative strategies, and technology, we specialize in turning ideas
          into results. With a team of creative thinkers, data enthusiasts, and
          tech-savvy experts, we specialize in putting out solutions that drive
          real results. Whether it’s building a strong online presence, creating
          engaging content, or scaling your marketing efforts, we are here to
          guide you every step of the way.
          <br />
          <br />
          At our core, we’re passionate about helping brands reach their full
          potential and making a lasting impact in the industries they serve.
          Let us help you write the next chapter of your success story.
        </p>
      </div>
      <motion.div style={{ scale }} className="mt-10 overflow-hidden h-[90vh]">
        <video className="aspect-video object-cover" autoPlay muted loop>
          <source
            src="aboutus.mp4"
            type="video/mp4"
          />
        </video>
      </motion.div>
    </div>
  );
};

export default AboutUs;
