"use client";
import React from "react";
import {
  useScroll,
  useTransform,
  motion,
  MotionValue,
  useInView,
} from "framer-motion";
import { useEffect, useRef } from "react";
import { BackgroundGradientAnimation } from "./HeroGradient";
import { ArrowUpRight } from "@phosphor-icons/react";

export default function HeroSection() {
  const container = useRef<HTMLElement | null>(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start start", "end end"],
  });

  return (
    <>
      <main ref={container} className="relative ">
        <Section1 scrollYProgress={scrollYProgress} />
        <Section2 scrollYProgress={scrollYProgress} />
      </main>
    </>
  );
}

const Section1 = ({
  scrollYProgress,
}: {
  scrollYProgress: MotionValue<number>;
}) => {
  const scale = useTransform(scrollYProgress, [0, 1], [1, 0.5]);
  const rotate = useTransform(scrollYProgress, [0, 1], [0, -10]);
  const tags = [
    "360 Marketing Agency",
    "Strategic Branding",
    "Campaign Management",
  ];
  const [isHovered, setIsHovered] = React.useState<boolean>(false);
  console.log(isHovered)
  return (
    <motion.section
      style={{ scale, rotate }}
      className="sticky bg-black overflow-hidden top-0 h-screen"
    >
      <div className="absolute top-0 left-0  -z-[1]">
        <BackgroundGradientAnimation></BackgroundGradientAnimation>
      </div>

      <div className="container relative flex flex-col items-center  justify-center  py-28 w-full h-full">
        <div className="absolute bottom-10  right-0">
          <motion.div
            initial={{ scale: 0 }}
            transition={{
              delay: 1,
              duration: 0.6,
              ease: [0.22, 0.61, 0.36, 1],
            }}
            animate={{
              scale: isHovered ? 1.5 : 1,
              transition: { duration: 0.3, delay: 0 },
            }}
            className="size-28 relative origin-center cursor-pointer rounded-full "
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
          >
            <motion.img
              animate={{ rotate: -360 }}
              transition={{ ease: "linear", repeat: Infinity, duration: 6 }}
              src="roundShape.svg"
              className="w-full h-full"
            />
            <ArrowUpRight className="absolute pointer-events-none -rotate-90 text-4xl top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" />
          </motion.div>
        </div>
        <div className="flex items-center gap-6 h-[100px] overflow-hidden">
          {["Elevate", "Your", "Brand", "&"].map((text, index) => (
            <motion.h1
              key={index}
              initial={{ y: index + 1 * 200 }}
              animate={{ y: 0 }}
              transition={{
                delay: index * 0.1,
                duration: 0.6,
                ease: [0.22, 0.61, 0.36, 1],
              }}
              style={{ textShadow: "0px 0px 2px #000000F" }}
              className="text-[7rem] leading-[6.5rem] font-Grostek font-[700] bg-gradient-to-tl from-purple-200 to-purple-100  bg-clip-text text-transparent"
            >
              {text}
            </motion.h1>
          ))}
        </div>

        <div className="flex items-center gap-6 h-[100px]  overflow-hidden">
          {["Dominate", "the", "Market"].map((text, index) => (
            <motion.h1
              key={index}
              initial={{ y: index + 1 * 250 }}
              animate={{ y: 0 }}
              transition={{
                delay: index * 0.15,
                duration: 0.6,
                ease: [0.22, 0.61, 0.36, 1],
              }}
              style={{ textShadow: "0px 0px 2px #000000F" }}
              className="text-[7rem] leading-[6.5rem] font-Grostek bg-gradient-to-tl from-purple-200 to-purple-100  bg-clip-text text-transparent font-[700] "
            >
              {text}
            </motion.h1>
          ))}
        </div>
        <div className="flex items-center font-[500] font-Synonym mt-3 text-purple-100 gap-3 overflow-hidden h-[25px] ">
          {tags.map((tag, index) => (
            <motion.p
              key={index}
              initial={{ y: -200 }}
              animate={{ y: 0 }}
              transition={{
                delay: index * 0.15,
                duration: 0.6,
                ease: [0.22, 0.61, 0.36, 1],
              }}
              className={`pr-3 ${index != 2 && "border-r"} border-slate-50 `}
            >
              {" "}
              {tag}
            </motion.p>
          ))}
        </div>
        <div className="mt-6">
          <button className="group relative inline-flex h-12 w-12 items-center justify-center overflow-hidden rounded-full bg-gradient-to-tr from-purple-100 to-purple-300  font-medium text-purple-950   transition-all duration-300 hover:w-32">
            <div className="inline-flex whitespace-nowrap opacity-0 transition-all duration-200 group-hover:-translate-x-3 group-hover:opacity-100">
              No Name
            </div>
            <div className="absolute right-3.5">
              <svg
                width="15"
                height="15"
                viewBox="0 0 15 15"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
              >
                <path
                  d="M8.14645 3.14645C8.34171 2.95118 8.65829 2.95118 8.85355 3.14645L12.8536 7.14645C13.0488 7.34171 13.0488 7.65829 12.8536 7.85355L8.85355 11.8536C8.65829 12.0488 8.34171 12.0488 8.14645 11.8536C7.95118 11.6583 7.95118 11.3417 8.14645 11.1464L11.2929 8H2.5C2.22386 8 2 7.77614 2 7.5C2 7.22386 2.22386 7 2.5 7H11.2929L8.14645 3.85355C7.95118 3.65829 7.95118 3.34171 8.14645 3.14645Z"
                  fill="currentColor"
                  fillRule="evenodd"
                  clipRule="evenodd"
                ></path>
              </svg>
            </div>
          </button>
        </div>
      </div>
    </motion.section>
  );
};

const Section2 = ({
  scrollYProgress,
}: {
  scrollYProgress: MotionValue<number>;
}) => {
  const scale = useTransform(scrollYProgress, [0, 0.5], [0.8, 1]);
  const rotate = useTransform(scrollYProgress, [0, 0.5], [7, 0]);
  const [isSticky, setIsSticky] = React.useState<boolean>(false);

  const services = [
    {
      name: "Web Development",
      img: "https://iaqmc.com/wp-content/uploads/2024/03/IAQMC-WEB-DEVELOPMENT.jpg",
    },
    {
      name: "App Development",
      img: "https://www.valuecoders.com/blog/wp-content/uploads/2023/02/800x600-29.png.webp",
    },
    {
      name: "Social Media Marketing",
      img: "https://www.fenews.co.uk/wp-content/uploads/2022/01/social-media-1200x800.jpg",
    },
    {
      name: "SEO Marketing",
      img: "https://cdn.shopify.com/s/files/1/0070/7032/files/seo-marketing-what-is-it-how-does-it-work-small.jpg?v=1618324109",
    },
    {
      name: "Photography & Videography",
      img: "https://blog.fotonic.co.uk/wp-content/uploads/2022/02/kushagra-kevat-9ESAufvpgjI-unsplash-1024x576-1.jpg",
    },
    { name: "Media Buying", img: null },
    { name: "Performance Marketing", img: null },
    { name: "Content Marketing", img: null },
    { name: "PUBLIC RELATIONS", img: null },
    { name: "Branding & Advertising", img: null },
    { name: "IT Consulting & Advisory", img: null },
    { name: "Cyber Security", img: null },
  ];
  useEffect(() => {
    const handleScroll = () => {
      const element = document.getElementById("sticky-section");
      if (element) {
        const rect = element.getBoundingClientRect();

        if (rect.top <= 0) {
          setIsSticky(true);
        } else {
          setIsSticky(false);
        }
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true });
  return (
    <motion.section
      style={{ scale, rotate }}
      className="relative py-24 bg-purple-100 text-gray-950"
      ref={ref}
    >
      <div className="absolute bottom-0 left-0 right-0 top-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:54px_54px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]"></div>
      <motion.article
        animate={{
          backgroundColor: isSticky
            ? "rgba(255, 255, 255, 0.1)"
            : "transparent",
          backdropFilter: isSticky ? "blur(10px)" : "none",
          color: isSticky ? "white" : "black",
        }}
        className="container flex items-center gap-3 sticky top-0 left-0 mx-auto z-[50] "
      >
        {["Services", "Designed", "to", "Drive", "Growth"].map(
          (text, index) => (
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
          )
        )}
      </motion.article>
      <motion.div
        id="sticky-section"
        className="mt-10 relative z-20 container grid grid-cols-4 gap-4"
        initial={{ opacity: 1 }} // Initially, the parent container is invisible
        whileInView={{ opacity: 1 }} // Make the parent visible when in view
        transition={{ duration: 0.5 }}
      >
        {services.map((service, index) => (
          <motion.div
            key={index}
            className="w-full group rounded-xl overflow-hidden relative aspect-[3/4] bg-black"
            animate={{
              y: inView ? 0 : 300,
            }}
            transition={{
              delay: index * 0.1, // Staggered animation with a delay based on the index
              ease: [0.22, 0.61, 0.36, 1],
              duration: 0.6,
            }}
          >
            <div className="absolute top-0 left-0 z-10 w-full h-full bg-gradient-to-t from-gray-950/70 to-transparent" />
            <img
              src={service.img ?? ""}
              className="w-full group-hover:scale-[1.1] transition-all duration-300 h-full object-cover"
            />

            <div className="absolute bottom-4 z-20 left-4">
              <p className="text-white text-2xl font-Synonym font-[500]">
                {service.name}
              </p>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </motion.section>
  );
};
